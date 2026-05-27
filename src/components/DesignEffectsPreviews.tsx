import type React from 'react';
import type { UIItem } from '../types';
import {
  AuroraFluidPreview, DuotonePreview, MonochromaticPreview, DarkLightModePreview, GlowNeonPreview, ColorSplashingPreview,
  BentoGridPreview, ZAxisLayeringPreview, SplitScreenPreview, MasonryLayoutPreview, StickyFloatingPreview
} from './effects/ColorsBackgroundsLayoutPreviews';
import {
  MicroAnimationsPreview, ParallaxPreview, SkeletonScreensPreview, CustomCursorPreview, MagneticButtonsPreview, KineticTypographyPreview, LottieVectorPreview, PageTransitionsPreview,
  VariableFontsPreview, ScrollytellingPreview, OutlineStrokePreview, TextMaskingPreview, MarqueePreview, KineticDynamicPreview
} from './effects/InteractionsTypographyPreviews';
import {
  IsometricPreview, PaperCutoutPreview, Abstract3DPreview, HandDrawnPreview, FlatDesign2Preview, OrganicBlobPreview,
  BlendModesPreview, ClipPathPreview, CustomScrollbarPreview, FluidTypographyPreview, ScrollRevealPreview,
  GenerativeArtPreview, AiCorePreview, GamifiedUiPreview
} from './effects/GraphicsTechExperimentalPreviews';

// Placeholder for un-implemented effects
export const DynamicDesignEffect = ({ item }: { item: UIItem }) => {
  // Generate a distinct hue based on the item id length or char codes
  const hue = item ? (item.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) * 13) % 360 : 0;

  return (
    <div style={{
      width: '100%',
      height: '300px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      background: `linear-gradient(135deg, hsla(${hue}, 70%, 15%, 1), hsla(${(hue + 60) % 360}, 70%, 10%, 1))`
    }}>
      <div style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))' }}>✨</div>
      <div style={{ color: '#94a3b8', fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px', padding: '0 20px' }}>
        <strong style={{ color: `hsl(${hue}, 80%, 70%)` }}>{item?.title}</strong><br />
        <span style={{ fontSize: '0.95rem', lineHeight: 1.6, display: 'inline-block', marginTop: '12px' }}>
          현재 이 이펙트의 전용 프리뷰 컴포넌트를 코딩 중입니다.<br />
          <strong>Anatomy Mode</strong>를 켜서 구조적 팁을 확인하거나, 위 제공된 프롬프트를 AI에게 바로 사용해 보세요!
        </span>
      </div>
    </div>
  );
};

// 1. Glassmorphism Preview
export const GlassmorphismPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop) center/cover', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px', borderRadius: 'inherit' }}>
    <div className="anatomy-layer" data-anatomy="Frosted Background" style={{
      width: '100%', maxWidth: '400px',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      padding: '40px',
      borderRadius: '24px',
      boxShadow: '0 32px 64px rgba(0, 0, 0, 0.3)'
    }}>
      <div className="anatomy-layer" data-anatomy="Subtle Border" style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 'inherit', pointerEvents: 'none'
      }}></div>
      <h3 style={{ margin: '0 0 16px 0', fontSize: '1.8rem', color: '#fff' }}>Glassmorphism</h3>
      <p style={{ margin: 0, color: 'rgba(255, 255, 255, 0.7)', lineHeight: 1.6 }}>
        반투명한 배경과 강력한 블러 효과로 유리를 통과해 배경이 비치는 듯한 우아한 깊이감을 만들어냅니다.
      </p>
    </div>
  </div>
);

