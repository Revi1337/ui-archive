import { useRef, useState } from 'react';

// ==========================================
// Interactions & Motion
// ==========================================

export const MicroAnimationsPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#fafafa', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
    <div className="anatomy-layer" data-anatomy="State Change Trigger" style={{ position: 'relative' }}>
      <button style={{
        padding: '16px', borderRadius: '50%', border: 'none', background: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', outline: 'none'
      }} onMouseOver={(e) => e.currentTarget.children[0].style.transform = 'rotate(15deg) scale(1.1)'} onMouseOut={(e) => e.currentTarget.children[0].style.transform = 'rotate(0) scale(1)'}>
        <div style={{ fontSize: '2rem', transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>🔔</div>
      </button>
      <div className="anatomy-layer" data-anatomy="Easing Curve" style={{ position: 'absolute', top: '-5px', right: '-5px', width: '12px', height: '12px', background: '#ef4444', borderRadius: '50%', animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
    </div>
    <style>{`@keyframes ping { 75%, 100% { transform: scale(2); opacity: 0; } }`}</style>
  </div>
);

export const ParallaxPreview = () => {
  const [scrollY, setScrollY] = useState(0);

  return (
    <div 
      className="anatomy-layer" data-anatomy="Speed Multipliers" 
      style={{ width: '100%', height: '400px', background: '#0f172a', borderRadius: 'inherit', position: 'relative', overflowY: 'auto' }}
      onScroll={(e) => setScrollY(e.target.scrollTop)}
    >
      <div style={{ height: '800px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '10%', left: '15%', width: '150px', height: '150px', background: '#3b82f6', borderRadius: '50%', opacity: 0.4, filter: 'blur(20px)', transform: `translateY(${scrollY * 0.2}px)` }} />
        <div style={{ position: 'absolute', top: '30%', right: '15%', width: '100px', height: '100px', background: '#8b5cf6', borderRadius: '50%', opacity: 0.6, filter: 'blur(10px)', transform: `translateY(${scrollY * 1.5}px)` }} />
        
        <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h3 className="anatomy-layer" data-anatomy="Depth Perception" style={{ fontSize: '4rem', color: '#fff', fontWeight: 900, textShadow: '0 10px 20px rgba(0,0,0,0.5)', transform: `translateY(${scrollY * 0.8}px)` }}>
            PARALLAX
          </h3>
        </div>
      </div>
    </div>
  );
};

export const SkeletonScreensPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', padding: '40px' }}>
    <div className="anatomy-layer" data-anatomy="Shimmer Animation" style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#e2e8f0', animation: 'shimmer 1.5s infinite linear' }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ width: '80%', height: '16px', borderRadius: '4px', background: '#e2e8f0', animation: 'shimmer 1.5s infinite linear' }} />
          <div style={{ width: '50%', height: '12px', borderRadius: '4px', background: '#e2e8f0', animation: 'shimmer 1.5s infinite linear' }} />
        </div>
      </div>
      <div style={{ width: '100%', height: '150px', borderRadius: '12px', background: '#e2e8f0', animation: 'shimmer 1.5s infinite linear' }} />
    </div>
    <style>{`@keyframes shimmer { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }`}</style>
  </div>
);

export const CustomCursorPreview = () => (
  <div className="anatomy-layer" data-anatomy="Pointer Coordinates" style={{ width: '100%', minHeight: '400px', background: '#18181b', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', cursor: 'none', position: 'relative', overflow: 'hidden' }}>
    <h3 style={{ color: '#fff', fontSize: '2rem' }}>Hover over me! (Cursor Hidden)</h3>
    <div className="anatomy-layer" data-anatomy="Custom Tracker" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '40px', height: '40px', border: '2px solid #06b6d4', borderRadius: '50%', pointerEvents: 'none', mixBlendMode: 'difference', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'pulse-cursor 2s infinite' }}>
      <div style={{ width: '8px', height: '8px', background: '#06b6d4', borderRadius: '50%' }} />
    </div>
    <style>{`@keyframes pulse-cursor { 0% { transform: translate(-50%, -50%) scale(1); } 50% { transform: translate(-50%, -50%) scale(1.5); } 100% { transform: translate(-50%, -50%) scale(1); } }`}</style>
  </div>
);

export const MagneticButtonsPreview = () => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Calculate distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Magnetic strength (pulls button towards cursor but limited)
    const strength = 0.4;
    
    setPosition({
      x: distanceX * strength,
      y: distanceY * strength
    });
  };

  const handleMouseLeave = () => {
    // Snap back to original position
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div style={{ width: '100%', minHeight: '400px', background: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
      <div 
        className="anatomy-layer" 
        data-anatomy="Hover Proximity Area" 
        style={{ padding: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <button 
          ref={buttonRef}
          className="anatomy-layer" 
          data-anatomy="Spring Physics" 
          style={{ 
            padding: '20px 40px', 
            fontSize: '1.2rem', 
            background: '#dc2626', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '30px', 
            cursor: 'pointer', 
            transition: 'transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)', 
            transform: `translate(${position.x}px, ${position.y}px)` 
          }}
        >
          Magnetic Pull
        </button>
      </div>
    </div>
  );
};

export const KineticTypographyPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', overflow: 'hidden' }}>
    <div className="anatomy-layer" data-anatomy="Text Stretching" style={{ fontSize: '5rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <span style={{ color: '#000', animation: 'kinetic1 3s infinite alternate ease-in-out' }}>KINETIC</span>
      <span style={{ color: '#f59e0b', animation: 'kinetic2 2.5s infinite alternate ease-in-out' }}>MOTION</span>
      <span style={{ color: '#000', animation: 'kinetic3 3.5s infinite alternate ease-in-out' }}>TYPO</span>
    </div>
    <style>{`
      @keyframes kinetic1 { 0% { transform: skewX(-20deg) scaleX(1); letter-spacing: 0px; } 100% { transform: skewX(10deg) scaleX(1.5); letter-spacing: 10px; } }
      @keyframes kinetic2 { 0% { transform: skewX(15deg) scaleY(1); } 100% { transform: skewX(-15deg) scaleY(1.8); } }
      @keyframes kinetic3 { 0% { transform: rotate(0deg) scale(1); letter-spacing: 0px; } 100% { transform: rotate(-5deg) scale(1.2); letter-spacing: -5px; } }
    `}</style>
  </div>
);

export const LottieVectorPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', flexDirection: 'column', gap: '24px' }}>
    <div className="anatomy-layer" data-anatomy="JSON/SVG Player" style={{ width: '120px', height: '120px', border: '4px dashed #3b82f6', borderRadius: '50%', borderTopColor: 'transparent', animation: 'spin 2s linear infinite', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ animation: 'spin 2s linear infinite reverse', fontSize: '2rem' }}>🚀</span>
    </div>
    <span style={{ color: '#2563eb', fontWeight: 600 }}>Vector Motion Placeholder</span>
    <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

export const PageTransitionsPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#171717', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', position: 'relative', overflow: 'hidden' }}>
    <div className="anatomy-layer" data-anatomy="Exit/Enter Animation" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#a3e635', animation: 'wipe 3s cubic-bezier(0.77, 0, 0.175, 1) infinite' }} />
    <h3 style={{ position: 'relative', zIndex: 1, fontSize: '3rem', color: '#171717', fontWeight: 800 }}>Loading Next...</h3>
    <style>{`@keyframes wipe { 0% { transform: translateY(100%); } 50% { transform: translateY(0); } 100% { transform: translateY(-100%); } }`}</style>
  </div>
);

// ==========================================
// Typography
// ==========================================

export const VariableFontsPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
    <h1 className="anatomy-layer" data-anatomy="Font-Variation-Settings" style={{ fontSize: '4rem', color: '#000', animation: 'weight-shift 3s infinite alternate', margin: 0 }}>
      Varying Weight
    </h1>
    <style>{`@keyframes weight-shift { 0% { font-weight: 200; letter-spacing: -2px; } 100% { font-weight: 900; letter-spacing: 4px; } }`}</style>
  </div>
);

export const ScrollytellingPreview = () => (
  <div className="anatomy-layer" data-anatomy="Scroll Position Binding" style={{ width: '100%', minHeight: '400px', background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', overflow: 'hidden', padding: '40px' }}>
    <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.2)', textAlign: 'center', lineHeight: 1.5 }}>
      <span style={{ color: '#fff', transition: 'color 0.3s' }}>As you</span> scroll down,<br/>
      <span style={{ color: '#fff', transition: 'color 0.3s' }}>the text</span> reveals itself<br/>
      word by word.
    </p>
  </div>
);

export const OutlineStrokePreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
    <h1 className="anatomy-layer" data-anatomy="Webkit-Text-Stroke" style={{
      fontSize: '6rem', margin: 0, color: 'transparent', WebkitTextStroke: '2px #334155', fontWeight: 900, textTransform: 'uppercase'
    }}>
      OUTLINE
    </h1>
  </div>
);

export const TextMaskingPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', background: '#000' }}>
    <h1 className="anatomy-layer" data-anatomy="Background-Clip: Text" style={{
      fontSize: '8rem', margin: 0, fontWeight: 900,
      background: 'url(https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000) center/cover',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      animation: 'bg-pan 10s linear infinite'
    }}>
      NATURE
    </h1>
    <style>{`@keyframes bg-pan { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }`}</style>
  </div>
);

export const MarqueePreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#18181b', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', overflow: 'hidden' }}>
    <div className="anatomy-layer" data-anatomy="Infinite TranslateX" style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>
      <h1 style={{ fontSize: '6rem', margin: 0, color: '#eab308', fontWeight: 900, textTransform: 'uppercase', animation: 'marquee 5s linear infinite' }}>
        BREAKING NEWS • LATEST UPDATES • EXCLUSIVE •&nbsp;
      </h1>
      <h1 style={{ fontSize: '6rem', margin: 0, color: '#eab308', fontWeight: 900, textTransform: 'uppercase', animation: 'marquee 5s linear infinite' }}>
        BREAKING NEWS • LATEST UPDATES • EXCLUSIVE •&nbsp;
      </h1>
    </div>
    <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }`}</style>
  </div>
);

export const KineticDynamicPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', overflow: 'hidden' }}>
    <div className="anatomy-layer" data-anatomy="Dynamic Positioning" style={{ position: 'relative', width: '300px', height: '300px' }}>
      <span style={{ position: 'absolute', top: '10%', left: '10%', fontSize: '2rem', fontWeight: 700, animation: 'float 3s infinite alternate' }}>D</span>
      <span style={{ position: 'absolute', top: '30%', right: '20%', fontSize: '3rem', fontWeight: 900, animation: 'float 4s infinite alternate-reverse' }}>Y</span>
      <span style={{ position: 'absolute', bottom: '20%', left: '40%', fontSize: '4rem', fontWeight: 800, animation: 'float 2.5s infinite alternate' }}>N</span>
      <span style={{ position: 'absolute', bottom: '10%', right: '10%', fontSize: '2.5rem', fontWeight: 600, animation: 'float 3.5s infinite alternate-reverse' }}>A</span>
      <span style={{ position: 'absolute', top: '50%', left: '20%', fontSize: '5rem', fontWeight: 900, color: '#ef4444', animation: 'float 5s infinite alternate' }}>M</span>
      <span style={{ position: 'absolute', top: '20%', right: '40%', fontSize: '1.5rem', fontWeight: 500, animation: 'float 2s infinite alternate-reverse' }}>I</span>
      <span style={{ position: 'absolute', bottom: '40%', right: '30%', fontSize: '3.5rem', fontWeight: 800, animation: 'float 4.5s infinite alternate' }}>C</span>
    </div>
  </div>
);
