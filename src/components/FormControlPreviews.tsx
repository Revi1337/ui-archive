import {
  ChevronRight, ChevronDown, Check, X, Settings,
  Menu, Plus, Edit2, Trash2,
  Share2,
  Paperclip, Image as ImageIcon,
  AlertCircle, ChevronLeft
} from 'lucide-react';

export const AjaxBarPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '100%', maxWidth: '600px', height: '300px', background: 'rgba(20,24,32,0.8)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', position: 'relative' }}>
      <div className="anatomy-layer" data-anatomy="Ajax Bar Container" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'rgba(255,255,255,0.05)' }}>
        <div className="anatomy-layer" data-anatomy="Progress Indicator" style={{ height: '100%', width: '45%', background: 'linear-gradient(90deg, #ff007f, #8a2be2)', boxShadow: '0 0 10px rgba(138,43,226,0.8)', animation: 'progress 2s ease-in-out infinite' }} />
      </div>
      <div style={{ padding: '32px', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ width: '60%', height: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
        <div style={{ width: '80%', height: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
        <div style={{ width: '40%', height: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
      </div>
    </div>
  </div>
);

export const BarPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Window Bar" style={{ width: '100%', maxWidth: '500px', background: '#1c212b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
      <div className="anatomy-layer" data-anatomy="Bar Header" style={{ padding: '8px 16px', background: '#0f1115', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
        </div>
        <div className="anatomy-layer" data-anatomy="Bar Title" style={{ color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600 }}>system-terminal ~ /usr/bin</div>
        <Menu size={14} color="#94a3b8" />
      </div>
      <div style={{ padding: '24px', minHeight: '150px', color: '#00f0ff', fontFamily: 'monospace' }}>
        $ _
      </div>
    </div>
  </div>
);

export const BreadcrumbsPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Basic Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '16px 24px', background: 'rgba(255,255,255,0.05)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)' }}>
      <span style={{ color: '#3b82f6', cursor: 'pointer', fontWeight: 500 }}>Home</span>
      <ChevronRight size={16} color="#64748b" />
      <span style={{ color: '#3b82f6', cursor: 'pointer', fontWeight: 500 }}>Library</span>
      <ChevronRight size={16} color="#64748b" />
      <span style={{ color: '#e2e8f0', fontWeight: 600 }}>Components</span>
    </div>

    <div className="anatomy-layer" data-anatomy="Icon Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 24px', background: '#1c212b', borderRadius: '12px', borderLeft: '4px solid #8a2be2' }}>
      <Settings size={18} color="#8a2be2" />
      <span style={{ color: '#94a3b8', cursor: 'pointer' }}>Settings</span>
      <span style={{ color: '#64748b' }}>/</span>
      <span style={{ color: '#94a3b8', cursor: 'pointer' }}>Security</span>
      <span style={{ color: '#64748b' }}>/</span>
      <span style={{ color: '#fff', fontWeight: 600 }}>API Keys</span>
    </div>
  </div>
);

export const BtnTogglePreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Button Toggle Group" style={{ display: 'flex', background: 'rgba(20,24,32,0.8)', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
      <button style={{ padding: '12px 24px', background: '#3b82f6', color: '#fff', fontWeight: 600 }}>Map</button>
      <button style={{ padding: '12px 24px', background: 'transparent', color: '#94a3b8', fontWeight: 500, borderLeft: '1px solid rgba(255,255,255,0.1)' }}>Satellite</button>
      <button style={{ padding: '12px 24px', background: 'transparent', color: '#94a3b8', fontWeight: 500, borderLeft: '1px solid rgba(255,255,255,0.1)' }}>Terrain</button>
    </div>
  </div>
);

export const ButtonDropdownPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Dropdown Menu Wrapper" style={{ position: 'relative' }}>
      <button className="anatomy-layer" data-anatomy="Dropdown Trigger" style={{ padding: '12px 24px', background: '#1c212b', color: '#fff', borderRadius: '8px', border: '1px solid #3b82f6', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}>
        Actions <ChevronDown size={18} color="#3b82f6" />
      </button>
      <div className="anatomy-layer" data-anatomy="Dropdown List" style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, width: '200px', background: 'rgba(20,24,32,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px', backdropFilter: 'blur(10px)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
        <div style={{ padding: '10px 12px', color: '#e2e8f0', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}><Edit2 size={16} /> Edit</div>
        <div style={{ padding: '10px 12px', color: '#e2e8f0', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}><Share2 size={16} /> Share</div>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '4px 0' }} />
        <div style={{ padding: '10px 12px', color: '#ef4444', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}><Trash2 size={16} /> Delete</div>
      </div>
    </div>
  </div>
);

export const ButtonGroupPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Action Button Group" style={{ display: 'flex', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
      <button style={{ padding: '16px', background: 'rgba(59,130,246,0.1)', border: '1px solid #3b82f6', color: '#3b82f6' }}><Check size={20} /></button>
      <button style={{ padding: '16px', background: '#3b82f6', border: '1px solid #3b82f6', color: '#fff', borderLeft: 'none', borderRight: 'none' }}><Edit2 size={20} /></button>
      <button style={{ padding: '16px', background: 'rgba(59,130,246,0.1)', border: '1px solid #3b82f6', color: '#3b82f6' }}><Trash2 size={20} /></button>
    </div>
  </div>
);

export const CarouselPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Carousel Container" style={{ width: '100%', maxWidth: '600px', height: '340px', background: 'linear-gradient(45deg, #1e3a8a, #8a2be2)', borderRadius: '24px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="anatomy-layer" data-anatomy="Carousel Slide" style={{ textAlign: 'center', padding: '40px' }}>
        <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '16px', fontWeight: 800 }}>Stunning Visuals</h2>
        <p style={{ color: '#e2e8f0', fontSize: '1.1rem' }}>Create captivating sliders with minimal effort.</p>
      </div>
      <button className="anatomy-layer" data-anatomy="Prev Button" style={{ position: 'absolute', left: '16px', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,0,0,0.5)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}><ChevronLeft size={24} /></button>
      <button className="anatomy-layer" data-anatomy="Next Button" style={{ position: 'absolute', right: '16px', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(0,0,0,0.5)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}><ChevronRight size={24} /></button>
      <div className="anatomy-layer" data-anatomy="Pagination Indicators" style={{ position: 'absolute', bottom: '24px', display: 'flex', gap: '8px' }}>
        <div style={{ width: '24px', height: '6px', background: '#fff', borderRadius: '3px' }} />
        <div style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.4)', borderRadius: '3px' }} />
        <div style={{ width: '6px', height: '6px', background: 'rgba(255,255,255,0.4)', borderRadius: '3px' }} />
      </div>
    </div>
  </div>
);

