import { Sparkles, ChevronDown, Component, CheckCircle2, LayoutDashboard, Star, Box, ArrowRight, Code, Cpu, Database, Globe, Users, Server, Activity, ListOrdered, Image as ImageIcon, Calendar, MapPin, Mail, Phone, Send, Award, Shield, Medal, TrendingUp, ArrowUpRight, CircleDot, Flag, Calculator, DollarSign, AtSign, Bell, X, Info, Megaphone, AlertTriangle, RefreshCw, Plus, Check, MessageCircle, Briefcase, Camera, Video } from 'lucide-react';
export const HeroPreview = () => (
  <div className="anatomy-layer" data-anatomy="Hero Section" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '40px' }}>
    <div className="anatomy-layer" data-anatomy="Social Proof" style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
      <Sparkles size={16} color="#00f0ff" />
      <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Trusted by 10,000+ publishers</span>
    </div>
    <div className="anatomy-layer" data-anatomy="Main Headline" style={{ marginBottom: '16px' }}>
      <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, background: 'linear-gradient(to right, #fff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Design Systems<br />Made Beautiful.
      </h1>
    </div>
    <div className="anatomy-layer" data-anatomy="Sub Headline" style={{ maxWidth: '600px', marginBottom: '32px' }}>
      <p style={{ fontSize: '1.25rem', color: '#94a3b8', lineHeight: 1.6 }}>
        Explore the ultimate UI/UX terminology and visual anatomy library.
      </p>
    </div>
    <div className="anatomy-layer" data-anatomy="Primary CTA" style={{ display: 'flex', gap: '16px' }}>
      <button style={{ background: '#3b82f6', color: '#fff', padding: '16px 32px', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 600, boxShadow: '0 8px 32px rgba(59,130,246,0.3)', border: '1px solid #60a5fa' }}>Start Building</button>
    </div>
    <div className="anatomy-layer" data-anatomy="Scroll Indicator" style={{ marginTop: '40px', color: '#94a3b8' }}>
      <ChevronDown size={24} />
    </div>
  </div>
);

export const FeaturesPreview = () => (
  <div className="anatomy-layer" data-anatomy="Features Section" style={{ padding: '64px 40px', height: '100%' }}>
    <div className="anatomy-layer" data-anatomy="Section Title" style={{ textAlign: 'center', marginBottom: '48px' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '16px' }}>Powerful Primitives</h2>
    </div>
    <div className="anatomy-layer" data-anatomy="Grid Layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
      {[1, 2, 3].map((i) => (
        <div key={i} className="anatomy-layer" data-anatomy="Feature Card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px' }}>
          <div className="anatomy-layer" data-anatomy="Icon Wrapper" style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
            <Component size={24} color="#3b82f6" />
          </div>
          <h3 className="anatomy-layer" data-anatomy="Card Title" style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '12px' }}>Atomic Design</h3>
          <span className="anatomy-layer" data-anatomy="Badge" style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', color: '#fff', marginLeft: '8px' }}>NEW</span>
        </div>
      ))}
    </div>
  </div>
);

