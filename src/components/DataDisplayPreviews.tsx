import {
  Menu as MenuIcon, Monitor, CheckCircle,
  Edit2, Maximize2, User, Bell, AlertTriangle,
  Component, ChevronLeft, ChevronRight,
  Circle, Star, ArrowUp, Plus
} from 'lucide-react';

export const ListPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="List Container" style={{ width: '100%', maxWidth: '400px', background: 'rgba(20,24,32,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflow: 'hidden' }}>
      <div style={{ padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#fff', fontWeight: 600 }}>Recent Activity</div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="anatomy-layer" data-anatomy="List Item" style={{ padding: '16px 24px', display: 'flex', gap: '16px', alignItems: 'center', borderBottom: i !== 3 ? '1px solid rgba(255,255,255,0.05)' : 'none', cursor: 'pointer' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: `hsl(${i * 120}, 70%, 20%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={18} color={`hsl(${i * 120}, 70%, 60%)`} />
          </div>
          <div>
            <div style={{ color: '#e2e8f0', fontSize: '0.95rem', fontWeight: 500 }}>User logged in</div>
            <div style={{ color: '#64748b', fontSize: '0.8rem' }}>2 minutes ago</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const MarkupTablePreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Table Container" style={{ width: '100%', maxWidth: '600px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', color: '#e2e8f0' }}>
        <thead className="anatomy-layer" data-anatomy="Table Header" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <tr>
            <th style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Dessert (100g)</th>
            <th style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Calories</th>
            <th style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Fat (g)</th>
          </tr>
        </thead>
        <tbody className="anatomy-layer" data-anatomy="Table Body">
          <tr>
            <td style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Frozen Yogurt</td>
            <td style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>159</td>
            <td style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>6.0</td>
          </tr>
          <tr>
            <td style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Ice cream sandwich</td>
            <td style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>237</td>
            <td style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>9.0</td>
          </tr>
          <tr>
            <td style={{ padding: '16px' }}>Eclair</td>
            <td style={{ padding: '16px' }}>262</td>
            <td style={{ padding: '16px' }}>16.0</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export const MenuPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ position: 'relative' }}>
      <button className="anatomy-layer" data-anatomy="Menu Trigger" style={{ padding: '12px 24px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontWeight: 600, display: 'flex', gap: '8px', alignItems: 'center' }}>
        <MenuIcon size={18} /> Open Menu
      </button>
      <div className="anatomy-layer" data-anatomy="Menu Popover" style={{ position: 'absolute', top: '100%', left: 0, marginTop: '8px', width: '220px', background: '#1c212b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
        <div style={{ padding: '10px 16px', color: '#e2e8f0', cursor: 'pointer', borderRadius: '6px', display: 'flex', gap: '12px', alignItems: 'center' }}><User size={16} /> Profile</div>
        <div style={{ padding: '10px 16px', color: '#e2e8f0', cursor: 'pointer', borderRadius: '6px', display: 'flex', gap: '12px', alignItems: 'center' }}><Bell size={16} /> Notifications</div>
        <div style={{ margin: '8px 0', height: '1px', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ padding: '10px 16px', color: '#ef4444', cursor: 'pointer', borderRadius: '6px', display: 'flex', gap: '12px', alignItems: 'center' }}><AlertTriangle size={16} /> Logout</div>
      </div>
    </div>
  </div>
);

export const NoSsrPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="No-SSR Boundary" style={{ padding: '32px', border: '2px dashed #f59e0b', borderRadius: '16px', background: 'rgba(245,158,11,0.05)', textAlign: 'center', color: '#fbbf24', maxWidth: '400px' }}>
      <Monitor size={48} style={{ margin: '0 auto 16px' }} />
      <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem' }}>Client-Side Only</h3>
      <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8' }}>This component bypasses Server-Side Rendering and only mounts in the browser. Perfect for window/document dependent libraries.</p>
    </div>
  </div>
);

export const OptionGroupPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Option Group Wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'rgba(255,255,255,0.02)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', width: '300px' }}>
      <div style={{ color: '#fff', fontWeight: 600, marginBottom: '8px' }}>Select Notification Level:</div>
      <label style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
        <Circle size={18} color="#94a3b8" />
        <span style={{ color: '#e2e8f0' }}>None</span>
      </label>
      <label style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
        <div style={{ position: 'relative' }}>
          <Circle size={18} color="#3b82f6" fill="#3b82f6" opacity={0.2} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '8px', height: '8px', background: '#3b82f6', borderRadius: '50%' }} />
        </div>
        <span style={{ color: '#fff' }}>Mentions Only</span>
      </label>
      <label style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
        <Circle size={18} color="#94a3b8" />
        <span style={{ color: '#e2e8f0' }}>All Activity</span>
      </label>
    </div>
  </div>
);

