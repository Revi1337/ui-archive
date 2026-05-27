import {
  ChevronDown, ArrowRight, ArrowLeft, Play, UploadCloud, Folder, File,
  Minus, Check, Clock, Calendar, Search, Film, Video as VideoIcon, 
  GripVertical, ToggleRight, Loader, List, ChevronUp, Image, Maximize,
  FileText, Download, Upload, Plus, Music, Menu, Bell, ChevronRight, User, Sliders
} from 'lucide-react';

export const SelectPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Select Dropdown" style={{ width: '100%', maxWidth: '300px', position: 'relative' }}>
      <label style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '8px', display: 'block' }}>Choose Framework</label>
      <div style={{ padding: '12px 16px', background: 'rgba(20,24,32,0.9)', border: '1px solid #3b82f6', borderRadius: '8px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', boxShadow: '0 0 0 2px rgba(59,130,246,0.3)' }}>
        <span>React.js</span>
        <ChevronDown size={18} color="#3b82f6" />
      </div>
      <div className="anatomy-layer" data-anatomy="Options Menu" style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, width: '100%', background: '#1c212b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px', zIndex: 10 }}>
        <div style={{ padding: '10px 12px', color: '#e2e8f0', borderRadius: '4px', cursor: 'pointer' }}>Vue.js</div>
        <div style={{ padding: '10px 12px', background: 'rgba(59,130,246,0.2)', color: '#3b82f6', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>
          React.js <Check size={16} />
        </div>
        <div style={{ padding: '10px 12px', color: '#e2e8f0', borderRadius: '4px', cursor: 'pointer' }}>Svelte</div>
        <div style={{ padding: '10px 12px', color: '#e2e8f0', borderRadius: '4px', cursor: 'pointer' }}>Angular</div>
      </div>
    </div>
  </div>
);

export const SeparatorPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '48px', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ color: '#fff' }}>Item 1</div>
      <div className="anatomy-layer" data-anatomy="Horizontal Separator" style={{ height: '1px', width: '100%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }} />
      <div style={{ color: '#fff' }}>Item 2</div>
    </div>
    
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', color: '#94a3b8' }}>
      <span>Design</span>
      <div className="anatomy-layer" data-anatomy="Vertical Separator" style={{ width: '2px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />
      <span>Development</span>
      <div className="anatomy-layer" data-anatomy="Vertical Separator" style={{ width: '2px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />
      <span>Marketing</span>
    </div>
  </div>
);

export const SkeletonPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Skeleton Loading State" style={{ width: '100%', maxWidth: '400px', background: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '16px', flexDirection: 'column' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <div className="anatomy-layer" data-anatomy="Skeleton Avatar" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', animation: 'pulse 1.5s infinite ease-in-out' }} />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="anatomy-layer" data-anatomy="Skeleton Text" style={{ width: '60%', height: '12px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', animation: 'pulse 1.5s infinite ease-in-out' }} />
          <div className="anatomy-layer" data-anatomy="Skeleton Text" style={{ width: '40%', height: '10px', borderRadius: '4px', background: 'rgba(255,255,255,0.03)', animation: 'pulse 1.5s infinite ease-in-out', animationDelay: '0.2s' }} />
        </div>
      </div>
      <div className="anatomy-layer" data-anatomy="Skeleton Rect" style={{ width: '100%', height: '120px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', animation: 'pulse 1.5s infinite ease-in-out', animationDelay: '0.4s' }} />
    </div>
  </div>
);

export const SlideItemPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="List Container" style={{ width: '100%', maxWidth: '400px', background: 'rgba(20,24,32,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
      
      {/* Normal Item */}
      <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
        <span>Normal Item</span>
        <ArrowRight size={16} color="#64748b" />
      </div>

      {/* Swiped Item */}
      <div className="anatomy-layer" data-anatomy="Slide Item Container" style={{ position: 'relative', background: '#22c55e', height: '56px' }}>
        <div className="anatomy-layer" data-anatomy="Underlying Action" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>Archive</div>
        
        <div className="anatomy-layer" data-anatomy="Sliding Surface" style={{ position: 'absolute', top: 0, left: '80px', width: '100%', height: '100%', background: '#1c212b', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', color: '#e2e8f0', boxShadow: '-5px 0 15px rgba(0,0,0,0.3)' }}>
          <span>Swipe Right →</span>
          <ArrowRight size={16} color="#64748b" />
        </div>
      </div>

      {/* Normal Item */}
      <div style={{ padding: '16px 24px', color: '#e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
        <span>Another Item</span>
        <ArrowRight size={16} color="#64748b" />
      </div>

    </div>
  </div>
);

export const SlideTransitionPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Transition Wrapper" style={{ width: '100%', maxWidth: '300px', border: '2px dashed rgba(255,255,255,0.2)', padding: '24px', borderRadius: '12px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ color: '#94a3b8', marginBottom: '16px' }}>Toggle content</div>
      <button style={{ padding: '8px 16px', background: '#3b82f6', color: '#fff', borderRadius: '8px', marginBottom: '24px' }}>Toggle</button>
      <div className="anatomy-layer" data-anatomy="Sliding Content" style={{ background: 'rgba(59,130,246,0.1)', border: '1px solid #3b82f6', padding: '16px', borderRadius: '8px', color: '#60a5fa' }}>
        Smooth slide down / up transition effect applied here.
      </div>
    </div>
  </div>
);

export const SliderPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '48px', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Standard Slider" style={{ width: '100%', maxWidth: '400px', display: 'flex', alignItems: 'center', gap: '16px' }}>
      <span style={{ color: '#94a3b8' }}>0</span>
      <div style={{ flex: 1, position: 'relative', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '60%', height: '100%', background: '#3b82f6', borderRadius: '2px' }} />
        <div style={{ position: 'absolute', top: '50%', left: '60%', transform: 'translate(-50%, -50%)', width: '16px', height: '16px', background: '#fff', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.5)', cursor: 'pointer' }} />
      </div>
      <span style={{ color: '#fff', fontWeight: 600 }}>60</span>
    </div>
  </div>
);

export const SpacePreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Flex Container" style={{ width: '100%', maxWidth: '500px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
      <button style={{ padding: '8px 16px', background: '#3b82f6', color: '#fff', borderRadius: '4px' }}>Left Item</button>
      <div className="anatomy-layer" data-anatomy="Spacer (flex-grow: 1)" style={{ flex: 1, height: '2px', background: 'rgba(255,255,255,0.1)', margin: '0 16px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-24px', left: '50%', transform: 'translateX(-50%)', color: '#64748b', fontSize: '0.8rem' }}>QSpace</div>
      </div>
      <button style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '4px' }}>Right Item</button>
    </div>
  </div>
);

export const SpinnersPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', gap: '48px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
    <div className="anatomy-layer" data-anatomy="Audio Spinner" style={{ display: 'flex', gap: '4px', alignItems: 'flex-end', height: '32px' }}>
      <div style={{ width: '6px', height: '100%', background: '#3b82f6', animation: 'pulse 1s infinite alternate' }} />
      <div style={{ width: '6px', height: '40%', background: '#3b82f6', animation: 'pulse 1s infinite alternate', animationDelay: '0.2s' }} />
      <div style={{ width: '6px', height: '80%', background: '#3b82f6', animation: 'pulse 1s infinite alternate', animationDelay: '0.4s' }} />
      <div style={{ width: '6px', height: '60%', background: '#3b82f6', animation: 'pulse 1s infinite alternate', animationDelay: '0.6s' }} />
    </div>
    <div className="anatomy-layer" data-anatomy="Dots Spinner" style={{ display: 'flex', gap: '8px' }}>
      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#8a2be2', animation: 'bounce 1s infinite alternate' }} />
      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#8a2be2', animation: 'bounce 1s infinite alternate', animationDelay: '0.2s' }} />
      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#8a2be2', animation: 'bounce 1s infinite alternate', animationDelay: '0.4s' }} />
    </div>
    <Loader size={32} color="#00f0ff" className="anatomy-layer" data-anatomy="Orbit Spinner" style={{ animation: 'spin 2s linear infinite' }} />
  </div>
);

export const SplitterPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Splitter Container" style={{ width: '100%', maxWidth: '600px', height: '300px', background: '#1c212b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', display: 'flex' }}>
      <div style={{ flex: '0 0 30%', padding: '16px', color: '#94a3b8' }}>Left Panel (30%)</div>
      <div className="anatomy-layer" data-anatomy="Separator / Drag Handle" style={{ width: '8px', background: 'rgba(255,255,255,0.05)', cursor: 'col-resize', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <GripVertical size={14} color="#64748b" />
      </div>
      <div style={{ flex: 1, padding: '16px', color: '#e2e8f0', background: 'rgba(0,0,0,0.2)' }}>Right Panel (70%)</div>
    </div>
  </div>
);

export const StepperPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '48px', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Horizontal Stepper" style={{ width: '100%', maxWidth: '600px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '24px', left: '40px', right: '40px', height: '2px', background: 'rgba(255,255,255,0.1)', zIndex: 0 }}>
        <div style={{ width: '50%', height: '100%', background: '#3b82f6' }} />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', zIndex: 1 }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Check size={24} /></div>
        <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>Cart</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', zIndex: 1 }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#1976D2', border: '2px solid #60a5fa', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>2</div>
        <span style={{ color: '#3b82f6', fontSize: '0.9rem', fontWeight: 600 }}>Payment</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', zIndex: 1 }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontWeight: 700 }}>3</div>
        <span style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>Review</span>
      </div>
    </div>
  </div>
);

export const TablePreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="QTable Advanced" style={{ width: '100%', maxWidth: '700px', background: 'rgba(20,24,32,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
      <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, color: '#fff' }}>Servers</h3>
        <Search size={18} color="#94a3b8" />
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', color: '#e2e8f0', fontSize: '0.9rem' }}>
        <thead style={{ background: 'rgba(255,255,255,0.02)', textAlign: 'left' }}>
          <tr>
            <th style={{ padding: '12px 16px', fontWeight: 600 }}>Name</th>
            <th style={{ padding: '12px 16px', fontWeight: 600 }}>Status</th>
            <th style={{ padding: '12px 16px', fontWeight: 600 }}>CPU</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>prod-db-01</td>
            <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}><span style={{ color: '#22c55e' }}>Online</span></td>
            <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>12%</td>
          </tr>
          <tr>
            <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>cache-redis-02</td>
            <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}><span style={{ color: '#f59e0b' }}>Warning</span></td>
            <td style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>87%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export const TimePickerPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Time Picker Clock" style={{ width: '280px', background: '#1c212b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', padding: '24px', aspectRatio: '1/1', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
      <div style={{ position: 'absolute', top: '24px', color: '#94a3b8' }}>12</div>
      <div style={{ position: 'absolute', right: '24px', color: '#94a3b8' }}>3</div>
      <div style={{ position: 'absolute', bottom: '24px', color: '#94a3b8' }}>6</div>
      <div style={{ position: 'absolute', left: '24px', color: '#94a3b8' }}>9</div>
      
      <div style={{ width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%', zIndex: 10 }} />
      <div className="anatomy-layer" data-anatomy="Clock Hand" style={{ position: 'absolute', bottom: '50%', left: 'calc(50% - 2px)', width: '4px', height: '80px', background: '#3b82f6', transformOrigin: 'bottom center', transform: 'rotate(45deg)' }}>
        <div style={{ position: 'absolute', top: '-16px', left: '-12px', width: '28px', height: '28px', background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.8rem', fontWeight: 700 }}>14</div>
      </div>
    </div>
  </div>
);

export const TimelinePreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Timeline Container" style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
      <div style={{ position: 'absolute', left: '23px', top: '10px', bottom: '10px', width: '2px', background: 'rgba(255,255,255,0.1)' }} />
      
      <div className="anatomy-layer" data-anatomy="Timeline Item" style={{ display: 'flex', gap: '24px', marginBottom: '32px', position: 'relative', zIndex: 1 }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Check size={20} color="#fff" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem' }}>Order Placed</div>
          <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '8px' }}>October 25, 2026</div>
          <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>We have received your order.</div>
        </div>
      </div>
      
      <div className="anatomy-layer" data-anatomy="Timeline Item" style={{ display: 'flex', gap: '24px', position: 'relative', zIndex: 1 }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid rgba(255,255,255,0.2)' }}>
          <Clock size={20} color="#94a3b8" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '1.1rem' }}>Processing</div>
          <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Estimated: Oct 26</div>
        </div>
      </div>
    </div>
  </div>
);

export const TogglePreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Toggle Component" style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.05)', padding: '24px 32px', borderRadius: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <span style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 600 }}>Dark Mode</span>
        <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Use dark theme across the site</span>
      </div>
      <ToggleRight size={40} color="#3b82f6" style={{ marginLeft: '24px' }} />
    </div>
  </div>
);

export const ToolbarPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="QToolbar" style={{ width: '100%', maxWidth: '600px', background: '#1976D2', color: '#fff', padding: '12px 16px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 12px rgba(25,118,210,0.5)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Menu size={24} />
        <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 500 }}>My Application</h3>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <Search size={20} />
        <Bell size={20} />
      </div>
    </div>
  </div>
);

