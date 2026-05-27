import { Box, X } from 'lucide-react';

const NavGroup = ({ title, items, activeCategory, onSelect, icon: Icon }) => (
  <div className="nav-group">
    <div className="nav-title">{title}</div>
    <div className="nav-group-items">
      {items.map(category => (
        <button
          key={category.id}
          className={`nav-item ${activeCategory === category.id ? 'active' : ''}`}
          onClick={() => onSelect(category.id)}
        >
          <Icon size={18} />
          {category.title}
        </button>
      ))}
    </div>
  </div>
);

const Sidebar = ({ isOpen, onClose, activeCategory, onSelect, sections }) => (
  <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
    <div className="sidebar-header">
      <div
        className="logo-container"
        onClick={() => onSelect('introduction')}
        style={{ cursor: 'pointer' }}
      >
        <Box className="logo-icon" size={28} />
        <span className="logo-text">UI Archive</span>
      </div>
      <button className="mobile-close-btn" onClick={onClose}>
        <X size={24} />
      </button>
    </div>

    <nav className="sidebar-nav">
      {sections.map(section => (
        <NavGroup
          key={section.title}
          title={section.title}
          items={section.items}
          activeCategory={activeCategory}
          onSelect={onSelect}
          icon={section.icon}
        />
      ))}
    </nav>
  </aside>
);

export default Sidebar;
