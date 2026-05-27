// ==========================================
// Colors & Backgrounds
// ==========================================

export const AuroraFluidPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', position: 'relative', overflow: 'hidden', background: '#0f172a' }}>
    <div className="anatomy-layer" data-anatomy="Fluid Orbs" style={{ position: 'absolute', top: '-10%', left: '-10%', width: '60%', height: '60%', background: 'rgba(56, 189, 248, 0.4)', borderRadius: '50%', filter: 'blur(80px)', animation: 'float 8s infinite alternate' }} />
    <div className="anatomy-layer" data-anatomy="Fluid Orbs" style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '70%', height: '70%', background: 'rgba(167, 139, 250, 0.4)', borderRadius: '50%', filter: 'blur(100px)', animation: 'float 12s infinite alternate-reverse' }} />
    <div className="anatomy-layer" data-anatomy="Fluid Orbs" style={{ position: 'absolute', top: '20%', left: '30%', width: '50%', height: '50%', background: 'rgba(52, 211, 153, 0.3)', borderRadius: '50%', filter: 'blur(90px)', animation: 'float 10s infinite alternate' }} />
    <h3 style={{ position: 'relative', zIndex: 1, fontSize: '3rem', color: '#fff', fontWeight: 800 }}>Aurora Fluid</h3>
    <style>{`@keyframes float { 0% { transform: translate(0, 0) scale(1); } 100% { transform: translate(30px, 50px) scale(1.2); } }`}</style>
  </div>
);

export const DuotonePreview = () => (
  <div className="anatomy-layer" data-anatomy="Color Mapping" style={{ width: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', background: 'url(https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1000) center/cover', position: 'relative', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: '#ff0055', mixBlendMode: 'multiply' }} />
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: '#0022ff', mixBlendMode: 'screen' }} />
    <h3 style={{ position: 'relative', zIndex: 1, fontSize: '4rem', color: '#fff', mixBlendMode: 'overlay', fontWeight: 900 }}>DUOTONE</h3>
  </div>
);

export const MonochromaticPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', padding: '40px' }}>
    <div className="anatomy-layer" data-anatomy="Tonal Variations" style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ padding: '24px', background: '#0284c7', color: '#fff', borderRadius: '16px', fontWeight: 700, fontSize: '1.5rem' }}>Primary Sky</div>
      <div style={{ padding: '24px', background: '#38bdf8', color: '#0c4a6e', borderRadius: '16px', fontWeight: 600 }}>Secondary Sky</div>
      <div style={{ padding: '24px', background: '#bae6fd', color: '#0369a1', borderRadius: '16px' }}>Tertiary Sky</div>
    </div>
  </div>
);

