import {
  Sparkles, ChevronDown, CheckCircle2, LayoutDashboard, Star, Box, 
  ArrowRight, Users, Server, Activity, Search, Bell, Settings, 
  ShoppingCart, Heart, Play, Mail, MapPin, Phone, Code, Cpu, Database, Globe,
  Terminal, Copy, Check, FileText, ChevronRight, Hash, ExternalLink,
  CreditCard, ArrowUpRight, ArrowDownRight, Send, Plus, DollarSign, Wallet,
  Calendar, Filter, SlidersHorizontal, Navigation,
  MessageCircle, Repeat, Share, MoreHorizontal, Image as ImageIcon, Smile,
  PlayCircle, Clock, BookOpen, MessageSquare, Award, MonitorPlay
} from 'lucide-react';
import { MockupBrowser } from './BasicLayoutPreviews';

// --- Shared Mock Components ---

const MockGNB = ({ transparent = false }) => (
  <header style={{ 
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
    padding: '24px 48px', borderBottom: transparent ? 'none' : '1px solid rgba(255,255,255,0.05)',
    background: transparent ? 'transparent' : 'rgba(15,17,21,0.8)', backdropFilter: 'blur(12px)',
    position: 'sticky', top: 0, zIndex: 100
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>
      <Box color="#3b82f6" /> UI Archive
    </div>
    <nav style={{ display: 'flex', gap: '32px', color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500 }}>
      <span style={{ color: '#fff' }}>Products</span>
      <span>Solutions</span>
      <span>Resources</span>
      <span>Pricing</span>
    </nav>
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <span style={{ color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem' }}>Log in</span>
      <button style={{ background: '#fff', color: '#000', padding: '10px 20px', borderRadius: '8px', fontWeight: 600, fontSize: '0.95rem' }}>Sign Up</button>
    </div>
  </header>
);

const MockFooter = () => (
  <footer style={{
    padding: '80px 48px 40px', background: '#0a0b0e', borderTop: '1px solid rgba(255,255,255,0.05)'
  }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '64px', maxWidth: '1200px', margin: '0 auto 64px' }}>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 800, fontSize: '1.5rem', marginBottom: '16px', color: '#fff' }}>
          <Box color="#3b82f6" /> UI Archive
        </div>
        <p style={{ color: '#64748b', lineHeight: 1.6, maxWidth: '300px' }}>Building the next generation of web interfaces with modern primitives.</p>
      </div>
      <div style={{ display: 'flex', gap: '80px' }}>
        <div>
          <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '24px' }}>Product</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#64748b' }}>
            <span>Features</span><span>Integrations</span><span>Pricing</span><span>Changelog</span>
          </div>
        </div>
        <div>
          <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '24px' }}>Company</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#64748b' }}>
            <span>About Us</span><span>Careers</span><span>Blog</span><span>Contact</span>
          </div>
        </div>
      </div>
    </div>
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', color: '#64748b', fontSize: '0.9rem' }}>
      <span>© 2026 UI Archive. All rights reserved.</span>
      <div style={{ display: 'flex', gap: '24px' }}>
        <span>Twitter</span> <span>GitHub</span> <span>LinkedIn</span>
      </div>
    </div>
  </footer>
);

// --- Full Page Previews ---