export const SplitBenefitPreview = () => (
  <div className="anatomy-layer" data-anatomy="Alternating Layout" style={{ padding: '64px 40px', height: '100%', display: 'flex', alignItems: 'center', gap: '48px' }}>
    <div className="anatomy-layer" data-anatomy="Text Column" style={{ flex: 1 }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '24px' }}>Seamless Integration</h2>
      <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '32px', lineHeight: 1.6 }}>Connect all your favorite tools with just one click. We handle the heavy lifting so you can focus on building.</p>
      <ul className="anatomy-layer" data-anatomy="Bullet List" style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><CheckCircle2 size={20} color="#00f0ff" /> Sync across devices</li>
        <li style={{ display: 'flex', gap: '12px', alignItems: 'center' }}><CheckCircle2 size={20} color="#00f0ff" /> Real-time collaboration</li>
      </ul>
    </div>
    <div className="anatomy-layer" data-anatomy="Media Frame" style={{ flex: 1, height: '300px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <LayoutDashboard size={64} color="#3b82f6" opacity={0.5} />
    </div>
  </div>
);

export const BentoGridPreview = () => (
  <div className="anatomy-layer" data-anatomy="Bento Grid" style={{ padding: '40px', height: '100%', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridAutoRows: '160px', gap: '24px' }}>
    <div className="anatomy-layer" data-anatomy="Grid Span" style={{ gridColumn: 'span 2', gridRow: 'span 2', background: 'rgba(59,130,246,0.1)', borderRadius: '24px', border: '1px solid rgba(59,130,246,0.3)', padding: '32px' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Main Analytics</h3>
    </div>
    <div className="anatomy-layer" data-anatomy="Asymmetric Card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', padding: '24px' }}>
      <div className="anatomy-layer" data-anatomy="Feature Accent" style={{ width: '40px', height: '40px', background: '#8a2be2', borderRadius: '50%', marginBottom: '16px' }} />
      <p style={{ color: '#94a3b8' }}>Weekly Stats</p>
    </div>
    <div className="anatomy-layer" data-anatomy="Asymmetric Card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', padding: '24px' }}>
      <p style={{ color: '#94a3b8' }}>Users</p>
      <h3 style={{ fontSize: '2rem', marginTop: '8px' }}>14.2k</h3>
    </div>
  </div>
);

export const PricingPreview = () => (
  <div className="anatomy-layer" data-anatomy="Pricing Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Billing Toggle" style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '32px', padding: '4px', marginBottom: '48px', border: '1px solid rgba(255,255,255,0.1)' }}>
      <button style={{ padding: '8px 24px', borderRadius: '24px', background: 'transparent', color: '#94a3b8' }}>Monthly</button>
      <button style={{ padding: '8px 24px', borderRadius: '24px', background: '#3b82f6', color: '#fff' }}>Annually</button>
    </div>
    <div className="anatomy-layer" data-anatomy="Pricing Grid" style={{ display: 'flex', gap: '24px', justifyContent: 'center', width: '100%' }}>
      <div className="anatomy-layer" data-anatomy="Pricing Tier Card" style={{ flex: 1, maxWidth: '340px', background: 'rgba(20,24,32,0.8)', border: '1px solid #3b82f6', borderRadius: '24px', padding: '40px 32px', position: 'relative' }}>
        <div className="anatomy-layer" data-anatomy="Tier Badge" style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', color: '#fff', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>MOST POPULAR</div>
        <div className="anatomy-layer" data-anatomy="Price Display" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '32px' }}>$29<span style={{ fontSize: '1rem', color: '#94a3b8', fontWeight: 400 }}>/mo</span></div>
        <button className="anatomy-layer" data-anatomy="Tier CTA" style={{ width: '100%', padding: '12px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontWeight: 600, marginBottom: '32px' }}>Upgrade to Pro</button>
        <div className="anatomy-layer" data-anatomy="Feature Checklist" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[1, 2, 3].map(i => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <CheckCircle2 size={18} color="#3b82f6" />
              <span style={{ fontSize: '0.9rem', color: '#e2e8f0' }}>Premium feature {i}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const TestimonialsPreview = () => (
  <div className="anatomy-layer" data-anatomy="Testimonials Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px' }}>
    {[1, 2].map((i) => (
      <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '32px', flex: 1, maxWidth: '400px' }}>
        <div className="anatomy-layer" data-anatomy="Star Rating" style={{ display: 'flex', gap: '4px', marginBottom: '24px', color: '#f59e0b' }}>
          {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
        </div>
        <p className="anatomy-layer" data-anatomy="Review Quote" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px' }}>
          "This tool has revolutionized how we build interfaces. The anatomical breakdown makes communication between designers and developers absolutely seamless."
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="anatomy-layer" data-anatomy="Avatar" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#3b82f6' }} />
          <div className="anatomy-layer" data-anatomy="Reviewer Info">
            <h4 style={{ fontWeight: 600 }}>Sarah Jenkins</h4>
            <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Lead Designer @ TechCorp</span>
          </div>
          <div className="anatomy-layer" data-anatomy="Logo Badge" style={{ marginLeft: 'auto', opacity: 0.5 }}>
            <Box size={24} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const AccordionFAQPreview = () => (
  <div className="anatomy-layer" data-anatomy="FAQ Section" style={{ padding: '64px 40px', height: '100%', maxWidth: '800px', margin: '0 auto' }}>
    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '48px', textAlign: 'center' }}>Frequently Asked Questions</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {[1, 2, 3].map((i) => (
        <div key={i} className="anatomy-layer" data-anatomy="Accordion Item" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', overflow: 'hidden' }}>
          <div className="anatomy-layer" data-anatomy="Accordion Trigger" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 500 }}>How does the Anatomy Mode work?</h3>
            <div className="anatomy-layer" data-anatomy="Toggle Indicator"><ChevronDown size={20} color="#94a3b8" /></div>
          </div>
          {i === 1 && (
            <div className="anatomy-layer" data-anatomy="Accordion Panel" style={{ padding: '0 24px 24px 24px', color: '#94a3b8', lineHeight: 1.6 }}>
              It visually overlays boxes and tooltips onto existing DOM elements using simple CSS pseudo-elements and data attributes.
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export const LogoCloudPreview = () => {
  const logos = [
    { Icon: Box, name: 'BlockCo' },
    { Icon: Code, name: 'DevStream' },
    { Icon: Cpu, name: 'SysLogic' },
    { Icon: Database, name: 'DataGrid' },
    { Icon: Globe, name: 'GlobalNet' },
  ];
  return (
    <div className="anatomy-layer" data-anatomy="Logo Cloud Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h3 style={{ color: '#94a3b8', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '32px' }}>Trusted by innovative teams worldwide</h3>
      
      {/* Static Track */}
      <div className="anatomy-layer" data-anatomy="Logo Track" style={{ display: 'flex', gap: '48px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', opacity: 0.6 }}>
        {logos.map((company, i) => (
          <div key={i} className="anatomy-layer" data-anatomy="Grayscale Logo" style={{ display: 'flex', alignItems: 'center', gap: '8px', filter: 'grayscale(100%)', transition: 'all 0.3s', cursor: 'pointer' }}>
            <company.Icon size={32} />
            <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>{company.name}</span>
          </div>
        ))}
      </div>

      {/* Animated Sliding Track */}
      <div className="anatomy-layer" data-anatomy="Infinite Logo Track" style={{ marginTop: '64px', width: '100%', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '100px', background: 'linear-gradient(to right, #0f1115, transparent)', zIndex: 2 }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '100px', background: 'linear-gradient(to left, #0f1115, transparent)', zIndex: 2 }} />
        <div style={{ display: 'flex', width: 'max-content', animation: 'logo-scroll 20s linear infinite', opacity: 0.4 }}>
          {/* First set */}
          <div style={{ display: 'flex', gap: '80px', paddingRight: '80px' }}>
            {logos.map((company, i) => (
              <div key={`s1-${i}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', filter: 'grayscale(100%)' }}>
                <company.Icon size={32} />
                <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{company.name}</span>
              </div>
            ))}
          </div>
          {/* Second set (duplicate for loop) */}
          <div style={{ display: 'flex', gap: '80px', paddingRight: '80px' }}>
            {logos.map((company, i) => (
              <div key={`s2-${i}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', filter: 'grayscale(100%)' }}>
                <company.Icon size={32} />
                <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CTAPreview = () => (
  <div className="anatomy-layer" data-anatomy="CTA Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Background Pattern/Glow" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(138,43,226,0.1))', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '32px', padding: '64px', textAlign: 'center', maxWidth: '800px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(0,240,255,0.1) 0%, transparent 50%)', pointerEvents: 'none' }} />
      <h2 className="anatomy-layer" data-anatomy="Punchy Headline" style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px', color: '#fff' }}>Ready to scale your product?</h2>
      <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>Join thousands of developers building the future with our advanced UI primitives.</p>
      <button className="anatomy-layer" data-anatomy="Primary Action Button" style={{ background: '#fff', color: '#0f1115', padding: '16px 40px', borderRadius: '32px', fontSize: '1.1rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 32px rgba(255,255,255,0.2)' }}>
        Get Started Now <ArrowRight size={20} />
      </button>
    </div>
  </div>
);

export const StatsPreview = () => (
  <div className="anatomy-layer" data-anatomy="Stats Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ display: 'flex', width: '100%', maxWidth: '1000px', background: 'rgba(20,24,32,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: '48px 0' }}>
      <div className="anatomy-layer" data-anatomy="Stat Block" style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Users size={24} color="#3b82f6" style={{ marginBottom: '8px' }} />
        <h3 className="anatomy-layer" data-anatomy="Metric Value" style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff' }}>2M+</h3>
        <p className="anatomy-layer" data-anatomy="Metric Label" style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Active Users</p>
      </div>
      <div className="anatomy-layer" data-anatomy="Divider" style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
      <div className="anatomy-layer" data-anatomy="Stat Block" style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Server size={24} color="#8a2be2" style={{ marginBottom: '8px' }} />
        <h3 className="anatomy-layer" data-anatomy="Metric Value" style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff' }}>99.9%</h3>
        <p className="anatomy-layer" data-anatomy="Metric Label" style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Uptime SLA</p>
      </div>
      <div className="anatomy-layer" data-anatomy="Divider" style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
      <div className="anatomy-layer" data-anatomy="Stat Block" style={{ flex: 1, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Activity size={24} color="#00f0ff" style={{ marginBottom: '8px' }} />
        <h3 className="anatomy-layer" data-anatomy="Metric Value" style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff' }}>0.5s</h3>
        <p className="anatomy-layer" data-anatomy="Metric Label" style={{ color: '#94a3b8', fontSize: '1.1rem' }}>Avg Latency</p>
      </div>
    </div>
  </div>
);

export const HowItWorksPreview = () => (
  <div className="anatomy-layer" data-anatomy="How it Works Section" style={{ padding: '64px 40px', height: '100%', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '64px', color: '#fff' }}>How it works</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%', position: 'relative' }}>
      <div className="anatomy-layer" data-anatomy="Connecting Line" style={{ position: 'absolute', top: '24px', bottom: '24px', left: '32px', width: '2px', background: 'rgba(59,130,246,0.3)', zIndex: 0 }} />
      {[
        { step: 1, title: 'Install the Package', desc: 'Run npm install to add our core primitives to your project.' },
        { step: 2, title: 'Import Components', desc: 'Bring in the pieces you need with simple named imports.' },
        { step: 3, title: 'Customize & Build', desc: 'Tweak styles via props or CSS and ship faster than ever.' }
      ].map((item) => (
        <div key={item.step} style={{ display: 'flex', gap: '24px', zIndex: 1 }}>
          <div className="anatomy-layer" data-anatomy="Step Number/Icon" style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#0f1115', border: '2px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 700, color: '#3b82f6', flexShrink: 0, boxShadow: '0 0 16px rgba(59,130,246,0.2)' }}>
            {item.step}
          </div>
          <div className="anatomy-layer" data-anatomy="Step Description" style={{ paddingTop: '16px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>{item.title}</h3>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ArticlesPreview = () => (
  <div className="anatomy-layer" data-anatomy="Articles Grid Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%', marginBottom: '40px' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff' }}>Latest Updates</h2>
      <button style={{ color: '#3b82f6', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>View all <ArrowRight size={16} /></button>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', width: '100%' }}>
      {[1, 2, 3].map((i) => (
        <div key={i} className="anatomy-layer" data-anatomy="Article Card" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div className="anatomy-layer" data-anatomy="Article Thumbnail" style={{ height: '200px', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ImageIcon size={48} color="rgba(59,130,246,0.4)" />
          </div>
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div className="anatomy-layer" data-anatomy="Meta Data" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.85rem', marginBottom: '16px' }}>
              <Calendar size={14} /> Oct {12 + i}, 2026
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Understanding the anatomy of modern UIs</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>Deep dive into how we structure and name our components for better team alignment.</p>
            <div className="anatomy-layer" data-anatomy="Read More Link" style={{ color: '#00f0ff', fontSize: '0.95rem', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              Read more <ArrowRight size={16} />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ContactUsPreview = () => (
  <div className="anatomy-layer" data-anatomy="Contact Us Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ display: 'flex', width: '100%', maxWidth: '1000px', gap: '48px', background: 'rgba(255,255,255,0.02)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', padding: '48px' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Get in touch</h2>
        <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '48px' }}>We'd love to hear from you. Please fill out this form or shoot us an email.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {[
            { icon: Mail, title: 'Email', detail: 'hello@ui-archive.com' },
            { icon: Phone, title: 'Phone', detail: '+1 (555) 000-0000' },
            { icon: MapPin, title: 'Office', detail: '123 Design Street, Creative City' }
          ].map((info, idx) => (
            <div key={idx} className="anatomy-layer" data-anatomy="Contact Info Block" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <info.icon size={20} color="#3b82f6" />
              </div>
              <div>
                <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '4px' }}>{info.title}</h4>
                <p style={{ color: '#94a3b8' }}>{info.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="anatomy-layer" data-anatomy="Inquiry Form" style={{ flex: 1, background: 'rgba(15,17,21,0.6)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.08)', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ display: 'flex', gap: '16px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>First Name</label>
            <div style={{ width: '100%', height: '48px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>Last Name</label>
            <div style={{ width: '100%', height: '48px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
          </div>
        </div>
        <div>
          <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>Email</label>
          <div style={{ width: '100%', height: '48px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
        </div>
        <div>
          <label style={{ display: 'block', color: '#94a3b8', fontSize: '0.9rem', marginBottom: '8px' }}>Message</label>
          <div style={{ width: '100%', height: '120px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} />
        </div>
        <button style={{ width: '100%', height: '48px', background: '#3b82f6', color: '#fff', borderRadius: '8px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '8px' }}>
          Send Message <Send size={16} />
        </button>
      </div>
    </div>
  </div>
);

export const TeamSectionPreview = () => (
  <div className="anatomy-layer" data-anatomy="Team Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Meet Our Team</h2>
    <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '48px', maxWidth: '600px', textAlign: 'center' }}>The brilliant minds behind the UI Archive, working across the globe to bring you the best components.</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', width: '100%', maxWidth: '1200px' }}>
      {[
        { name: 'Alice Smith', role: 'Lead Designer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop' },
        { name: 'Bob Johnson', role: 'Frontend Eng', img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&auto=format&fit=crop' },
        { name: 'Charlie Lee', role: 'Product Manager', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop' },
        { name: 'Diana Prince', role: 'UX Researcher', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop' }
      ].map((member, i) => (
        <div key={i} className="anatomy-layer" data-anatomy="Profile Card" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', overflow: 'hidden', transition: 'transform 0.3s, box-shadow 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 16px 32px rgba(59,130,246,0.1)'}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'}}>
          <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: `url(${member.img}) center/cover`, marginBottom: '24px', border: '4px solid rgba(59,130,246,0.2)' }} />
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{member.name}</h3>
          <p style={{ color: '#3b82f6', fontSize: '0.95rem', fontWeight: 500, marginBottom: '24px' }}>{member.role}</p>
          <div className="anatomy-layer" data-anatomy="Social Overlay" style={{ display: 'flex', gap: '12px', background: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: '32px' }}>
            <MessageCircle size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
            <Briefcase size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
            <Globe size={16} color="#94a3b8" style={{ cursor: 'pointer' }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const AwardsCertificationsPreview = () => (
  <div className="anatomy-layer" data-anatomy="Awards & Certifications" style={{ padding: '64px 40px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Recognized by Industry Leaders</h2>
    <p style={{ color: '#94a3b8', marginBottom: '48px' }}>Our commitment to quality has earned us top honors worldwide.</p>
    <div className="anatomy-layer" data-anatomy="Badge Marquee" style={{ width: '100%', position: 'relative', display: 'flex', gap: '32px', overflow: 'hidden', padding: '24px 0' }}>
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '150px', background: 'linear-gradient(to right, #0f1115, transparent)', zIndex: 2 }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '150px', background: 'linear-gradient(to left, #0f1115, transparent)', zIndex: 2 }} />
      <div style={{ display: 'flex', gap: '32px', animation: 'logo-scroll 15s linear infinite' }}>
        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item, i) => (
          <div key={i} className="anatomy-layer" data-anatomy="Metallic Badge" style={{ minWidth: '240px', height: '100px', background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '16px', display: 'flex', alignItems: 'center', padding: '24px', gap: '16px', boxShadow: 'inset 0 0 20px rgba(255,255,255,0.05), 0 8px 24px rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #fbbf24, #d97706)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(217,119,6,0.4)' }}>
              <Award size={24} color="#fff" />
            </div>
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Product of the Year</div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Design Awards 2026</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const CaseStudyPortfolioPreview = () => (
  <div className="anatomy-layer" data-anatomy="Case Study Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', justifyContent: 'center' }}>
    <div style={{ display: 'flex', gap: '48px', maxWidth: '1200px', width: '100%', alignItems: 'center' }}>
      <div style={{ flex: 1, position: 'relative' }}>
        <div className="anatomy-layer" data-anatomy="Large Thumbnail" style={{ width: '100%', height: '400px', borderRadius: '32px', background: 'url(\"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop\") center/cover', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 24px 48px rgba(0,0,0,0.5)' }} />
        <div className="anatomy-layer" data-anatomy="Metrics Overlap" style={{ position: 'absolute', bottom: '-24px', right: '-24px', background: 'rgba(15,23,42,0.9)', backdropFilter: 'blur(16px)', border: '1px solid rgba(59,130,246,0.4)', borderRadius: '24px', padding: '32px', display: 'flex', gap: '32px', boxShadow: '0 16px 32px rgba(0,0,0,0.4)' }}>
          <div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Conversion</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#10b981', display: 'flex', alignItems: 'center', gap: '8px' }}><TrendingUp size={24} /> +124%</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }} />
          <div>
            <div style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Bounce Rate</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#3b82f6' }}>-42%</div>
          </div>
        </div>
      </div>
      <div style={{ flex: 1, paddingLeft: '48px' }}>
        <div style={{ display: 'inline-block', padding: '6px 12px', background: 'rgba(59,130,246,0.1)', color: '#3b82f6', borderRadius: '16px', fontSize: '0.85rem', fontWeight: 700, marginBottom: '16px' }}>Fintech Case Study</div>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '24px', lineHeight: 1.2 }}>Redefining the banking experience.</h2>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '32px' }}>See how we helped GlobalBank increase their user engagement and streamline the onboarding process using our advanced component library.</p>
        <button style={{ padding: '16px 32px', background: '#fff', color: '#0f172a', borderRadius: '32px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Read Full Study <ArrowUpRight size={18} /></button>
      </div>
    </div>
  </div>
);

export const TimelineRoadmapPreview = () => (
  <div className="anatomy-layer" data-anatomy="Timeline / Roadmap Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '64px' }}>Product Roadmap</h2>
    <div style={{ position: 'relative', width: '100%', maxWidth: '800px' }}>
      <div className="anatomy-layer" data-anatomy="Progress Line" style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '4px', background: 'linear-gradient(to bottom, #3b82f6 50%, rgba(59,130,246,0.1) 50%)', transform: 'translateX(-50%)', borderRadius: '4px' }} />
      {[
        { date: 'Q1 2026', title: 'Foundation & Core', desc: 'Released 50+ basic primitives and robust design token system.', done: true },
        { date: 'Q2 2026', title: 'Advanced Components', desc: 'Introduced complex data tables, charts, and calendar widgets.', done: true },
        { date: 'Q3 2026', title: 'AI Integration', desc: 'Smart auto-completion and layout suggestions built into the core.', done: false },
      ].map((item, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', width: '100%', marginBottom: '48px', position: 'relative' }}>
          <div className="anatomy-layer" data-anatomy="Milestone Node" style={{ position: 'absolute', left: '50%', top: '24px', width: '20px', height: '20px', borderRadius: '50%', background: item.done ? '#3b82f6' : '#0f1115', border: `4px solid ${item.done ? '#fff' : '#3b82f6'}`, transform: 'translate(-50%, -50%)', zIndex: 10, boxShadow: item.done ? '0 0 20px rgba(59,130,246,0.6)' : 'none' }} />
          <div style={{ width: '45%', display: 'flex', flexDirection: 'column', alignItems: i % 2 === 0 ? 'flex-end' : 'flex-start', textAlign: i % 2 === 0 ? 'right' : 'left' }}>
            <div style={{ color: '#3b82f6', fontWeight: 700, marginBottom: '8px', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{item.date}</div>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', width: '100%', opacity: item.done ? 1 : 0.5 }}>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ComparisonTablePreview = () => (
  <div className="anatomy-layer" data-anatomy="Comparison Table Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#fff', marginBottom: '48px' }}>Compare our plans</h2>
    <div style={{ width: '100%', maxWidth: '1000px', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="anatomy-layer" data-anatomy="Sticky Header" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: 'rgba(15,17,21,0.95)', borderBottom: '1px solid rgba(255,255,255,0.1)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ padding: '24px' }} />
        <div style={{ padding: '24px', textAlign: 'center', fontWeight: 700, color: '#94a3b8' }}>Basic</div>
        <div className="anatomy-layer" data-anatomy="Highlighted Column Header" style={{ padding: '24px', textAlign: 'center', fontWeight: 800, color: '#fff', background: 'linear-gradient(to bottom, rgba(59,130,246,0.2), transparent)', borderTop: '2px solid #3b82f6' }}>Pro</div>
        <div style={{ padding: '24px', textAlign: 'center', fontWeight: 700, color: '#94a3b8' }}>Enterprise</div>
      </div>
      {[
        { feature: 'Component Library', basic: true, pro: true, ent: true },
        { feature: 'Figma Source Files', basic: false, pro: true, ent: true },
        { feature: 'Priority Support', basic: false, pro: true, ent: true },
        { feature: 'Custom SSO & SAML', basic: false, pro: false, ent: true },
      ].map((row, i) => (
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
          <div style={{ padding: '24px', color: '#e2e8f0', fontWeight: 500 }}>{row.feature}</div>
          <div style={{ padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {row.basic ? <Check color="#94a3b8" /> : <X color="#334155" />}
          </div>
          <div className="anatomy-layer" data-anatomy="Highlighted Column Cell" style={{ padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'rgba(59,130,246,0.05)' }}>
            {row.pro ? <Check color="#3b82f6" strokeWidth={3} /> : <X color="#334155" />}
          </div>
          <div style={{ padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {row.ent ? <Check color="#94a3b8" /> : <X color="#334155" />}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ROICalculatorPreview = () => (
  <div className="anatomy-layer" data-anatomy="ROI Calculator Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: '100%', maxWidth: '900px', display: 'flex', gap: '48px', background: 'rgba(20,24,32,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '32px', padding: '48px', boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Calculate your ROI</h2>
          <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>See how much time and money you can save by using our robust components.</p>
        </div>
        <div className="anatomy-layer" data-anatomy="Range Slider">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: '#e2e8f0', fontWeight: 600 }}>
            <span>Engineers on team</span>
            <span style={{ color: '#3b82f6' }}>12</span>
          </div>
          <input type="range" min="1" max="50" defaultValue="12" style={{ width: '100%', accentColor: '#3b82f6', cursor: 'pointer' }} readOnly />
        </div>
        <div className="anatomy-layer" data-anatomy="Range Slider">
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', color: '#e2e8f0', fontWeight: 600 }}>
            <span>Average hourly rate</span>
            <span style={{ color: '#3b82f6' }}>$75</span>
          </div>
          <input type="range" min="20" max="200" defaultValue="75" style={{ width: '100%', accentColor: '#3b82f6', cursor: 'pointer' }} readOnly />
        </div>
      </div>
      <div className="anatomy-layer" data-anatomy="Real-time Metrics" style={{ flex: 1, background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)', borderRadius: '24px', padding: '40px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '8px' }}>Estimated Savings / Year</div>
          <div style={{ fontSize: '3.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '12px' }}><DollarSign size={40} /> 144,000</div>
        </div>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.2)', marginBottom: '32px' }} />
        <div>
          <div style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '8px' }}>Time Saved</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 700 }}>1,920 <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>hours</span></div>
        </div>
      </div>
    </div>
  </div>
);

export const NewsletterSectionPreview = () => (
  <div className="anatomy-layer" data-anatomy="Newsletter Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="anatomy-layer" data-anatomy="Aurora Background" style={{ width: '100%', maxWidth: '1000px', background: 'linear-gradient(45deg, #ec4899, #8b5cf6, #3b82f6)', borderRadius: '32px', padding: '4px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ background: '#0f1115', borderRadius: '28px', padding: '64px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div style={{ width: '64px', height: '64px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
          <AtSign size={32} color="#fff" />
        </div>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Join the community</h2>
        <p style={{ color: '#94a3b8', fontSize: '1.2rem', marginBottom: '48px', maxWidth: '500px' }}>Get weekly updates on new components, design patterns, and frontend best practices.</p>
        
        <div className="anatomy-layer" data-anatomy="Glass Input Form" style={{ display: 'flex', gap: '16px', width: '100%', maxWidth: '500px', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(16px)', padding: '8px', borderRadius: '48px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <input type="email" placeholder="Enter your email address" style={{ flex: 1, background: 'transparent', border: 'none', padding: '0 24px', color: '#fff', outline: 'none', fontSize: '1.1rem' }} readOnly />
          <button style={{ padding: '16px 32px', background: '#fff', color: '#0f1115', borderRadius: '40px', fontWeight: 700, fontSize: '1rem' }}>Subscribe</button>
        </div>
        <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '24px' }}>No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  </div>
);

export const AnnouncementBarPreview = () => (
  <div className="anatomy-layer" data-anatomy="Announcement Bar Section" style={{ padding: '40px', height: '100%', display: 'flex', flexDirection: 'column' }}>
    <div className="anatomy-layer" data-anatomy="Announcement Bar" style={{ background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)', padding: '12px 24px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Megaphone size={18} />
        <span style={{ fontWeight: 600, background: 'rgba(255,255,255,0.2)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>NEW</span>
      </div>
      <div className="anatomy-layer" data-anatomy="Ticker Text" style={{ flex: 1, textAlign: 'center', fontSize: '0.95rem', fontWeight: 500 }}>
        Introducing UI Archive v2.0 - More components, better performance, and full accessibility support! <span style={{ textDecoration: 'underline', cursor: 'pointer', marginLeft: '8px' }}>Read the release notes</span>
      </div>
      <div className="anatomy-layer" data-anatomy="Dismiss Button" style={{ cursor: 'pointer', opacity: 0.8 }}>
        <X size={18} />
      </div>
    </div>
    
    <div style={{ flex: 1, border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '12px', marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
      (Main Website Content Below)
    </div>
  </div>
);

export const MegaFooterPreview = () => (
  <div className="anatomy-layer" data-anatomy="Mega Footer Section" style={{ height: '100%', background: '#0a0a0b', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
    <div className="anatomy-layer" data-anatomy="Watermark Logo" style={{ position: 'absolute', bottom: '-10%', right: '-5%', fontSize: '20rem', fontWeight: 900, color: 'rgba(255,255,255,0.02)', zIndex: 0, letterSpacing: '-0.05em' }}>UI</div>
    <div style={{ padding: '80px 64px', position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '64px', marginBottom: '80px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', color: '#fff' }}>
            <Box size={32} /> <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>UI Archive</span>
          </div>
          <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '32px', maxWidth: '300px' }}>Building the future of web interfaces with premium, accessible, and customizable components.</p>
          <div style={{ display: 'flex', gap: '16px', color: '#64748b' }}>
            <MessageCircle size={24} /> <Globe size={24} /> <Briefcase size={24} />
          </div>
        </div>
        {[
          { title: 'Product', links: ['Features', 'Integrations', 'Pricing', 'Changelog'] },
          { title: 'Resources', links: ['Documentation', 'Blog', 'Community', 'Templates'] },
          { title: 'Company', links: ['About Us', 'Careers', 'Contact', 'Partners'] },
          { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] }
        ].map((col, idx) => (
          <div key={idx} className="anatomy-layer" data-anatomy="Link Columns">
            <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', marginBottom: '24px' }}>{col.title}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {col.links.map(link => (
                <li key={link} style={{ color: '#94a3b8', cursor: 'pointer', transition: 'color 0.2s' }}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 'auto', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.9rem' }}>
        <span>© 2026 UI Archive Inc. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <span>Status: All systems operational</span>
          <span>English (US)</span>
        </div>
      </div>
    </div>
  </div>
);

export const ErrorEmptyStatesPreview = () => (
  <div className="anatomy-layer" data-anatomy="Error / Empty States Section" style={{ padding: '64px 40px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: '100%', maxWidth: '600px', background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '32px', padding: '80px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <div className="anatomy-layer" data-anatomy="Illustration" style={{ width: '120px', height: '120px', background: 'rgba(59,130,246,0.1)', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', position: 'relative' }}>
        <ListOrdered size={48} color="#3b82f6" opacity={0.5} />
        <div style={{ position: 'absolute', bottom: '-8px', right: '-8px', background: '#0f1115', borderRadius: '50%', padding: '8px' }}>
          <AlertTriangle size={24} color="#f59e0b" />
        </div>
      </div>
      <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>No projects found</h3>
      <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '400px', lineHeight: 1.6 }}>It looks like you haven't created any projects yet. Start building your first awesome interface right now!</p>
      
      <div style={{ display: 'flex', gap: '16px' }}>
        <button className="anatomy-layer" data-anatomy="Secondary Action" style={{ padding: '16px 24px', background: 'rgba(255,255,255,0.05)', color: '#fff', borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <RefreshCw size={18} /> Refresh
        </button>
        <button className="anatomy-layer" data-anatomy="Primary CTA" style={{ padding: '16px 32px', background: '#3b82f6', color: '#fff', borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 8px 24px rgba(59,130,246,0.3)' }}>
          <Plus size={18} /> Create New Project
        </button>
      </div>
    </div>
  </div>
);
