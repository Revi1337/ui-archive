import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import CopyablePromptBox from './CopyablePromptBox';
import DynamicPreview from './DynamicPreview';
import { koTranslations } from '../data/koTranslations';
import type React from 'react';
import type { UIItem, PreviewMap } from '../types';

// ---------------------------------------------------------------------------
// Pure utility functions (outside component — no purity rule violations)
// ---------------------------------------------------------------------------

/**
 * Animate an element's scrollTop from `start` to `target` over `duration` ms.
 * Uses exponential ease-out.
 */
function animateScrollTo(
  container: HTMLElement,
  start: number,
  target: number,
  duration: number,
) {
  const startTime = performance.now();

  const step = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    container.scrollTop = start + (target - start) * easeProgress;
    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface AllInOneGuideProps {
  title: string;
  description: string;
  itemsData: UIItem[];
  previewMap?: PreviewMap;
  FallbackComponent?: React.ComponentType<{ item: UIItem }>;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

const AllInOneGuide = ({
  title,
  description,
  itemsData,
  previewMap,
  FallbackComponent = DynamicPreview,
  containerRef,
}: AllInOneGuideProps) => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const playground = containerRef?.current;
    if (!playground) return;

    const handleScroll = (e: Event) => {
      setShowScroll((e.target as HTMLElement).scrollTop > 500);
    };

    playground.addEventListener('scroll', handleScroll);
    return () => playground.removeEventListener('scroll', handleScroll);
  }, [containerRef]);

  const scrollToTop = () => {
    const playground = containerRef?.current;
    if (!playground) return;
    animateScrollTo(playground, playground.scrollTop, 0, 250);
  };

  const scrollToComponent = (id: string) => {
    const element = document.getElementById(id);
    const playground = containerRef?.current;
    if (!element || !playground) return;

    const start = playground.scrollTop;
    const elementRect = element.getBoundingClientRect();
    const containerRect = playground.getBoundingClientRect();
    const target = start + elementRect.top - containerRect.top - 40; // 40px margin

    animateScrollTo(playground, start, target, 250);
  };

  return (
    <div style={{ padding: '20px 40px', display: 'flex', flexDirection: 'column', gap: '80px', height: '100%' }}>

      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '10px', paddingTop: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#fff', fontWeight: 700, marginBottom: '16px' }}>{title}</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>{description}</p>
      </div>

      {/* Table of Contents (Chips) */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        {itemsData.map(item => (
          <button
            key={`toc-${item.id}`}
            className="toc-chip"
            onClick={() => scrollToComponent(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Components List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {itemsData.map(item => {
          const PreviewComp = previewMap ? previewMap[item.id] : null;
          return (
            <section key={item.id} id={item.id} style={{ display: 'flex', flexDirection: 'column', gap: '16px', scrollMarginTop: '40px' }}>
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
                <h2 style={{ fontSize: '1.5rem', color: '#00f0ff', margin: 0 }}>{item.title}</h2>
                {item.description && <p style={{ color: '#94a3b8', margin: '8px 0 0 0', fontSize: '0.95rem' }}>{item.description}</p>}
                {item.prompt && (
                  <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <CopyablePromptBox text={item.prompt} language="English" />
                    {koTranslations[item.prompt] && (
                      <CopyablePromptBox text={koTranslations[item.prompt]} language="Korean" />
                    )}
                  </div>
                )}
              </div>
              <div style={{
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '16px',
                background: 'rgba(10, 10, 15, 0.5)',
                minHeight: '200px',
                position: 'relative'
              }}>
                {PreviewComp ? <PreviewComp /> : <FallbackComponent item={item} />}
              </div>
            </section>
          );
        })}
      </div>

      {/* Scroll to Top FAB */}
      {showScroll && (
        <button className="scroll-to-top-fab" onClick={scrollToTop}>
          <ArrowUp size={24} />
        </button>
      )}

    </div>
  );
};

export default AllInOneGuide;