export const ParallaxPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Parallax Container" style={{ width: '100%', maxWidth: '600px', height: '400px', borderRadius: '24px', overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="anatomy-layer" data-anatomy="Parallax Image" style={{ position: 'absolute', top: '-50px', left: 0, right: 0, bottom: '-50px', background: 'url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000) center/cover', transform: 'translateY(20px)', filter: 'brightness(0.6)' }} />
      <div className="anatomy-layer" data-anatomy="Content Overlay" style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#fff', textAlign: 'center', padding: '32px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 16px 0', textShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>Immersive Depth</h2>
        <p style={{ fontSize: '1.1rem', color: '#e2e8f0' }}>Scroll to experience the parallax effect.</p>
      </div>
    </div>
  </div>
);

export const PopupEditPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Target Element" style={{ padding: '16px 24px', background: 'rgba(255,255,255,0.05)', border: '1px dashed #3b82f6', borderRadius: '8px', cursor: 'pointer', color: '#fff', display: 'flex', gap: '12px', alignItems: 'center', position: 'relative' }}>
      Click to edit this text
      <Edit2 size={16} color="#3b82f6" />
      
      <div className="anatomy-layer" data-anatomy="Popup Edit Panel" style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: '12px', background: '#1c212b', border: '1px solid rgba(255,255,255,0.2)', padding: '16px', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', display: 'flex', gap: '8px', zIndex: 10 }}>
        <input type="text" value="Click to edit this text" readOnly style={{ padding: '8px 12px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '6px', outline: 'none' }} />
        <button style={{ padding: '8px 12px', background: '#3b82f6', color: '#fff', borderRadius: '6px', fontWeight: 600 }}>Save</button>
      </div>
    </div>
  </div>
);

export const PopupProxyPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Adaptive Popup Proxy" style={{ width: '320px', background: '#1c212b', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)', padding: '24px', textAlign: 'center', color: '#94a3b8' }}>
      <Maximize2 size={48} color="#8a2be2" style={{ margin: '0 auto 16px' }} />
      <h3 style={{ color: '#fff', margin: '0 0 12px 0' }}>Responsive Proxy</h3>
      <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
        On desktop, I render as a Popover Menu. On mobile screens, I automatically transform into a Bottom Sheet or Dialog!
      </p>
    </div>
  </div>
);

export const PullToRefreshPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Scrollable Area" style={{ width: '300px', height: '500px', background: 'rgba(20,24,32,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '32px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <div className="anatomy-layer" data-anatomy="Pull Indicator" style={{ position: 'absolute', top: '16px', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: '8px', color: '#3b82f6', fontSize: '0.8rem', fontWeight: 600 }}>
        <ArrowUp size={16} /> Pull down to refresh
      </div>
      <div style={{ flex: 1, padding: '64px 24px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{ height: '80px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }} />
        ))}
      </div>
    </div>
  </div>
);

export const AvatarPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Standard QAvatar" style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.2rem', fontWeight: 700 }}>A</div>
    <div className="anatomy-layer" data-anatomy="Icon QAvatar" style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#8a2be2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Star size={32} /></div>
    <div className="anatomy-layer" data-anatomy="Image QAvatar" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'url(https://i.pravatar.cc/150?img=11) center/cover' }} />
    <div className="anatomy-layer" data-anatomy="Square QAvatar" style={{ width: '64px', height: '64px', borderRadius: '12px', background: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>Q</div>
  </div>
);

export const BadgePreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', gap: '48px', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Floating Badge" style={{ position: 'relative' }}>
      <div style={{ padding: '12px 24px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}>Messages</div>
      <div style={{ position: 'absolute', top: '-8px', right: '-8px', background: '#ef4444', color: '#fff', fontSize: '0.75rem', fontWeight: 700, padding: '2px 8px', borderRadius: '12px', border: '2px solid #0f1115' }}>99+</div>
    </div>
    <div className="anatomy-layer" data-anatomy="Inline Badge" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '24px', color: '#fff' }}>
      Vue 3 <span style={{ background: '#22c55e', padding: '2px 8px', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 700 }}>PRO</span>
    </div>
  </div>
);

