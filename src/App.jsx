import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';
import { X, MessageCircle } from 'lucide-react';
import { lockScroll, unlockScroll } from './utils/scrollLock';

// Import New Pages
import ExperiencePage from './pages/ExperiencePage';
import GalleryPage from './pages/GalleryPage';

// Home Component wrapping all sections
const Home = ({ onOpenCVModal }) => (
  <>
    <ScrollReveal><Hero /></ScrollReveal>
    <ScrollReveal><About /></ScrollReveal>
    <ScrollReveal><Skills /></ScrollReveal>
    <ScrollReveal><Experience /></ScrollReveal>
    <ScrollReveal><Gallery /></ScrollReveal>
    <ScrollReveal><Contact onOpenCVModal={onOpenCVModal} /></ScrollReveal>
  </>
);

function App() {
  const [theme, setTheme] = useState('light');
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const handleOpenCV = () => {
    setIsCVModalOpen(true);
    lockScroll();
  };

  const handleCloseCV = () => {
    setIsCVModalOpen(false);
    unlockScroll();
  };

  const handleCVActionClick = () => {
    handleCloseCV();
    const element = document.getElementById('contact');
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
        window.location.hash = 'contact'; 
        const formCard = document.getElementById('wa-form-highlight');
        if (formCard) {
            formCard.classList.remove('is-glowing');
            void formCard.offsetWidth;
            formCard.classList.add('is-glowing');
        }
      }, 300);
    }
  };

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} onOpenCVModal={handleOpenCV} />
      
      <Routes>
        <Route path="/" element={<Home onOpenCVModal={handleOpenCV} />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/gallery/:categoryId" element={<GalleryPage />} />
      </Routes>

      {/* CV Modal Overlay */}
      {isCVModalOpen && (
        <div className="cv-modal-backdrop" onClick={handleCloseCV} style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
            background: 'rgba(15,23,42,0.9)', backdropFilter: 'blur(10px)',
            zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px', animation: 'fadeIn 0.3s ease'
        }}>
          <div className="cv-modal-content glass-card" onClick={e=>e.stopPropagation()} style={{
              maxWidth: '600px', width: '100%', padding: '40px', textAlign: 'center', position: 'relative'
          }}>
            <button onClick={handleCloseCV} style={{
                position: 'absolute', top: '16px', right: '16px', background: 'var(--color-bg)', 
                border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)'
            }}><X size={24}/></button>

            <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '20px'}}>Document Preview</h2>
            
            <div style={{
                width: '100%', height: '350px', background: 'white', 
                borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                display: 'flex', flexDirection: 'column', padding: '30px', position: 'relative',
                opacity: 0.6, userSelect: 'none', pointerEvents: 'none'
            }}>
                <div style={{width: '60%', height: '20px', background: '#ccc', borderRadius: '4px', marginBottom: '40px'}}></div>
                <div style={{width: '90%', height: '12px', background: '#eee', borderRadius: '4px', marginBottom: '16px'}}></div>
                <div style={{width: '85%', height: '12px', background: '#eee', borderRadius: '4px', marginBottom: '16px'}}></div>
                <div style={{width: '92%', height: '12px', background: '#eee', borderRadius: '4px', marginBottom: '30px'}}></div>
                <div style={{width: '40%', height: '16px', background: '#ccc', borderRadius: '4px', marginBottom: '20px'}}></div>
                <div style={{width: '100%', height: '12px', background: '#eee', borderRadius: '4px', marginBottom: '16px'}}></div>
            </div>

            <div style={{ marginTop: '-80px', position: 'relative', zIndex: 10}}>
                <button onClick={handleCVActionClick} className="btn" style={{
                    backgroundColor: 'var(--color-secondary)', color: '#fff', fontSize: '1.2rem',
                    padding: '18px 36px', boxShadow: '0 10px 30px rgba(245, 158, 11, 0.4)'
                }}>
                  <MessageCircle size={24}/> Hubungi Saya Lebih Lanjut
                </button>
                <p style={{ marginTop: '16px', color: 'var(--color-text)', fontWeight: 500}}>
                   Dapatkan *full access* dengan mengirimkan pesan sekarang.
                </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