// 2. Mesh Gradient Preview
export const MeshGradientPreview = () => (
  <div className="anatomy-layer" data-anatomy="Color Blobs" style={{
    width: '100%', minHeight: '400px',
    background: 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
    backgroundColor: '#0a0a0f',
    display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit',
    position: 'relative', overflow: 'hidden'
  }}>
    <div style={{ position: 'absolute', top: '20%', left: '20%', width: '300px', height: '300px', background: '#3b82f6', borderRadius: '50%', filter: 'blur(80px)', opacity: 0.5, animation: 'pulse 4s infinite alternate' }} />
    <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', background: '#8b5cf6', borderRadius: '50%', filter: 'blur(100px)', opacity: 0.5, animation: 'pulse 5s infinite alternate-reverse' }} />
    <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', background: '#ec4899', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.4 }} />

    <h3 style={{ position: 'relative', zIndex: 1, fontSize: '3rem', fontWeight: 800, color: '#fff', textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}>Mesh Gradient</h3>
  </div>
);

// 3. Neumorphism Preview
export const NeumorphismPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#e0e5ec', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
    <div style={{ display: 'flex', gap: '32px' }}>

      {/* Neumorphic Button (Outset) */}
      <div className="anatomy-layer" data-anatomy="Highlight Shadow" style={{
        width: '120px', height: '120px', borderRadius: '24px', background: '#e0e5ec',
        boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
      }}>
        <div className="anatomy-layer" data-anatomy="Dark Shadow" style={{ color: '#64748b', fontWeight: 600 }}>Outset</div>
      </div>

      {/* Neumorphic Pressed (Inset) */}
      <div className="anatomy-layer" data-anatomy="Highlight Shadow" style={{
        width: '120px', height: '120px', borderRadius: '24px', background: '#e0e5ec',
        boxShadow: 'inset 6px 6px 10px 0 rgba(163,177,198, 0.7), inset -6px -6px 10px 0 rgba(255,255,255, 0.8)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div className="anatomy-layer" data-anatomy="Dark Shadow" style={{ color: '#3b82f6', fontWeight: 600 }}>Inset</div>
      </div>

    </div>
  </div>
);

// 4. Claymorphism Preview
export const ClaymorphismPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
    <div className="anatomy-layer" data-anatomy="Thick Inner Shadows" style={{
      width: '200px', height: '200px', borderRadius: '40px', background: '#f87171',
      boxShadow: 'inset 8px 8px 16px rgba(255,255,255,0.4), inset -8px -8px 16px rgba(0,0,0,0.1), 16px 16px 32px rgba(248,113,113,0.3)',
      display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <span style={{ fontSize: '4rem' }}>🎈</span>
    </div>
  </div>
);

// 5. NeoBrutalism Preview
export const NeoBrutalismPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#fef08a', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
    <div className="anatomy-layer" data-anatomy="Thick Strokes" style={{
      padding: '24px 48px', background: '#3b82f6', border: '4px solid #000', borderRadius: '0',
      boxShadow: '8px 8px 0px #000', cursor: 'pointer', transition: 'all 0.1s',
      fontWeight: 900, fontSize: '1.5rem', color: '#fff'
    }}>
      <span className="anatomy-layer" data-anatomy="Hard Solid Shadow">HOVER ME</span>
    </div>
  </div>
);

// 6. Modern Skeuomorphism Preview
export const ModernSkeuomorphismPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#2c2c2e', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
    <div className="anatomy-layer" data-anatomy="Material Gradient" style={{
      width: '120px', height: '120px', borderRadius: '50%',
      background: 'conic-gradient(from 180deg at 50% 50%, #4a4a4c 0deg, #6b6b6d 45deg, #2c2c2e 135deg, #6b6b6d 225deg, #2c2c2e 315deg, #4a4a4c 360deg)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.3)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'
    }}>
      <div style={{
        width: '100px', height: '100px', borderRadius: '50%',
        background: 'linear-gradient(135deg, #1c1c1e, #3c3c3e)',
        boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.6)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff3b30', boxShadow: '0 0 10px #ff3b30' }} />
      </div>
    </div>
  </div>
);

// 7. Grainy/Noise Texture Preview
export const GrainyNoisePreview = () => (
  <div className="anatomy-layer" data-anatomy="Noise Filter Overlay" style={{
    width: '100%', minHeight: '400px',
    background: 'linear-gradient(45deg, #0f172a, #334155)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit',
    position: 'relative', overflow: 'hidden'
  }}>
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      opacity: 0.15, pointerEvents: 'none'
    }} />
    <h3 style={{ fontSize: '3rem', color: '#fff', letterSpacing: '0.2em' }}>FILM GRAIN</h3>
  </div>
);

