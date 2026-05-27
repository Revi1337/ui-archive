import { Component, CheckCircle2, Sparkles } from 'lucide-react';

const DynamicPreviewHeader = ({ title, description }) => (
  <div style={{ textAlign: 'center', marginBottom: '48px', width: '100%' }}>
    <h2 className="anatomy-layer" data-anatomy="Component Title" style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', background: 'linear-gradient(to right, #60a5fa, #c084fc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
      {title}
    </h2>
    <p className="anatomy-layer" data-anatomy="Component Description" style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6, wordBreak: 'keep-all', maxWidth: '600px', margin: '0 auto' }}>
      {description}
    </p>
  </div>
);

const GROUP_LAYOUT_MAP = {
  'Getting Started': 0,
  'Page Layout Sections': 1,
  'UI Components & Form Controls': 2,
  'Full Page Templates': 3,
};

const DynamicPreview = ({ item }) => {
  if (!item) return null;

  const layoutType = GROUP_LAYOUT_MAP[item.group] ?? (item.id.length % 4);
  const anatomy = item.anatomy || [];

  if (layoutType === 0) {
    // Bento Grid Layout
    return (
      <div className="anatomy-layer" data-anatomy={`${item.title} Workspace`} style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto' }}>
        <DynamicPreviewHeader title={item.title} description={item.description} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', width: '100%', maxWidth: '1000px' }}>
          {anatomy.map((a, i) => (
            <div key={i} className="anatomy-layer" data-anatomy={a.label} style={{
              padding: '32px',
              background: i === 0 ? 'rgba(59,130,246,0.1)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${i === 0 ? 'rgba(59,130,246,0.3)' : 'rgba(255,255,255,0.05)'}`,
              borderRadius: '24px',
              gridColumn: i === 0 && anatomy.length > 2 ? 'span 2' : 'span 1',
              display: 'flex', flexDirection: 'column', gap: '16px',
              boxShadow: i === 0 ? '0 10px 30px rgba(59,130,246,0.1)' : 'none'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Component size={24} color={`hsl(${i * 55}, 70%, 65%)`} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.25rem', color: '#fff', marginBottom: '8px' }}>{a.label}</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6 }}>{a.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (layoutType === 1) {
    // Left Sidebar Split Layout
    return (
      <div className="anatomy-layer" data-anatomy={`${item.title} Dashboard`} style={{ padding: '40px', height: '100%', display: 'flex', gap: '40px', overflowY: 'auto' }}>
        <div style={{ width: '300px', flexShrink: 0, borderRight: '1px solid rgba(255,255,255,0.1)', paddingRight: '40px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>{item.title}</h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: 1.6, marginBottom: '32px' }}>{item.description}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ padding: '12px 16px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>Configuration</div>
            <div style={{ padding: '12px 16px', color: '#94a3b8', borderRadius: '8px' }}>Documentation</div>
            <div style={{ padding: '12px 16px', color: '#94a3b8', borderRadius: '8px' }}>API Reference</div>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {anatomy.map((a, i) => (
            <div key={i} className="anatomy-layer" data-anatomy={a.label} style={{
              padding: '24px',
              background: 'linear-gradient(90deg, rgba(20,24,32,0.8), rgba(255,255,255,0.02))',
              borderLeft: `4px solid hsl(${i * 60}, 70%, 60%)`,
              borderRadius: '0 16px 16px 0',
              display: 'flex', alignItems: 'flex-start', gap: '20px'
            }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CheckCircle2 size={20} color={`hsl(${i * 60}, 70%, 60%)`} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.15rem', color: '#fff', marginBottom: '8px' }}>{a.label}</h4>
                <p style={{ margin: 0, fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6 }}>{a.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (layoutType === 2) {
    // Stacked Cards / Feed Layout
    return (
      <div className="anatomy-layer" data-anatomy={`${item.title} Environment`} style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto' }}>
        <DynamicPreviewHeader title={item.title} description={item.description} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '700px' }}>
          {anatomy.map((a, i) => (
            <div key={i} className="anatomy-layer" data-anatomy={a.label} style={{
              padding: '32px',
              background: 'rgba(20,24,32,0.9)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '24px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              position: 'relative', overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, hsl(${i * 80}, 70%, 60%), hsl(${i * 80 + 40}, 70%, 60%))` }} />
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Sparkles size={28} color={`hsl(${i * 80}, 70%, 60%)`} />
              </div>
              <h4 style={{ margin: 0, fontSize: '1.3rem', color: '#fff', marginBottom: '12px' }}>{a.label}</h4>
              <p style={{ margin: 0, fontSize: '1rem', color: '#94a3b8', lineHeight: 1.6 }}>{a.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Layout Type 3: Kanban / Board Layout
  return (
    <div className="anatomy-layer" data-anatomy={`${item.title} Board`} style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
      <DynamicPreviewHeader title={item.title} description={item.description} />
      <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '32px' }}>
        {anatomy.map((a, i) => (
          <div key={i} style={{ minWidth: '320px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 8px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: `hsl(${i * 45}, 70%, 60%)` }} />
              <span style={{ color: '#fff', fontWeight: 600 }}>Step {i + 1}</span>
            </div>
            <div className="anatomy-layer" data-anatomy={a.label} style={{
              padding: '24px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.05)',
              borderRadius: '16px'
            }}>
              <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#fff', marginBottom: '12px' }}>{a.label}</h4>
              <p style={{ margin: 0, fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6 }}>{a.role}</p>
              <div style={{ marginTop: '24px', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px' }}>
                <div style={{ width: '40%', height: '100%', background: `hsl(${i * 45}, 70%, 60%)`, borderRadius: '3px' }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicPreview;
