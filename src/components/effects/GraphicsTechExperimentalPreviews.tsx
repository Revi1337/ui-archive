import { useRef, useEffect, useState } from 'react';

// ==========================================
// Graphics & Art
// ==========================================

export const IsometricPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', perspective: '1000px' }}>
    <div className="anatomy-layer" data-anatomy="3D Rotation Transform" style={{ transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }}>
      <div style={{ width: '150px', height: '150px', background: '#3b82f6', position: 'relative', boxShadow: '-20px 20px 0px rgba(0,0,0,0.1)' }}>
        <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', height: '40px', background: '#1d4ed8', transformOrigin: 'top', transform: 'rotateX(-90deg)' }} />
        <div style={{ position: 'absolute', top: 0, left: '100%', width: '40px', height: '100%', background: '#2563eb', transformOrigin: 'left', transform: 'rotateY(90deg)' }} />
      </div>
    </div>
  </div>
);

export const PaperCutoutPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#e0e5ec', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', padding: '40px' }}>
    <div className="anatomy-layer" data-anatomy="Inset Shadows" style={{ width: '250px', height: '250px', background: '#e0e5ec', borderRadius: '50%', boxShadow: 'inset 10px 10px 20px rgba(163,177,198,0.5), inset -10px -10px 20px rgba(255,255,255,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '150px', height: '150px', background: '#e0e5ec', borderRadius: '50%', boxShadow: '10px 10px 20px rgba(163,177,198,0.5), -10px -10px 20px rgba(255,255,255,0.8)' }} />
    </div>
  </div>
);

export const Abstract3DPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', overflow: 'hidden', position: 'relative' }}>
    <div className="anatomy-layer" data-anatomy="Floating Primitives" style={{ width: '200px', height: '200px', background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', boxShadow: 'inset 20px 20px 40px rgba(255,255,255,0.4), 0 20px 40px rgba(0,0,0,0.5)', animation: 'spin-blob 8s linear infinite' }} />
    <style>{`@keyframes spin-blob { 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

export const HandDrawnPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#fdfbf7', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', fontFamily: '"Comic Sans MS", cursive, sans-serif' }}>
    <div className="anatomy-layer" data-anatomy="Organic Imperfection" style={{ padding: '20px 40px', border: '3px solid #000', borderRadius: '2px 255px 3px 255px / 255px 5px 225px 3px', background: '#fff', boxShadow: '4px 4px 0 rgba(0,0,0,0.2)', fontSize: '1.5rem', transform: 'rotate(-2deg)' }}>
      Doodle Button!
    </div>
  </div>
);

export const FlatDesign2Preview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
    <div className="anatomy-layer" data-anatomy="Subtle Depth" style={{ width: '300px', background: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)' }}>
      <div style={{ width: '100%', height: '150px', background: '#f43f5e', borderRadius: '8px', marginBottom: '16px' }} />
      <h3 style={{ margin: '0 0 8px 0', color: '#1e293b' }}>Flat 2.0 Card</h3>
      <p style={{ margin: 0, color: '#64748b', fontSize: '0.9rem' }}>Clean geometry with ultra-soft shadows.</p>
    </div>
  </div>
);

export const OrganicBlobPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', position: 'relative' }}>
    <div className="anatomy-layer" data-anatomy="Morphing Radii" style={{ width: '250px', height: '250px', background: 'linear-gradient(45deg, #10b981, #3b82f6)', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', animation: 'morph 8s ease-in-out infinite' }} />
    <style>{`@keyframes morph { 0% { borderRadius: 60% 40% 30% 70% / 60% 30% 70% 40%; } 50% { borderRadius: 30% 60% 70% 40% / 50% 60% 30% 60%; } 100% { borderRadius: 60% 40% 30% 70% / 60% 30% 70% 40%; } }`}</style>
  </div>
);

// ==========================================
// Technical FX
// ==========================================

export const BlendModesPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: 'url(https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000) center/cover', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', position: 'relative' }}>
    <div className="anatomy-layer" data-anatomy="Mix-Blend-Mode" style={{ width: '200px', height: '200px', background: '#ef4444', mixBlendMode: 'color-burn', borderRadius: '50%', position: 'absolute', transform: 'translateX(-50px)' }} />
    <div className="anatomy-layer" data-anatomy="Mix-Blend-Mode" style={{ width: '200px', height: '200px', background: '#3b82f6', mixBlendMode: 'color-dodge', borderRadius: '50%', position: 'absolute', transform: 'translateX(50px)' }} />
    <h3 style={{ position: 'relative', zIndex: 1, fontSize: '4rem', color: '#fff', mixBlendMode: 'difference', fontWeight: 900 }}>BLEND</h3>
  </div>
);

export const ClipPathPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
    <div className="anatomy-layer" data-anatomy="Polygon / Circle Mask" style={{ width: '300px', height: '300px', background: 'linear-gradient(45deg, #f59e0b, #ef4444)', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'clip-anim 4s infinite alternate' }}>
      <h3 style={{ color: '#fff', fontSize: '2rem' }}>HEXAGON</h3>
    </div>
    <style>{`@keyframes clip-anim { 100% { clipPath: 'circle(50% at 50% 50%)'; } }`}</style>
  </div>
);

export const CustomScrollbarPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', padding: '40px' }}>
    <div className="anatomy-layer" data-anatomy="Webkit-Scrollbar Styling" style={{ width: '300px', height: '200px', background: '#0f172a', borderRadius: '12px', overflowY: 'scroll', padding: '16px', color: '#94a3b8' }}>
      <style>{`
        .custom-scroll::-webkit-scrollbar { width: 8px; }
        .custom-scroll::-webkit-scrollbar-track { background: #1e293b; border-radius: 4px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 4px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #60a5fa; }
      `}</style>
      <div className="custom-scroll" style={{ height: '100%', overflowY: 'auto', paddingRight: '8px' }}>
        <h4 style={{ color: '#fff', marginTop: 0 }}>Scroll Me</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
  </div>
);

export const FluidTypographyPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', padding: '20px' }}>
    <div className="anatomy-layer" data-anatomy="Clamp() Function" style={{ textAlign: 'center', overflow: 'hidden', border: '2px dashed #cbd5e1', borderRadius: '16px', padding: '40px 0', containerType: 'inline-size', animation: 'fluid-width 4s infinite alternate ease-in-out', background: '#f8fafc' }}>
      <h1 style={{ fontSize: 'clamp(1.5rem, 15cqw, 6rem)', margin: 0, color: '#0f172a', fontWeight: 900, whiteSpace: 'nowrap' }}>FLUID TEXT</h1>
      <p style={{ color: '#64748b', fontSize: 'clamp(0.8rem, 4cqw, 1.5rem)' }}>Container resizing automatically.</p>
    </div>
    <style>{`@keyframes fluid-width { 0% { width: 100%; } 100% { width: 250px; } }`}</style>
  </div>
);

export const ScrollRevealPreview = () => {
  const revealRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset when scrolled out
        }
      },
      { threshold: 0.5 }
    );

    if (revealRef.current) {
      observer.observe(revealRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ width: '100%', height: '400px', background: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 'inherit', overflowY: 'auto', padding: '40px' }}>
      <div style={{ height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><p>Scroll down...</p></div>
      <div 
        ref={revealRef}
        className="anatomy-layer" 
        data-anatomy="Intersection Observer API" 
        style={{ 
          padding: '40px', 
          background: '#3b82f6', 
          color: '#fff', 
          borderRadius: '16px', 
          opacity: isVisible ? 1 : 0, 
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)', 
          transition: 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)' 
        }}
      >
        <h3>I reveal when scrolled!</h3>
      </div>
      <div style={{ height: '400px' }} />
    </div>
  );
};

// ==========================================
// Experimental
// ==========================================

export const GenerativeArtPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', position: 'relative', overflow: 'hidden' }}>
    <div className="anatomy-layer" data-anatomy="Canvas / WebGL Context" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexWrap: 'wrap', opacity: 0.3 }}>
      {Array.from({ length: 100 }).map((_, i) => (
        <div key={i} style={{ width: '10%', height: '10%', border: `1px solid hsla(${Math.random() * 360}, 100%, 50%, 0.5)`, transform: `rotate(${Math.random() * 360}deg)` }} />
      ))}
    </div>
    <h3 style={{ position: 'relative', zIndex: 1, fontSize: '3rem', color: '#fff', fontWeight: 300, letterSpacing: '8px' }}>CODE IS ART</h3>
  </div>
);

export const AiCorePreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
    <div className="anatomy-layer" data-anatomy="AI Aura / Halo" style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #f43f5e, #3b82f6)', animation: 'spin 4s linear infinite', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(139,92,246,0.5)' }}>
      <div style={{ width: '90px', height: '90px', background: '#09090b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: '2rem' }}>✨</span>
      </div>
    </div>
  </div>
);

export const GamifiedUiPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#1e1b4b', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
    <div className="anatomy-layer" data-anatomy="Progress Meters" style={{ width: '300px', background: '#312e81', borderRadius: '24px', padding: '24px', border: '2px solid #4f46e5', boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.2)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ margin: 0, color: '#c7d2fe', fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 900 }}>Level 42</h3>
        <span style={{ color: '#fbbf24', fontWeight: 800 }}>⭐ 1,337</span>
      </div>
      <div style={{ height: '16px', background: '#1e1b4b', borderRadius: '8px', overflow: 'hidden', border: '2px solid #3730a3' }}>
        <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, #10b981, #34d399)', boxShadow: '0 0 10px #10b981' }} />
      </div>
      <p style={{ margin: '8px 0 0', color: '#818cf8', fontSize: '0.8rem', textAlign: 'right' }}>750 / 1000 XP</p>
    </div>
  </div>
);
