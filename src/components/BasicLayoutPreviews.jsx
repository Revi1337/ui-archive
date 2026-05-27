import { useState, useRef } from 'react';
import {
  Box, LayoutTemplate, Image as ImageIcon, AlignLeft,
  Columns, LayoutGrid, Maximize, PlayCircle, Menu, User,
  Search, ArrowRight, Layers, Settings2, Bell, ShoppingCart,
  Star, Heart, Share2, ShieldCheck, Zap, ChevronRight, Activity,
  Home, Compass, MessageCircle, FileText, ChevronDown, BookOpen, 
  List, Bookmark, CheckCircle, ArrowLeft, MoreHorizontal, Hash
} from 'lucide-react';

export const MockupBrowser = ({ children }) => (
  <div style={{ width: '100%', height: '100%', minHeight: '800px', display: 'flex', flexDirection: 'column', background: 'rgba(15, 17, 21, 0.9)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 32px 64px rgba(0,0,0,0.5)' }}>
    <div style={{ height: '40px', background: 'rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '8px', zIndex: 50 }}>
      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
      <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
      <div style={{ flex: 1, margin: '0 24px', height: '24px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: '#94a3b8' }}>
        ui-archive.dev
      </div>
    </div>
    <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  </div>
);

export const BasicLayoutPreview = () => (
  <MockupBrowser>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', background: 'rgba(15,17,21,0.95)', overflowY: 'auto' }}>
      {/* Header */}
      <div className="anatomy-layer" data-anatomy="Header / Topbar" style={{ flexShrink: 0, position: 'sticky', top: 0, zIndex: 10, height: '64px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', background: 'rgba(15,17,21,0.8)', backdropFilter: 'blur(12px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Box color="#3b82f6" size={24} />
          <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>Brand</span>
        </div>
        <div style={{ display: 'flex', gap: '24px', color: '#94a3b8', fontSize: '0.9rem', fontWeight: 500 }}>
          <span>Home</span><span>About</span><span>Services</span><span>Contact</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Search size={18} color="#94a3b8" />
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#3b82f6' }} />
        </div>
      </div>

      {/* Body Area */}
      <div style={{ display: 'flex', flex: '1 0 auto', minHeight: '800px' }}>

        {/* Nav */}
        <div className="anatomy-layer" data-anatomy="Navigation Bar" style={{ width: '220px', borderRight: '1px solid rgba(255,255,255,0.1)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: 'rgba(255,255,255,0.01)' }}>
          <div style={{ position: 'sticky', top: '88px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} style={{ height: '24px', background: i === 1 ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.05)', borderRadius: '4px', width: i === 1 ? '100%' : '80%' }} />
            ))}
          </div>
        </div>

        {/* Main */}
        <div className="anatomy-layer" data-anatomy="Main Section" style={{ flex: 1, padding: '48px', display: 'flex', gap: '48px', alignItems: 'flex-start' }}>

          {/* Article inside Main */}
          <div className="anatomy-layer" data-anatomy="Article" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', background: 'rgba(255,255,255,0.02)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ height: '40px', width: '80%', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }} />
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
              <div style={{ height: '12px', width: '100px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
            </div>
            <div style={{ height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }} />
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                <div style={{ height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '100%' }} />
                <div style={{ height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '90%' }} />
                <div style={{ height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '95%' }} />
              </div>
            ))}
          </div>

          {/* Aside inside Main */}
          <div className="anatomy-layer" data-anatomy="Aside (Right Sidebar)" style={{ width: '280px', display: 'flex', flexDirection: 'column', gap: '24px', position: 'sticky', top: '88px' }}>
            <div style={{ height: '240px', background: 'rgba(59,130,246,0.1)', borderRadius: '16px', border: '1px solid rgba(59,130,246,0.2)' }} />
            <div style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ height: '20px', width: '60%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '24px' }} />
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }} />
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', justifyContent: 'center' }}>
                    <div style={{ height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', width: '80%' }} />
                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', width: '50%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="anatomy-layer" data-anatomy="Footer" style={{ flexShrink: 0, height: '120px', borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(10,12,16,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontSize: '0.85rem' }}>
        © 2026 Brand Inc. All rights reserved.
      </div>
    </div>
  </MockupBrowser>
);

export const TwoColumnPreview = () => (
  <MockupBrowser>
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      <div className="anatomy-layer" data-anatomy="Left Sidebar" style={{ width: '260px', background: 'rgba(20,24,32,0.8)', borderRight: '1px solid rgba(255,255,255,0.08)', padding: '32px 24px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '40px' }}>
          <Box color="#3b82f6" size={28} />
          <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>NexusAdmin</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ padding: '12px', background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '8px', color: '#fff', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500 }}><LayoutGrid size={18} /> Dashboard</div>
          <div style={{ padding: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500 }}><Activity size={18} /> Analytics</div>
          <div style={{ padding: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500 }}><User size={18} /> Customers</div>
          <div style={{ padding: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500 }}><Settings2 size={18} /> Settings</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>JD</div>
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>John Doe</div>
            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Admin</div>
          </div>
        </div>
      </div>
      <div className="anatomy-layer" data-anatomy="Main Content Area" style={{ flex: 1, display: 'flex', flexDirection: 'column', background: 'rgba(15, 17, 21, 0.95)' }}>
        <div style={{ height: '72px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 16px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', color: '#94a3b8', width: '300px' }}>
            <Search size={16} /> <span style={{ fontSize: '0.9rem' }}>Search anything...</span>
          </div>
          <Bell size={20} color="#94a3b8" />
        </div>
        <div style={{ padding: '32px', overflowY: 'auto', flex: 1 }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '24px' }}>Overview</h1>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
            {[{ t: 'Total Revenue', v: '$45,231.89', c: '+20.1%' }, { t: 'Active Users', v: '2,350', c: '+15.2%' }, { t: 'Sales', v: '12,234', c: '+4.5%' }].map((m, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', borderRadius: '16px' }}>
                <div style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '8px' }}>{m.t}</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{m.v}</div>
                <div style={{ fontSize: '0.85rem', color: '#27c93f' }}>{m.c} from last month</div>
              </div>
            ))}
          </div>
          <div style={{ height: '300px', background: 'linear-gradient(180deg, rgba(59,130,246,0.1) 0%, transparent 100%)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', position: 'relative' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px' }}>Revenue Analytics</h3>
            {/* SVG mock chart line */}
            <svg width="100%" height="200" viewBox="0 0 500 200" preserveAspectRatio="none">
              <path d="M0,150 L100,100 L200,120 L300,50 L400,80 L500,20" fill="none" stroke="#3b82f6" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const SplitScreenPreview = () => (
  <MockupBrowser>
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      <div className="anatomy-layer" data-anatomy="Left Pane (Visual)" style={{ flex: 1, position: 'relative', background: 'linear-gradient(135deg, #0f1115, #1e1b4b)', display: 'flex', flexDirection: 'column', padding: '64px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Box color="#00f0ff" size={32} />
          <span style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>UI Archive</span>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px', color: '#fff' }}>Discover the<br />new standard<br />of web design.</h1>
          <p style={{ fontSize: '1.2rem', color: '#a5b4fc', maxWidth: '400px', lineHeight: 1.6 }}>Join thousands of designers and developers building the next generation of digital experiences.</p>
        </div>
        <div style={{ position: 'absolute', right: '-100px', bottom: '-100px', width: '500px', height: '500px', background: 'rgba(138,43,226,0.4)', filter: 'blur(100px)', borderRadius: '50%' }} />
      </div>
      <div className="anatomy-layer" data-anatomy="Right Pane (Action)" style={{ flex: 1, background: '#0f1115', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px' }}>
        <div style={{ width: '100%', maxWidth: '380px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>Welcome Back</h2>
          <p style={{ color: '#94a3b8', marginBottom: '32px' }}>Please enter your details to sign in.</p>

          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <button style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>GitHub</button>
            <button style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>Google</button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
            <span style={{ color: '#64748b', fontSize: '0.85rem' }}>OR</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '8px' }}>Email</label>
              <input type="text" placeholder="you@example.com" style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }} readOnly />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#94a3b8', marginBottom: '8px' }}>Password</label>
              <input type="password" placeholder="••••••••" style={{ width: '100%', padding: '14px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }} readOnly />
            </div>
            <button style={{ width: '100%', padding: '14px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontWeight: 600, marginTop: '16px' }}>Sign In</button>
          </div>
          <p style={{ textAlign: 'center', marginTop: '32px', color: '#94a3b8', fontSize: '0.9rem' }}>
            Don't have an account? <span style={{ color: '#3b82f6', cursor: 'pointer' }}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const AsymmetricalPreview = () => (
  <MockupBrowser>
    <div style={{ height: '100%', width: '100%', padding: '64px', position: 'relative', overflow: 'hidden' }}>
      <div className="anatomy-layer" data-anatomy="Overlapping Media" style={{ position: 'absolute', top: '15%', right: '5%', width: '45%', height: '70%', background: 'linear-gradient(to bottom right, rgba(0,240,255,0.3), rgba(138,43,226,0.3)), url("https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2000&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '24px', boxShadow: '0 32px 64px rgba(0,0,0,0.5)' }}>
        <div style={{ position: 'absolute', bottom: '32px', right: '-32px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.2)', padding: '24px', borderRadius: '16px', width: '250px' }}>
          <div style={{ fontSize: '0.8rem', color: '#00f0ff', fontWeight: 700, letterSpacing: '2px', marginBottom: '8px' }}>NEW COLLECTION</div>
          <div style={{ fontSize: '1.2rem', color: '#fff', fontWeight: 600 }}>Urban Minimalist</div>
        </div>
      </div>
      <div className="anatomy-layer" data-anatomy="Off-center Typography" style={{ position: 'absolute', top: '30%', left: '10%', zIndex: 10 }}>
        <div style={{ width: '60px', height: '4px', background: '#00f0ff', marginBottom: '32px' }} />
        <h1 style={{ fontSize: '5.5rem', fontWeight: 800, lineHeight: 0.9, letterSpacing: '-0.04em', color: '#fff', textShadow: '0 12px 32px rgba(0,0,0,0.5)' }}>
          BREAK<br />THE<br /><span style={{ color: 'transparent', WebkitTextStroke: '2px #fff' }}>GRID.</span>
        </h1>
        <p style={{ marginTop: '32px', maxWidth: '320px', color: '#cbd5e1', fontSize: '1.1rem', lineHeight: 1.6 }}>Embrace asymmetrical layouts to create tension, depth, and artistic flair in modern digital editorials.</p>
        <button style={{ marginTop: '40px', padding: '16px 40px', background: '#fff', color: '#000', borderRadius: '32px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '12px' }}>Explore Gallery <ArrowRight size={18} /></button>
      </div>
    </div>
  </MockupBrowser>
);

export const FShapePreview = () => (
  <MockupBrowser>
    <div style={{ height: '100%', width: '100%', padding: '32px' }}>
      <div className="anatomy-layer" data-anatomy="Top Horizontal Bar" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', padding: '0 24px 24px', gap: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Box color="#3b82f6" size={28} />
          <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>TechDaily</span>
        </div>
        <div style={{ display: 'flex', gap: '32px', flex: 1, fontSize: '1rem', fontWeight: 600 }}>
          <span style={{ color: '#fff' }}>News</span>
          <span style={{ color: '#94a3b8' }}>Technology</span>
          <span style={{ color: '#94a3b8' }}>Design</span>
          <span style={{ color: '#94a3b8' }}>Culture</span>
        </div>
        <div style={{ padding: '10px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '0.9rem' }}>
          <Search size={16} /> Search articles...
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: '40px', height: 'calc(100% - 90px)' }}>
        <div className="anatomy-layer" data-anatomy="Left Edge Scannability" style={{ width: '260px', borderRight: '1px solid rgba(255,255,255,0.08)', paddingRight: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ color: '#3b82f6', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Top Stories</h4>
          {['AI Revolution', 'Quantum Computing', 'Web3 Landscape', 'UI Trends 2026', 'Cybersecurity'].map((item, i) => (
            <div key={i} style={{ padding: '14px 16px', background: i === 0 ? 'rgba(59,130,246,0.1)' : 'transparent', borderRadius: '8px', color: i === 0 ? '#fff' : '#94a3b8', fontSize: '0.95rem', fontWeight: i === 0 ? 600 : 500, cursor: 'pointer', borderLeft: i === 0 ? '3px solid #3b82f6' : '3px solid transparent' }}>
              {item}
            </div>
          ))}
        </div>
        <div style={{ flex: 1, paddingLeft: '48px', paddingRight: '24px', display: 'flex', flexDirection: 'column', gap: '32px', overflowY: 'auto' }}>
          <div className="anatomy-layer" data-anatomy="Sub Heading Bar" style={{ padding: '24px 32px', background: 'linear-gradient(90deg, rgba(138,43,226,0.15), transparent)', borderRadius: '16px', borderLeft: '4px solid #8a2be2' }}>
            <span style={{ display: 'inline-block', background: 'rgba(138,43,226,0.2)', color: '#d8b4fe', padding: '4px 12px', borderRadius: '16px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '16px' }}>FEATURED</span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '12px', color: '#fff', lineHeight: 1.2 }}>The AI Revolution in Web Design</h1>
            <p style={{ color: '#94a3b8', fontWeight: 500 }}>By Sarah Jenkins · 5 min read</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: '#cbd5e1', lineHeight: 1.8, fontSize: '1.05rem', maxWidth: '800px' }}>
            <p>Artificial Intelligence is no longer just a buzzword; it's a fundamental shift in how we approach user interfaces. Over the last year, we've seen a massive influx of AI-driven tools that automatically generate wireframes, suggest color palettes based on brand identity, and even write production-ready React code.</p>
            <p>But the true power of AI lies in its ability to adapt layouts dynamically. Imagine an F-shape layout that automatically restructures itself into a Z-shape landing page when it detects that the user's reading behavior aligns more with browsing rather than deep reading. This level of personalization was previously impossible, yet today it is rapidly becoming the industry standard.</p>
          </div>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const ZShapePreview = () => (
  <MockupBrowser>
    <div style={{ height: '100%', width: '100%', padding: '40px 64px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'radial-gradient(ellipse at center top, rgba(59,130,246,0.15) 0%, transparent 60%)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="anatomy-layer" data-anatomy="Top Left (Start)" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Zap color="#00f0ff" size={28} fill="#00f0ff" />
          <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>Velocity</span>
        </div>
        <div className="anatomy-layer" data-anatomy="Top Right (Action 1)" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <span style={{ color: '#94a3b8', fontWeight: 500 }}>Documentation</span>
          <span style={{ color: '#94a3b8', fontWeight: 500 }}>Pricing</span>
          <div style={{ padding: '10px 24px', background: 'rgba(255,255,255,0.1)', borderRadius: '24px', color: '#fff', fontWeight: 600 }}>Log In</div>
        </div>
      </div>
      <div className="anatomy-layer" data-anatomy="Diagonal Flow" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ padding: '6px 16px', background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.3)', borderRadius: '24px', color: '#00f0ff', fontSize: '0.85rem', fontWeight: 600, marginBottom: '32px' }}>v3.0 is now live 🎉</div>
        <h1 style={{ fontSize: '4.5rem', fontWeight: 800, textAlign: 'center', letterSpacing: '-0.03em', color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>Build faster with<br />our powerful API.</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.25rem', textAlign: 'center', maxWidth: '500px', lineHeight: 1.6 }}>Velocity provides the infrastructure you need to route payments globally with a single integration.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div className="anatomy-layer" data-anatomy="Bottom Left (Info)" style={{ color: '#64748b', fontSize: '0.9rem' }}>
          Trusted by 10,000+ developers globally.<br />No credit card required.
        </div>
        <div className="anatomy-layer" data-anatomy="Bottom Right (Action 2)">
          <button style={{ padding: '18px 48px', background: '#fff', color: '#000', borderRadius: '32px', fontWeight: 700, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 8px 32px rgba(255,255,255,0.2)' }}>
            Start Building Free <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const CardBlockPreview = () => (
  <MockupBrowser>
    <div style={{ height: '100%', width: '100%', padding: '48px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Trending Audio</h2>
          <p style={{ color: '#94a3b8' }}>Discover premium sound gear for audiophiles.</p>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontWeight: 500 }}>Filters</button>
          <button style={{ padding: '10px 20px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontWeight: 500 }}>Sort by: Popular</button>
        </div>
      </div>
      <div className="anatomy-layer" data-anatomy="Symmetrical Grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', overflowY: 'auto', paddingBottom: '32px' }}>
        {[
          { n: 'Sony WH-1000XM5', p: '$398', r: 4.8, t: 'Noise Cancelling' },
          { n: 'AirPods Max', p: '$549', r: 4.7, t: 'Over-Ear' },
          { n: 'Sennheiser HD 800 S', p: '$1,799', r: 4.9, t: 'Reference' },
          { n: 'Bose QuietComfort', p: '$329', r: 4.6, t: 'Wireless' },
          { n: 'Shure SE846', p: '$899', r: 4.8, t: 'In-Ear Monitor' },
          { n: 'Bang & Olufsen H95', p: '$899', r: 4.5, t: 'Luxury' },
          { n: 'Focal Utopia', p: '$4,999', r: 5.0, t: 'High-End' },
          { n: 'Audio-Technica ATH', p: '$149', r: 4.4, t: 'Studio' }
        ].map((item, i) => (
          <div key={i} className="anatomy-layer" data-anatomy="Standalone Card" style={{ background: 'rgba(20,24,32,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '180px', background: 'linear-gradient(45deg, rgba(255,255,255,0.02), rgba(255,255,255,0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <ImageIcon size={48} opacity={0.2} color="#fff" />
              <div style={{ position: 'absolute', top: '16px', right: '16px', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)' }}><Heart size={16} color="#fff" /></div>
            </div>
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.75rem', color: '#3b82f6', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>{item.t}</span>
              <h4 style={{ fontWeight: 600, color: '#fff', fontSize: '1.1rem', marginBottom: '12px' }}>{item.n}</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '24px' }}>
                <Star size={14} fill="#fbbf24" color="#fbbf24" />
                <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>{item.r} (124 reviews)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>{item.p}</span>
                <button style={{ background: '#fff', color: '#000', padding: '10px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ShoppingCart size={18} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </MockupBrowser>
);

export const FeaturedMediaPreview = () => (
  <MockupBrowser>
    <div className="anatomy-layer" data-anatomy="Full-bleed Background" style={{ height: '100%', width: '100%', background: 'linear-gradient(to top, rgba(15,17,21,1) 0%, rgba(15,17,21,0.2) 60%), url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2525&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '32px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', letterSpacing: '4px' }}>CINEFLEX</div>
        <div style={{ display: 'flex', gap: '32px', color: '#fff', fontWeight: 600, fontSize: '0.9rem' }}>
          <span>Movies</span><span>TV Shows</span><span>My List</span>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 64px' }}>
        <div className="anatomy-layer" data-anatomy="Overlay Content" style={{ maxWidth: '600px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <span style={{ background: '#e50914', color: '#fff', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800 }}>ORIGINAL</span>
            <span style={{ color: '#e2e8f0', fontSize: '0.9rem', fontWeight: 500 }}>2026 • Sci-Fi • 2h 14m</span>
          </div>
          <h1 style={{ fontSize: '5rem', fontWeight: 900, color: '#fff', marginBottom: '24px', lineHeight: 1, letterSpacing: '-0.02em', textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}>ECLIPSE<br />PROTOCOLS</h1>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '40px', lineHeight: 1.6, textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>When humanity's last solar harvesting array goes dark, a rogue engineer must navigate the treacherous outer rings to restore power before Earth freezes.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <button style={{ padding: '16px 40px', background: '#fff', color: '#000', borderRadius: '8px', fontWeight: 800, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '12px' }}><PlayCircle size={24} /> PLAY NOW</button>
            <button style={{ padding: '16px 40px', background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', borderRadius: '8px', fontWeight: 700, fontSize: '1.1rem', backdropFilter: 'blur(8px)' }}>MORE INFO</button>
          </div>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const MasonryPreview = () => (
  <MockupBrowser>
    <div style={{ height: '100%', width: '100%', padding: '48px', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Inspiration Board</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Curated design concepts from around the web.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', alignItems: 'start' }}>
        {[
          [{ h: 300, t: 'UI Kit' }, { h: 400, t: 'Typography' }, { h: 250, t: 'Colors' }],
          [{ h: 200, t: 'App Design' }, { h: 350, t: 'Branding' }, { h: 450, t: 'Posters' }],
          [{ h: 400, t: 'Web Layouts' }, { h: 250, t: 'Icons' }, { h: 300, t: '3D Renders' }],
          [{ h: 250, t: 'Logos' }, { h: 450, t: 'Photography' }, { h: 200, t: 'Illustrations' }]
        ].map((col, cIdx) => (
          <div key={cIdx} className="anatomy-layer" data-anatomy="Masonry Column" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {col.map((item, i) => (
              <div key={i} className="anatomy-layer" data-anatomy="Dynamic Height Item" style={{ height: `${item.h}px`, background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)', position: 'relative', overflow: 'hidden', cursor: 'zoom-in', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom right, rgba(59,130,246,${0.1 + (i * 0.05)}), rgba(138,43,226,${0.1 + (cIdx * 0.05)}))` }} />
                <div style={{ position: 'absolute', inset: 0, padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', opacity: 0.8 }}>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Heart size={16} color="#fff" /></div>
                  </div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>{item.t}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </MockupBrowser>
);

export const MagazinePreview = () => (
  <MockupBrowser>
    <div style={{ height: '100%', width: '100%', padding: '48px', overflowY: 'auto', display: 'flex', gap: '40px' }}>
      <div style={{ flex: 2.5, display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '16px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>Editor's Choice</h2>
          <span style={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.9rem' }}>See all articles <ArrowRight size={14} style={{ display: 'inline' }} /></span>
        </div>
        <div className="anatomy-layer" data-anatomy="Hero Article" style={{ height: '480px', background: 'linear-gradient(to top, rgba(15,17,21,1) 0%, transparent 80%), url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '24px', position: 'relative', display: 'flex', alignItems: 'flex-end', padding: '40px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ maxWidth: '80%' }}>
            <span style={{ background: '#fff', color: '#000', padding: '6px 16px', borderRadius: '24px', fontSize: '0.8rem', fontWeight: 800, marginBottom: '20px', display: 'inline-block' }}>EXCLUSIVE</span>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '16px', lineHeight: 1.1 }}>The New Architecture of Global Finance</h1>
            <p style={{ color: '#cbd5e1', fontSize: '1.1rem', marginBottom: '24px' }}>How decentralized ledgers are silently rebuilding the backbone of international trade.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#94a3b8', fontSize: '0.9rem' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#3b82f6' }} />
              <span style={{ color: '#fff', fontWeight: 600 }}>Michael Chen</span>
              <span>·</span>
              <span>Oct 24, 2026</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {[{ t: 'Sustainable Energy Grid 2.0', c: 'Environment' }, { t: 'Quantum Supremacy Achieved', c: 'Science' }].map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ height: '220px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }} />
              <div>
                <span style={{ color: '#00f0ff', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>{item.c}</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginTop: '8px' }}>{item.t}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="anatomy-layer" data-anatomy="Sidebar Articles" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 800, borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '16px', color: '#fff' }}>Trending Now</h3>
        {[
          'Silicon Valley\'s Next Big Bet on Biotech',
          'Why Retro Aesthetics are Dominating UI',
          'The Complete Guide to Remote Work in 2027',
          'Mars Colony: Progress Update',
          'Evaluating the Newest AI Coding Assistants'
        ].map((title, i) => (
          <div key={i} style={{ display: 'flex', gap: '16px', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.05)' : 'none', paddingBottom: i < 4 ? '24px' : '0' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'rgba(255,255,255,0.1)', lineHeight: 1 }}>0{i + 1}</div>
            <div style={{ flex: 1 }}>
              <h5 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#fff', marginBottom: '8px', lineHeight: 1.4 }}>{title}</h5>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>2 hours ago</span>
            </div>
          </div>
        ))}

        <div style={{ marginTop: '32px', padding: '32px', background: 'rgba(59,130,246,0.1)', borderRadius: '16px', border: '1px solid rgba(59,130,246,0.3)', textAlign: 'center' }}>
          <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem', marginBottom: '12px' }}>Subscribe to our Newsletter</h4>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '24px' }}>Get the latest updates delivered directly to your inbox.</p>
          <input type="text" placeholder="Email address" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', marginBottom: '12px', background: 'rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
          <button style={{ width: '100%', padding: '12px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>Subscribe</button>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const FixedNavPreview = () => (
  <MockupBrowser>
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      <div className="anatomy-layer" data-anatomy="Fixed Sidebar" style={{ width: '80px', background: 'rgba(15,17,21,0.95)', borderRight: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 0', zIndex: 10 }}>
        <Box color="#00f0ff" size={32} style={{ marginBottom: '48px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#64748b' }}>
          <div style={{ padding: '12px', background: 'rgba(0,240,255,0.1)', borderRadius: '12px', color: '#00f0ff' }}><LayoutGrid size={24} /></div>
          <div style={{ padding: '12px', cursor: 'pointer' }}><User size={24} /></div>
          <div style={{ padding: '12px', cursor: 'pointer' }}><ShieldCheck size={24} /></div>
          <div style={{ padding: '12px', cursor: 'pointer' }}><Bell size={24} /></div>
        </div>
        <div style={{ marginTop: 'auto', padding: '12px', cursor: 'pointer', color: '#64748b' }}>
          <Settings2 size={24} />
        </div>
      </div>
      <div className="anatomy-layer" data-anatomy="Scrollable Region" style={{ flex: 1, padding: '48px 64px', overflowY: 'auto', background: 'rgba(20,24,32,0.6)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff' }}>Servers & Infrastructure</h2>
            <p style={{ color: '#94a3b8' }}>Manage your global deployments.</p>
          </div>
          <button style={{ padding: '12px 24px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>+ Deploy New</button>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '16px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', color: '#94a3b8', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>
            <span>Instance Name</span><span>Region</span><span>Status</span><span>CPU Usage</span><span>Memory</span>
          </div>
          {[
            { n: 'prod-db-cluster-01', r: 'us-east-1', s: 'Healthy', c: '42%', m: '12.4 GB' },
            { n: 'prod-web-node-01', r: 'eu-central-1', s: 'Healthy', c: '78%', m: '4.1 GB' },
            { n: 'prod-web-node-02', r: 'eu-central-1', s: 'Warning', c: '95%', m: '7.8 GB' },
            { n: 'staging-redis-cache', r: 'ap-northeast-2', s: 'Healthy', c: '12%', m: '2.1 GB' },
            { n: 'dev-k8s-control-plane', r: 'us-west-2', s: 'Offline', c: '-', m: '-' },
            { n: 'prod-worker-batch-01', r: 'us-east-1', s: 'Healthy', c: '88%', m: '14.2 GB' },
            { n: 'prod-worker-batch-02', r: 'us-east-1', s: 'Healthy', c: '85%', m: '14.0 GB' },
            { n: 'analytics-clickhouse', r: 'eu-west-1', s: 'Healthy', c: '34%', m: '32.8 GB' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', padding: '20px 24px', borderBottom: i === 7 ? 'none' : '1px solid rgba(255,255,255,0.05)', alignItems: 'center' }}>
              <span style={{ color: '#fff', fontWeight: 500 }}>{row.n}</span>
              <span style={{ color: '#94a3b8' }}>{row.r}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: row.s === 'Healthy' ? '#27c93f' : row.s === 'Warning' ? '#fbbf24' : '#ff5f56', fontSize: '0.9rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'currentColor' }} /> {row.s}
              </span>
              <span style={{ color: '#fff' }}>{row.c}</span>
              <span style={{ color: '#fff' }}>{row.m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const HiddenNavPreview = () => (
  <MockupBrowser>
    <div style={{ height: '100%', width: '100%', position: 'relative', background: '#0f1115' }}>
      <div style={{ position: 'absolute', top: '32px', left: '48px', zIndex: 5, display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Box color="#fff" size={28} />
        <span style={{ color: '#fff', fontWeight: 800, letterSpacing: '2px', fontSize: '1.2rem' }}>STUDIO ZERO</span>
      </div>

      <div style={{ position: 'absolute', top: '32px', right: '48px', zIndex: 20 }}>
        <div className="anatomy-layer" data-anatomy="Hamburger Trigger" style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid rgba(0,0,0,0.1)', transition: 'all 0.3s' }}>
          <Menu size={24} color="#0f1115" />
        </div>
      </div>

      {/* Content */}
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%' }}>
        <h1 style={{ fontSize: '6rem', fontWeight: 900, color: '#fff', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '24px' }}>We craft<br />digital<br />experiences.</h1>
        <p style={{ color: '#94a3b8', fontSize: '1.25rem', maxWidth: '400px' }}>An independent creative agency focused on brand identity and interaction design.</p>
      </div>

      {/* Simulated Overlay (Partially visible to show the concept) */}
      <div className="anatomy-layer" data-anatomy="Fullscreen Overlay Nav" style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '40%', background: 'rgba(255,255,255,0.98)', backdropFilter: 'blur(24px)', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px', borderLeft: '1px solid rgba(255,255,255,0.2)', boxShadow: '-20px 0 60px rgba(0,0,0,0.5)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['Projects', 'Services', 'About Us', 'Careers', 'Contact'].map((link, i) => (
            <h2 key={link} style={{ fontSize: '3.5rem', fontWeight: 800, color: i === 0 ? '#3b82f6' : '#0f1115', cursor: 'pointer', transition: 'color 0.2s', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              {link}
            </h2>
          ))}
        </div>
        <div style={{ marginTop: '64px', display: 'flex', gap: '24px', color: '#64748b', fontWeight: 600 }}>
          <span>Instagram</span>
          <span>Twitter</span>
          <span>LinkedIn</span>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const InteractivePreview = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <MockupBrowser>
      <div
        className="anatomy-layer"
        data-anatomy="Parallax Background"
        style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at 30% 30%, rgba(0,240,255,0.2), transparent 40%), radial-gradient(circle at 70% 70%, rgba(255,0,127,0.2), transparent 40%)' }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="anatomy-layer"
          data-anatomy="Cursor Tracking Element"
          style={{
            padding: '64px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '32px',
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(16px)',
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            boxShadow: `${-rotation.y * 2}px ${rotation.x * 2 + 20}px 60px rgba(0,0,0,0.5)`,
            transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out',
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <div style={{ width: '80px', height: '80px', borderRadius: '24px', background: 'linear-gradient(135deg, #00f0ff, #3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', boxShadow: '0 16px 32px rgba(59,130,246,0.5)' }}>
            <Layers size={40} color="#fff" />
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px', color: '#fff' }}>Interactive 3D Card</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6 }}>Responds fluidly to mouse movement, creating a sense of depth and physical presence in the digital space.</p>
        </div>
      </div>
    </MockupBrowser>
  );
};

export const DashboardLayoutPreview = () => (
  <MockupBrowser>
    <div style={{ display: 'flex', height: '100%', width: '100%', background: '#0a0a0b' }}>
      <div className="anatomy-layer" data-anatomy="Left Sidebar (LNB)" style={{ width: '250px', background: 'rgba(255,255,255,0.02)', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Box size={20} color="#fff" /></div>
          <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.5px' }}>AcmeCorp</span>
        </div>
        <div style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ padding: '12px', background: 'linear-gradient(90deg, rgba(139,92,246,0.1), transparent)', borderLeft: '3px solid #8b5cf6', color: '#fff', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}><LayoutGrid size={18} color="#8b5cf6" /> Dashboard</div>
          <div style={{ padding: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500 }}><Activity size={18} /> Analytics</div>
          <div style={{ padding: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 500 }}><User size={18} /> Audience</div>
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="anatomy-layer" data-anatomy="Top Header" style={{ height: '70px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
          <div style={{ position: 'relative', width: '300px' }}>
            <Search size={16} color="#64748b" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
            <input type="text" placeholder="Search data..." style={{ width: '100%', padding: '10px 10px 10px 36px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', outline: 'none' }} readOnly />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Bell size={20} color="#94a3b8" />
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop") center/cover' }} />
          </div>
        </div>
        <div className="anatomy-layer" data-anatomy="Main Content Area" style={{ padding: '32px', flex: 1, overflowY: 'auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: '24px' }}>Overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
            {[ { l: 'Total Views', v: '1.2M', p: '+14%' }, { l: 'Active Sessions', v: '43,200', p: '+5%' }, { l: 'Conversion Rate', v: '4.8%', p: '-1.2%' } ].map((m, i) => (
              <div key={i} style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: i === 0 ? 'linear-gradient(90deg, #8b5cf6, #ec4899)' : 'transparent' }} />
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>{m.l}</div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff' }}>{m.v}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: m.p.startsWith('+') ? '#10b981' : '#ef4444', marginBottom: '6px' }}>{m.p}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ height: '300px', background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ color: '#fff', fontWeight: 600, marginBottom: '24px' }}>Audience Growth</h3>
            <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', gap: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: 'linear-gradient(to top, rgba(139,92,246,0.2), rgba(236,72,153,0.8))', borderRadius: '4px 4px 0 0' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const DocsLayoutPreview = () => (
  <MockupBrowser>
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', background: '#fff' }}>
      <div style={{ height: '60px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <BookOpen color="#0ea5e9" size={24} />
          <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>Docs</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', fontSize: '0.9rem', color: '#64748b', fontWeight: 500 }}>
          <span>Guides</span><span>API</span><span>Examples</span>
        </div>
      </div>
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <div className="anatomy-layer" data-anatomy="Index Sidebar" style={{ width: '260px', borderRight: '1px solid #e2e8f0', background: '#f8fafc', padding: '24px', overflowY: 'auto' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '12px' }}>Getting Started</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95rem', color: '#475569', marginBottom: '24px' }}>
            <div style={{ color: '#0ea5e9', fontWeight: 600, background: '#e0f2fe', padding: '6px 12px', borderRadius: '6px' }}>Installation</div>
            <div style={{ padding: '6px 12px' }}>Configuration</div>
            <div style={{ padding: '6px 12px' }}>Quick Start</div>
          </div>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '12px' }}>Core Concepts</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.95rem', color: '#475569' }}>
            <div style={{ padding: '6px 12px' }}>Routing</div>
            <div style={{ padding: '6px 12px' }}>Data Fetching</div>
            <div style={{ padding: '6px 12px' }}>Rendering</div>
          </div>
        </div>
        <div className="anatomy-layer" data-anatomy="Document Body" style={{ flex: 1, padding: '48px 64px', overflowY: 'auto', background: '#fff' }}>
          <span style={{ color: '#0ea5e9', fontWeight: 600, fontSize: '0.9rem' }}>Getting Started</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginTop: '8px', marginBottom: '24px' }}>Installation</h1>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, marginBottom: '32px' }}>
            Learn how to install and configure the framework for your next project. We recommend starting with our official CLI tool.
          </p>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>System Requirements</h2>
          <ul style={{ color: '#475569', paddingLeft: '24px', marginBottom: '32px', lineHeight: 1.7 }}>
            <li>Node.js 18.0 or later.</li>
            <li>macOS, Windows (including WSL), and Linux are supported.</li>
          </ul>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Automatic Setup</h2>
          <div style={{ background: '#0f172a', color: '#e2e8f0', padding: '16px', borderRadius: '8px', fontFamily: 'monospace', marginBottom: '32px' }}>
            npx create-app@latest
          </div>
          <p style={{ color: '#475569', lineHeight: 1.7 }}>This command will install the necessary dependencies and set up the boilerplate code for you automatically.</p>
        </div>
        <div className="anatomy-layer" data-anatomy="TOC Sidebar" style={{ width: '220px', padding: '48px 24px', borderLeft: '1px solid #e2e8f0', overflowY: 'auto' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>On this page</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem', color: '#64748b' }}>
            <div style={{ color: '#0ea5e9', fontWeight: 500 }}>System Requirements</div>
            <div>Automatic Setup</div>
            <div>Manual Setup</div>
            <div>Next Steps</div>
          </div>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const WizardLayoutPreview = () => (
  <MockupBrowser>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', width: '100%', background: '#f8fafc', padding: '40px' }}>
      <div style={{ width: '100%', maxWidth: '800px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div className="anatomy-layer" data-anatomy="Progress Indicator" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '0', right: '0', height: '2px', background: '#e2e8f0', zIndex: 0, transform: 'translateY(-50%)' }} />
          <div style={{ position: 'absolute', top: '50%', left: '0', width: '50%', height: '2px', background: '#3b82f6', zIndex: 0, transform: 'translateY(-50%)' }} />
          {['Account Info', 'Personal Details', 'Payment', 'Review'].map((step, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1, gap: '8px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: i < 2 ? '#3b82f6' : i === 2 ? '#fff' : '#fff', border: i === 2 ? '2px solid #3b82f6' : '2px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: i < 2 ? '#fff' : i === 2 ? '#3b82f6' : '#94a3b8', fontWeight: 700, fontSize: '0.9rem' }}>
                {i < 2 ? <CheckCircle size={16} /> : (i + 1)}
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: i <= 2 ? '#0f172a' : '#94a3b8' }}>{step}</span>
            </div>
          ))}
        </div>
        
        <div className="anatomy-layer" data-anatomy="Step Content" style={{ flex: 1, background: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', padding: '40px', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Payment Details</h2>
          <p style={{ color: '#64748b', marginBottom: '32px' }}>Enter your payment information to complete the registration.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Cardholder Name</label>
              <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }} readOnly />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Card Number</label>
              <input type="text" placeholder="**** **** **** 4242" style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }} readOnly />
            </div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Expiry Date</label>
                <input type="text" placeholder="MM/YY" style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }} readOnly />
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>CVC</label>
                <input type="text" placeholder="123" style={{ width: '100%', padding: '12px 16px', border: '1px solid #cbd5e1', borderRadius: '8px', outline: 'none' }} readOnly />
              </div>
            </div>
          </div>
        </div>
        
        <div className="anatomy-layer" data-anatomy="Action Buttons" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '24px' }}>
          <button style={{ padding: '12px 24px', background: '#fff', border: '1px solid #cbd5e1', color: '#475569', borderRadius: '8px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}><ArrowLeft size={16} /> Back</button>
          <button style={{ padding: '12px 32px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>Continue <ArrowRight size={16} /></button>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const FeedLayoutPreview = () => (
  <MockupBrowser>
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%', width: '100%', background: '#000' }}>
      <div className="anatomy-layer" data-anatomy="Sticky Sidebars" style={{ width: '280px', height: '100%', position: 'sticky', top: 0, padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '24px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
        <Box color="#fff" size={32} style={{ marginBottom: '16px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}><Home size={24} /> Home</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.2rem', fontWeight: 500, color: '#e2e8f0' }}><Search size={24} /> Explore</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.2rem', fontWeight: 500, color: '#e2e8f0' }}><Bell size={24} /> Notifications</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.2rem', fontWeight: 500, color: '#e2e8f0' }}><MessageCircle size={24} /> Messages</div>
        <button style={{ width: '100%', padding: '16px', background: '#1d9bf0', color: '#fff', borderRadius: '32px', fontWeight: 700, fontSize: '1.1rem', marginTop: '16px' }}>Post</button>
      </div>
      
      <div className="anatomy-layer" data-anatomy="Main Feed Column" style={{ width: '600px', borderRight: '1px solid rgba(255,255,255,0.1)', overflowY: 'auto' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'sticky', top: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)', zIndex: 10 }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>For You</h2>
        </div>
        <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '16px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6' }} />
          <div style={{ flex: 1 }}>
            <input type="text" placeholder="What is happening?!" style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', fontSize: '1.2rem', outline: 'none', marginTop: '8px' }} readOnly />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px' }}>
              <ImageIcon color="#1d9bf0" size={20} />
              <button style={{ padding: '8px 16px', background: '#1d9bf0', color: '#fff', borderRadius: '16px', fontWeight: 700, opacity: 0.5 }}>Post</button>
            </div>
          </div>
        </div>
        {[1, 2, 3].map(i => (
          <div key={i} style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#e2e8f0', flexShrink: 0 }} />
            <div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontWeight: 700, color: '#fff' }}>Design User</span>
                <span style={{ color: '#64748b' }}>@designuser · 2h</span>
              </div>
              <p style={{ color: '#e2e8f0', lineHeight: 1.5, marginBottom: '12px' }}>
                Just launched the new layout system. Infinite scrolling feels so much smoother now! 🚀✨ #UI #Design
              </p>
              {i === 1 && (
                <div style={{ width: '100%', height: '240px', borderRadius: '16px', background: 'linear-gradient(45deg, #1e3a8a, #3b82f6)', marginBottom: '12px' }} />
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', maxWidth: '400px' }}>
                <MessageCircle size={18} />
                <Share2 size={18} />
                <Heart size={18} />
                <Activity size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="anatomy-layer" data-anatomy="Sticky Sidebars" style={{ width: '350px', height: '100%', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ background: '#16181c', padding: '12px 16px', borderRadius: '32px', display: 'flex', alignItems: 'center', gap: '12px', color: '#64748b' }}>
          <Search size={18} /> <span style={{ fontSize: '0.95rem' }}>Search</span>
        </div>
        <div style={{ background: '#16181c', borderRadius: '16px', padding: '16px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Trends for you</h3>
          {['#ReactJS', 'Web Development', '#DesignSystem', 'CSS Grid'].map((t, idx) => (
            <div key={idx} style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Trending in Tech</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff' }}>{t}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const BottomNavLayoutPreview = () => (
  <MockupBrowser>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', background: 'rgba(255,255,255,0.02)' }}>
      <div style={{ width: '375px', height: '700px', background: '#ffffff', borderRadius: '40px', border: '8px solid #0f172a', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }}>
        
        <div style={{ height: '44px', background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '0.8rem', fontWeight: 600, color: '#0f172a', zIndex: 20 }}>
          9:41
        </div>

        <div className="anatomy-layer" data-anatomy="Scrollable View" style={{ flex: 1, padding: '24px', overflowY: 'auto', background: '#f8fafc', paddingBottom: '100px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>Good morning,</div>
              <div style={{ fontSize: '1.5rem', color: '#0f172a', fontWeight: 800 }}>Alex</div>
            </div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#cbd5e1' }} />
          </div>
          <div style={{ width: '100%', height: '180px', borderRadius: '24px', background: 'linear-gradient(135deg, #10b981, #059669)', padding: '24px', color: '#fff', marginBottom: '24px', boxShadow: '0 12px 24px rgba(16,185,129,0.3)' }}>
            <div style={{ fontSize: '0.9rem', opacity: 0.9, marginBottom: '8px' }}>Total Balance</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '16px' }}>$12,450.00</div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '16px', fontSize: '0.8rem', fontWeight: 600 }}>+2.4%</span>
            </div>
          </div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>Recent Transactions</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[ { n: 'Apple Store', d: 'Today, 10:24 AM', a: '-$120.00' }, { n: 'Starbucks', d: 'Yesterday, 8:15 AM', a: '-$5.40' }, { n: 'Salary', d: 'Oct 24, 9:00 AM', a: '+$4,200.00', pos: true } ].map((t, idx) => (
              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fff', padding: '16px', borderRadius: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#f1f5f9' }} />
                  <div>
                    <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '0.95rem' }}>{t.n}</div>
                    <div style={{ color: '#64748b', fontSize: '0.8rem' }}>{t.d}</div>
                  </div>
                </div>
                <div style={{ fontWeight: 700, color: t.pos ? '#10b981' : '#0f172a' }}>{t.a}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="anatomy-layer" data-anatomy="Bottom Nav Bar" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: '#fff', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingBottom: '20px', zIndex: 20 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#3b82f6' }}>
            <Home size={24} />
            <span style={{ fontSize: '0.65rem', fontWeight: 600 }}>Home</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#94a3b8' }}>
            <List size={24} />
            <span style={{ fontSize: '0.65rem', fontWeight: 600 }}>Activity</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#94a3b8' }}>
            <Star size={24} />
            <span style={{ fontSize: '0.65rem', fontWeight: 600 }}>Rewards</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#94a3b8' }}>
            <User size={24} />
            <span style={{ fontSize: '0.65rem', fontWeight: 600 }}>Profile</span>
          </div>
        </div>
      </div>
    </div>
  </MockupBrowser>
);
