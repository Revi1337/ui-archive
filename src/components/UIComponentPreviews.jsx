import { useState, useRef } from 'react';
import { 
  Box, Search, Bell, User, X, ArrowRight, Settings2, ShieldCheck, 
  CheckCircle2, AlertCircle, Info, Star, ToggleRight, ChevronDown, 
  Menu, LayoutGrid, Heart, LayoutDashboard, Copy, Sparkles, Image as ImageIcon,
  MoreVertical, Share2, CornerDownRight, HelpCircle,
  LayoutTemplate, Component
} from 'lucide-react';

// ==========================================
// 1. Existing UI Components
// ==========================================

export const GNBPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', gap: '40px', overflowY: 'auto' }}>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>1. Standard Corporate GNB</h3>
      <div className="anatomy-layer" data-anatomy="Standard GNB" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px', background: 'rgba(20,24,32,0.8)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px' }}>
        <div className="anatomy-layer" data-anatomy="Brand Logo" style={{ display: 'flex', gap: '8px', alignItems: 'center', fontWeight: 700, fontSize: '1.2rem', color: '#fff' }}>
          <Box color="#00f0ff" /> UI Archive
        </div>
        <div className="anatomy-layer" data-anatomy="Navigation Menu" style={{ display: 'flex', gap: '32px', color: '#94a3b8', fontWeight: 500 }}>
          <span style={{ color: '#fff' }}>Products</span><span>Solutions</span><span>Resources</span><span>Pricing</span>
        </div>
        <div className="anatomy-layer" data-anatomy="Utilities" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <Search size={18} color="#94a3b8" />
          <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />
          <span style={{ color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem' }}>Log in</span>
          <button style={{ padding: '8px 16px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>Sign Up</button>
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>2. E-Commerce / App Header</h3>
      <div className="anatomy-layer" data-anatomy="E-Commerce GNB" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', background: 'linear-gradient(90deg, #0f1115, #1e1b4b)', border: '1px solid rgba(138,43,226,0.3)', borderRadius: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div className="anatomy-layer" data-anatomy="App Icon" style={{ background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '8px' }}><LayoutGrid size={20} color="#fff" /></div>
          <div className="anatomy-layer" data-anatomy="Search Bar" style={{ display: 'flex', alignItems: 'center', background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '24px', width: '300px' }}>
            <Search size={16} color="#94a3b8" />
            <input type="text" placeholder="Search products..." style={{ background: 'transparent', border: 'none', color: '#fff', outline: 'none', marginLeft: '8px', width: '100%', fontSize: '0.9rem' }} />
          </div>
        </div>
        <div className="anatomy-layer" data-anatomy="User Actions" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <Bell size={20} color="#e2e8f0" />
            <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '8px', height: '8px', background: '#ff007f', borderRadius: '50%' }} />
          </div>
          <Heart size={20} color="#e2e8f0" />
          <div className="anatomy-layer" data-anatomy="User Profile" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '4px 12px 4px 4px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, color: '#fff' }}>JD</div>
            <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 500 }}>Jane Doe</span>
            <ChevronDown size={14} color="#94a3b8" />
          </div>
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>3. Minimalist / Mobile-style</h3>
      <div className="anatomy-layer" data-anatomy="Minimal GNB" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', background: '#1c212b', borderBottom: '2px solid #3b82f6', borderRadius: '16px 16px 0 0' }}>
        <Menu size={24} color="#fff" />
        <div style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '2px', color: '#fff' }}>STUDIO</div>
        <User size={24} color="#fff" />
      </div>
    </div>

  </div>
);