// 8. Holographic / Iridescent Preview
export const HolographicPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit' }}>
    <div className="anatomy-layer" data-anatomy="Iridescent Gradient" style={{
      padding: '40px 80px', borderRadius: '16px',
      background: 'linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3)',
      backgroundSize: '1800% 1800%',
      animation: 'rainbow 8s ease infinite',
      boxShadow: '0 0 40px rgba(255,255,255,0.2)',
      color: '#fff', fontSize: '2rem', fontWeight: 800
    }}>
      IRIDESCENT
    </div>
    <style>{`
      @keyframes rainbow { 
        0%{background-position:0% 82%}
        50%{background-position:100% 19%}
        100%{background-position:0% 82%}
      }
    `}</style>
  </div>
);

// 9. Soft Focus / Bokeh Preview
export const SoftFocusPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#0a0a0f', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', position: 'relative', overflow: 'hidden' }}>
    <div className="anatomy-layer" data-anatomy="Bokeh Orbs" style={{ position: 'absolute', top: '10%', left: '20%', width: '150px', height: '150px', background: 'rgba(59, 130, 246, 0.4)', borderRadius: '50%', filter: 'blur(10px)' }} />
    <div className="anatomy-layer" data-anatomy="Bokeh Orbs" style={{ position: 'absolute', bottom: '20%', right: '25%', width: '200px', height: '200px', background: 'rgba(236, 72, 153, 0.3)', borderRadius: '50%', filter: 'blur(15px)' }} />
    <div className="anatomy-layer" data-anatomy="Bokeh Orbs" style={{ position: 'absolute', top: '40%', right: '10%', width: '100px', height: '100px', background: 'rgba(234, 179, 8, 0.5)', borderRadius: '50%', filter: 'blur(8px)' }} />

    <h3 style={{ position: 'relative', zIndex: 1, fontSize: '3rem', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}>Soft Focus</h3>
  </div>
);

// 10. Retro / Vintage (CRT) Preview
export const RetroCRTPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', padding: '20px' }}>
    <div className="anatomy-layer" data-anatomy="Scanlines" style={{
      width: '100%', height: '100%', background: '#001100', borderRadius: '16px', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      border: '8px solid #333'
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
        backgroundSize: '100% 4px, 6px 100%', pointerEvents: 'none', zIndex: 2
      }} />
      <h3 style={{ color: '#0f0', fontFamily: 'monospace', fontSize: '2.5rem', textShadow: '0 0 10px #0f0, 0 0 20px #0f0', zIndex: 1 }}>C:\&gt; _</h3>
    </div>
  </div>
);

// 11. Glitch Effect Preview
export const GlitchEffectPreview = () => (
  <div style={{ width: '100%', minHeight: '400px', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'inherit', overflow: 'hidden' }}>
    <div className="anatomy-layer" data-anatomy="RGB Split" style={{ position: 'relative', display: 'inline-block' }}>
      <h3 style={{ fontSize: '4rem', color: '#fff', fontWeight: 900, margin: 0, position: 'relative' }}>CYBERPUNK</h3>
      <h3 style={{ fontSize: '4rem', color: '#0ff', fontWeight: 900, margin: 0, position: 'absolute', top: 0, left: '-3px', opacity: 0.8, mixBlendMode: 'screen', animation: 'glitch-anim 0.2s infinite alternate-reverse' }}>CYBERPUNK</h3>
      <h3 style={{ fontSize: '4rem', color: '#f0f', fontWeight: 900, margin: 0, position: 'absolute', top: 0, left: '3px', opacity: 0.8, mixBlendMode: 'screen', animation: 'glitch-anim 0.3s infinite alternate' }}>CYBERPUNK</h3>
    </div>
    <style>{`
      @keyframes glitch-anim {
        0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 2px); }
        20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -2px); }
        40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, -2px); }
        60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, 2px); }
        80% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 0); }
        100% { clip-path: inset(30% 0 20% 0); transform: translate(2px, 0); }
      }
    `}</style>
  </div>
);

