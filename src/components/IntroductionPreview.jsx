import { LayoutTemplate, Layers, Component, ArrowRight, Terminal, Bot, AppWindow, Palette } from 'lucide-react';

const STEPS = [
  {
    anatomyKey: 'Step 1: Layouts',
    icon: LayoutTemplate,
    color: '#3b82f6',
    bgColor: 'rgba(59,130,246,0.1)',
    label: '1. Page Layouts',
    subtitle: '(건물의 뼈대)',
    arrowColor: '#3b82f6',
    description: (
      <>가장 먼저 화면의 거대한 뼈대(Skeleton)를 그립니다. 이 단계에서는 콘텐츠의 내용을 고민하지 않고, 화면을 큼직하게 <strong>Header, Navbar, Main, Aside, Footer</strong>라는 '빈 공간(구역)'으로 나누기만 합니다.</>
    ),
  },
  {
    anatomyKey: 'Step 2: Sections',
    icon: Layers,
    color: '#8a2be2',
    bgColor: 'rgba(138,43,226,0.1)',
    label: '2. Page Layout Sections',
    subtitle: '(방을 채우는 가구)',
    arrowColor: '#8a2be2',
    description: (
      <>방을 나눴다면 이제 목적에 맞는 가구를 배치할 차례입니다. <strong>Hero Section, Features, Pricing Table</strong> 같은 완성된 덩어리(모듈)들을 가져와서 뼈대의 <strong>[Main]</strong> 구역 안에 차곡차곡 조립하여 넣습니다.</>
    ),
  },
  {
    anatomyKey: 'Step 3: Components',
    icon: Component,
    color: '#00f0ff',
    bgColor: 'rgba(0,240,255,0.1)',
    label: '3. UI Components',
    subtitle: '(정교한 디테일 부품)',
    arrowColor: '#ff007f',
    description: (
      <>마지막으로 화면 곳곳에 섬세한 컴포넌트들을 끼워 넣습니다. <strong>[Header]</strong> 구역에는 Global Navigation Bar(GNB)를 배치하고, 각 섹션의 내부에는 Button, Input, Card 같은 가장 작은 단위의 부품들을 조립합니다.</>
    ),
  },
  {
    anatomyKey: 'Step 4: Effects',
    icon: Palette,
    color: '#ec4899',
    bgColor: 'rgba(236,72,153,0.1)',
    label: '4. Design Effects',
    subtitle: '(생명력을 불어넣는 마법)',
    arrowColor: '#ec4899',
    description: (
      <>뼈대와 부품 조립이 끝났다면, 이제 시각적 생명력을 불어넣을 차례입니다. <strong>Glow, Glassmorphism, Parallax, Kinetic Typography</strong> 등 다채로운 스타일과 인터랙션을 적용하여, 정적인 화면을 사용자에게 감동을 주는 아름다운 경험으로 업그레이드합니다.</>
    ),
  },
  {
    anatomyKey: 'Step 5: Templates',
    icon: AppWindow,
    color: '#ff007f',
    bgColor: 'rgba(255,0,127,0.1)',
    label: '5. Full Page Templates',
    subtitle: '(완성된 건축물)',
    arrowColor: null,
    description: (
      <>Layouts, Sections, Components, 그리고 Effects가 완벽하게 결합되어 <strong>SaaS Landing Page, Dashboard</strong> 등 하나의 완전한 제품으로 동작하는 최종 결과물입니다.</>
    ),
  },
];

const StepCard = ({ anatomyKey, icon: Icon, color, bgColor, label, subtitle, description }) => (
  <div className="anatomy-layer" data-anatomy={anatomyKey} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '32px', opacity: 0.05, pointerEvents: 'none' }}>
      <Icon size={200} />
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon size={24} color={color} />
      </div>
      <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff' }}>
        {label} <span style={{ fontSize: '1rem', color: '#64748b', fontWeight: 500, marginLeft: '8px' }}>{subtitle}</span>
      </h2>
    </div>
    <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '0' }}>{description}</p>
  </div>
);

