import { useRef, useEffect, useMemo, useState } from 'react';
import { usePersistedState } from './hooks/usePersistedState';
import { useAnatomyMode } from './hooks/useAnatomyMode';
import { uiData } from './data/uiData';
import { designEffectsData } from './data/designEffectsData';
import { PREVIEW_MAP } from './data/previewMap';
import { Component, MousePointer2, Info, PanelsTopLeft, LayoutTemplate, Sparkles, AppWindow, Menu } from 'lucide-react';

import AllInOneGuide from './components/AllInOneGuide';
import DynamicPreview from './components/DynamicPreview';
import Sidebar from './components/Sidebar';
import DesignEffectsPreviews, { DynamicDesignEffect } from './components/DesignEffectsPreviews';

const GETTING_STARTED = uiData.filter(c => c.group === 'Getting Started');
const LAYOUT_SECTIONS = uiData.filter(c => c.group === 'Page Layout Sections');
const UI_COMPONENTS_DATA = uiData.filter(c => c.group === 'UI Components & Form Controls');
const BASIC_LAYOUTS = uiData.filter(c => c.group === 'Page Layouts');
const FULL_PAGE_TEMPLATES = uiData.filter(c => c.group === 'Full Page Templates');
const UI_COMPONENTS_SIDEBAR = [{ id: 'all-ui-components', title: 'All-in-one Style Guide' }];

const ALL_DESIGN_EFFECTS_GROUPS = [
  'Textures & Styles', 'Colors & Backgrounds', 'Layout & Structure',
  'Interactions & Motion', 'Typography', 'Graphics & Art',
  'Technical FX', 'Experimental'
];

function resolvePreview(activeCategory, currentData, containerRef) {
  if (activeCategory === 'all-ui-components') {
    return (
      <AllInOneGuide
        title="UI Components & Forms"
        description="모든 UI 컴포넌트와 폼 요소를 한 페이지에서 빠르게 탐색하고 확인하세요."
        itemsData={UI_COMPONENTS_DATA}
        previewMap={PREVIEW_MAP}
        containerRef={containerRef}
      />
    );
  }

  if (activeCategory.startsWith('all-fx-')) {
    const targetGroupRaw = activeCategory.replace('all-fx-', '').replace(/-/g, ' ');
    const fxItems = designEffectsData.filter(c => c.group.toLowerCase() === targetGroupRaw.toLowerCase());
    const realGroupName = fxItems.length > 0 ? fxItems[0].group : targetGroupRaw;
    return (
      <AllInOneGuide
        title={realGroupName}
        description={`${realGroupName} 테마의 모든 디자인 및 시각 효과를 확인하고 프롬프트를 복사하세요.`}
        itemsData={fxItems}
        previewMap={DesignEffectsPreviews}
        FallbackComponent={DynamicDesignEffect}
        containerRef={containerRef}
      />
    );
  }

  const PreviewComponent = PREVIEW_MAP[activeCategory] || DesignEffectsPreviews[activeCategory];
  if (PreviewComponent) return <PreviewComponent />;
  return <DynamicPreview item={currentData} />;
}

export default function App() {
  const [activeCategory, setActiveCategory] = usePersistedState('activeCategory', uiData[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Group design effects by their logical groups (memoized — static data)
  const designEffectsItems = useMemo(
    () =>
      ALL_DESIGN_EFFECTS_GROUPS.map(groupName => ({
        id: `all-fx-${groupName.replace(/ /g, '-').toLowerCase()}`,
        title: groupName,
        group: groupName,
      })),
    []
  );

  // Combine data for generic rendering
  const allData = useMemo(() => [...uiData, ...designEffectsData], []);

  // Determine current active data
  const currentData = useMemo(() => {
    if (activeCategory === 'all-ui-components') {
      return { id: 'all-ui-components', title: 'UI Components All-in-one', description: '모든 UI 컴포넌트와 폼 요소를 한 곳에서 빠르게 탐색합니다.', anatomy: [] };
    }
    if (activeCategory.startsWith('all-fx-')) {
      const matchedItem = designEffectsItems.find(item => item.id === activeCategory);
      const realGroupName = matchedItem ? matchedItem.title : activeCategory.replace('all-fx-', '').replace(/-/g, ' ');
      return { id: activeCategory, title: `${realGroupName} Effects`, description: `${realGroupName} 관련 모든 디자인 효과를 탐색합니다.`, anatomy: [], group: realGroupName };
    }
    return allData.find(c => c.id === activeCategory) || uiData[0];
  }, [activeCategory, designEffectsItems, allData]);

  const {
    anatomyMode,
    setAnatomyMode,
    tooltipRef,
    tooltipTitleRef,
    tooltipRoleRef,
    handleMouseMove,
    handleMouseLeave,
  } = useAnatomyMode(currentData);

  const playgroundAreaRef = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => {
      const activeBtn = document.querySelector('.nav-item.active');
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      className={`app-container ${anatomyMode ? 'anatomy-mode-active' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* Floating MessageBox Tooltip */}
      <div className="floating-tooltip" ref={tooltipRef}>
        <div className="tooltip-title">
          <Component size={16} /> <span ref={tooltipTitleRef}>Title</span>
        </div>
        <div className="tooltip-role" ref={tooltipRoleRef}>Role description</div>
      </div>

      {/* Sidebar Overlay for Mobile */}
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'open' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeCategory={activeCategory}
        onSelect={(cat) => {
          setActiveCategory(cat);
          setIsSidebarOpen(false);
        }}
        sections={[
          { title: 'Getting Started', items: GETTING_STARTED, icon: Info },
          { title: 'Page Layouts', items: BASIC_LAYOUTS, icon: PanelsTopLeft },
          { title: 'Page Layout Sections', items: LAYOUT_SECTIONS, icon: LayoutTemplate },
          { title: 'UI Components & Forms', items: UI_COMPONENTS_SIDEBAR, icon: Component },
          ...(designEffectsItems.length > 0
            ? [{ title: 'Design Effects', items: designEffectsItems, icon: Sparkles }]
            : []),
          { title: 'Full Page Templates', items: FULL_PAGE_TEMPLATES, icon: AppWindow },
        ]}
      />

      {/* Main Content Area */}
      <main className="main-content">

        {/* Top Control Bar */}
        <header className="topbar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button className="mobile-menu-btn" onClick={() => setIsSidebarOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="topbar-title">
              <h2>{currentData.title}</h2>
              <span>{currentData.description}</span>
            </div>
          </div>

          <div className="controls-group">
            <button
              className={`toggle-btn ${anatomyMode ? 'active' : ''}`}
              onClick={() => setAnatomyMode(!anatomyMode)}
            >
              <MousePointer2 size={16} />
              Anatomy Mode
            </button>
          </div>
        </header>

        {/* Live Playground */}
        <div className="playground-area" ref={playgroundAreaRef}>
          <div className="playground-bg-glow"></div>
          <div className="preview-container">
            {resolvePreview(activeCategory, currentData, playgroundAreaRef)}
          </div>
        </div>

      </main>
    </div>
  );
}