// Export Map
const DesignEffectsPreviews: Record<string, () => React.ReactElement> = {
  // Existing from this file
  'fx-glassmorphism': GlassmorphismPreview,
  'fx-mesh-gradient': MeshGradientPreview,
  'fx-neumorphism': NeumorphismPreview,
  'fx-claymorphism': ClaymorphismPreview,
  'fx-neo-brutalism': NeoBrutalismPreview,
  'fx-modern-skeuomorphism': ModernSkeuomorphismPreview,
  'fx-grainy-noise': GrainyNoisePreview,
  'fx-holographic': HolographicPreview,
  'fx-soft-focus': SoftFocusPreview,
  'fx-retro-crt': RetroCRTPreview,
  'fx-glitch': GlitchEffectPreview,

  // Colors & Backgrounds
  'fx-aurora-fluid': AuroraFluidPreview,
  'fx-duotone': DuotonePreview,
  'fx-monochromatic': MonochromaticPreview,
  'fx-dark-light-mode': DarkLightModePreview,
  'fx-glow-neon': GlowNeonPreview,
  'fx-color-splashing': ColorSplashingPreview,

  // Layout & Structure
  'fx-bento-grid': BentoGridPreview,
  'fx-z-axis-layering': ZAxisLayeringPreview,
  'fx-split-screen': SplitScreenPreview,
  'fx-masonry-layout': MasonryLayoutPreview,
  'fx-sticky-floating': StickyFloatingPreview,

  // Interactions & Motion
  'fx-micro-animations': MicroAnimationsPreview,
  'fx-parallax-scrolling': ParallaxPreview,
  'fx-skeleton-screens': SkeletonScreensPreview,
  'fx-custom-cursor': CustomCursorPreview,
  'fx-magnetic-buttons': MagneticButtonsPreview,
  'fx-kinetic-typography': KineticTypographyPreview,
  'fx-lottie-vector': LottieVectorPreview,
  'fx-page-transitions': PageTransitionsPreview,

  // Typography
  'fx-variable-fonts': VariableFontsPreview,
  'fx-scrollytelling-typography': ScrollytellingPreview,
  'fx-outline-stroke-text': OutlineStrokePreview,
  'fx-text-masking': TextMaskingPreview,
  'fx-marquee': MarqueePreview,
  'fx-kinetic-typo-2': KineticDynamicPreview,

  // Graphics & Art
  'fx-isometric-design': IsometricPreview,
  'fx-paper-cutout': PaperCutoutPreview,
  'fx-abstract-3d-shapes': Abstract3DPreview,
  'fx-hand-drawn-doodles': HandDrawnPreview,
  'fx-flat-design-2': FlatDesign2Preview,
  'fx-organic-blob-shapes': OrganicBlobPreview,

  // Technical FX
  'fx-layer-blend-modes': BlendModesPreview,
  'fx-clip-path-masking': ClipPathPreview,
  'fx-custom-scrollbars': CustomScrollbarPreview,
  'fx-fluid-typography': FluidTypographyPreview,
  'fx-scroll-triggered-reveal': ScrollRevealPreview,

  // Experimental
  'fx-generative-art': GenerativeArtPreview,
  'fx-ai-core-aesthetic': AiCorePreview,
  'fx-gamified-ui': GamifiedUiPreview,
};

export default DesignEffectsPreviews;