export const IntroductionPreview = () => (
  <div className="anatomy-layer" data-anatomy="Introduction Article" style={{ padding: '64px 40px', height: '100%', overflowY: 'auto' }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>

      <div style={{ marginBottom: '64px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '24px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '24px', border: '1px solid rgba(59,130,246,0.3)' }}>
          Welcome to UI Archive
        </div>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '24px', lineHeight: 1.1, color: '#fff' }}>
          백엔드 개발자를 위한<br/>
          <span style={{ color: '#00f0ff' }}>UI 설계 가이드</span>
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', lineHeight: 1.6 }}>
          UI Archive는 화면을 구성하는 가장 작은 요소부터 전체 페이지의 뼈대까지, 프론트엔드의 구조적인 진리를 레고 블록처럼 직관적으로 이해할 수 있도록 돕는 시각적 가이드북입니다.
        </p>
      </div>

      {/* Purpose of Creation */}
      <div className="anatomy-layer" data-anatomy="Purpose of Creation" style={{ marginBottom: '64px', background: 'linear-gradient(135deg, rgba(20,24,32,0.8), rgba(15,17,21,0.9))', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '16px', opacity: 0.1 }}>
          <Terminal size={120} />
          <Bot size={120} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: '#00f0ff' }}>왜 이 가이드가 필요할까요?</span>
          </h2>
          <p style={{ color: '#e2e8f0', fontSize: '1.1rem', lineHeight: 1.7, fontWeight: 400 }}>
            요즘 많은 백엔드 개발자분들이 프론트엔드와 디자인 요소를 AI(LLM)에게 맡기고 있습니다.<br/><br/>
            하지만 <strong>UI/UX에 대한 전문적인 용어나 구조적 개념</strong>을 모르는 상태에서는 AI에게 내가 원하는 화면을 명확하게 지시하기 어렵습니다. "그냥 예쁘게 해줘", "버튼 옆으로 옮겨줘" 같은 모호한 프롬프트는 수많은 반복 수정을 낳고, 이는 곧 <strong>불필요한 시간과 토큰 비용(Cost)의 낭비</strong>로 이어집니다.<br/><br/>
            이 아카이브는 바로 그 문제를 해결하기 위해 만들어졌습니다. AI에게 <span style={{ color: '#00f0ff', fontWeight: 600 }}>정확한 컴포넌트 명칭</span>과 <span style={{ color: '#00f0ff', fontWeight: 600 }}>구조적인 레이아웃 용어</span>를 사용하여 단 한 번에 원하는 결과물을 도출해 낼 수 있도록 돕는 것이 이 가이드의 핵심 목적입니다.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {STEPS.map((step) => (
          <div key={step.anatomyKey}>
            <StepCard {...step} />
            {step.arrowColor && (
              <div style={{ display: 'flex', justifyContent: 'center', color: step.arrowColor, opacity: 0.5, marginTop: '24px' }}>
                <ArrowRight size={24} style={{ transform: 'rotate(90deg)' }} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="anatomy-layer" data-anatomy="Summary" style={{ marginTop: '64px', padding: '40px 40px 56px', background: 'rgba(59,130,246,0.05)', borderRadius: '16px', border: '1px solid rgba(59,130,246,0.2)', textAlign: 'center' }}>
        <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '16px' }}>결론: 레고 블록 조립의 미학</h3>
        <p style={{ margin: 0, color: '#94a3b8', lineHeight: 1.7 }}>
          결론적으로 웹 디자인이란,
        </p>
        <p style={{ margin: '16px 0 0 0', color: '#94a3b8', lineHeight: 1.7 }}>
          <strong style={{ color: '#e2e8f0' }}>"Page Layouts가 만들어놓은 빈 공간(구역) 안에 Page Layout Sections를 블록처럼 조립해 넣고,<br/>그 속을 UI Components로 정교하게 다듬은 뒤, Design Effects로 생명력을 불어넣어<br/>하나의 거대하고 완벽한 Full Page Template을 탄생시키는 과정"</strong>입니다.
        </p>
      </div>

      <div className="anatomy-layer" data-anatomy="Anatomy Mode Guide" style={{ marginTop: '64px', marginBottom: '64px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '40px', position: 'relative', overflow: 'hidden' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ color: '#3b82f6' }}>해부학 모드(Anatomy Mode) 사용법</span>
        </h2>
        <ul style={{ color: '#e2e8f0', fontSize: '1.1rem', lineHeight: 1.8, fontWeight: 400, paddingLeft: '24px', margin: 0 }}>
          <li style={{ marginBottom: '12px' }}>좌측 상단(사이드바 최상단)에 있는 <strong>Anatomy Mode 토글 버튼</strong>을 켜주세요.</li>
          <li style={{ marginBottom: '12px' }}>화면 우측의 프리뷰 화면 위에 마우스를 이리저리 올려보세요.</li>
          <li style={{ marginBottom: '12px' }}>파란색 테두리가 표시되며, 툴팁을 통해 현재 가리키고 있는 컴포넌트의 <strong>명칭과 핵심 역할</strong>이 나타납니다.</li>
          <li>AI에게 디자인 수정을 요청할 때, 이 툴팁에 나오는 <strong>정확한 명칭(예: GNB, Hero Section, Avatar 등)</strong>을 복사해서 프롬프트에 활용해 보세요! 압도적으로 향상된 결과물을 얻을 수 있습니다.</li>
        </ul>
      </div>

    </div>
  </div>
);