export const SaasLandingPreview = () => (
  <MockupBrowser>
    <div style={{ width: '100%', background: '#0f1115', overflowY: 'auto' }}>
      <div className="anatomy-layer" data-anatomy="Global Navigation Bar">
        <MockGNB />
      </div>
      
      {/* Hero */}
      <div className="anatomy-layer" data-anatomy="Hero Section" style={{ padding: '120px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '32px', fontSize: '0.9rem', fontWeight: 600, marginBottom: '32px', border: '1px solid rgba(59,130,246,0.2)' }}>
          <Sparkles size={16} /> UI Archive v2.0 is now live
        </div>
        <h1 style={{ fontSize: '5rem', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '32px', letterSpacing: '-0.03em' }}>
          Build interfaces <br />
          <span style={{ background: 'linear-gradient(90deg, #00f0ff, #3b82f6, #8a2be2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>at the speed of light.</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.6 }}>
          Stop reinventing the wheel. Use our meticulously crafted components to build stunning applications in record time.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button style={{ background: '#fff', color: '#000', padding: '16px 32px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
            Start building free <ArrowRight size={20} />
          </button>
          <button style={{ background: 'rgba(255,255,255,0.05)', color: '#fff', padding: '16px 32px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            View Documentation
          </button>
        </div>
      </div>

      {/* Logo Cloud */}
      <div className="anatomy-layer" data-anatomy="Logo Cloud" style={{ padding: '64px 40px', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.01)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '32px' }}>Trusted by innovative teams worldwide</h3>
        
        {/* Animated Sliding Track */}
        <div style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '100px', background: 'linear-gradient(to right, #0f1115, transparent)', zIndex: 2 }} />
          <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '100px', background: 'linear-gradient(to left, #0f1115, transparent)', zIndex: 2 }} />
          <div style={{ display: 'flex', width: 'max-content', animation: 'logo-scroll 20s linear infinite', opacity: 0.6 }}>
            {/* First set */}
            <div style={{ display: 'flex', gap: '80px', paddingRight: '80px' }}>
              {[
                { Icon: Box, name: 'BlockCo' },
                { Icon: Code, name: 'DevStream' },
                { Icon: Cpu, name: 'SysLogic' },
                { Icon: Database, name: 'DataGrid' },
                { Icon: Globe, name: 'GlobalNet' },
              ].map((company, i) => (
                <div key={`s1-${i}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', filter: 'grayscale(100%)', color: '#fff' }}>
                  <company.Icon size={32} />
                  <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{company.name}</span>
                </div>
              ))}
            </div>
            {/* Second set (duplicate for loop) */}
            <div style={{ display: 'flex', gap: '80px', paddingRight: '80px' }}>
              {[
                { Icon: Box, name: 'BlockCo' },
                { Icon: Code, name: 'DevStream' },
                { Icon: Cpu, name: 'SysLogic' },
                { Icon: Database, name: 'DataGrid' },
                { Icon: Globe, name: 'GlobalNet' },
              ].map((company, i) => (
                <div key={`s2-${i}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', filter: 'grayscale(100%)', color: '#fff' }}>
                  <company.Icon size={32} />
                  <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{company.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="anatomy-layer" data-anatomy="Features Grid" style={{ padding: '120px 48px', maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
        {[1,2,3].map(i => (
          <div key={i} className="anatomy-layer" data-anatomy="Feature Card" style={{ height: '280px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', marginBottom: '24px' }}>
              <LayoutDashboard size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>Component Driven</h3>
            <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>Build faster with our comprehensive library of pre-built UI components.</p>
          </div>
        ))}
      </div>

      {/* Pricing Table */}
      <div className="anatomy-layer" data-anatomy="Pricing Table" style={{ padding: '80px 48px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px' }}>
         <div style={{ width: '320px', padding: '40px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', background: 'rgba(255,255,255,0.01)' }}>
           <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Starter</h3>
           <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '32px' }}>$0</div>
           <button style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>Get Started</button>
         </div>
         <div style={{ width: '340px', padding: '40px', background: 'rgba(59,130,246,0.05)', border: '2px solid #3b82f6', borderRadius: '24px', position: 'relative' }}>
           <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: 700 }}>MOST POPULAR</div>
           <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Pro</h3>
           <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '32px' }}>$49</div>
           <button style={{ width: '100%', padding: '12px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>Upgrade to Pro</button>
         </div>
         <div style={{ width: '320px', padding: '40px', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', background: 'rgba(255,255,255,0.01)' }}>
           <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>Enterprise</h3>
           <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '32px' }}>$199</div>
           <button style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', fontWeight: 600 }}>Contact Sales</button>
         </div>
      </div>

      {/* CTA Section */}
      <div className="anatomy-layer" data-anatomy="CTA Section">
        <div style={{ padding: '120px 48px', textAlign: 'center', background: 'linear-gradient(180deg, transparent, rgba(59,130,246,0.05))' }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff', marginBottom: '24px', letterSpacing: '-0.02em' }}>Ready to ship faster?</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '40px' }}>Join over 10,000 developers building with UI Archive.</p>
          <button style={{ padding: '16px 40px', background: '#fff', color: '#000', borderRadius: '32px', fontSize: '1.1rem', fontWeight: 700 }}>Get Started for Free</button>
        </div>
      </div>
      {/* Global Footer */}
      <div className="anatomy-layer" data-anatomy="Global Footer">
        <MockFooter />
      </div>
    </div>
  </MockupBrowser>
);

export const DashboardPreview = () => (
  <MockupBrowser>
    <div className="anatomy-layer" data-anatomy="Split Screen Layout (MacOS Style)" style={{ width: '100%', height: '100%', background: '#0a0b0e', display: 'flex' }}>
      {/* Sidebar */}
      <div className="anatomy-layer" data-anatomy="Sidebar Navigation" style={{ width: '260px', height: '100%', background: '#0f1115', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '24px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 800, fontSize: '1.25rem', color: '#fff', marginBottom: '48px' }}>
          <Box color="#8a2be2" /> AdminPro
        </div>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['Overview', 'Analytics', 'Customers', 'Products', 'Settings'].map((item, i) => (
            <div key={i} className="anatomy-layer" data-anatomy="Sidebar Menu Item" style={{ padding: '12px 16px', borderRadius: '8px', background: i === 0 ? 'rgba(138,43,226,0.15)' : 'transparent', color: i === 0 ? '#fff' : '#94a3b8', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
              <LayoutDashboard size={18} color={i === 0 ? '#8a2be2' : '#64748b'} /> {item}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Topbar */}
        <div className="anatomy-layer" data-anatomy="Top App Bar" style={{ height: '72px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '24px', color: '#64748b' }}>
            <Search size={18} /> <span style={{ fontSize: '0.9rem' }}>Search anything...</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: '#94a3b8' }}>
            <Bell size={20} /> <Settings size={20} />
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #8a2be2)' }} />
          </div>
        </div>

        {/* Content Area */}
        <div style={{ padding: '32px', overflowY: 'auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: '32px' }}>Overview</h2>
          
          {/* Metrics Grid */}
          <div className="anatomy-layer" data-anatomy="Stats & Metrics Cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
            {[
              { title: 'Total Revenue', value: '$124,563.00', trend: '+14.5%' },
              { title: 'Active Users', value: '12,450', trend: '+5.2%' },
              { title: 'New Subscriptions', value: '843', trend: '-2.1%' }
            ].map((stat, i) => (
              <div key={i} className="anatomy-layer" data-anatomy="Stat Card" style={{ background: '#0f1115', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '12px' }}>{stat.title}</div>
                <div style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{stat.value}</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: stat.trend.includes('+') ? '#10b981' : '#ef4444', fontSize: '0.9rem', fontWeight: 600, background: stat.trend.includes('+') ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)', padding: '4px 8px', borderRadius: '16px' }}>
                  {stat.trend} from last month
                </div>
              </div>
            ))}
          </div>

          {/* Data Table Area */}
          <div className="anatomy-layer" data-anatomy="Interactive Data Table" style={{ background: '#0f1115', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px' }}>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600, marginBottom: '24px' }}>Recent Transactions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="anatomy-layer" data-anatomy="Table Row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                    <div>
                      <div style={{ color: '#fff', fontWeight: 500, marginBottom: '4px' }}>Customer {i}</div>
                      <div style={{ color: '#64748b', fontSize: '0.85rem' }}>customer{i}@example.com</div>
                    </div>
                  </div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>${(Math.random() * 500 + 50).toFixed(2)}</div>
                  <div style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 500, background: 'rgba(16,185,129,0.1)', padding: '4px 12px', borderRadius: '12px' }}>Completed</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const ProductDetailsPreview = () => (
  <MockupBrowser>
    <div style={{ width: '100%', background: '#0f1115', overflowY: 'auto' }}>
      <MockGNB />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 48px' }}>
        <div className="anatomy-layer" data-anatomy="Breadcrumb Navigation" style={{ color: '#94a3b8', marginBottom: '32px', fontSize: '0.9rem' }}>
           Home <ChevronDown size={14} style={{ transform: 'rotate(-90deg)', display: 'inline', margin: '0 8px' }} /> Products <ChevronDown size={14} style={{ transform: 'rotate(-90deg)', display: 'inline', margin: '0 8px' }} /> UI Kit
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', marginBottom: '80px' }}>
          {/* Left: Image Gallery */}
          <div className="anatomy-layer" data-anatomy="Product Image Gallery" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ width: '100%', height: '500px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Box size={120} color="rgba(255,255,255,0.1)" />
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ flex: 1, height: '100px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: i===1 ? '2px solid #3b82f6' : '1px solid rgba(255,255,255,0.05)' }} />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="anatomy-layer" data-anatomy="Product Information" style={{ marginBottom: '40px' }}>
              <div style={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Premium UI Kit</div>
              <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>Archive Pro Max</h1>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '32px' }}>$199.00 <span style={{ fontSize: '1.2rem', color: '#64748b', textDecoration: 'line-through', fontWeight: 400 }}>$299.00</span></div>
              
              <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6 }}>
                The ultimate collection of high-performance, accessible, and beautifully designed React components. Stop building from scratch.
              </p>
            </div>
            
            <div className="anatomy-layer" data-anatomy="Purchase Actions" style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
              <button style={{ flex: 1, background: '#fff', color: '#000', padding: '16px', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button style={{ width: '56px', background: 'rgba(255,255,255,0.05)', color: '#fff', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Heart size={24} />
              </button>
            </div>
            
            <div className="anatomy-layer" data-anatomy="Key Features" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px' }}>
              {['Lifetime Updates', 'Figma Source Files', 'Premium Support'].map((feature, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', marginBottom: '16px' }}>
                  <CheckCircle2 size={20} color="#10b981" /> {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="anatomy-layer" data-anatomy="Split Benefit Section" style={{ display: 'flex', alignItems: 'center', gap: '64px', marginBottom: '80px', padding: '64px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ flex: 1, height: '400px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px' }} />
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '24px' }}>Pixel Perfect Design</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6 }}>Every component is meticulously crafted to align perfectly on a 4px grid, ensuring your interfaces look sharp and professional.</p>
          </div>
        </div>

        <div className="anatomy-layer" data-anatomy="Bento Grid Specs" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '80px' }}>
          <div style={{ gridColumn: 'span 2', height: '300px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
             <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700 }}>Fully Responsive</h3>
          </div>
          <div style={{ height: '300px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
             <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700 }}>Dark Mode</h3>
          </div>
          <div style={{ height: '300px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
             <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700 }}>Accessible</h3>
          </div>
          <div style={{ gridColumn: 'span 2', height: '300px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
             <h3 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700 }}>TypeScript Ready</h3>
          </div>
        </div>

        <div className="anatomy-layer" data-anatomy="Accordion FAQ" style={{ maxWidth: '800px', margin: '0 auto 80px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '32px', textAlign: 'center' }}>Frequently Asked Questions</h2>
          {[1,2,3].map(i => (
            <div key={i} className="anatomy-layer" data-anatomy="FAQ Item Accordion" style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', color: '#fff', cursor: 'pointer' }}>
              <span style={{ fontWeight: 600 }}>What is included in the Pro Max tier?</span>
              <ChevronDown size={20} color="#94a3b8" />
            </div>
          ))}
        </div>

      </div>
      <div className="anatomy-layer" data-anatomy="Global Footer">
        <MockFooter />
      </div>
    </div>
  </MockupBrowser>
);

export const BlogHubPreview = () => (
  <MockupBrowser>
    <div style={{ width: '100%', background: '#0f1115', overflowY: 'auto' }}>
      <MockGNB />
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 48px' }}>
        <div className="anatomy-layer" data-anatomy="Category Navigation" style={{ display: 'flex', gap: '24px', marginBottom: '48px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px', color: '#94a3b8', fontWeight: 600 }}>
          <span style={{ color: '#fff' }}>All</span>
          <span>Design</span>
          <span>Engineering</span>
          <span>Product</span>
          <span>Company</span>
        </div>

        {/* Featured Article */}
        <div className="anatomy-layer" data-anatomy="Magazine Style Hero Layout" style={{ position: 'relative', height: '600px', borderRadius: '32px', overflow: 'hidden', marginBottom: '80px', display: 'flex', alignItems: 'flex-end', padding: '64px', background: 'linear-gradient(to top, #0f1115 0%, transparent 100%), rgba(59,130,246,0.1)' }}>
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
            <div style={{ display: 'inline-flex', padding: '8px 16px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '24px', textTransform: 'uppercase' }}>Design Engineering</div>
            <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>The future of interface architecture.</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#94a3b8' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
              <span>By Jane Doe</span>
              <span>•</span>
              <span>May 26, 2026</span>
            </div>
          </div>
        </div>
        
        <div className="anatomy-layer" data-anatomy="Featured Media Layout" style={{ padding: '48px', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', marginBottom: '80px', display: 'flex', gap: '48px', alignItems: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ flex: 1 }}>
            <div style={{ color: '#3b82f6', fontWeight: 700, letterSpacing: '2px', fontSize: '0.8rem', marginBottom: '16px' }}>PODCAST</div>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>The State of UI</h3>
            <p style={{ color: '#94a3b8', marginBottom: '24px', fontSize: '1.1rem' }}>Listen to our latest discussion on the future of user interfaces and design systems.</p>
            <button style={{ padding: '12px 24px', background: '#fff', color: '#000', borderRadius: '32px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}><Play size={18} fill="#000" /> Listen Now</button>
          </div>
          <div style={{ width: '400px', height: '250px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
             <Play size={48} color="#fff" opacity={0.2} />
          </div>
        </div>

        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '40px' }}>Latest Updates</h2>
        
        {/* Articles Grid */}
        <div className="anatomy-layer" data-anatomy="Latest Articles Grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '80px' }}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="anatomy-layer" data-anatomy="Article Card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '240px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.05)' }} />
              <div style={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.85rem', marginBottom: '12px' }}>TUTORIAL</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '12px', lineHeight: 1.3 }}>Building fluid layouts with modern CSS</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>Learn how to leverage container queries and grid to create truly responsive experiences without media queries.</p>
            </div>
          ))}
        </div>

        <div className="anatomy-layer" data-anatomy="Newsletter Subscription CTA" style={{ padding: '64px', background: 'rgba(59,130,246,0.1)', borderRadius: '32px', textAlign: 'center', border: '1px solid rgba(59,130,246,0.2)' }}>
           <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Join our newsletter</h2>
           <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '32px' }}>Get the best articles delivered to your inbox every week.</p>
           <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
             <input type="text" placeholder="Your email address" style={{ padding: '16px 24px', borderRadius: '12px', width: '300px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(0,0,0,0.2)', color: '#fff', outline: 'none' }} />
             <button style={{ padding: '16px 32px', background: '#3b82f6', color: '#fff', borderRadius: '12px', fontWeight: 700 }}>Subscribe</button>
           </div>
        </div>

      </div>
      <div className="anatomy-layer" data-anatomy="Global Footer">
        <MockFooter />
      </div>
    </div>
  </MockupBrowser>
);

export const AgencyPortfolioPreview = () => (
  <MockupBrowser>
    <div style={{ width: '100%', background: '#0a0b0e', overflowY: 'auto' }}>
      <MockGNB transparent />
      
      {/* Massive Hero */}
      <div className="anatomy-layer" data-anatomy="Interactive 3D Hero" style={{ height: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '20%', left: '20%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,240,255,0.15) 0%, transparent 60%)', pointerEvents: 'none', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '20%', right: '20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(138,43,226,0.15) 0%, transparent 60%)', pointerEvents: 'none', filter: 'blur(40px)' }} />
        
        <h1 style={{ fontSize: '8rem', fontWeight: 800, color: '#fff', lineHeight: 0.9, letterSpacing: '-0.04em', textTransform: 'uppercase', marginBottom: '32px', zIndex: 1 }}>
          We craft <br />
          <span style={{ fontStyle: 'italic', color: '#00f0ff' }}>digital</span> brilliance.
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#94a3b8', maxWidth: '700px', zIndex: 1, fontWeight: 300 }}>
          An award-winning creative studio building immersive web experiences for bold brands.
        </p>
        
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', color: '#fff', opacity: 0.5 }}>
          <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Scroll</span>
          <ChevronDown size={20} />
        </div>
      </div>

      {/* Selected Works - Asymmetric Grid */}
      <div className="anatomy-layer" data-anatomy="The Z-shape Layout Projects" style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 48px' }}>
        <h2 style={{ fontSize: '4rem', fontWeight: 700, color: '#fff', marginBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '32px' }}>Selected Works</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px' }}>
          <div className="anatomy-layer" data-anatomy="Project Poster" style={{ gridColumn: 'span 8', height: '600px', background: 'rgba(255,255,255,0.03)', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', bottom: '40px', left: '40px', color: '#fff' }}>
               <div style={{ fontSize: '2rem', fontWeight: 700 }}>Fintech Redefined</div>
               <div style={{ color: '#94a3b8' }}>Web Design & Strategy</div>
             </div>
          </div>
          <div className="anatomy-layer" data-anatomy="Project Poster" style={{ gridColumn: 'span 4', height: '600px', background: 'rgba(138,43,226,0.1)', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000' }}>
              <Play size={32} fill="#000" />
            </div>
          </div>
          <div className="anatomy-layer" data-anatomy="Project Poster" style={{ gridColumn: 'span 6', height: '500px', background: 'rgba(255,255,255,0.03)', borderRadius: '32px' }} />
          <div className="anatomy-layer" data-anatomy="Project Poster" style={{ gridColumn: 'span 6', height: '500px', background: 'rgba(255,255,255,0.03)', borderRadius: '32px' }} />
        </div>
      </div>

      <div className="anatomy-layer" data-anatomy="Horizontal Scroll Media" style={{ padding: '120px 0', overflow: 'hidden' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', padding: '0 48px', marginBottom: '40px' }}>Our Reels</h2>
        <div style={{ display: 'flex', gap: '32px', padding: '0 48px', width: '200%' }}>
          <div className="anatomy-layer" data-anatomy="Reel Video" style={{ width: '600px', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px' }} />
          <div className="anatomy-layer" data-anatomy="Reel Video" style={{ width: '600px', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px' }} />
          <div className="anatomy-layer" data-anatomy="Reel Video" style={{ width: '600px', height: '400px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px' }} />
        </div>
      </div>

      <div className="anatomy-layer" data-anatomy="Bento Grid Services" style={{ maxWidth: '1400px', margin: '0 auto', padding: '120px 48px' }}>
        <h2 style={{ fontSize: '4rem', fontWeight: 700, color: '#fff', marginBottom: '80px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '32px' }}>Capabilities</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
           <div className="anatomy-layer" data-anatomy="Service Capability" style={{ gridColumn: 'span 2', height: '300px', background: 'rgba(138,43,226,0.1)', borderRadius: '32px', padding: '48px', color: '#fff', display: 'flex', alignItems: 'flex-end' }}>
             <h3 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Digital Strategy</h3>
           </div>
           <div className="anatomy-layer" data-anatomy="Service Capability" style={{ height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '32px', padding: '48px', color: '#fff', display: 'flex', alignItems: 'flex-end' }}>
             <h3 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Identity</h3>
           </div>
           <div className="anatomy-layer" data-anatomy="Service Capability" style={{ height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '32px', padding: '48px', color: '#fff', display: 'flex', alignItems: 'flex-end' }}>
             <h3 style={{ fontSize: '2.5rem', fontWeight: 800 }}>UX/UI</h3>
           </div>
           <div className="anatomy-layer" data-anatomy="Service Capability" style={{ gridColumn: 'span 2', height: '300px', background: 'rgba(0,240,255,0.1)', borderRadius: '32px', padding: '48px', color: '#fff', display: 'flex', alignItems: 'flex-end' }}>
             <h3 style={{ fontSize: '2.5rem', fontWeight: 800 }}>Development</h3>
           </div>
        </div>
      </div>

      <div className="anatomy-layer" data-anatomy="Giant Typography Footer">
        <MockFooter />
      </div>
    </div>
  </MockupBrowser>
);

export const DeveloperPortalPreview = () => (
  <MockupBrowser>
    <div style={{ width: '100%', height: '100%', background: '#0a0b0e', display: 'flex', flexDirection: 'column' }}>
      <header className="anatomy-layer" data-anatomy="Portal Header" style={{ height: '64px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>
          <Terminal color="#3b82f6" /> API Docs
        </div>
        <div style={{ display: 'flex', gap: '32px', color: '#94a3b8', fontSize: '0.9rem', fontWeight: 500 }}>
          <span style={{ color: '#fff' }}>Documentation</span>
          <span>API Reference</span>
          <span>Playground</span>
          <span>Support</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.05)', padding: '6px 16px', borderRadius: '8px', color: '#64748b', fontSize: '0.9rem' }}>
          <Search size={16} /> Search docs... <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.8rem', marginLeft: '16px' }}>⌘K</kbd>
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left Sidebar */}
        <div className="anatomy-layer" data-anatomy="Documentation Sidebar" style={{ width: '280px', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '32px 24px', overflowY: 'auto' }}>
          <div style={{ color: '#fff', fontWeight: 700, marginBottom: '16px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Getting Started</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
            <div style={{ color: '#3b82f6', fontWeight: 500, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}><FileText size={16} /> Introduction</div>
            <div style={{ color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}><FileText size={16} /> Authentication</div>
            <div style={{ color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}><FileText size={16} /> Rate Limits</div>
          </div>
          <div style={{ color: '#fff', fontWeight: 700, marginBottom: '16px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Endpoints</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Users', 'Projects', 'Teams', 'Billing'].map((item, i) => (
              <div key={i} className="anatomy-layer" data-anatomy="Sidebar Section">
                <div style={{ color: '#94a3b8', fontWeight: 500, fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><ChevronRight size={16} /> {item}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '48px 64px', overflowY: 'auto', display: 'flex', gap: '64px' }}>
          <div style={{ flex: 1, maxWidth: '800px' }}>
            <div style={{ color: '#3b82f6', fontWeight: 600, fontSize: '0.9rem', marginBottom: '16px' }}>GETTING STARTED</div>
            <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '24px' }}>Introduction</h1>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '48px' }}>
              Welcome to the AdminPro API. You can use our API to access API endpoints, which can get information on various users, projects, and teams in our database.
            </p>

            <h2 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#fff', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Authentication <Hash size={20} color="#3b82f6" />
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '24px' }}>
              The API uses Bearer tokens to authenticate requests. You can view and manage your API keys in the Dashboard.
            </p>
            
            <div className="anatomy-layer" data-anatomy="Code Snippet Viewer" style={{ background: '#0f1115', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', overflow: 'hidden', marginBottom: '48px' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ display: 'flex', gap: '16px', color: '#94a3b8', fontSize: '0.9rem', fontWeight: 500 }}>
                  <span style={{ color: '#fff', borderBottom: '2px solid #3b82f6', paddingBottom: '12px', marginBottom: '-13px' }}>cURL</span>
                  <span>Node.js</span>
                  <span>Python</span>
                </div>
                <Copy size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
              </div>
              <div style={{ padding: '24px', color: '#e2e8f0', fontFamily: 'monospace', fontSize: '0.9rem', lineHeight: 1.5, overflowX: 'auto' }}>
                <span style={{ color: '#ec4899' }}>curl</span> <span style={{ color: '#3b82f6' }}>-X</span> GET \<br/>
                &nbsp;&nbsp;<span style={{ color: '#10b981' }}>"https://api.adminpro.com/v1/users"</span> \<br/>
                &nbsp;&nbsp;<span style={{ color: '#3b82f6' }}>-H</span> <span style={{ color: '#10b981' }}>"Authorization: Bearer YOUR_API_KEY"</span>
              </div>
            </div>

            <div className="anatomy-layer" data-anatomy="API Endpoint Tester" style={{ background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '16px', padding: '32px' }}>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px' }}>Try it out</h3>
              <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: '#3b82f6', color: '#fff', padding: '12px 16px', borderRadius: '8px', fontWeight: 700, fontSize: '0.9rem' }}>GET</div>
                <input type="text" value="https://api.adminpro.com/v1/users" readOnly style={{ flex: 1, background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '0 16px', borderRadius: '8px', outline: 'none' }} />
                <button style={{ background: '#fff', color: '#000', padding: '0 24px', borderRadius: '8px', fontWeight: 600 }}>Send</button>
              </div>
              <div style={{ background: '#0f1115', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '8px', padding: '24px', color: '#94a3b8', fontSize: '0.9rem', textAlign: 'center' }}>
                Response will appear here
              </div>
            </div>
          </div>
          
          {/* Right Sidebar (On this page) */}
          <div className="anatomy-layer" data-anatomy="On-this-page Navigation" style={{ width: '200px', flexShrink: 0 }}>
            <div style={{ position: 'sticky', top: '0' }}>
              <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '16px' }}>On this page</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', color: '#94a3b8', fontSize: '0.9rem' }}>
                <span style={{ color: '#3b82f6' }}>Authentication</span>
                <span>Base URL</span>
                <span>Rate Limits</span>
                <span>Errors</span>
                <span>Pagination</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const FintechDashboardPreview = () => (
  <MockupBrowser>
    <div style={{ width: '100%', height: '100%', background: '#0a0b0e', display: 'flex', flexDirection: 'column' }}>
      <header className="anatomy-layer" data-anatomy="Bank Header" style={{ height: '72px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>
          <Wallet color="#10b981" /> NovaBank
        </div>
        <div style={{ display: 'flex', gap: '32px', color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500 }}>
          <span style={{ color: '#fff' }}>Dashboard</span>
          <span>Transactions</span>
          <span>Cards</span>
          <span>Investments</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', color: '#94a3b8' }}>
          <Bell size={20} />
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'url(https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100) center/cover' }} />
        </div>
      </header>

      <div style={{ flex: 1, padding: '48px', overflowY: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Hello, Alex</h1>
              <p style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Welcome back. Here's your financial overview.</p>
            </div>
            <button className="anatomy-layer" data-anatomy="Quick Action Button" style={{ padding: '12px 24px', background: '#10b981', color: '#fff', borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Plus size={18} /> Add Money
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '32px', marginBottom: '32px' }}>
            {/* Balance & Card */}
            <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div className="anatomy-layer" data-anatomy="Asset Sparklines" style={{ background: '#0f1115', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px' }}>
                <div style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '8px' }}>Total Balance</div>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>$42,850<span style={{ color: '#64748b', fontSize: '1.5rem' }}>.00</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontWeight: 500, fontSize: '0.95rem' }}>
                  <ArrowUpRight size={18} /> +$1,240.50 (2.5%) today
                </div>
              </div>
              <div className="anatomy-layer" data-anatomy="Glassmorphism Card UI" style={{ height: '220px', borderRadius: '24px', background: 'linear-gradient(135deg, rgba(16,185,129,0.8), rgba(59,130,246,0.8))', padding: '32px', position: 'relative', overflow: 'hidden', color: '#fff', boxShadow: '0 24px 48px rgba(16,185,129,0.2)' }}>
                <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', filter: 'blur(30px)' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '48px', position: 'relative', zIndex: 1 }}>
                  <CreditCard size={32} />
                  <div style={{ fontWeight: 700, fontSize: '1.2rem', fontStyle: 'italic' }}>VISA</div>
                </div>
                <div style={{ fontSize: '1.2rem', letterSpacing: '2px', marginBottom: '24px', position: 'relative', zIndex: 1 }}>**** **** **** 4281</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', position: 'relative', zIndex: 1 }}>
                  <div>
                    <div style={{ opacity: 0.8, fontSize: '0.7rem', textTransform: 'uppercase' }}>Card Holder</div>
                    <div style={{ fontWeight: 600 }}>Alex Morgan</div>
                  </div>
                  <div>
                    <div style={{ opacity: 0.8, fontSize: '0.7rem', textTransform: 'uppercase' }}>Expires</div>
                    <div style={{ fontWeight: 600 }}>12/28</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Transfer & Chart */}
            <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div className="anatomy-layer" data-anatomy="Quick Transfer Widget" style={{ background: '#0f1115', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600, marginBottom: '24px' }}>Quick Transfer</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '2px dashed rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Plus size={24} /></div>
                    <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Add New</span>
                  </div>
                  {[
                    { name: 'Sarah', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
                    { name: 'Mike', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100' },
                    { name: 'Emma', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
                    { name: 'David', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' }
                  ].map((user, i) => (
                    <div key={i} className="anatomy-layer" data-anatomy="Contact Avatar" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                      <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: `url(${user.img}) center/cover`, border: '2px solid transparent', transition: 'border-color 0.2s' }} onMouseEnter={e => e.currentTarget.style.borderColor = '#10b981'} onMouseLeave={e => e.currentTarget.style.borderColor = 'transparent'} />
                      <span style={{ color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 500 }}>{user.name}</span>
                    </div>
                  ))}
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                    <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '32px', padding: '8px 8px 8px 24px', border: '1px solid rgba(255,255,255,0.1)' }}>
                      <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem', marginRight: '16px' }}>$250.00</span>
                      <button style={{ background: '#10b981', color: '#fff', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Send size={20} /></button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="anatomy-layer" data-anatomy="Recent Transactions List" style={{ background: '#0f1115', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 600 }}>Recent Transactions</h3>
                  <span style={{ color: '#3b82f6', fontWeight: 500, fontSize: '0.9rem', cursor: 'pointer' }}>View All</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { name: 'Apple Store', type: 'Technology', amount: '-$1,299.00', icon: Code, color: '#ef4444' },
                    { name: 'Salary Deposit', type: 'Income', amount: '+$5,400.00', icon: ArrowDownRight, color: '#10b981' },
                    { name: 'Starbucks', type: 'Food & Drink', amount: '-$5.40', icon: Box, color: '#ef4444' },
                    { name: 'Netflix', type: 'Entertainment', amount: '-$15.99', icon: Play, color: '#ef4444' }
                  ].map((tx, i) => (
                    <div key={i} className="anatomy-layer" data-anatomy="Transaction Row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '16px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                          <tx.icon size={20} />
                        </div>
                        <div>
                          <div style={{ color: '#fff', fontWeight: 600, fontSize: '1.05rem', marginBottom: '4px' }}>{tx.name}</div>
                          <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{tx.type}</div>
                        </div>
                      </div>
                      <div style={{ color: tx.color, fontWeight: 700, fontSize: '1.1rem' }}>{tx.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const RealEstateBookingPreview = () => (
  <MockupBrowser>
    <div style={{ width: '100%', height: '100%', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <header className="anatomy-layer" data-anatomy="Advanced Filter Bar" style={{ height: '80px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', background: '#fff', zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 800, fontSize: '1.5rem', color: '#0f172a' }}>
          <MapPin color="#f43f5e" fill="#f43f5e" size={28} /> StayFinder
        </div>
        
        <div className="anatomy-layer" data-anatomy="Search Input Bar" style={{ display: 'flex', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '32px', padding: '8px 8px 8px 24px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
             <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a' }}>Where</span>
             <input type="text" placeholder="Search destinations" style={{ border: 'none', outline: 'none', fontSize: '0.9rem', width: '130px', color: '#64748b' }} />
          </div>
          <div style={{ width: '1px', height: '32px', background: '#e2e8f0' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
             <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a' }}>Dates</span>
             <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Add dates</span>
          </div>
          <div style={{ width: '1px', height: '32px', background: '#e2e8f0' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
             <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0f172a' }}>Who</span>
             <span style={{ fontSize: '0.9rem', color: '#64748b' }}>Add guests</span>
          </div>
          <button style={{ background: '#f43f5e', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginLeft: '8px' }}>
             <Search size={20} />
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0f172a' }}>List your property</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', border: '1px solid #e2e8f0', padding: '8px 16px', borderRadius: '24px' }}>
            <Navigation size={18} color="#64748b" />
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#94a3b8' }} />
          </div>
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left List */}
        <div style={{ width: '60%', padding: '24px 40px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>Over 1,000 places in Seoul</h1>
            <button style={{ display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid #e2e8f0', padding: '8px 16px', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, color: '#0f172a' }}>
              <SlidersHorizontal size={16} /> Filters
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="anatomy-layer" data-anatomy="Listing Card" style={{ display: 'flex', flexDirection: 'column', gap: '12px', cursor: 'pointer' }}>
                <div style={{ position: 'relative', width: '100%', paddingTop: '90%', borderRadius: '16px', overflow: 'hidden', background: `url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&auto=format&fit=crop) center/cover` }}>
                   <div style={{ position: 'absolute', top: '16px', right: '16px', color: '#fff' }}>
                     <Heart size={24} fill="rgba(0,0,0,0.5)" />
                   </div>
                   <div style={{ position: 'absolute', top: '16px', left: '16px', background: '#fff', color: '#0f172a', padding: '4px 8px', borderRadius: '8px', fontSize: '0.8rem', fontWeight: 700, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                     Guest favorite
                   </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ fontWeight: 600, fontSize: '1rem', color: '#0f172a' }}>Gangnam-gu, Seoul</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', color: '#0f172a' }}>
                      <Star size={14} fill="#0f172a" /> 4.96
                    </div>
                  </div>
                  <div style={{ color: '#64748b', fontSize: '0.9rem', marginTop: '4px' }}>City and skyline views</div>
                  <div style={{ color: '#64748b', fontSize: '0.9rem' }}>Oct 15 - 20</div>
                  <div style={{ marginTop: '8px', fontSize: '1rem', color: '#0f172a' }}>
                    <span style={{ fontWeight: 700 }}>$124</span> / night
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Map */}
        <div className="anatomy-layer" data-anatomy="Interactive Map View" style={{ flex: 1, background: '#f1f5f9', position: 'relative', overflow: 'hidden', borderLeft: '1px solid #e2e8f0' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1000&auto=format&fit=crop) center/cover', opacity: 0.5, filter: 'grayscale(0.5)' }} />
          {/* Mock Markers */}
          {[
            { top: '30%', left: '40%', price: '$124' },
            { top: '50%', left: '60%', price: '$89' },
            { top: '70%', left: '30%', price: '$210' },
            { top: '40%', left: '70%', price: '$150' },
          ].map((marker, i) => (
            <div key={i} className="anatomy-layer" data-anatomy="Map Marker Pin" style={{ position: 'absolute', top: marker.top, left: marker.left, background: '#fff', padding: '8px 12px', borderRadius: '24px', fontWeight: 700, color: '#0f172a', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', cursor: 'pointer', transform: i===0 ? 'scale(1.1)' : 'scale(1)', zIndex: i===0 ? 10 : 1 }}>
              {marker.price}
            </div>
          ))}
          
          <div className="anatomy-layer" data-anatomy="Pricing Breakdown" style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', background: '#fff', padding: '24px', borderRadius: '24px', width: '320px', boxShadow: '0 12px 32px rgba(0,0,0,0.2)', zIndex: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ fontWeight: 700, fontSize: '1.2rem', color: '#0f172a' }}>$124 <span style={{ fontWeight: 400, fontSize: '1rem', color: '#64748b' }}>/ night</span></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.9rem', color: '#0f172a' }}>
                <Star size={14} fill="#0f172a" /> 4.96
              </div>
            </div>
            <button style={{ width: '100%', padding: '12px', background: '#f43f5e', color: '#fff', borderRadius: '8px', fontWeight: 700, marginBottom: '16px' }}>Reserve</button>
            <div style={{ color: '#64748b', fontSize: '0.85rem', textAlign: 'center' }}>You won't be charged yet</div>
          </div>
        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const SocialFeedPreview = () => (
  <MockupBrowser>
    <div style={{ width: '100%', height: '100%', background: '#000', display: 'flex', justifyContent: 'center' }}>
      <div style={{ display: 'flex', width: '100%', maxWidth: '1200px' }}>
        
        {/* Left Nav */}
        <div className="anatomy-layer" data-anatomy="Left Navigation Sidebar" style={{ width: '260px', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: '24px', borderRight: '1px solid rgba(255,255,255,0.1)', position: 'sticky', top: 0, height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 800, fontSize: '1.5rem', color: '#fff', padding: '0 12px', marginBottom: '16px' }}>
            <Hash size={32} color="#3b82f6" /> Nexus
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {['Home', 'Explore', 'Notifications', 'Messages', 'Bookmarks', 'Profile'].map((item, i) => (
              <div key={i} style={{ padding: '16px', borderRadius: '32px', color: i === 0 ? '#fff' : '#e2e8f0', fontWeight: i === 0 ? 700 : 500, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer', background: i === 0 ? 'rgba(255,255,255,0.1)' : 'transparent' }}>
                <div style={{ width: '24px', height: '24px', background: i === 0 ? '#fff' : '#e2e8f0', borderRadius: '4px' }} /> {item}
              </div>
            ))}
          </nav>
          <button style={{ background: '#3b82f6', color: '#fff', padding: '16px', borderRadius: '32px', fontSize: '1.1rem', fontWeight: 700, marginTop: '16px' }}>Post</button>
        </div>

        {/* Main Feed */}
        <div className="anatomy-layer" data-anatomy="Infinite Feed Stream" style={{ flex: 1, maxWidth: '600px', borderRight: '1px solid rgba(255,255,255,0.1)', overflowY: 'auto' }}>
          <div style={{ position: 'sticky', top: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)', padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', zIndex: 10 }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>Home</h2>
          </div>
          
          {/* Post Creator */}
          <div className="anatomy-layer" data-anatomy="Post Creator Input" style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '16px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'url(https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100) center/cover' }} />
            <div style={{ flex: 1 }}>
              <textarea placeholder="What is happening?!" style={{ width: '100%', background: 'transparent', border: 'none', color: '#fff', fontSize: '1.25rem', resize: 'none', outline: 'none', minHeight: '64px', paddingTop: '12px' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px' }}>
                <div style={{ display: 'flex', gap: '16px', color: '#3b82f6' }}>
                  <ImageIcon size={20} /> <Smile size={20} /> <Calendar size={20} /> <MapPin size={20} />
                </div>
                <button style={{ background: '#3b82f6', color: '#fff', padding: '8px 24px', borderRadius: '24px', fontWeight: 700 }}>Post</button>
              </div>
            </div>
          </div>

          {/* Posts */}
          {[1, 2, 3].map(i => (
            <div key={i} className="anatomy-layer" data-anatomy="Feed Post Card" style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: `url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100) center/cover`, flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: 700, color: '#fff' }}>Design System Co</span>
                    <span style={{ color: '#64748b' }}>@designsys · 2h</span>
                  </div>
                  <MoreHorizontal size={16} color="#64748b" />
                </div>
                <p style={{ color: '#fff', fontSize: '1.1rem', lineHeight: 1.5, marginBottom: '16px' }}>
                  We just released v2.0 of our component library! Including new layouts, dark mode support, and full accessibility features. Check it out 👇
                </p>
                <div style={{ width: '100%', height: '300px', borderRadius: '16px', background: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop) center/cover', marginBottom: '16px', border: '1px solid rgba(255,255,255,0.1)' }} />
                
                <div className="anatomy-layer" data-anatomy="Post Interactions" style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', paddingRight: '64px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', transition: 'color 0.2s' }}><MessageCircle size={18} /> 42</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#10b981' }}><Repeat size={18} /> 128</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', color: '#f43f5e' }}><Heart size={18} fill="#f43f5e" /> 1,402</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}><Share size={18} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div style={{ width: '340px', padding: '24px 32px', position: 'sticky', top: 0, height: '100%', overflowY: 'auto' }}>
          <div style={{ background: 'rgba(255,255,255,0.1)', padding: '16px 24px', borderRadius: '32px', display: 'flex', alignItems: 'center', gap: '16px', color: '#64748b', marginBottom: '24px' }}>
            <Search size={20} /> <span style={{ fontSize: '1.1rem' }}>Search</span>
          </div>

          <div className="anatomy-layer" data-anatomy="Trending Topics Panel" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '24px', padding: '24px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '24px' }}>Trends for you</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { category: 'Technology · Trending', topic: '#React19', posts: '124K' },
                { category: 'Design · Trending', topic: 'Glassmorphism', posts: '84.2K' },
                { category: 'Development · Trending', topic: 'TypeScript', posts: '210K' }
              ].map((trend, i) => (
                <div key={i} className="anatomy-layer" data-anatomy="Trending Topic Item">
                  <div style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '4px' }}>{trend.category}</div>
                  <div style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '4px' }}>{trend.topic}</div>
                  <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{trend.posts} posts</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="anatomy-layer" data-anatomy="Active Users Stories" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '24px', padding: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '24px' }}>Who to follow</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[1, 2, 3].map(i => (
                <div key={i} className="anatomy-layer" data-anatomy="User Suggestion Card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                     <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                     <div>
                       <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>User {i}</div>
                       <div style={{ color: '#64748b', fontSize: '0.9rem' }}>@user{i}</div>
                     </div>
                   </div>
                   <button style={{ background: '#fff', color: '#000', padding: '6px 16px', borderRadius: '16px', fontWeight: 700, fontSize: '0.9rem' }}>Follow</button>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  </MockupBrowser>
);

export const ELearningLMSPreview = () => (
  <MockupBrowser>
    <div style={{ width: '100%', height: '100%', background: '#0a0b0e', display: 'flex', flexDirection: 'column' }}>
      <header className="anatomy-layer" data-anatomy="LMS Header" style={{ height: '72px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 800, fontSize: '1.25rem', color: '#fff' }}>
          <BookOpen color="#3b82f6" /> LearnFlow
        </div>
        <div style={{ display: 'flex', gap: '16px', color: '#fff', alignItems: 'center' }}>
          <div className="anatomy-layer" data-anatomy="Learning Progress Bar" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '16px' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Course Progress</span>
            <div style={{ width: '100px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '45%', height: '100%', background: '#3b82f6' }} />
            </div>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#3b82f6' }}>45%</span>
          </div>
          <div className="anatomy-layer" data-anatomy="User Profile Badge" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Main Content (Video) */}
        <div style={{ flex: 1, padding: '32px 48px', overflowY: 'auto' }}>
          <div className="anatomy-layer" data-anatomy="Primary Video Player" style={{ width: '100%', aspectRatio: '16/9', background: '#000', borderRadius: '16px', marginBottom: '32px', position: 'relative', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <PlayCircle size={80} color="#fff" opacity={0.8} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px' }}>
                <div style={{ width: '30%', height: '100%', background: '#3b82f6', borderRadius: '2px', position: 'relative' }}>
                  <div style={{ position: 'absolute', right: '-6px', top: '-4px', width: '12px', height: '12px', borderRadius: '50%', background: '#3b82f6' }} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <Play size={20} fill="#fff" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>04:12 / 12:45</span>
                </div>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <Settings size={20} />
                  <MonitorPlay size={20} />
                </div>
              </div>
            </div>
          </div>

          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>3. Advanced Component Patterns</h1>
          <div className="anatomy-layer" data-anatomy="Lesson Metadata" style={{ display: 'flex', gap: '24px', color: '#94a3b8', fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '32px', marginBottom: '32px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={16} /> 12 mins</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Award size={16} /> Advanced Level</span>
          </div>

          <div className="anatomy-layer" data-anatomy="Student Discussion Tab" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
             <div style={{ display: 'flex', gap: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '16px' }}>
               <div style={{ padding: '0 16px 16px', color: '#fff', fontWeight: 600, borderBottom: '2px solid #3b82f6' }}>Overview</div>
               <div style={{ padding: '0 16px 16px', color: '#94a3b8', fontWeight: 500 }}>Q&A (12)</div>
               <div style={{ padding: '0 16px 16px', color: '#94a3b8', fontWeight: 500 }}>Transcripts</div>
             </div>
             <p style={{ color: '#e2e8f0', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '800px' }}>
               In this lesson, we will dive deep into creating highly reusable component patterns in React. We'll cover compound components, render props, and custom hooks to abstract complex logic.
             </p>
             <div className="anatomy-layer" data-anatomy="Q&A Thread" style={{ padding: '24px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '16px' }}>
               <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>A</div>
               <div style={{ flex: 1 }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                   <span style={{ color: '#fff', fontWeight: 600 }}>Alex Developer</span>
                   <span style={{ color: '#64748b', fontSize: '0.85rem' }}>2 days ago</span>
                 </div>
                 <p style={{ color: '#94a3b8', lineHeight: 1.5, marginBottom: '16px' }}>Could you explain why we used context here instead of just passing props down?</p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3b82f6', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}>
                   <MessageSquare size={16} /> View 2 replies
                 </div>
               </div>
             </div>
          </div>
        </div>

        {/* Right Sidebar (Curriculum) */}
        <div className="anatomy-layer" data-anatomy="Curriculum Accordion" style={{ width: '380px', borderLeft: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', background: '#0f1115' }}>
          <div style={{ padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>Course Content</h2>
            <span style={{ color: '#64748b', fontSize: '0.9rem' }}>14/32</span>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {[
              { title: '1. Introduction', time: '45 mins', lectures: 5, active: false, completed: true },
              { title: '2. React Fundamentals', time: '1h 20m', lectures: 8, active: false, completed: true },
              { title: '3. Advanced Patterns', time: '2h 15m', lectures: 12, active: true, completed: false },
              { title: '4. State Management', time: '1h 45m', lectures: 7, active: false, completed: false },
            ].map((section, i) => (
              <div key={i} className="anatomy-layer" data-anatomy="Curriculum Section" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ padding: '24px 32px', background: section.active ? 'rgba(59,130,246,0.05)' : 'transparent', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                  <div>
                    <div style={{ color: section.active ? '#3b82f6' : '#e2e8f0', fontWeight: 600, fontSize: '1.05rem', marginBottom: '8px' }}>{section.title}</div>
                    <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{section.lectures} lectures • {section.time}</div>
                  </div>
                  <ChevronDown size={20} color="#64748b" style={{ transform: section.active ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </div>
                {section.active && (
                  <div style={{ background: 'rgba(0,0,0,0.2)', padding: '16px 0' }}>
                    {[1, 2, 3, 4].map(l => (
                      <div key={l} className="anatomy-layer" data-anatomy="Video Lesson Item" style={{ padding: '12px 32px 12px 48px', display: 'flex', gap: '16px', alignItems: 'center', cursor: 'pointer', background: l === 3 ? 'rgba(255,255,255,0.05)' : 'transparent' }}>
                        {l < 3 ? <CheckCircle2 size={16} color="#10b981" /> : (l === 3 ? <PlayCircle size={16} color="#3b82f6" /> : <PlayCircle size={16} color="#64748b" />)}
                        <div style={{ color: l === 3 ? '#fff' : '#94a3b8', fontSize: '0.95rem', fontWeight: l===3 ? 600 : 400 }}>{l}. Component Lesson {l}</div>
                        <div style={{ marginLeft: 'auto', color: '#64748b', fontSize: '0.8rem' }}>12:45</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </MockupBrowser>
);
