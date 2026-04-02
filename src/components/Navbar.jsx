import React, { useState } from 'react';
import { Moon, Sun, Menu, X, FileText } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme, onOpenCVModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Documentation', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar glass-nav">
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          Tax<span>Pro</span>
        </a>

        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        <div className="nav-actions desktop-only">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={onOpenCVModal} className="btn btn-primary nav-btn-cv">
            <FileText size={18} />
            Download CV
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu glass-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-actions">
             <button className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light' ? <><Moon size={20} /> Dark Mode</> : <><Sun size={20} /> Light Mode</>}
            </button>
            <button onClick={() => { setIsMobileMenuOpen(false); onOpenCVModal(); }} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <FileText size={18} />
              Download CV
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