export const OldBannerPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', gap: '32px' }}>
    
    <div className="anatomy-layer" data-anatomy="Gradient Promo Banner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '12px 24px', background: 'linear-gradient(90deg, rgba(59,130,246,0.2), rgba(138,43,226,0.2))', border: '1px solid rgba(138,43,226,0.3)', borderRadius: '12px', position: 'relative' }}>
      <span className="anatomy-layer" data-anatomy="Promo Badge" style={{ background: '#8a2be2', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>NEW</span>
      <span className="anatomy-layer" data-anatomy="Announcement Copy" style={{ fontSize: '0.95rem', color: '#fff' }}>We just released v2.0 of our Design System!</span>
      <span className="anatomy-layer" data-anatomy="Action Link" style={{ fontSize: '0.95rem', fontWeight: 600, color: '#00f0ff', textDecoration: 'underline', cursor: 'pointer' }}>Read more</span>
      <div className="anatomy-layer" data-anatomy="Dismiss Button" style={{ position: 'absolute', right: '16px', cursor: 'pointer' }}>
        <X size={16} color="#94a3b8" />
      </div>
    </div>

    <div className="anatomy-layer" data-anatomy="Warning Alert Banner" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px 24px', background: 'rgba(245,158,11,0.1)', borderLeft: '4px solid #f59e0b', borderRadius: '8px' }}>
      <AlertCircle size={24} color="#f59e0b" style={{ flexShrink: 0 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <h4 style={{ color: '#f59e0b', margin: 0, fontSize: '1rem', fontWeight: 600 }}>Subscription Expiring Soon</h4>
        <p style={{ color: '#e2e8f0', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>Your current plan will expire in 3 days. Please update your payment method to avoid service interruption.</p>
        <div style={{ marginTop: '8px', display: 'flex', gap: '16px' }}>
          <span style={{ color: '#f59e0b', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer' }}>UPDATE BILLING</span>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 500, cursor: 'pointer' }}>DISMISS</span>
        </div>
      </div>
    </div>

    <div className="anatomy-layer" data-anatomy="Success Toast Banner" style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 24px', background: '#14532d', borderRadius: '32px', width: 'max-content', margin: '0 auto', boxShadow: '0 10px 25px rgba(0,0,0,0.3)' }}>
      <CheckCircle2 size={20} color="#4ade80" />
      <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 500 }}>Successfully deployed to production environment.</span>
      <button style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', padding: '4px 12px', borderRadius: '16px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer' }}>Undo</button>
    </div>

  </div>
);

export const FormsPreview = () => (
  <div style={{ padding: '64px 40px', height: '100%', display: 'flex', flexWrap: 'wrap', gap: '64px', justifyContent: 'center', overflowY: 'auto', background: 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.08), transparent 70%)' }}>
    
    {/* Glassmorphic Auth Form (Replaces Left Column) */}
    <div style={{ width: '100%', maxWidth: '440px' }}>
      <form className="anatomy-layer" data-anatomy="Premium Glass Form" style={{ background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(20px)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.05) inset', display: 'flex', flexDirection: 'column', gap: '28px', position: 'relative', overflow: 'hidden' }}>
        
        {/* Glow */}
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '180px', height: '180px', background: 'rgba(99, 102, 241, 0.4)', filter: 'blur(70px)', borderRadius: '50%', zIndex: 0 }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 800, margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>Create Account</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', margin: 0 }}>Join us to unlock premium features.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'relative', zIndex: 1 }}>
          
          <div className="anatomy-layer" data-anatomy="Modern Input" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 500, marginLeft: '4px' }}>Full Name</label>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <User size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px', zIndex: 1 }} />
              <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '14px 16px 14px 44px', background: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'all 0.3s ease', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }} onFocus={(e) => { e.target.style.borderColor = '#6366f1'; e.target.style.boxShadow = '0 0 0 3px rgba(99,102,241,0.2)'; e.target.previousSibling.style.color = '#6366f1'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1)'; e.target.previousSibling.style.color = '#94a3b8'; }} />
            </div>
          </div>
          
          <div className="anatomy-layer" data-anatomy="Floating Label Input" style={{ position: 'relative', marginTop: '12px' }}>
            <input 
              type="email" 
              id="premium-email" 
              placeholder=" " 
              style={{ 
                width: '100%', 
                padding: '18px 16px 14px', 
                background: 'rgba(0,0,0,0.2)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '12px', 
                color: '#fff', 
                fontSize: '1rem', 
                outline: 'none', 
                transition: 'border-color 0.3s, box-shadow 0.3s', 
                display: 'block' 
              }} 
              onFocus={(e) => { 
                e.target.style.borderColor = '#10b981'; 
                e.target.style.boxShadow = '0 0 0 3px rgba(16,185,129,0.2)'; 
                e.target.nextElementSibling.style.color = '#10b981'; 
                e.target.nextElementSibling.style.top = '0';
                e.target.nextElementSibling.style.transform = 'translateY(-50%) scale(0.85)'; 
                e.target.nextElementSibling.style.background = '#0e131f'; 
                e.target.nextElementSibling.style.padding = '0 8px';
              }} 
              onBlur={(e) => { 
                e.target.style.borderColor = 'rgba(255,255,255,0.1)'; 
                e.target.style.boxShadow = 'none'; 
                if(!e.target.value) { 
                  e.target.nextElementSibling.style.color = '#94a3b8'; 
                  e.target.nextElementSibling.style.top = '50%';
                  e.target.nextElementSibling.style.transform = 'translateY(-50%) scale(1)'; 
                  e.target.nextElementSibling.style.background = 'transparent'; 
                  e.target.nextElementSibling.style.padding = '0';
                } else { 
                  e.target.nextElementSibling.style.color = '#94a3b8'; 
                  e.target.nextElementSibling.style.top = '0';
                  e.target.nextElementSibling.style.transform = 'translateY(-50%) scale(0.85)'; 
                  e.target.nextElementSibling.style.background = '#0e131f'; 
                  e.target.nextElementSibling.style.padding = '0 8px';
                } 
              }} 
            />
            <label 
              htmlFor="premium-email" 
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
            <CheckCircle2 size={18} color="#10b981" style={{ position: 'absolute', right: '16px', top: '16px', opacity: 0, transition: 'opacity 0.3s' }} />
          </div>

          <div className="anatomy-layer" data-anatomy="Error Input" style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input type="password" value="secret" readOnly style={{ width: '100%', padding: '14px 44px 14px 16px', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid #ef4444', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', letterSpacing: '2px' }} />
              <AlertCircle size={18} color="#ef4444" style={{ position: 'absolute', right: '16px' }} />
            </div>
            <span style={{ color: '#ef4444', fontSize: '0.85rem', marginLeft: '4px', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}><Info size={14} /> Password is too weak</span>
          </div>

          <div className="anatomy-layer" data-anatomy="Submit Action" style={{ marginTop: '16px' }}>
            <button type="button" style={{ width: '100%', padding: '14px 20px', background: 'linear-gradient(135deg, #6366f1, #ec4899)', color: '#fff', borderRadius: '12px', border: 'none', fontWeight: 700, fontSize: '1.05rem', cursor: 'pointer', transition: 'all 0.2s ease', boxShadow: '0 10px 20px -5px rgba(236,72,153,0.4)' }} onMouseOver={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 15px 25px -5px rgba(236,72,153,0.5)'; }} onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 10px 20px -5px rgba(236,72,153,0.4)'; }}>
              Get Started Free
            </button>
          </div>
        </div>
      </form>
    </div>

    {/* Right Column: Interactive Elements */}
    <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Search Input Glow */}
      <div className="anatomy-layer" data-anatomy="Search Input Glow" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <Search size={20} color="#a855f7" style={{ position: 'absolute', left: '20px', pointerEvents: 'none', zIndex: 1 }} />
        <input type="text" placeholder="Search the galaxy..." style={{ width: '100%', padding: '18px 20px 18px 52px', background: 'rgba(15, 23, 42, 0.8)', border: '1px solid rgba(168, 85, 247, 0.3)', borderRadius: '32px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'all 0.3s ease', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }} onFocus={(e) => { e.target.style.borderColor = '#a855f7'; e.target.style.boxShadow = '0 0 20px rgba(168,85,247,0.4), inset 0 0 10px rgba(168,85,247,0.1)'; e.target.style.background = 'rgba(15, 23, 42, 1)'; }} onBlur={(e) => { e.target.style.borderColor = 'rgba(168, 85, 247, 0.3)'; e.target.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)'; e.target.style.background = 'rgba(15, 23, 42, 0.8)'; }} />
        <div style={{ position: 'absolute', right: '8px', display: 'flex', gap: '4px' }}>
          <kbd style={{ background: 'rgba(255,255,255,0.1)', color: '#94a3b8', padding: '4px 8px', borderRadius: '16px', fontSize: '0.75rem', fontWeight: 600 }}>⌘K</kbd>
        </div>
      </div>

      <div className="anatomy-layer" data-anatomy="Neumorphic Textarea" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 500, marginLeft: '4px' }}>Bio</label>
        <textarea placeholder="Tell us about yourself..." style={{ width: '100%', padding: '16px', background: '#1e2330', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', minHeight: '120px', resize: 'vertical', boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.4), inset -4px -4px 8px rgba(255,255,255,0.02)', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = '#3b82f6'} onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.05)'}></textarea>
        <span style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'right', fontWeight: 500 }}>0 / 500</span>
      </div>

      <div className="anatomy-layer" data-anatomy="Custom Select" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontSize: '0.85rem', color: '#e2e8f0', fontWeight: 500, marginLeft: '4px' }}>Country</label>
        <div style={{ padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'background 0.2s', ':hover': { background: 'rgba(255,255,255,0.05)' } }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}>
          <span style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500 }}>
            <span style={{ fontSize: '1.2rem' }}>🇺🇸</span> United States
          </span>
          <ChevronDown size={18} color="#94a3b8" />
        </div>
      </div>

      <div className="anatomy-layer" data-anatomy="Segmented Control" style={{ display: 'flex', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '6px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <button style={{ flex: 1, padding: '12px', borderRadius: '8px', background: '#3b82f6', color: '#fff', fontWeight: 600, border: 'none', boxShadow: '0 4px 12px rgba(59,130,246,0.3)', cursor: 'pointer' }}>Light</button>
        <button style={{ flex: 1, padding: '12px', borderRadius: '8px', background: 'transparent', color: '#94a3b8', fontWeight: 500, border: 'none', cursor: 'pointer' }}>Dark</button>
        <button style={{ flex: 1, padding: '12px', borderRadius: '8px', background: 'transparent', color: '#94a3b8', fontWeight: 500, border: 'none', cursor: 'pointer' }}>System</button>
      </div>

    </div>
  </div>
);

export const FooterPreview = () => (
  <div style={{ padding: '40px', height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '64px' }}>
    
    {/* Detailed Mega Footer */}
    <div className="anatomy-layer" data-anatomy="Mega Footer" style={{ background: 'rgba(20,24,32,0.9)', padding: '64px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '48px', marginBottom: '32px' }}>
        <div className="anatomy-layer" data-anatomy="Brand & Newsletter" style={{ maxWidth: '300px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontWeight: 800, fontSize: '1.5rem', color: '#fff', marginBottom: '16px' }}>
            <Box color="#8a2be2" /> UI Archive
          </div>
          <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>The ultimate collection of beautiful, reusable UI components and layouts for modern web applications.</p>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input type="email" placeholder="Subscribe to newsletter" style={{ flex: 1, padding: '12px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }} />
            <button style={{ padding: '12px', background: '#3b82f6', color: '#fff', borderRadius: '8px' }}><ArrowRight size={18}/></button>
          </div>
        </div>
        
        <div className="anatomy-layer" data-anatomy="Sitemap Links" style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
          {[['Product', 'Features', 'Integrations', 'Pricing', 'Changelog'], 
            ['Resources', 'Documentation', 'Tutorials', 'Blog', 'Community'], 
            ['Company', 'About Us', 'Careers', 'Contact', 'Partners']].map((col, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h4 style={{ fontWeight: 600, color: '#fff', marginBottom: '8px' }}>{col[0]}</h4>
              {col.slice(1).map(link => (
                <span key={link} style={{ color: '#94a3b8', fontSize: '0.9rem', cursor: 'pointer' }}>{link}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
        <span className="anatomy-layer" data-anatomy="Copyright" style={{ color: '#64748b', fontSize: '0.9rem' }}>© 2026 UI Archive Inc. All rights reserved.</span>
        <div className="anatomy-layer" data-anatomy="Legal Links" style={{ display: 'flex', gap: '24px', color: '#94a3b8', fontSize: '0.9rem' }}>
          <span>Privacy Policy</span><span>Terms of Service</span><span>Cookie Settings</span>
        </div>
        <div className="anatomy-layer" data-anatomy="Social Media Icons" style={{ display: 'flex', gap: '16px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>X</div>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>in</div>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>gh</div>
        </div>
      </div>
    </div>

    {/* Simple Centered Footer */}
    <div className="anatomy-layer" data-anatomy="Simple Centered Footer" style={{ background: 'transparent', padding: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <div style={{ display: 'flex', gap: '32px', color: '#e2e8f0', fontWeight: 500 }}>
        <span>About</span><span>Blog</span><span>Jobs</span><span>Press</span><span>Accessibility</span><span>Partners</span>
      </div>
      <div style={{ display: 'flex', gap: '24px', opacity: 0.6 }}>
        <Box size={24} /> <User size={24} /> <LayoutGrid size={24} /> <Heart size={24} />
      </div>
      <span style={{ color: '#64748b', fontSize: '0.85rem' }}>© 2026 UI Archive, LLC.</span>
    </div>

  </div>
);
// 2. Tier 1 Components (Core)
// ==========================================

export const OldButtonPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '48px', overflowY: 'auto', alignItems: 'center' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>1. Solid & Ghost Variants</h3>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <button className="anatomy-layer" data-anatomy="Primary" style={{ padding: '12px 24px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>Primary Action</button>
        <button className="anatomy-layer" data-anatomy="Secondary" style={{ padding: '12px 24px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>Secondary</button>
        <button className="anatomy-layer" data-anatomy="Ghost" style={{ padding: '12px 24px', background: 'transparent', color: '#3b82f6', borderRadius: '8px', fontWeight: 600 }}>Ghost Button</button>
        <button className="anatomy-layer" data-anatomy="Danger" style={{ padding: '12px 24px', background: '#ef4444', color: '#fff', borderRadius: '8px', fontWeight: 600, boxShadow: '0 4px 12px rgba(239,68,68,0.3)' }}>Delete</button>
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>2. Icons & Split Buttons</h3>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <button className="anatomy-layer" data-anatomy="Icon Left" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#fff', color: '#0f1115', borderRadius: '8px', fontWeight: 600 }}>
          <Settings2 size={18} /> Settings
        </button>
        <button className="anatomy-layer" data-anatomy="Icon Right" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: 'transparent', border: '1px solid #3b82f6', color: '#3b82f6', borderRadius: '8px', fontWeight: 600 }}>
          Next Step <ArrowRight size={18} />
        </button>
        <div className="anatomy-layer" data-anatomy="Split Button" style={{ display: 'flex', borderRadius: '8px', overflow: 'hidden' }}>
          <button style={{ padding: '12px 24px', background: '#8a2be2', color: '#fff', fontWeight: 600, borderRight: '1px solid rgba(0,0,0,0.2)' }}>Publish Now</button>
          <button style={{ padding: '12px 16px', background: '#8a2be2', color: '#fff', display: 'flex', alignItems: 'center' }}><ChevronDown size={18}/></button>
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>3. Advanced States (Glow & Loading)</h3>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
        <button className="anatomy-layer" data-anatomy="Neon Glow" style={{ padding: '14px 28px', background: 'transparent', color: '#00f0ff', borderRadius: '32px', fontWeight: 700, border: '2px solid #00f0ff', boxShadow: '0 0 15px rgba(0,240,255,0.4), inset 0 0 10px rgba(0,240,255,0.2)', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Cyberpunk
        </button>
        <button className="anatomy-layer" data-anatomy="Glassmorphic" style={{ padding: '12px 24px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '16px', fontWeight: 500, backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={16} color="#fbbf24" /> Premium
        </button>
        <button className="anatomy-layer" data-anatomy="Loading State" style={{ padding: '12px 32px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontWeight: 600, opacity: 0.7, cursor: 'wait', display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 1s linear infinite' }} /> Processing...
        </button>
      </div>
    </div>
  </div>
);

export const OldCardPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', gap: '32px', flexWrap: 'wrap', justifyContent: 'center', overflowY: 'auto' }}>
    
    <div className="anatomy-layer" data-anatomy="Product Card" style={{ width: '280px', background: 'rgba(20,24,32,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
      <div style={{ height: '180px', background: 'linear-gradient(45deg, #1e3a8a, #3b82f6)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '12px', right: '12px', width: '32px', height: '32px', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}><Heart size={16} color="#fff" /></div>
        <div style={{ position: 'absolute', bottom: '12px', left: '12px', background: 'rgba(0,0,0,0.6)', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700 }}>NEW ARRIVAL</div>
      </div>
      <div style={{ padding: '24px' }}>
        <div style={{ fontSize: '0.75rem', color: '#3b82f6', fontWeight: 700, marginBottom: '8px', letterSpacing: '1px' }}>AUDIO GEAR</div>
        <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Pro Wireless Headset</h4>
        <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '16px', lineHeight: 1.5 }}>Immersive sound with active noise cancellation and 30-hour battery life.</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>$249<span style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 500 }}>.99</span></span>
          <button style={{ padding: '10px 16px', background: '#fff', color: '#0f1115', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 700 }}>Buy Now</button>
        </div>
      </div>
    </div>

    <div className="anatomy-layer" data-anatomy="Blog Article Card" style={{ width: '340px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', overflow: 'hidden' }}>
      <div style={{ height: '200px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ImageIcon size={48} color="rgba(255,255,255,0.2)" />
      </div>
      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <span style={{ background: 'rgba(138,43,226,0.2)', color: '#c084fc', fontSize: '0.75rem', padding: '4px 8px', borderRadius: '4px', fontWeight: 600 }}>DESIGN</span>
          <span style={{ background: 'rgba(59,130,246,0.2)', color: '#60a5fa', fontSize: '0.75rem', padding: '4px 8px', borderRadius: '4px', fontWeight: 600 }}>TUTORIAL</span>
        </div>
        <h3 style={{ color: '#fff', fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.4 }}>Mastering CSS Grid in 2026</h3>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '24px', lineHeight: 1.6 }}>Learn the advanced techniques for building robust, responsive layouts without media queries.</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#3b82f6' }} />
            <div>
              <div style={{ color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600 }}>Alex Chen</div>
              <div style={{ color: '#64748b', fontSize: '0.75rem' }}>May 24, 2026</div>
            </div>
          </div>
          <Share2 size={18} color="#94a3b8" style={{ cursor: 'pointer' }} />
        </div>
      </div>
    </div>

    <div className="anatomy-layer" data-anatomy="Pricing Tier Card" style={{ width: '280px', background: 'linear-gradient(180deg, rgba(30,27,75,0.8), rgba(15,17,21,0.9))', border: '1px solid #8a2be2', borderRadius: '24px', padding: '32px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: '#8a2be2', color: '#fff', padding: '6px 16px', borderRadius: '16px', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1px' }}>MOST POPULAR</div>
      <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, textAlign: 'center', marginBottom: '8px', marginTop: '16px' }}>Pro Plan</h3>
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', textAlign: 'center', marginBottom: '24px' }}>For growing teams</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', marginBottom: '32px' }}>
        <span style={{ color: '#fff', fontSize: '3rem', fontWeight: 800 }}>$49</span>
        <span style={{ color: '#94a3b8', fontSize: '1rem' }}>/mo</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
        {['Unlimited projects', 'Advanced analytics', '24/7 Priority support', 'Custom domains'].map((feat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <CheckCircle2 size={16} color="#c084fc" />
            <span style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>{feat}</span>
          </div>
        ))}
      </div>
      <button style={{ width: '100%', padding: '14px', background: '#8a2be2', color: '#fff', borderRadius: '12px', fontWeight: 700, fontSize: '1rem', boxShadow: '0 10px 20px rgba(138,43,226,0.3)' }}>Upgrade to Pro</button>
    </div>

  </div>
);

export const OldBadgePreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', overflowY: 'auto' }}>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>1. Status & Solid Badges</h3>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span className="anatomy-layer" data-anatomy="Success Solid" style={{ background: '#22c55e', color: '#fff', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle2 size={14}/> Active</span>
        <span className="anatomy-layer" data-anatomy="Warning Soft" style={{ background: 'rgba(245,158,11,0.15)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.3)', padding: '4px 12px', borderRadius: '16px', fontSize: '0.85rem', fontWeight: 600 }}>Pending Review</span>
        <span className="anatomy-layer" data-anatomy="Error Outline" style={{ background: 'transparent', color: '#ef4444', border: '1px solid #ef4444', padding: '4px 12px', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 600 }}>Failed</span>
        <span className="anatomy-layer" data-anatomy="Neutral" style={{ background: 'rgba(255,255,255,0.1)', color: '#e2e8f0', padding: '4px 12px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 500 }}>Archived</span>
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>2. Tags, Pills & Count Badges</h3>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
        <span className="anatomy-layer" data-anatomy="Filter Tag" style={{ background: 'rgba(59,130,246,0.1)', color: '#60a5fa', border: '1px solid rgba(59,130,246,0.2)', padding: '6px 16px', borderRadius: '24px', fontSize: '0.85rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
          Design <X size={14} style={{ cursor: 'pointer' }}/>
        </span>
        <span className="anatomy-layer" data-anatomy="Version Pill" style={{ background: 'linear-gradient(90deg, #8a2be2, #ff007f)', color: '#fff', padding: '2px 10px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>v2.4.0</span>
        
        <div className="anatomy-layer" data-anatomy="Notification Count" style={{ position: 'relative', display: 'inline-block' }}>
          <Bell size={28} color="#94a3b8" />
          <div style={{ position: 'absolute', top: '-4px', right: '-4px', background: '#ef4444', color: '#fff', fontSize: '0.7rem', fontWeight: 800, width: '18px', height: '18px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #0f1115' }}>3</div>
        </div>
        
        <div className="anatomy-layer" data-anatomy="Avatar Badge" style={{ position: 'relative', display: 'inline-block' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6' }} />
          <div style={{ position: 'absolute', bottom: '0', right: '0', background: '#22c55e', width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #0f1115' }} />
        </div>
      </div>
    </div>

  </div>
);

export const OldAvatarPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '64px', alignItems: 'center', overflowY: 'auto' }}>
    
    <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap', width: '100%', maxWidth: '800px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Basic Avatar Sizes</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
          <div className="anatomy-layer" data-anatomy="XL Avatar" style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'url(https://i.pravatar.cc/150?img=32)', backgroundSize: 'cover' }} />
          <div className="anatomy-layer" data-anatomy="MD Avatar" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'url(https://i.pravatar.cc/150?img=12)', backgroundSize: 'cover' }} />
          <div className="anatomy-layer" data-anatomy="SM Avatar" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'url(https://i.pravatar.cc/150?img=5)', backgroundSize: 'cover' }} />
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Shapes & Initials</h3>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
          <div className="anatomy-layer" data-anatomy="Squircle Avatar" style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.2rem', boxShadow: '0 4px 12px rgba(239,68,68,0.3)' }}>AK</div>
          <div className="anatomy-layer" data-anatomy="Rounded Square" style={{ width: '48px', height: '48px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={24} color="#94a3b8" /></div>
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Avatar Groups & Status</h3>
      <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', alignItems: 'center' }}>
        
        <div className="anatomy-layer" data-anatomy="Avatar Stack" style={{ display: 'flex', alignItems: 'center' }}>
          {[11, 22, 33, 44].map((img, i) => (
            <div key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', background: `url(https://i.pravatar.cc/150?img=${img})`, backgroundSize: 'cover', border: '3px solid #0f1115', marginLeft: i > 0 ? '-12px' : '0', zIndex: 10 - i, boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }} />
          ))}
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1c212b', border: '3px solid #0f1115', marginLeft: '-12px', zIndex: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600 }}>+5</div>
        </div>

        <div className="anatomy-layer" data-anatomy="Profile with Status" style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.03)', padding: '12px 24px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'url(https://i.pravatar.cc/150?img=47)', backgroundSize: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '0px', right: '0px', width: '14px', height: '14px', background: '#22c55e', borderRadius: '50%', border: '2px solid #0f1115' }} />
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>Michael Scott</div>
            <div style={{ color: '#22c55e', fontSize: '0.8rem' }}>Online</div>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export const SearchBarPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', overflowY: 'auto' }}>
    
    <div className="anatomy-layer" data-anatomy="Command Palette Style" style={{ width: '100%', maxWidth: '600px', background: '#1c212b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Search size={20} color="#3b82f6" />
        <input type="text" placeholder="Search components, docs, or commands..." style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', fontSize: '1.1rem', outline: 'none', marginLeft: '12px' }} />
        <div style={{ display: 'flex', gap: '4px' }}>
          <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', color: '#94a3b8' }}>⌘</kbd>
          <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', color: '#94a3b8' }}>K</kbd>
        </div>
      </div>
      <div style={{ padding: '12px 24px' }}>
        <div style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 600 }}>Recent Searches</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', color: '#94a3b8', fontSize: '0.9rem' }}>
          <LayoutGrid size={16} /> Data Table Component
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', color: '#94a3b8', fontSize: '0.9rem' }}>
          <Settings2 size={16} /> Authentication Settings
        </div>
      </div>
    </div>

    <div className="anatomy-layer" data-anatomy="Category Dropdown Search" style={{ width: '100%', maxWidth: '600px', display: 'flex', height: '56px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ padding: '0 16px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '8px', borderRight: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer' }}>
        <span style={{ color: '#e2e8f0', fontSize: '0.9rem', whiteSpace: 'nowrap' }}>All Categories</span>
        <ChevronDown size={14} color="#94a3b8" />
      </div>
      <div style={{ flex: 1, position: 'relative', background: 'rgba(20,24,32,0.8)' }}>
        <input type="text" placeholder="Find anything..." style={{ width: '100%', height: '100%', padding: '0 16px', background: 'transparent', border: 'none', color: '#fff', fontSize: '1rem', outline: 'none' }} />
      </div>
      <button style={{ padding: '0 24px', background: '#3b82f6', color: '#fff', border: 'none', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Search size={20} />
      </button>
    </div>

  </div>
);

export const DataTablePreview = () => (
  <div style={{ padding: '40px', height: '100%', overflowY: 'auto' }}>
    <div className="anatomy-layer" data-anatomy="Complex Data Table" style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', background: 'rgba(20,24,32,0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
      
      {/* Table Toolbar */}
      <div className="anatomy-layer" data-anatomy="Table Toolbar" style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div>
          <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600, margin: 0 }}>Active Users</h3>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '4px 0 0 0' }}>Manage team members and their roles.</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '8px' }}>
            <Search size={16} color="#94a3b8" />
            <span style={{ color: '#94a3b8', fontSize: '0.85rem', marginLeft: '8px' }}>Search...</span>
          </div>
          <button style={{ padding: '8px 16px', background: '#fff', color: '#0f1115', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', gap: '8px', alignItems: 'center' }}>
            + Add User
          </button>
        </div>
      </div>

      {/* Table Header */}
      <div className="anatomy-layer" data-anatomy="Column Headers" style={{ display: 'grid', gridTemplateColumns: '40px 2fr 1fr 1fr 80px', padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.02)' }}>
        <div><div style={{ width: '16px', height: '16px', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '4px' }}/></div>
        {['User Info', 'Role', 'Status', ''].map((h, idx) => (
          <div key={idx} style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', textAlign: h === '' ? 'right' : 'left' }}>{h}</div>
        ))}
      </div>

      {/* Table Rows */}
      {[
        { name: 'Olivia Martin', email: 'olivia@example.com', role: 'Admin', status: 'Active', color: '#22c55e', img: 32 },
        { name: 'Jackson Lee', email: 'jackson@example.com', role: 'Editor', status: 'Away', color: '#f59e0b', img: 12 },
        { name: 'Isabella Nguyen', email: 'isa@example.com', role: 'Viewer', status: 'Offline', color: '#94a3b8', img: 5 }
      ].map((user, i) => (
        <div key={i} className="anatomy-layer" data-anatomy="Data Row" style={{ display: 'grid', gridTemplateColumns: '40px 2fr 1fr 1fr 80px', padding: '16px 24px', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none', alignItems: 'center', background: i === 0 ? 'rgba(59,130,246,0.05)' : 'transparent' }}>
          <div>
            <div style={{ width: '16px', height: '16px', border: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.3)', background: i===0 ? '#3b82f6' : 'transparent', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {i===0 && <CheckCircle2 size={12} color="#fff" />}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={`https://i.pravatar.cc/150?img=${user.img}`} style={{ width: '36px', height: '36px', borderRadius: '50%' }} alt=""/>
            <div>
              <div style={{ fontWeight: 600, color: '#fff', fontSize: '0.9rem' }}>{user.name}</div>
              <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{user.email}</div>
            </div>
          </div>
          <div style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>{user.role}</div>
          <div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '12px', background: `rgba(${user.color === '#22c55e' ? '34,197,94' : user.color === '#f59e0b' ? '245,158,11' : '148,163,184'}, 0.1)`, color: user.color, fontSize: '0.8rem', fontWeight: 600 }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: user.color }}/> {user.status}
            </span>
          </div>
          <div style={{ textAlign: 'right', color: '#94a3b8' }}>
            <MoreVertical size={18} style={{ cursor: 'pointer' }} />
          </div>
        </div>
      ))}

      {/* Pagination Footer */}
      <div className="anatomy-layer" data-anatomy="Table Footer" style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
        <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Showing 1 to 3 of 42 results</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{ padding: '6px 12px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', borderRadius: '6px', fontSize: '0.85rem' }}>Previous</button>
          <button style={{ padding: '6px 12px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0', borderRadius: '6px', fontSize: '0.85rem' }}>Next</button>
        </div>
      </div>

    </div>
  </div>
);

export const AccordionPreview = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  return (
    <div style={{ padding: '64px 40px', height: '100%', display: 'flex', gap: '64px', justifyContent: 'center', flexWrap: 'wrap', overflowY: 'auto' }}>
      
      <div style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ color: '#94a3b8', fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>1. Card Style Accordion</h3>
        {[
          { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and Apple Pay." },
          { q: "Can I cancel my subscription?", a: "Yes, you can cancel your subscription at any time from your account settings." }
        ].map((item, i) => (
          <div key={i} className="anatomy-layer" data-anatomy="Accordion Item" style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', background: 'rgba(20,24,32,0.6)', overflow: 'hidden', boxShadow: openIndex === i ? '0 8px 24px rgba(0,0,0,0.2)' : 'none' }}>
            <div 
              className="anatomy-layer" data-anatomy="Accordion Header" 
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', background: openIndex === i ? 'rgba(59,130,246,0.1)' : 'transparent' }}
            >
              <h4 style={{ fontWeight: openIndex === i ? 700 : 500, color: openIndex === i ? '#3b82f6' : '#fff', fontSize: '1.05rem', margin: 0 }}>{item.q}</h4>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: openIndex === i ? '#3b82f6' : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ChevronDown size={14} color={openIndex === i ? '#fff' : '#94a3b8'} style={{ transform: openIndex === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
              </div>
            </div>
            {openIndex === i && (
              <div className="anatomy-layer" data-anatomy="Accordion Body" style={{ padding: '0 20px 20px 20px', color: '#94a3b8', lineHeight: 1.6, paddingTop: '12px' }}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ color: '#94a3b8', fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '16px' }}>2. Borderless Minimal Style</h3>
        {[
          { q: "How does billing work?", a: "Billing is processed monthly on the date of your initial subscription." },
          { q: "Do you offer a free trial?", a: "Yes, we offer a 14-day free trial with full access to all features." },
          { q: "Is my data secure?", a: "We use bank-level encryption to ensure your data is always safe and secure." }
        ].map((item, i) => (
          <div key={i} className="anatomy-layer" data-anatomy="Ghost Accordion Item" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div 
              onClick={() => {}}
              style={{ padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
            >
              <h4 style={{ fontWeight: 500, color: '#e2e8f0', fontSize: '1.1rem', margin: 0 }}>{item.q}</h4>
              {i === 0 ? <X size={20} color="#fff" style={{ transform: 'rotate(45deg)' }}/> : <div style={{ position: 'relative', width: '20px', height: '20px' }}><div style={{ position: 'absolute', top: '9px', width: '100%', height: '2px', background: '#94a3b8' }}/><div style={{ position: 'absolute', left: '9px', height: '100%', width: '2px', background: '#94a3b8' }}/></div>}
            </div>
            {i === 0 && (
              <div style={{ padding: '0 0 24px 0', color: '#64748b', lineHeight: 1.6 }}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

// ==========================================
// 3. Tier 2 Components (Important)
// ==========================================

export const StarRatingPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '48px', alignItems: 'center', overflowY: 'auto' }}>
    <div className="anatomy-layer" data-anatomy="Detailed Rating Container" style={{ display: 'flex', flexDirection: 'column', gap: '24px', background: 'rgba(20,24,32,0.8)', border: '1px solid rgba(255,255,255,0.08)', padding: '32px', borderRadius: '24px', width: '100%', maxWidth: '600px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>4.8</div>
          <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '4px' }}>Based on 1,248 reviews</div>
        </div>
        <div style={{ display: 'flex', gap: '4px' }}>
          {[1,2,3,4].map(i => <Star key={i} size={32} fill="#f59e0b" color="#f59e0b" />)}
          <div style={{ position: 'relative' }}>
            <Star size={32} color="#f59e0b" />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '80%', overflow: 'hidden' }}>
              <Star size={32} fill="#f59e0b" color="#f59e0b" />
            </div>
          </div>
        </div>
      </div>

      <div className="anatomy-layer" data-anatomy="Rating Breakdown Bars" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {[ {s: 5, p: 85}, {s: 4, p: 10}, {s: 3, p: 3}, {s: 2, p: 1}, {s: 1, p: 1} ].map(row => (
          <div key={row.s} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '20px', color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 600 }}>{row.s}</div>
            <Star size={12} fill="#64748b" color="#64748b" />
            <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${row.p}%`, height: '100%', background: row.s > 3 ? '#22c55e' : row.s === 3 ? '#f59e0b' : '#ef4444', borderRadius: '4px' }} />
            </div>
            <div style={{ width: '30px', color: '#64748b', fontSize: '0.8rem', textAlign: 'right' }}>{row.p}%</div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="anatomy-layer" data-anatomy="Interactive Emoji Rating" style={{ display: 'flex', gap: '16px', background: 'rgba(255,255,255,0.02)', padding: '24px 48px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
      {['😡', '😕', '😐', '😊', '😍'].map((emoji, i) => (
        <div key={i} style={{ fontSize: i === 3 ? '3rem' : '2rem', filter: i === 3 ? 'none' : 'grayscale(1) opacity(0.5)', cursor: 'pointer', transform: i === 3 ? 'scale(1.1)' : 'scale(1)', transition: 'all 0.2s' }}>
          {emoji}
        </div>
      ))}
    </div>
  </div>
);

export const OldTogglePreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '64px', alignItems: 'center', overflowY: 'auto' }}>
    
    <div style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>1. Standard Toggles</h3>
      
      <div className="anatomy-layer" data-anatomy="Toggle (On)" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '16px 24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ color: '#fff', fontWeight: 500 }}>Push Notifications</div>
        <div style={{ width: '50px', height: '28px', background: '#22c55e', borderRadius: '14px', position: 'relative', cursor: 'pointer', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)' }}>
          <div style={{ width: '24px', height: '24px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '2px', right: '2px', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }} />
        </div>
      </div>

      <div className="anatomy-layer" data-anatomy="Toggle (Off)" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '16px 24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ color: '#94a3b8', fontWeight: 500 }}>Location Services</div>
        <div style={{ width: '50px', height: '28px', background: 'rgba(255,255,255,0.1)', borderRadius: '14px', position: 'relative', cursor: 'pointer' }}>
          <div style={{ width: '24px', height: '24px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '2px', left: '2px', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }} />
        </div>
      </div>
    </div>

    <div style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>2. Icon Embedded Toggles</h3>
      
      <div className="anatomy-layer" data-anatomy="Theme Toggle" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(20,24,32,0.8)', padding: '16px 24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ color: '#fff', fontWeight: 500 }}>Dark Mode</div>
        <div style={{ width: '64px', height: '32px', background: '#0f1115', borderRadius: '16px', position: 'relative', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px' }}>
            <span style={{ fontSize: '0.8rem' }}>☀️</span>
            <span style={{ fontSize: '0.8rem' }}>🌙</span>
          </div>
          <div style={{ width: '28px', height: '28px', background: '#3b82f6', borderRadius: '50%', position: 'absolute', top: '1px', right: '1px', boxShadow: '0 2px 4px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.8rem' }}>🌙</span>
          </div>
        </div>
      </div>
    </div>

  </div>
);

export const DividerPreview = () => (
  <div style={{ padding: '64px 40px', height: '100%', display: 'flex', flexDirection: 'column', gap: '64px', maxWidth: '600px', margin: '0 auto', overflowY: 'auto' }}>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>1. Content Separators</h3>
      
      <div className="anatomy-layer" data-anatomy="Gradient Divider" style={{ width: '100%' }}>
        <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #3b82f6, #8a2be2, transparent)' }} />
      </div>

      <div className="anatomy-layer" data-anatomy="Dashed Badge Divider" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ flex: 1, height: '1px', borderTop: '1px dashed rgba(255,255,255,0.3)' }} />
        <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 800, background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '16px', letterSpacing: '1px' }}>END OF SECTION</span>
        <div style={{ flex: 1, height: '1px', borderTop: '1px dashed rgba(255,255,255,0.3)' }} />
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>2. Vertical & Accent Borders</h3>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', height: '60px' }}>
        <span style={{ color: '#e2e8f0' }}>Option A</span>
        <div className="anatomy-layer" data-anatomy="Vertical Divider" style={{ width: '1px', height: '100%', background: 'rgba(255,255,255,0.1)' }} />
        <span style={{ color: '#e2e8f0' }}>Option B</span>
        <div className="anatomy-layer" data-anatomy="Vertical Divider Thick" style={{ width: '4px', height: '100%', background: '#3b82f6', borderRadius: '2px' }} />
        <span style={{ color: '#e2e8f0' }}>Option C</span>
      </div>

      <div className="anatomy-layer" data-anatomy="Left Accent Blockquote" style={{ padding: '16px 24px', borderLeft: '4px solid #8a2be2', background: 'rgba(138,43,226,0.05)', borderRadius: '0 12px 12px 0' }}>
        <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '8px', fontWeight: 600 }}>Note for developers</h3>
        <p style={{ color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>This component is best used when you want to strongly highlight a specific paragraph or warning within a large block of text.</p>
      </div>
    </div>

  </div>
);

export const IconWrapperPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '64px', alignItems: 'center', overflowY: 'auto' }}>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>1. Glassmorphic & Glowing</h3>
      <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        <div className="anatomy-layer" data-anatomy="Neon Glow Wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '20px', background: 'rgba(0,240,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(0,240,255,0.3)', boxShadow: '0 0 20px rgba(0,240,255,0.4), inset 0 0 15px rgba(0,240,255,0.2)' }}>
            <Sparkles size={36} color="#00f0ff" />
          </div>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Neon Glow</span>
        </div>

        <div className="anatomy-layer" data-anatomy="Glass Gradient Wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(138,43,226,0.4), rgba(59,130,246,0.4))', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <ImageIcon size={32} color="#fff" />
          </div>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Glassmorphic</span>
        </div>

      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '800px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>2. Solid & Neumorphic</h3>
      <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        <div className="anatomy-layer" data-anatomy="Solid Squircle" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(59,130,246,0.3)' }}>
            <LayoutDashboard size={32} color="#fff" />
          </div>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Solid Squircle</span>
        </div>

        <div className="anatomy-layer" data-anatomy="Dark Neumorphic" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#1c212b', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '6px 6px 12px rgba(0,0,0,0.5), -6px -6px 12px rgba(255,255,255,0.05)' }}>
            <Settings2 size={32} color="#94a3b8" />
          </div>
          <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Neumorphic</span>
        </div>

      </div>
    </div>

  </div>
);

export const SocialProofPreview = () => (
  <div style={{ padding: '64px 40px', height: '100%', display: 'flex', flexDirection: 'column', gap: '64px', alignItems: 'center', overflowY: 'auto' }}>
    
    <div className="anatomy-layer" data-anatomy="Testimonial Carousel Card" style={{ width: '100%', maxWidth: '600px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: '24px', right: '32px', opacity: 0.1 }}><Box size={64} /></div>
      <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
        {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#f59e0b" color="#f59e0b" />)}
      </div>
      <p style={{ color: '#fff', fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 500, fontStyle: 'italic', marginBottom: '32px' }}>
        "This UI kit has completely transformed how our engineering team builds products. We ship 3x faster and the design consistency is unmatched."
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'url(https://i.pravatar.cc/150?img=68)', backgroundSize: 'cover' }} />
        <div>
          <div style={{ color: '#fff', fontWeight: 700 }}>Sarah Jenkins</div>
          <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>VP of Engineering at TechCorp</div>
        </div>
      </div>
    </div>

    <div className="anatomy-layer" data-anatomy="Logo Marquee Grid" style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
      <p style={{ color: '#64748b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 700 }}>Trusted by 100+ innovative teams worldwide</p>
      <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap', justifyContent: 'center', opacity: 0.6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 800 }}><Box size={32} /> ACME Corp</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 800 }}><LayoutTemplate size={32} /> GlobalNet</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 800 }}><Component size={32} /> NextGen UI</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', fontWeight: 800 }}><Search size={32} /> SearchX</div>
      </div>
    </div>

    <div className="anatomy-layer" data-anatomy="App Store Rating Pill" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))', padding: '16px 32px', borderRadius: '32px', display: 'flex', alignItems: 'center', gap: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>4.9</div>
      <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.1)' }} />
      <div>
        <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
          {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />)}
        </div>
        <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Over 50k+ downloads on the App Store</div>
      </div>
    </div>

  </div>
);

export const OldTooltipPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '100px', alignItems: 'center', justifyContent: 'center', overflowY: 'auto' }}>
    
    <div style={{ display: 'flex', gap: '100px', flexWrap: 'wrap', justifyContent: 'center' }}>
      
      {/* Standard Top Tooltip */}
      <div className="anatomy-layer" data-anatomy="Target Element" style={{ position: 'relative', display: 'inline-block' }}>
        <button style={{ padding: '12px 24px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', cursor: 'help' }}>
          Hover Top
        </button>
        <div className="anatomy-layer" data-anatomy="Standard Tooltip" style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translate(-50%, -12px)', background: '#1c212b', border: '1px solid rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '6px', width: 'max-content', zIndex: 10, boxShadow: '0 10px 25px rgba(0,0,0,0.5)', color: '#fff', fontSize: '0.85rem' }}>
          Save changes
          <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', borderWidth: '6px', borderStyle: 'solid', borderColor: '#1c212b transparent transparent transparent' }} />
        </div>
      </div>

      {/* Rich Right Tooltip */}
      <div className="anatomy-layer" data-anatomy="Target Element" style={{ position: 'relative', display: 'inline-block' }}>
        <div style={{ width: '48px', height: '48px', background: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'help' }}>
          <User size={24} color="#fff" />
        </div>
        <div className="anatomy-layer" data-anatomy="Rich Content Tooltip" style={{ position: 'absolute', top: '50%', left: '100%', transform: 'translate(16px, -50%)', background: '#0f1115', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '12px', width: '220px', zIndex: 10, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'url(https://i.pravatar.cc/150?img=11)', backgroundSize: 'cover' }} />
            <div>
              <div style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 600 }}>Jane Smith</div>
              <div style={{ color: '#22c55e', fontSize: '0.75rem' }}>Active now</div>
            </div>
          </div>
          <div style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.4 }}>Product Manager at TechCorp. Loves design systems.</div>
          <div style={{ position: 'absolute', top: '50%', right: '100%', transform: 'translateY(-50%)', borderWidth: '8px', borderStyle: 'solid', borderColor: 'transparent #0f1115 transparent transparent' }} />
        </div>
      </div>

    </div>

    {/* Shortcut Tooltip Bottom */}
    <div className="anatomy-layer" data-anatomy="Target Element" style={{ position: 'relative', display: 'inline-block' }}>
      <button style={{ padding: '12px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '8px', cursor: 'help' }}>
        <Copy size={20} />
      </button>
      <div className="anatomy-layer" data-anatomy="Shortcut Tooltip" style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translate(-50%, 12px)', background: '#1c212b', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '6px', width: 'max-content', zIndex: 10, display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
        <span style={{ color: '#fff', fontSize: '0.85rem' }}>Copy to clipboard</span>
        <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem', color: '#94a3b8' }}>⌘C</kbd>
        <div style={{ position: 'absolute', bottom: '100%', left: '50%', transform: 'translateX(-50%)', borderWidth: '6px', borderStyle: 'solid', borderColor: 'transparent transparent #1c212b transparent' }} />
      </div>
    </div>

  </div>
);

// ==========================================
// 4. Tier 3 Components (Extended)
// ==========================================

export const ModalPreview = () => (
  <div style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column', gap: '64px', justifyContent: 'center', alignItems: 'center', overflowY: 'auto' }}>
    
    <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '64px', justifyContent: 'center' }}>
      
      {/* Action / Danger Modal */}
      <div className="anatomy-layer" data-anatomy="Danger Dialog" style={{ width: '100%', maxWidth: '400px', background: '#0f1115', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', overflow: 'hidden', position: 'relative' }}>
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(239,68,68,0.1)', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
            <AlertCircle size={32} />
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', margin: '0 0 12px 0' }}>Delete Repository?</h3>
          <p className="anatomy-layer" data-anatomy="Modal Text" style={{ color: '#94a3b8', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
            This action cannot be undone. This will permanently delete the <strong>ui-archive</strong> repository and all of its data.
          </p>
        </div>
        <div className="anatomy-layer" data-anatomy="Modal Footer" style={{ padding: '16px 24px 24px', display: 'flex', gap: '12px' }}>
          <button style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0', borderRadius: '8px', fontWeight: 600 }}>Cancel</button>
          <button style={{ flex: 1, padding: '12px', background: '#ef4444', color: '#fff', borderRadius: '8px', fontWeight: 600, border: 'none' }}>I understand, delete</button>
        </div>
      </div>

      {/* Promotional / Image Modal */}
      <div className="anatomy-layer" data-anatomy="Promo Modal" style={{ width: '100%', maxWidth: '440px', background: '#1c212b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '16px', right: '16px', width: '32px', height: '32px', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)' }}>
          <X size={16} color="#fff" />
        </div>
        <div className="anatomy-layer" data-anatomy="Modal Hero Image" style={{ height: '200px', background: 'linear-gradient(135deg, #8a2be2, #00f0ff)', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Sparkles size={64} color="rgba(255,255,255,0.8)" />
        </div>
        <div style={{ padding: '32px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', margin: '0 0 16px 0' }}>Unlock Premium Features</h3>
          <p style={{ color: '#94a3b8', lineHeight: 1.6, margin: '0 0 24px 0' }}>
            Get access to 200+ exclusive components, priority support, and unlimited project exports.
          </p>
          <button style={{ width: '100%', padding: '14px', background: '#3b82f6', color: '#fff', borderRadius: '12px', fontWeight: 700, fontSize: '1rem', border: 'none', boxShadow: '0 10px 20px rgba(59,130,246,0.3)' }}>Upgrade Now for $9/mo</button>
          <div style={{ marginTop: '16px', color: '#64748b', fontSize: '0.85rem', cursor: 'pointer', textDecoration: 'underline' }}>No thanks, maybe later</div>
        </div>
      </div>

    </div>
  </div>
);

export const DropdownPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', gap: '64px', flexWrap: 'wrap', justifyContent: 'center', overflowY: 'auto' }}>
    
    <div style={{ width: '100%', maxWidth: '300px' }}>
      <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem', fontWeight: 500 }}>1. Standard Select</label>
      <div className="anatomy-layer" data-anatomy="Trigger" style={{ padding: '14px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', cursor: 'pointer' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }} /> Admin
        </div>
        <ChevronDown size={16} color="#64748b" />
      </div>
      <div className="anatomy-layer" data-anatomy="Menu Box" style={{ marginTop: '8px', background: '#0f1115', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
        <div className="anatomy-layer" data-anatomy="Active Item" style={{ padding: '10px 12px', background: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '4px', fontSize: '0.9rem', fontWeight: 500, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }} /> Admin</div>
          <CheckCircle2 size={16} />
        </div>
        <div className="anatomy-layer" data-anatomy="Item" style={{ padding: '10px 12px', color: '#e2e8f0', borderRadius: '4px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} /> Editor</div>
        <div className="anatomy-layer" data-anatomy="Item" style={{ padding: '10px 12px', color: '#e2e8f0', borderRadius: '4px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}><div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#94a3b8' }} /> Viewer</div>
      </div>
    </div>

    <div style={{ width: '100%', maxWidth: '300px' }}>
      <label style={{ display: 'block', marginBottom: '8px', color: '#94a3b8', fontSize: '0.9rem', fontWeight: 500 }}>2. Profile Dropdown</label>
      <div className="anatomy-layer" data-anatomy="Profile Trigger" style={{ padding: '8px 16px 8px 8px', background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '32px', display: 'inline-flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', cursor: 'pointer', gap: '12px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'url(https://i.pravatar.cc/150?img=47)', backgroundSize: 'cover' }} />
        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Michael S.</span>
        <ChevronDown size={16} color="#64748b" />
      </div>
      <div className="anatomy-layer" data-anatomy="Rich Menu" style={{ marginTop: '8px', background: '#1c212b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
        <div style={{ padding: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '8px' }}>
          <div style={{ color: '#fff', fontWeight: 600 }}>michael@dundermifflin.com</div>
          <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>Regional Manager</div>
        </div>
        <div style={{ padding: '8px 12px', color: '#e2e8f0', borderRadius: '6px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '12px' }}><User size={16} color="#94a3b8"/> Profile</div>
        <div style={{ padding: '8px 12px', color: '#e2e8f0', borderRadius: '6px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '12px' }}><Settings2 size={16} color="#94a3b8"/> Settings</div>
        <div style={{ padding: '8px 12px', color: '#e2e8f0', borderRadius: '6px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '12px' }}><ShieldCheck size={16} color="#94a3b8"/> Security</div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', margin: '8px 0', paddingTop: '8px' }}>
          <div style={{ padding: '8px 12px', color: '#ef4444', borderRadius: '6px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '12px' }}><CornerDownRight size={16} color="#ef4444"/> Sign out</div>
        </div>
      </div>
    </div>

  </div>
);

export const OldTabsPreview = () => (
  <div style={{ padding: '64px 40px', height: '100%', display: 'flex', flexDirection: 'column', gap: '64px', justifyContent: 'center', alignItems: 'center', overflowY: 'auto' }}>
    
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <h3 style={{ color: '#94a3b8', fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '24px' }}>1. Classic Underline Tabs</h3>
      <div className="anatomy-layer" data-anatomy="Underline Tab List" style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <button className="anatomy-layer" data-anatomy="Active Tab" style={{ padding: '12px 24px', background: 'transparent', color: '#3b82f6', borderBottom: '2px solid #3b82f6', fontWeight: 600, fontSize: '1rem' }}>Account</button>
        <button className="anatomy-layer" data-anatomy="Inactive Tab" style={{ padding: '12px 24px', background: 'transparent', color: '#94a3b8', borderBottom: '2px solid transparent', fontWeight: 500, fontSize: '1rem' }}>Password</button>
        <button className="anatomy-layer" data-anatomy="Inactive Tab" style={{ padding: '12px 24px', background: 'transparent', color: '#94a3b8', borderBottom: '2px solid transparent', fontWeight: 500, fontSize: '1rem' }}>Notifications</button>
      </div>
      <div className="anatomy-layer" data-anatomy="Tab Panel" style={{ padding: '32px 0', color: '#e2e8f0', lineHeight: 1.6 }}>
        <h4 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Account Settings</h4>
        <p style={{ color: '#94a3b8' }}>Update your personal information and profile picture here.</p>
      </div>
    </div>

    <div style={{ width: '100%', maxWidth: '600px' }}>
      <h3 style={{ color: '#94a3b8', fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '24px' }}>2. Solid Pill Tabs</h3>
      <div className="anatomy-layer" data-anatomy="Pill Tab List" style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '6px', width: 'max-content' }}>
        <button className="anatomy-layer" data-anatomy="Active Pill" style={{ padding: '10px 24px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem', boxShadow: '0 4px 12px rgba(59,130,246,0.3)' }}>Overview</button>
        <button className="anatomy-layer" data-anatomy="Inactive Pill" style={{ padding: '10px 24px', background: 'transparent', color: '#94a3b8', borderRadius: '8px', fontWeight: 500, fontSize: '0.95rem' }}>Analytics</button>
        <button className="anatomy-layer" data-anatomy="Inactive Pill" style={{ padding: '10px 24px', background: 'transparent', color: '#94a3b8', borderRadius: '8px', fontWeight: 500, fontSize: '0.95rem' }}>Reports</button>
      </div>
    </div>

    <div style={{ width: '100%', maxWidth: '600px' }}>
      <h3 style={{ color: '#94a3b8', fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '24px' }}>3. Vertical Sidebar Tabs</h3>
      <div style={{ display: 'flex', gap: '32px', background: 'rgba(20,24,32,0.8)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="anatomy-layer" data-anatomy="Vertical Tab List" style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '150px' }}>
          <button className="anatomy-layer" data-anatomy="Active Vertical Tab" style={{ padding: '12px 16px', background: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '8px', fontWeight: 600, fontSize: '0.9rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px' }}><User size={16} /> Profile</button>
          <button className="anatomy-layer" data-anatomy="Inactive Vertical Tab" style={{ padding: '12px 16px', background: 'transparent', color: '#94a3b8', borderRadius: '8px', fontWeight: 500, fontSize: '0.9rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px' }}><Settings2 size={16} /> Preferences</button>
          <button className="anatomy-layer" data-anatomy="Inactive Vertical Tab" style={{ padding: '12px 16px', background: 'transparent', color: '#94a3b8', borderRadius: '8px', fontWeight: 500, fontSize: '0.9rem', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '12px' }}><ShieldCheck size={16} /> Security</button>
        </div>
        <div style={{ flex: 1, borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '32px' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '16px', color: '#fff' }}>Profile Configuration</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Manage your public profile details and visibility settings from this panel.</p>
        </div>
      </div>
    </div>

  </div>
);

export const CheckboxRadioPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '64px', alignItems: 'center', overflowY: 'auto' }}>
    
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '64px', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '300px' }}>
        <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '24px' }}>Standard Checkboxes</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <label className="anatomy-layer" data-anatomy="Checkbox (Checked)" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <div style={{ width: '22px', height: '22px', background: '#3b82f6', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(59,130,246,0.3)' }}><CheckCircle2 size={16} color="#fff" /></div>
            <span style={{ color: '#fff', fontSize: '0.95rem' }}>Subscribe to newsletter</span>
          </label>
          <label className="anatomy-layer" data-anatomy="Checkbox (Unchecked)" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <div style={{ width: '22px', height: '22px', background: 'transparent', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '6px' }} />
            <span style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Accept terms and conditions</span>
          </label>
          <label className="anatomy-layer" data-anatomy="Checkbox (Disabled)" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'not-allowed', opacity: 0.5 }}>
            <div style={{ width: '22px', height: '22px', background: 'rgba(255,255,255,0.1)', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '6px' }} />
            <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>Legacy option (disabled)</span>
          </label>
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: '300px' }}>
        <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '24px' }}>Standard Radio Buttons</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <label className="anatomy-layer" data-anatomy="Radio (Selected)" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <div style={{ width: '22px', height: '22px', background: 'transparent', border: '2px solid #3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '10px', height: '10px', background: '#3b82f6', borderRadius: '50%' }} />
            </div>
            <span style={{ color: '#fff', fontSize: '0.95rem' }}>Standard Shipping</span>
          </label>
          <label className="anatomy-layer" data-anatomy="Radio (Unselected)" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <div style={{ width: '22px', height: '22px', background: 'transparent', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '50%' }} />
            <span style={{ color: '#e2e8f0', fontSize: '0.95rem' }}>Express Shipping</span>
          </label>
        </div>
      </div>
    </div>

    <div style={{ width: '100%', maxWidth: '600px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '24px' }}>Radio Card Selectors (Rich UI)</h3>
      <div style={{ display: 'flex', gap: '16px' }}>
        <div className="anatomy-layer" data-anatomy="Radio Card (Active)" style={{ flex: 1, padding: '20px', background: 'rgba(59,130,246,0.1)', border: '2px solid #3b82f6', borderRadius: '12px', cursor: 'pointer', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '20px', right: '20px', width: '20px', height: '20px', border: '2px solid #3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: '10px', height: '10px', background: '#3b82f6', borderRadius: '50%' }} />
          </div>
          <h4 style={{ color: '#fff', margin: '0 0 8px 0', fontSize: '1.1rem' }}>Monthly Plan</h4>
          <div style={{ color: '#3b82f6', fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>$12<span style={{ fontSize: '0.85rem', fontWeight: 500 }}>/mo</span></div>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.85rem', lineHeight: 1.5 }}>Pay as you go, cancel anytime.</p>
        </div>
        <div className="anatomy-layer" data-anatomy="Radio Card (Inactive)" style={{ flex: 1, padding: '20px', background: 'transparent', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '12px', cursor: 'pointer', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '20px', right: '20px', width: '20px', height: '20px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '50%' }} />
          <h4 style={{ color: '#fff', margin: '0 0 8px 0', fontSize: '1.1rem' }}>Annual Plan</h4>
          <div style={{ color: '#e2e8f0', fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px' }}>$99<span style={{ fontSize: '0.85rem', fontWeight: 500 }}>/yr</span></div>
          <p style={{ color: '#94a3b8', margin: 0, fontSize: '0.85rem', lineHeight: 1.5 }}>Save $45 compared to monthly.</p>
        </div>
      </div>
    </div>

  </div>
);

export const BreadcrumbPreview = () => (
  <div style={{ padding: '64px 40px', height: '100%', display: 'flex', flexDirection: 'column', gap: '64px', justifyContent: 'center', alignItems: 'center', overflowY: 'auto' }}>
    
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '24px' }}>1. Slash Separator</h3>
      <nav className="anatomy-layer" data-anatomy="Standard Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500 }}>
        <span className="anatomy-layer" data-anatomy="Link" style={{ cursor: 'pointer', color: '#3b82f6' }}>Home</span>
        <span style={{ color: '#475569' }}>/</span>
        <span className="anatomy-layer" data-anatomy="Link" style={{ cursor: 'pointer', color: '#3b82f6' }}>Dashboard</span>
        <span style={{ color: '#475569' }}>/</span>
        <span className="anatomy-layer" data-anatomy="Current Page" style={{ color: '#fff', fontWeight: 600 }}>Settings</span>
      </nav>
    </div>

    <div style={{ width: '100%', maxWidth: '600px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '24px' }}>2. Chevron Separator & Icons</h3>
      <nav className="anatomy-layer" data-anatomy="Icon Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500, background: 'rgba(255,255,255,0.02)', padding: '12px 24px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', width: 'max-content' }}>
        <span className="anatomy-layer" data-anatomy="Link" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}><LayoutGrid size={16}/> Products</span>
        <ChevronDown size={14} color="#64748b" style={{ transform: 'rotate(-90deg)' }} />
        <span className="anatomy-layer" data-anatomy="Collapsed Link" style={{ cursor: 'pointer', background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>...</span>
        <ChevronDown size={14} color="#64748b" style={{ transform: 'rotate(-90deg)' }} />
        <span className="anatomy-layer" data-anatomy="Current Page" style={{ color: '#fff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}><Search size={16}/> Wireless Headphones</span>
      </nav>
    </div>

  </div>
);

export const OldPaginationPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '64px', justifyContent: 'center', alignItems: 'center', overflowY: 'auto' }}>
    
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '24px' }}>1. Numbered Box Pagination</h3>
      <div className="anatomy-layer" data-anatomy="Box Pagination" style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', width: 'max-content' }}>
        <button className="anatomy-layer" data-anatomy="Prev" style={{ padding: '0 16px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', fontWeight: 500 }}>Previous</button>
        <button className="anatomy-layer" data-anatomy="Page Item" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>1</button>
        <button className="anatomy-layer" data-anatomy="Active Item" style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#3b82f6', color: '#fff', border: '1px solid #3b82f6', fontWeight: 600, boxShadow: '0 4px 12px rgba(59,130,246,0.3)' }}>2</button>
        <button className="anatomy-layer" data-anatomy="Page Item" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>3</button>
        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', color: '#64748b' }}>...</span>
        <button className="anatomy-layer" data-anatomy="Page Item" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: '#fff', border: '1px solid rgba(255,255,255,0.1)' }}>10</button>
        <button className="anatomy-layer" data-anatomy="Next" style={{ padding: '0 16px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', fontWeight: 500 }}>Next</button>
      </div>
    </div>

    <div style={{ width: '100%', maxWidth: '600px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '24px' }}>2. Minimal Circle Pagination</h3>
      <div className="anatomy-layer" data-anatomy="Circle Pagination" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <button style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronDown size={16} style={{ transform: 'rotate(90deg)' }}/></button>
        <div style={{ display: 'flex', gap: '8px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 10px rgba(255,255,255,0.5)' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
        </div>
        <button style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronDown size={16} style={{ transform: 'rotate(-90deg)' }}/></button>
      </div>
    </div>

  </div>
);

export const ProgressBarPreview = () => (
  <div style={{ padding: '64px 40px', height: '100%', display: 'flex', flexDirection: 'column', gap: '64px', alignItems: 'center', overflowY: 'auto' }}>
    
    <div style={{ width: '100%', maxWidth: '500px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '24px' }}>1. Linear Progress Tracks</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div className="anatomy-layer" data-anatomy="Standard Progress" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 500 }}>Uploading assets...</span>
            <span style={{ color: '#3b82f6', fontSize: '0.9rem', fontWeight: 700 }}>65%</span>
          </div>
          <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
            <div style={{ width: '65%', height: '100%', background: 'linear-gradient(90deg, #1e3a8a, #3b82f6)', borderRadius: '4px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)', backgroundSize: '1rem 1rem' }} />
            </div>
          </div>
        </div>

        <div className="anatomy-layer" data-anatomy="Thick Multi-color Progress" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 500 }}>Storage Space</span>
            <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>820 GB / 1 TB</span>
          </div>
          <div style={{ height: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden', display: 'flex', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ width: '50%', height: '100%', background: '#3b82f6' }} />
            <div style={{ width: '20%', height: '100%', background: '#8a2be2' }} />
            <div style={{ width: '12%', height: '100%', background: '#f59e0b' }} />
          </div>
          <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#94a3b8' }}><div style={{ width:'8px',height:'8px',borderRadius:'50%',background:'#3b82f6' }}/> Apps</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#94a3b8' }}><div style={{ width:'8px',height:'8px',borderRadius:'50%',background:'#8a2be2' }}/> Media</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#94a3b8' }}><div style={{ width:'8px',height:'8px',borderRadius:'50%',background:'#f59e0b' }}/> System</div>
          </div>
        </div>
      </div>
    </div>

    <div style={{ width: '100%', maxWidth: '600px' }}>
      <h3 style={{ fontSize: '1rem', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px', marginBottom: '24px' }}>2. Stepper Progress</h3>
      <div className="anatomy-layer" data-anatomy="Stepper Tracker" style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '24px', left: '0', right: '0', height: '4px', background: 'rgba(255,255,255,0.1)', zIndex: 0, borderRadius: '2px' }} />
        <div style={{ position: 'absolute', top: '24px', left: '0', width: '50%', height: '4px', background: '#22c55e', zIndex: 0, borderRadius: '2px' }} />
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 1 }}>
          <div className="anatomy-layer" data-anatomy="Completed Step" style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#1c212b', color: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '4px solid #22c55e', boxShadow: '0 0 15px rgba(34,197,94,0.3)' }}><CheckCircle2 size={24} /></div>
          <span style={{ color: '#22c55e', fontSize: '0.9rem', fontWeight: 600 }}>Cart</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 1 }}>
          <div className="anatomy-layer" data-anatomy="Active Step" style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#3b82f6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.2rem', border: '4px solid #1c212b', boxShadow: '0 0 0 4px #3b82f6' }}>2</div>
          <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 700 }}>Payment</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', position: 'relative', zIndex: 1 }}>
          <div className="anatomy-layer" data-anatomy="Pending Step" style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#1c212b', border: '4px solid rgba(255,255,255,0.2)', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1.2rem' }}>3</div>
          <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Review</span>
        </div>
      </div>
    </div>

  </div>
);

export const ToastPreview = () => (
  <div style={{ padding: '64px', height: '100%', display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center', justifyContent: 'flex-start', overflowY: 'auto' }}>
    
    <div className="anatomy-layer" data-anatomy="Success Toast" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', background: 'rgba(20,24,32,0.95)', border: '1px solid rgba(34,197,94,0.3)', borderLeft: '4px solid #22c55e', padding: '16px 24px', borderRadius: '8px', width: '100%', maxWidth: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <CheckCircle2 size={24} color="#22c55e" style={{ marginTop: '2px' }} />
        <div>
          <h4 style={{ color: '#fff', fontSize: '1rem', fontWeight: 600, margin: 0 }}>Deployment Successful</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: '4px 0 0 0', lineHeight: 1.5 }}>Your site is now live at <strong>vibe-ui.app</strong>. It took 32s to build.</p>
        </div>
      </div>
      <X size={18} color="#64748b" style={{ cursor: 'pointer', flexShrink: 0 }} />
    </div>

    <div className="anatomy-layer" data-anatomy="Actionable Toast" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', background: '#1c212b', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', borderRadius: '12px', width: '100%', maxWidth: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'url(https://i.pravatar.cc/150?img=11)', backgroundSize: 'cover' }} />
        <div>
          <span style={{ color: '#fff', fontSize: '0.9rem', fontWeight: 500 }}>Jane Smith</span>
          <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}> sent you a message.</span>
        </div>
      </div>
      <button style={{ padding: '6px 12px', background: 'rgba(59,130,246,0.1)', color: '#3b82f6', border: 'none', borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}>Reply</button>
    </div>

    <div className="anatomy-layer" data-anatomy="Error Stacked Toast" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', padding: '16px 24px', borderRadius: '12px', width: '100%', maxWidth: '400px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', position: 'relative' }}>
      <div style={{ position: 'absolute', bottom: '-8px', left: '16px', right: '16px', height: '8px', background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.1)', borderTop: 'none', borderRadius: '0 0 12px 12px', zIndex: -1 }} />
      <div style={{ position: 'absolute', bottom: '-16px', left: '32px', right: '32px', height: '8px', background: 'rgba(239,68,68,0.02)', border: '1px solid rgba(239,68,68,0.05)', borderTop: 'none', borderRadius: '0 0 12px 12px', zIndex: -2 }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <AlertCircle size={20} color="#ef4444" />
        <span style={{ color: '#fff', fontSize: '0.95rem', fontWeight: 500 }}>Database connection failed</span>
      </div>
      <span style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', textDecoration: 'underline' }}>View Logs</span>
    </div>

  </div>
);


export const PageStickyPreview = () => (
  <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
    <div className="anatomy-layer" data-anatomy="Page Sticky Container" style={{ width: '100%', maxWidth: '600px', height: '500px', background: 'rgba(20,24,32,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflowY: 'auto', position: 'relative', padding: '24px' }}>
      
      {/* Sticky Element (Top Right) */}
      <div className="anatomy-layer" data-anatomy="Positioning Wrapper" style={{ position: 'sticky', top: '0px', display: 'flex', justifyContent: 'flex-end', zIndex: 10 }}>
        <div className="anatomy-layer" data-anatomy="Offset Margin" style={{ padding: '8px' }}>
          <button className="anatomy-layer" data-anatomy="Z-Index Context" style={{ background: 'rgba(138,43,226,0.9)', backdropFilter: 'blur(8px)', border: '1px solid #8a2be2', color: '#fff', padding: '12px 24px', borderRadius: '32px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 24px rgba(138,43,226,0.4)', fontWeight: 600 }}>
            <Sparkles size={18} /> Sticky Action
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '24px' }}>Scroll down to see sticky behavior</h3>
        {[...Array(10)].map((_, i) => (
          <div key={i} style={{ padding: '32px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
            <div style={{ width: '40%', height: '16px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '16px' }} />
            <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '8px' }} />
            <div style={{ width: '80%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
          </div>
        ))}
      </div>
      
    </div>
  </div>
);

export const PageScrollerPreview = () => {
  const scrollRef = useRef(null);
  const [showScroller, setShowScroller] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowScroller(scrollRef.current.scrollTop > 150);
    }
  };

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '40px' }}>
      <div 
        className="anatomy-layer" 
        data-anatomy="Page Scroller Container"
        ref={scrollRef}
        onScroll={handleScroll}
        style={{ width: '100%', maxWidth: '600px', height: '500px', background: 'rgba(20,24,32,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', overflowY: 'auto', position: 'relative', padding: '24px' }}
      >
        
        {/* Scrollable Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ color: '#94a3b8', textAlign: 'center', marginBottom: '24px' }}>Scroll down to reveal the "To Top" button</h3>
          {[...Array(12)].map((_, i) => (
            <div key={i} style={{ padding: '32px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
              <div style={{ width: '60%', height: '16px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '16px' }} />
              <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', marginBottom: '8px' }} />
              <div style={{ width: '90%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
            </div>
          ))}
        </div>

        {/* Page Scroller Element (Bottom Right) */}
        <div className="anatomy-layer" data-anatomy="Scroll Listener" style={{ position: 'sticky', bottom: '16px', display: 'flex', justifyContent: 'flex-end', zIndex: 10, pointerEvents: 'none' }}>
          <div 
            className="anatomy-layer" 
            data-anatomy="Fade Transition" 
            style={{ 
              opacity: showScroller ? 1 : 0, 
              transform: `translateY(${showScroller ? 0 : 20}px)`,
              transition: 'all 0.3s ease',
              padding: '8px',
              pointerEvents: showScroller ? 'auto' : 'none'
            }}
          >
            <button 
              className="anatomy-layer" 
              data-anatomy="Scroll Action" 
              onClick={scrollToTop}
              style={{ width: '48px', height: '48px', background: '#3b82f6', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(0,0,0,0.3)', border: '1px solid #60a5fa' }}
            >
              <ArrowRight size={24} style={{ transform: 'rotate(-90deg)' }} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