export const BannerPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="QBanner" style={{ width: '100%', maxWidth: '600px', background: 'rgba(59,130,246,0.1)', border: '1px solid #3b82f6', borderRadius: '12px', display: 'flex', alignItems: 'center', padding: '16px 24px', gap: '16px' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <CheckCircle size={24} color="#fff" />
      </div>
      <div style={{ flex: 1 }}>
        <h4 style={{ color: '#fff', margin: '0 0 4px 0', fontSize: '1rem' }}>Update Available</h4>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem' }}>A new version of  is ready to be installed.</p>
      </div>
      <button style={{ padding: '8px 16px', background: 'transparent', color: '#3b82f6', fontWeight: 600, border: 'none', cursor: 'pointer' }}>Update</button>
    </div>
  </div>
);

export const ButtonPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
    <button className="anatomy-layer" data-anatomy="Standard QBtn" style={{ padding: '12px 24px', background: '#1976D2', color: '#fff', borderRadius: '4px', fontWeight: 500, border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Primary</button>
    <button className="anatomy-layer" data-anatomy="Outline QBtn" style={{ padding: '12px 24px', background: 'transparent', color: '#1976D2', border: '1px solid #1976D2', borderRadius: '4px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Outline</button>
    <button className="anatomy-layer" data-anatomy="Round QBtn" style={{ width: '56px', height: '56px', background: '#26A69A', color: '#fff', borderRadius: '50%', border: 'none', boxShadow: '0 4px 10px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Plus size={24} /></button>
    <button className="anatomy-layer" data-anatomy="Flat QBtn" style={{ padding: '12px 24px', background: 'transparent', color: '#fff', border: 'none', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px', opacity: 0.8 }}>Flat Button</button>
  </div>
);

export const CardPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="QCard" style={{ width: '340px', background: '#1c212b', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column' }}>
      <img src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=600" alt="Card" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      <div className="anatomy-layer" data-anatomy="QCardSection" style={{ padding: '16px' }}>
        <h4 style={{ color: '#fff', margin: '0 0 8px 0', fontSize: '1.2rem' }}>Cafe Basilico</h4>
        <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '8px' }}>
          <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
        </div>
        <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>Small plates, salads & sandwiches in an intimate setting.</p>
      </div>
      <div className="anatomy-layer" data-anatomy="QCardActions" style={{ padding: '8px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
        <button style={{ padding: '8px 16px', background: 'transparent', color: '#94a3b8', border: 'none', fontWeight: 600 }}>Cancel</button>
        <button style={{ padding: '8px 16px', background: 'transparent', color: '#3b82f6', border: 'none', fontWeight: 600 }}>Reserve</button>
      </div>
    </div>
  </div>
);

export const FormPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'radial-gradient(circle at top right, rgba(99, 102, 241, 0.1), transparent 40%), radial-gradient(circle at bottom left, rgba(236, 72, 153, 0.1), transparent 40%)' }}>
    <form className="anatomy-layer" data-anatomy="Form Main Frame" style={{ width: '100%', maxWidth: '420px', background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(16px)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05) inset', display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative Glow */}
      <div className="anatomy-layer" data-anatomy="Visual Polish" style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'rgba(99, 102, 241, 0.4)', filter: 'blur(60px)', borderRadius: '50%', zIndex: 0 }} />
      
      <div className="anatomy-layer" data-anatomy="Data Renderer" style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 800, margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>Create Account</h2>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>Join us to unlock premium features.</p>
      </div>

      <div className="anatomy-layer" data-anatomy="Layout constraints" style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 500, marginLeft: '4px' }}>Full Name</label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <User size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px' }} />
            <input type="text" className="anatomy-layer" data-anatomy="Interactive Zone" placeholder="John Doe" style={{ width: '100%', padding: '14px 16px 14px 44px', background: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'all 0.3s ease', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }} onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#6366f1'; (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(99,102,241,0.2)'; }} onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLElement).style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1)'; }} />
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 500, marginLeft: '4px' }}>Email Address</label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <span style={{ position: 'absolute', left: '16px', color: '#94a3b8', fontSize: '1.1rem', fontWeight: 'bold' }}>@</span>
            <input type="email" className="anatomy-layer" data-anatomy="Interactive Zone" placeholder="john@example.com" style={{ width: '100%', padding: '14px 16px 14px 44px', background: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'all 0.3s ease', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }} onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#6366f1'; (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(99,102,241,0.2)'; }} onBlur={(e) => { (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.target as HTMLElement).style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1)'; }} />
          </div>
        </div>

        <div style={{ marginTop: '12px' }}>
          <button type="submit" className="anatomy-layer" data-anatomy="Interactive Zone" style={{ width: '100%', padding: '14px 20px', background: 'linear-gradient(135deg, #6366f1, #ec4899)', color: '#fff', borderRadius: '12px', border: 'none', fontWeight: 700, fontSize: '1.05rem', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s', boxShadow: '0 10px 20px -5px rgba(236,72,153,0.4)' }} onMouseOver={(e) => { (e.target as HTMLElement).style.transform = 'translateY(-2px)'; (e.target as HTMLElement).style.boxShadow = '0 15px 25px -5px rgba(236,72,153,0.5)'; }} onMouseOut={(e) => { (e.target as HTMLElement).style.transform = 'translateY(0)'; (e.target as HTMLElement).style.boxShadow = '0 10px 20px -5px rgba(236,72,153,0.4)'; }}>
            Get Started Free
          </button>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '16px', zIndex: 1 }}>
        <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Already have an account? </span>
        <span style={{ color: '#6366f1', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}>Sign in</span>
      </div>
    </form>
  </div>
);

export const IconPreview = () => (
  <div className="anatomy-layer" data-anatomy="Icon Main Frame" style={{ padding: '64px 40px', height: '100%', display: 'flex', flexDirection: 'column', gap: '48px', overflowY: 'auto', background: 'radial-gradient(circle at top, rgba(99, 102, 241, 0.05), transparent 70%)' }}>
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 800, marginBottom: '8px' }}>QIcon Component</h2>
      <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Elegantly render vector icon fonts and SVG iconography with dynamic sizing and harmonic coloring.</p>
    </div>

    <div className="anatomy-layer" data-anatomy="Layout constraints" style={{ display: 'flex', gap: '24px', width: '100%', maxWidth: '900px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
      {/* Category 1: Status */}
      <div className="anatomy-layer" data-anatomy="Interactive Zone" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', transition: 'all 0.3s ease', cursor: 'pointer', minWidth: '180px' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(239, 68, 68, 0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.boxShadow = 'none'; }}>
        <div className="anatomy-layer" data-anatomy="Visual Polish" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
          <AlertTriangle size={32} color="#ef4444" />
        </div>
        <span className="anatomy-layer" data-anatomy="Data Renderer" style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem' }}>warning</span>
      </div>

      {/* Category 2: Tech */}
      <div className="anatomy-layer" data-anatomy="Interactive Zone" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', transition: 'all 0.3s ease', cursor: 'pointer', minWidth: '180px' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.3)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(59, 130, 246, 0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.boxShadow = 'none'; }}>
        <div className="anatomy-layer" data-anatomy="Visual Polish" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
          <Monitor size={32} color="#3b82f6" />
        </div>
        <span className="anatomy-layer" data-anatomy="Data Renderer" style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem' }}>desktop_mac</span>
      </div>

      {/* Category 3: System */}
      <div className="anatomy-layer" data-anatomy="Interactive Zone" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', transition: 'all 0.3s ease', cursor: 'pointer', minWidth: '180px' }} onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(34, 197, 94, 0.1)'; }} onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.boxShadow = 'none'; }}>
        <div className="anatomy-layer" data-anatomy="Visual Polish" style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(34, 197, 94, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
          <CheckCircle size={32} color="#22c55e" />
        </div>
        <span className="anatomy-layer" data-anatomy="Data Renderer" style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem' }}>check_circle</span>
      </div>
    </div>
  </div>
);