export const ChatMessagePreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px', margin: '0 auto', overflowY: 'auto' }}>
    <div className="anatomy-layer" data-anatomy="Incoming Message" style={{ display: 'flex', gap: '16px', alignSelf: 'flex-start' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>AI</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Agent • 10:42 AM</span>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px 20px', borderRadius: '4px 20px 20px 20px', color: '#fff', fontSize: '0.95rem', lineHeight: 1.5 }}>
          Hello! How can I assist you with your UI design today?
        </div>
      </div>
    </div>
    <div className="anatomy-layer" data-anatomy="Outgoing Message" style={{ display: 'flex', gap: '16px', alignSelf: 'flex-end', flexDirection: 'row-reverse' }}>
      <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#8a2be2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>U</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>You • 10:45 AM</span>
        <div style={{ background: '#8a2be2', padding: '16px 20px', borderRadius: '20px 4px 20px 20px', color: '#fff', fontSize: '0.95rem', lineHeight: 1.5 }}>
          I need a dark mode chat bubble layout.
        </div>
      </div>
    </div>
  </div>
);

export const CheckboxPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Checkbox Group" style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'rgba(255,255,255,0.03)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
        <div style={{ width: '24px', height: '24px', background: '#3b82f6', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Check size={16} color="#fff" /></div>
        <span style={{ color: '#fff', fontSize: '1rem' }}>Remember me</span>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
        <div style={{ width: '24px', height: '24px', background: 'transparent', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '6px' }} />
        <span style={{ color: '#e2e8f0', fontSize: '1rem' }}>Subscribe to newsletter</span>
      </label>
      <label style={{ display: 'flex', alignItems: 'center', gap: '12px', opacity: 0.5 }}>
        <div style={{ width: '24px', height: '24px', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.2)', borderRadius: '6px' }} />
        <span style={{ color: '#e2e8f0', fontSize: '1rem' }}>Disabled option</span>
      </label>
    </div>
  </div>
);

export const ChipPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Basic Chip" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '6px 16px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
      Vue.js
    </div>
    <div className="anatomy-layer" data-anatomy="Removable Chip" style={{ background: 'rgba(59,130,246,0.2)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.3)', padding: '6px 16px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
      React <X size={14} style={{ cursor: 'pointer' }} />
    </div>
    <div className="anatomy-layer" data-anatomy="Avatar Chip" style={{ background: '#1c212b', border: '1px solid rgba(255,255,255,0.2)', color: '#e2e8f0', padding: '4px 16px 4px 4px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#ff007f', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', fontWeight: 700 }}>MK</div>
      Marketing
    </div>
  </div>
);

export const CircularProgressPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', gap: '64px', alignItems: 'center', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Determinate Progress" style={{ position: 'relative', width: '100px', height: '100px' }}>
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
        <circle cx="50" cy="50" r="45" fill="none" stroke="#3b82f6" strokeWidth="8" strokeDasharray="283" strokeDashoffset="75" strokeLinecap="round" transform="rotate(-90 50 50)" />
      </svg>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', fontWeight: 700, fontSize: '1.2rem' }}>73%</div>
    </div>
    <div className="anatomy-layer" data-anatomy="Indeterminate Progress" style={{ width: '60px', height: '60px', border: '6px solid rgba(138,43,226,0.2)', borderTopColor: '#8a2be2', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
  </div>
);

export const ColorPickerPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Color Picker Panel" style={{ width: '280px', background: '#1c212b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
      <div className="anatomy-layer" data-anatomy="Color Spectrum" style={{ width: '100%', height: '150px', background: 'linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)', borderRadius: '8px', marginBottom: '16px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '30%', width: '16px', height: '16px', borderRadius: '50%', border: '2px solid #fff', boxShadow: '0 2px 4px rgba(0,0,0,0.5)', transform: 'translate(-50%, -50%)' }} />
      </div>
      <div className="anatomy-layer" data-anatomy="Hue Slider" style={{ height: '12px', background: 'linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)', borderRadius: '6px', marginBottom: '24px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '40%', width: '16px', height: '16px', background: '#fff', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.3)', transform: 'translate(-50%, -50%)' }} />
      </div>
      <div className="anatomy-layer" data-anatomy="Color Values" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <div style={{ width: '40px', height: '40px', background: '#ff007f', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' }} />
        <input type="text" value="#FF007F" readOnly style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', padding: '8px 12px', color: '#fff', fontSize: '0.9rem', outline: 'none' }} />
      </div>
    </div>
  </div>
);

export const DatePickerPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Calendar Widget" style={{ width: '320px', background: 'rgba(20,24,32,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
      <div className="anatomy-layer" data-anatomy="Month Navigation" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <ChevronLeft size={20} color="#94a3b8" />
        <div style={{ color: '#fff', fontWeight: 600 }}>May 2026</div>
        <ChevronRight size={20} color="#94a3b8" />
      </div>
      <div className="anatomy-layer" data-anatomy="Days Header" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', marginBottom: '16px', textAlign: 'center', color: '#64748b', fontSize: '0.8rem', fontWeight: 600 }}>
        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
      </div>
      <div className="anatomy-layer" data-anatomy="Days Grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', textAlign: 'center', color: '#e2e8f0', fontSize: '0.9rem' }}>
        <div style={{ opacity: 0.3 }}>26</div><div style={{ opacity: 0.3 }}>27</div><div style={{ opacity: 0.3 }}>28</div><div style={{ opacity: 0.3 }}>29</div><div style={{ opacity: 0.3 }}>30</div>
        <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>10</div>
        <div style={{ background: '#3b82f6', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto' }}>11</div>
        <div>12</div><div>13</div><div>14</div><div>15</div><div>16</div>
      </div>
    </div>
  </div>
);

export const DialogPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.6)' }}>
    <div className="anatomy-layer" data-anatomy="Dialog Surface" style={{ width: '400px', background: '#1c212b', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.7)', overflow: 'hidden' }}>
      <div className="anatomy-layer" data-anatomy="Dialog Header" style={{ padding: '24px 24px 16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(239,68,68,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AlertCircle size={24} color="#ef4444" />
        </div>
        <div>
          <h3 style={{ margin: 0, color: '#fff', fontSize: '1.2rem', fontWeight: 600 }}>Delete Repository</h3>
        </div>
      </div>
      <div className="anatomy-layer" data-anatomy="Dialog Body" style={{ padding: '0 24px 24px', color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>
        Are you sure you want to delete this repository? This action cannot be undone and will permanently remove all data, branches, and commits.
      </div>
      <div className="anatomy-layer" data-anatomy="Dialog Footer" style={{ padding: '16px 24px', background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
        <button style={{ padding: '10px 20px', background: 'transparent', color: '#e2e8f0', borderRadius: '8px', fontWeight: 600 }}>Cancel</button>
        <button style={{ padding: '10px 20px', background: '#ef4444', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>Yes, Delete</button>
      </div>
    </div>
  </div>
);

export const EditorPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="WYSIWYG Editor" style={{ width: '100%', maxWidth: '700px', height: '400px', background: 'rgba(20,24,32,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex', flexDirection: 'column' }}>
      <div className="anatomy-layer" data-anatomy="Toolbar" style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '16px', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px', fontWeight: 700 }}>B</button>
          <button style={{ padding: '6px 12px', background: 'transparent', color: '#94a3b8', borderRadius: '4px', fontStyle: 'italic' }}>I</button>
          <button style={{ padding: '6px 12px', background: 'transparent', color: '#94a3b8', borderRadius: '4px', textDecoration: 'underline' }}>U</button>
        </div>
        <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
        <div style={{ display: 'flex', gap: '8px', color: '#94a3b8', alignItems: 'center' }}>
          <Menu size={18} />
          <ImageIcon size={18} />
          <Paperclip size={18} />
        </div>
      </div>
      <div className="anatomy-layer" data-anatomy="Editing Area" style={{ padding: '24px', flex: 1, color: '#e2e8f0', fontSize: '1.05rem', lineHeight: 1.7, outline: 'none' }}>
        <h1 style={{ color: '#fff', marginTop: 0 }}>The Future of Interfaces</h1>
        <p>WYSIWYG editors are crucial for content management systems. They allow users to see exactly how their formatting will appear without knowing HTML.</p>
        <div style={{ width: '2px', height: '24px', background: '#3b82f6', animation: 'blink 1s step-end infinite', marginTop: '16px' }} />
      </div>
    </div>
  </div>
);

export const ExpansionItemPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div className="anatomy-layer" data-anatomy="Expansion Wrapper" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
        <div className="anatomy-layer" data-anatomy="Trigger Header" style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(59,130,246,0.1)', cursor: 'pointer' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#fff', fontWeight: 600 }}>
            <Settings size={20} color="#3b82f6" /> Advanced Preferences
          </div>
          <ChevronDown size={20} color="#3b82f6" style={{ transform: 'rotate(180deg)' }} />
        </div>
        <div className="anatomy-layer" data-anatomy="Expanded Content" style={{ padding: '24px', color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>
          Configure detailed settings for telemetry, hardware acceleration, and developer options. These settings might affect performance.
        </div>
      </div>
      <div className="anatomy-layer" data-anatomy="Collapsed Item" style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', cursor: 'pointer' }}>
        <div style={{ color: '#e2e8f0', fontWeight: 500 }}>Notification Rules</div>
        <ChevronDown size={20} color="#64748b" />
      </div>
    </div>
  </div>
);

export const FabPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
    <div style={{ width: '300px', height: '400px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ padding: '24px', color: '#64748b' }}>Simulated App Screen</div>

      {/* Floating Action Button */}
      <div className="anatomy-layer" data-anatomy="FAB Trigger" style={{ position: 'absolute', bottom: '24px', right: '24px', width: '56px', height: '56px', background: 'linear-gradient(135deg, #ff007f, #8a2be2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(138,43,226,0.5)', cursor: 'pointer', zIndex: 10 }}>
        <Plus size={28} color="#fff" />
      </div>

      <div className="anatomy-layer" data-anatomy="Speed Dial Action" style={{ position: 'absolute', bottom: '96px', right: '32px', width: '40px', height: '40px', background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', opacity: 0.8 }}>
        <Edit2 size={18} color="#fff" />
      </div>
      <div className="anatomy-layer" data-anatomy="Speed Dial Action" style={{ position: 'absolute', bottom: '152px', right: '32px', width: '40px', height: '40px', background: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.3)', opacity: 0.8 }}>
        <Share2 size={18} color="#fff" />
      </div>
    </div>
  </div>
);

export const FieldPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Form Field Wrapper" style={{ width: '100%', maxWidth: '400px', background: 'rgba(255,255,255,0.02)', borderBottom: '2px solid #3b82f6', padding: '16px 16px 8px', borderRadius: '8px 8px 0 0', position: 'relative' }}>
      <label style={{ fontSize: '0.75rem', color: '#3b82f6', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Workspace Name</label>
      <input type="text" value="Design Team Alpha" readOnly style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', fontSize: '1.1rem', outline: 'none' }} />
      <div className="anatomy-layer" data-anatomy="Helper Append" style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}>
        <Edit2 size={16} />
      </div>
    </div>

    <div className="anatomy-layer" data-anatomy="Outlined Field" style={{ width: '100%', maxWidth: '400px', border: '1px solid rgba(255,255,255,0.2)', padding: '12px 16px', borderRadius: '8px', position: 'relative' }}>
      <label style={{ position: 'absolute', top: '-10px', left: '12px', background: '#1c212b', padding: '0 8px', fontSize: '0.8rem', color: '#e2e8f0' }}>Domain URL</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ color: '#64748b' }}>https://</span>
        <input type="text" placeholder="my-project.vercel.app" style={{ flex: 1, background: 'transparent', border: 'none', color: '#fff', fontSize: '1rem', outline: 'none' }} />
      </div>
    </div>
  </div>
);

export const FilePickerPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="File Dropzone" style={{ width: '100%', maxWidth: '500px', border: '2px dashed rgba(59,130,246,0.5)', background: 'rgba(59,130,246,0.05)', borderRadius: '16px', padding: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', cursor: 'pointer' }}>
      <div style={{ width: '64px', height: '64px', background: 'rgba(59,130,246,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Paperclip size={32} color="#3b82f6" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px' }}>Drag and drop files here</div>
        <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>or click to browse from your computer (Max 10MB)</div>
      </div>
      <button style={{ padding: '10px 24px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontWeight: 600, marginTop: '16px' }}>Select Files</button>
    </div>
  </div>
);

export const ImgPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Image Wrapper" style={{ width: '300px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', position: 'relative' }}>
      <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80" alt="Retro Tech" style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} />
      <div className="anatomy-layer" data-anatomy="Image Overlay" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: '#fff' }}>
        <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>Retro Tech</div>
        <div style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>High quality placeholder</div>
      </div>
    </div>
    <div className="anatomy-layer" data-anatomy="Image with Skeleton" style={{ width: '300px', height: '200px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '-100%', width: '50%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', animation: 'shimmer 1.5s infinite' }} />
      <ImageIcon size={48} color="rgba(255,255,255,0.1)" />
    </div>
  </div>
);

export const InfiniteScrollPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Scroll Container" style={{ width: '400px', height: '400px', background: 'rgba(20,24,32,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <div key={i} className="anatomy-layer" data-anatomy="List Item" style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(59,130,246,0.2)' }} />
          <div>
            <div style={{ width: '120px', height: '12px', background: 'rgba(255,255,255,0.2)', borderRadius: '4px', marginBottom: '8px' }} />
            <div style={{ width: '80px', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }} />
          </div>
        </div>
      ))}
      <div className="anatomy-layer" data-anatomy="Loading Trigger" style={{ display: 'flex', justifyContent: 'center', padding: '24px 0' }}>
        <div style={{ width: '24px', height: '24px', border: '3px solid rgba(59,130,246,0.3)', borderTopColor: '#3b82f6', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      </div>
    </div>
  </div>
);

export const InnerLoadingPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center' }}>
    <div style={{ width: '400px', height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', position: 'relative', overflow: 'hidden', padding: '24px' }}>
      <h3 style={{ color: '#fff' }}>Dashboard Data</h3>
      <p style={{ color: '#94a3b8' }}>Here is some content that is currently being fetched from the server...</p>

      <div className="anatomy-layer" data-anatomy="Dimmer Overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(20,24,32,0.7)', backdropFilter: 'blur(2px)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px' }}>
        <div className="anatomy-layer" data-anatomy="Spinner" style={{ width: '40px', height: '40px', border: '4px solid rgba(0,240,255,0.2)', borderTopColor: '#00f0ff', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
        <span style={{ color: '#00f0ff', fontWeight: 600, letterSpacing: '1px' }}>PROCESSING...</span>
      </div>
    </div>
  </div>
);

export const IntersectionPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ textAlign: 'center', marginBottom: '40px', color: '#94a3b8' }}>Scroll to reveal elements</div>
    <div className="anatomy-layer" data-anatomy="Intersection Observer View" style={{ width: '100%', maxWidth: '600px', height: '300px', border: '2px dashed rgba(255,255,255,0.2)', borderRadius: '16px', overflowY: 'auto', padding: '24px', position: 'relative' }}>
      <div style={{ height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div style={{ padding: '32px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>Visible Content</div>

        <div className="anatomy-layer" data-anatomy="Animated Entry Element" style={{ padding: '32px', background: 'linear-gradient(90deg, #3b82f6, #8a2be2)', borderRadius: '12px', color: '#fff', fontWeight: 700, textAlign: 'center', transform: 'translateY(-20px)', opacity: 0.8, transition: 'all 0.5s ease' }}>
          This element animates in when intersecting the viewport!
        </div>
      </div>
    </div>
  </div>
);

export const KnobPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', gap: '64px', alignItems: 'center', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Rotary Knob" style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'conic-gradient(from -90deg, #3b82f6 0%, #3b82f6 60%, rgba(255,255,255,0.1) 60%, rgba(255,255,255,0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
      <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: '#1c212b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem', fontWeight: 800, boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.5)' }}>
        60%
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(126deg) translateY(-45px)', width: '8px', height: '8px', background: '#fff', borderRadius: '50%', boxShadow: '0 0 10px #fff' }} />
    </div>
  </div>
);

export const LinearProgressPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 600 }}>
        <span>Storage Usage</span>
        <span>45 GB / 100 GB</span>
      </div>
      <div className="anatomy-layer" data-anatomy="Progress Track" style={{ height: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '6px', overflow: 'hidden' }}>
        <div className="anatomy-layer" data-anatomy="Determinate Bar" style={{ width: '45%', height: '100%', background: 'linear-gradient(90deg, #3b82f6, #00f0ff)', borderRadius: '6px' }} />
      </div>
    </div>

    <div style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Analyzing dependencies...</div>
      <div className="anatomy-layer" data-anatomy="Progress Track" style={{ height: '4px', background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div className="anatomy-layer" data-anatomy="Indeterminate Bar" style={{ width: '30%', height: '100%', background: '#ff007f', animation: 'slideRight 1.5s ease-in-out infinite' }} />
      </div>
    </div>
  </div>
);