export const TreePreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Tree View" style={{ width: '300px', background: 'rgba(20,24,32,0.8)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#fff' }}>
          <ChevronDown size={16} /> <Folder size={18} color="#3b82f6" /> <span>src</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '24px', borderLeft: '1px dashed rgba(255,255,255,0.1)', marginLeft: '7px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#e2e8f0' }}>
            <ChevronRight size={16} color="#64748b" /> <Folder size={18} color="#3b82f6" /> <span>components</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#e2e8f0' }}>
            <div style={{ width: '16px' }}/> <File size={18} color="#94a3b8" /> <span>App.jsx</span>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#e2e8f0' }}>
            <div style={{ width: '16px' }}/> <File size={18} color="#94a3b8" /> <span>main.jsx</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const UploaderPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="QUploader" style={{ width: '100%', maxWidth: '400px', background: '#1c212b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#fff', fontWeight: 600 }}>Upload Files</span>
        <button style={{ padding: '6px 12px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}><UploadCloud size={16} /></button>
      </div>
      <div style={{ padding: '32px', textAlign: 'center', color: '#94a3b8', fontSize: '0.9rem' }}>
        <Plus size={32} color="rgba(255,255,255,0.2)" style={{ margin: '0 auto 8px' }} />
        Click or drop files here
      </div>
    </div>
  </div>
);

export const VideoPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Video Player" style={{ width: '100%', maxWidth: '600px', aspectRatio: '16/9', background: '#000', borderRadius: '16px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'url(https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800) center/cover', opacity: 0.6 }} />
      <div className="anatomy-layer" data-anatomy="Play Button" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '64px', height: '64px', background: 'rgba(59,130,246,0.8)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(4px)' }}>
        <Play size={32} color="#fff" style={{ marginLeft: '4px' }} />
      </div>
      <div className="anatomy-layer" data-anatomy="Video Controls" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
        <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', marginBottom: '12px' }}>
          <div style={{ width: '30%', height: '100%', background: '#3b82f6', borderRadius: '2px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontSize: '0.8rem' }}>
          <span>1:24 / 4:30</span>
          <Film size={16} />
        </div>
      </div>
    </div>
  </div>
);

export const VirtualScrollPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Virtual Scroll Window" style={{ width: '300px', height: '400px', background: 'rgba(20,24,32,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '0.9rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>10,000 Items Rendered Instantly</div>
      <div style={{ flex: 1, padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px', overflowY: 'auto' }}>
        {[452, 453, 454, 455, 456, 457, 458].map(i => (
          <div key={i} className="anatomy-layer" data-anatomy="Virtual Item" style={{ padding: '12px 16px', background: 'rgba(255,255,255,0.02)', borderRadius: '8px', color: '#94a3b8', display: 'flex', justifyContent: 'space-between' }}>
            <span>Item #{i}</span>
            <span style={{ color: '#3b82f6' }}>Visible</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const TabsPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '32px', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Tabs Container" style={{ width: '100%', maxWidth: '600px', background: '#1c212b', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
      
      {/* Tabs Header */}
      <div className="anatomy-layer" data-anatomy="Tabs Header" style={{ display: 'flex', background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="anatomy-layer" data-anatomy="Active Tab" style={{ flex: 1, padding: '16px', textAlign: 'center', color: '#3b82f6', fontWeight: 600, borderBottom: '2px solid #3b82f6', display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', background: 'rgba(59,130,246,0.05)' }}>
          <User size={18} /> Profile
        </div>
        <div className="anatomy-layer" data-anatomy="Inactive Tab" style={{ flex: 1, padding: '16px', textAlign: 'center', color: '#94a3b8', fontWeight: 500, display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
          <Bell size={18} /> Notifications
        </div>
        <div className="anatomy-layer" data-anatomy="Inactive Tab" style={{ flex: 1, padding: '16px', textAlign: 'center', color: '#94a3b8', fontWeight: 500, display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
          <Sliders size={18} /> Settings
        </div>
      </div>

      {/* Tab Panel */}
      <div className="anatomy-layer" data-anatomy="Tab Panel" style={{ padding: '32px', color: '#e2e8f0', minHeight: '150px' }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#fff', fontSize: '1.2rem' }}>User Profile</h3>
        <p style={{ margin: 0, color: '#94a3b8', lineHeight: 1.6 }}>
          This is the content of the Profile tab. Tab panels swap out their content based on the active tab selection without reloading the page.
        </p>
      </div>

    </div>
  </div>
);