export const InputPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.05), transparent 60%)' }}>
    
    <div style={{ textAlign: 'center', maxWidth: '600px', marginBottom: '16px' }}>
      <h2 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 800, marginBottom: '8px' }}>QInput Component</h2>
      <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Premium input controls supporting floating labels, input validations, custom iconography and interactive states.</p>
    </div>

    <div className="anatomy-layer" data-anatomy="Input Textfield Field Wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', maxWidth: '380px' }}>
      {/* Floating Label Style */}
      <div style={{ position: 'relative', width: '100%' }}>
        <input 
          type="text" 
          id="modern-input-1" 
          placeholder=" " 
          className="anatomy-layer"
          data-anatomy="Value Area"
          style={{ 
            width: '100%', 
            padding: '18px 16px 14px', 
            background: 'rgba(255,255,255,0.03)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: '12px', 
            color: '#fff', 
            fontSize: '1rem', 
            outline: 'none', 
            transition: 'all 0.3s ease', 
            display: 'block' 
          }} 
          onFocus={(e) => { 
            (e.target as HTMLElement).style.borderColor = '#10b981'; 
            (e.target as HTMLElement).style.boxShadow = '0 0 0 3px rgba(16,185,129,0.2)'; 
            ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.color = '#10b981'; 
            ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.top = '0';
            ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.transform = 'translateY(-50%) scale(0.85)'; 
            ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.background = '#111827'; 
            ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.padding = '0 8px';
          }} 
          onBlur={(e) => { 
            (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; 
            (e.target as HTMLElement).style.boxShadow = 'none'; 
            if(!e.target.value) { 
              ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.color = '#94a3b8'; 
              ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.top = '50%';
              ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.transform = 'translateY(-50%) scale(1)'; 
              ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.background = 'transparent'; 
              ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.padding = '0';
            } else { 
              ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.color = '#94a3b8'; 
              ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.top = '0';
              ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.transform = 'translateY(-50%) scale(0.85)'; 
              ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.background = '#111827'; 
              ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.padding = '0 8px';
            } 
          }} 
        />
        <label 
          htmlFor="modern-input-1" 
          className="anatomy-layer"
          data-anatomy="Floating Label"
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '16px', 
            transform: 'translateY(-50%)',
            color: '#94a3b8', 
            fontSize: '1rem', 
            transition: 'all 0.2s ease-out', 
            pointerEvents: 'none', 
            transformOrigin: 'left center' 
          }}
        >
          Email Address
        </label>
      </div>

      {/* Validation Style */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <input 
            type="password" 
            value="secret" 
            readOnly 
            style={{ 
              width: '100%', 
              padding: '14px 44px 14px 16px', 
              background: 'rgba(239, 68, 68, 0.05)', 
              border: '1px solid #ef4444', 
              borderRadius: '12px', 
              color: '#fff', 
              fontSize: '1rem', 
              outline: 'none', 
              letterSpacing: '2px' 
            }} 
          />
          <div className="anatomy-layer" data-anatomy="Clear / Reveal Icon" style={{ position: 'absolute', right: '16px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <AlertTriangle size={18} color="#ef4444" />
          </div>
        </div>
        <span 
          className="anatomy-layer" 
          data-anatomy="Validation Message" 
          style={{ color: '#ef4444', fontSize: '0.85rem', marginLeft: '4px', fontWeight: 500 }}
        >
          Password is too weak.
        </span>
      </div>
    </div>
  </div>
);

export const PaginationPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="QPagination" style={{ display: 'flex', gap: '8px' }}>
      <button style={{ width: '36px', height: '36px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronLeft size={18} /></button>
      <button style={{ width: '36px', height: '36px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: '#fff', fontWeight: 600 }}>1</button>
      <button style={{ width: '36px', height: '36px', borderRadius: '4px', background: '#1976D2', color: '#fff', fontWeight: 600 }}>2</button>
      <button style={{ width: '36px', height: '36px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: '#fff', fontWeight: 600 }}>3</button>
      <button style={{ width: '36px', height: '36px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: '#fff', fontWeight: 600 }}>4</button>
      <button style={{ width: '36px', height: '36px', borderRadius: '4px', background: 'rgba(255,255,255,0.05)', color: '#94a3b8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronRight size={18} /></button>
    </div>
  </div>
);

export const TooltipPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Target Element" style={{ position: 'relative', display: 'inline-block' }}>
      <button style={{ padding: '12px 24px', background: '#3b82f6', color: '#fff', borderRadius: '8px', border: 'none', fontWeight: 600 }}>Hover me</button>
      <div className="anatomy-layer" data-anatomy="QTooltip" style={{ position: 'absolute', bottom: 'calc(100% + 12px)', left: '50%', transform: 'translateX(-50%)', background: 'rgba(97,97,97,0.9)', color: '#fff', padding: '6px 12px', borderRadius: '4px', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
        Here is some helpful information
      </div>
    </div>
  </div>
);

export const RadioPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Radio Buttons" style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'rgba(255,255,255,0.02)', padding: '32px', borderRadius: '12px' }}>
      <label style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#3b82f6' }} />
        </div>
        <span style={{ color: '#fff', fontSize: '1rem' }}>Option A</span>
      </label>
      <label style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)' }} />
        <span style={{ color: '#e2e8f0', fontSize: '1rem' }}>Option B</span>
      </label>
      <label style={{ display: 'flex', gap: '12px', alignItems: 'center', cursor: 'pointer' }}>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid rgba(255,255,255,0.3)' }} />
        <span style={{ color: '#e2e8f0', fontSize: '1rem' }}>Option C</span>
      </label>
    </div>
  </div>
);

export const RangePreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Range Slider" style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', fontWeight: 600 }}>
        <span>Price Range</span>
        <span>$200 - $800</span>
      </div>
      <div style={{ position: 'relative', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px' }}>
        <div style={{ position: 'absolute', top: 0, left: '20%', width: '60%', height: '100%', background: '#8a2be2', borderRadius: '3px' }} />
        <div style={{ position: 'absolute', top: '50%', left: '20%', transform: 'translate(-50%, -50%)', width: '20px', height: '20px', background: '#fff', border: '2px solid #8a2be2', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '80%', transform: 'translate(-50%, -50%)', width: '20px', height: '20px', background: '#fff', border: '2px solid #8a2be2', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }} />
      </div>
    </div>
  </div>
);

export const ResizeObserverPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Resizable Container" style={{ width: '300px', height: '200px', border: '2px dashed #00f0ff', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', resize: 'both', overflow: 'hidden' }}>
      <Maximize2 size={32} color="#00f0ff" style={{ marginBottom: '16px' }} />
      <div style={{ color: '#fff', fontWeight: 600 }}>Width: 300px</div>
      <div style={{ color: '#fff', fontWeight: 600 }}>Height: 200px</div>
      <div style={{ position: 'absolute', bottom: '0', right: '0', width: '20px', height: '20px', background: 'linear-gradient(135deg, transparent 50%, rgba(0,240,255,0.5) 50%)', cursor: 'nwse-resize' }} />
    </div>
  </div>
);

export const ResponsivePreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', gap: '32px', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Desktop View" style={{ width: '200px', height: '150px', border: '4px solid #94a3b8', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px' }}>
      <Monitor size={32} color="#fff" />
      <span style={{ color: '#e2e8f0' }}>lg / xl</span>
    </div>
    <div className="anatomy-layer" data-anatomy="Mobile View" style={{ width: '80px', height: '150px', border: '4px solid #3b82f6', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '8px' }}>
      <Component size={24} color="#3b82f6" />
      <span style={{ color: '#3b82f6', fontSize: '0.8rem' }}>xs</span>
    </div>
  </div>
);

export const ScrollAreaPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Custom Scroll Area" style={{ width: '300px', height: '300px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ padding: '24px', color: '#94a3b8', lineHeight: 1.8 }}>
        <h3 style={{ color: '#fff', marginTop: 0 }}>Scroll Me</h3>
        <p>This is a custom scroll area component. It replaces the native browser scrollbar with a highly customizable, themeable scrollbar.</p>
        <p>You can change its color, width, hover effects, and more.</p>
        <p>Keep scrolling...</p>
        <p>End of content.</p>
      </div>
      <div className="anatomy-layer" data-anatomy="Scroll Thumb" style={{ position: 'absolute', top: '8px', right: '4px', width: '6px', height: '40%', background: 'rgba(59,130,246,0.5)', borderRadius: '3px' }} />
    </div>
  </div>
);

export const ScrollObserverPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Scroll Observer Window" style={{ width: '400px', height: '300px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '16px', background: 'rgba(255,255,255,0.05)', color: '#fff', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between' }}>
        <span>Scroll Position</span>
        <span style={{ color: '#00f0ff', fontWeight: 700 }}>245px</span>
      </div>
      <div style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', overflow: 'hidden' }}>
        <div style={{ width: '100%', height: '80px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }} />
        <div style={{ width: '100%', height: '80px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }} />
        <div style={{ width: '100%', height: '80px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }} />
      </div>
    </div>
  </div>
);