export const DarkLightModePreview = () => (
  <div style={{ width: '100%', minHeight: '400px', display: 'flex', borderRadius: 'inherit', overflow: 'hidden' }}>
    <div className="anatomy-layer" data-anatomy="Theme Variables (Light)" style={{ flex: 1, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a', borderRight: '1px solid #e2e8f0' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#f8fafc', border: '1px solid #cbd5e1', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>☀️</div>
        <h3 style={{ margin: 0, fontWeight: 700 }}>Light Theme</h3>
      </div>
    </div>
    <div className="anatomy-layer" data-anatomy="Theme Variables (Dark)" style={{ flex: 1, background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f8fafc' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#1e293b', border: '1px solid #334155', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🌙</div>
        <h3 style={{ margin: 0, fontWeight: 700 }}>Dark Theme</h3>
      </div>
    </div>
  </div>
);

export const GlowNeonPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
    <button className="anatomy-layer" data-anatomy="Stacked Shadows" style={{
      padding: '16px 48px',
      background: 'transparent',
      border: '2px solid #a855f7',
      borderRadius: '8px',
      color: '#a855f7',
      fontSize: '1.5rem',
      fontWeight: 700,
      cursor: 'pointer',
      boxShadow: '0 0 10px #a855f7, 0 0 20px #a855f7, inset 0 0 10px #a855f7',
      textShadow: '0 0 5px #a855f7'
    }}>
      NEON GLOW
    </button>
  </div>
);

export const ColorSplashingPreview = () => (
  <div className="anatomy-layer" data-anatomy="Selective Saturation" style={{ width: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', background: 'url(https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000) center/cover', filter: 'grayscale(100%)', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '150px', height: '150px', borderRadius: '50%', backdropFilter: 'grayscale(0%) saturate(200%)', border: '4px solid #fff', boxShadow: '0 0 20px rgba(0,0,0,0.5)' }} />
    <h3 style={{ position: 'absolute', bottom: '20px', color: '#fff', background: '#000', padding: '8px 16px' }}>Color Splash</h3>
  </div>
);

// ==========================================
// Layout & Structure
// ==========================================

export const BentoGridPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', padding: '24px' }}>
    <div className="anatomy-layer" data-anatomy="Rounded Grid Cells" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 120px)', gap: '16px', width: '100%', maxWidth: '600px' }}>
      <div style={{ gridColumn: 'span 2', gridRow: 'span 2', background: '#3b82f6', borderRadius: '24px', padding: '24px', color: '#fff' }}><h3>Main Feature</h3></div>
      <div style={{ background: '#f43f5e', borderRadius: '24px', padding: '16px', color: '#fff' }}>Stat 1</div>
      <div style={{ background: '#10b981', borderRadius: '24px', padding: '16px', color: '#fff' }}>Stat 2</div>
    </div>
  </div>
);

export const ZAxisLayeringPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', padding: '40px' }}>
    <div style={{ position: 'relative', width: '300px', height: '200px' }}>
      <div className="anatomy-layer" data-anatomy="Depth Shadows (Base)" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }} />
      <div className="anatomy-layer" data-anatomy="Depth Shadows (Mid)" style={{ position: 'absolute', top: '-20px', left: '20px', width: '100%', height: '100%', background: '#fff', borderRadius: '16px', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }} />
      <div className="anatomy-layer" data-anatomy="Depth Shadows (Top)" style={{ position: 'absolute', top: '-40px', left: '40px', width: '100%', height: '100%', background: '#3b82f6', borderRadius: '16px', boxShadow: '0 25px 50px rgba(59,130,246,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.2rem' }}>Floating Top Layer</div>
    </div>
  </div>
);

export const SplitScreenPreview = () => (
  <div className="anatomy-layer" data-anatomy="Dual Contrast" style={{ width: '100%', minHeight: '400px', display: 'flex', borderRadius: 'inherit', overflow: 'hidden' }}>
    <div style={{ flex: 1, background: '#111', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px' }}>
      <h1 style={{ fontSize: '3rem', margin: 0 }}>Create.</h1>
    </div>
    <div style={{ flex: 1, background: '#fff', color: '#111', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px' }}>
      <h1 style={{ fontSize: '3rem', margin: 0 }}>Inspire.</h1>
    </div>
  </div>
);

export const MasonryLayoutPreview = () => (
  <div className="anatomy-layer" data-anatomy="Staggered Columns" style={{ width: '100%', minHeight: '400px', background: '#f1f5f9', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', borderRadius: 'inherit', padding: '24px', gap: '16px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
      <div style={{ height: '180px', background: '#cbd5e1', borderRadius: '16px' }} />
      <div style={{ height: '240px', background: '#94a3b8', borderRadius: '16px' }} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
      <div style={{ height: '260px', background: '#64748b', borderRadius: '16px' }} />
      <div style={{ height: '160px', background: '#475569', borderRadius: '16px' }} />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
      <div style={{ height: '140px', background: '#334155', borderRadius: '16px' }} />
      <div style={{ height: '280px', background: '#1e293b', borderRadius: '16px' }} />
    </div>
  </div>
);

export const StickyFloatingPreview = () => (
  <div style={{ width: '100%', height: '400px', background: '#fff', borderRadius: 'inherit', position: 'relative', overflowY: 'auto', padding: '24px', border: '1px solid #e2e8f0' }}>
    <div style={{ height: '800px', background: 'linear-gradient(#f8fafc, #e2e8f0)', borderRadius: '16px', padding: '24px' }}>
      <div className="anatomy-layer" data-anatomy="Scroll Anchor" style={{ position: 'sticky', top: '24px', background: '#3b82f6', color: '#fff', padding: '16px 24px', borderRadius: '12px', display: 'inline-block', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
        I'm Sticky! (Scroll down)
      </div>
    </div>
    <div className="anatomy-layer" data-anatomy="Fixed Floating Action" style={{ position: 'absolute', bottom: '32px', right: '32px', width: '64px', height: '64px', background: '#f43f5e', borderRadius: '50%', boxShadow: '0 10px 25px rgba(244,63,94,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '24px', cursor: 'pointer' }}>
      +
    </div>
  </div>
);
