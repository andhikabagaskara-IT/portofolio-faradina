import React, { useState } from 'react';
import './Gallery.css';
import { X, ExternalLink } from 'lucide-react';
import { lockScroll, unlockScroll } from '../utils/scrollLock';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      title: "Sertifikasi",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
      description: "Berbagai sertifikasi perpajakan profesional.",
      items: [
        { title: "Brevet Pajak A/B Terpadu", desc: "Lulus memuaskan dari IAI (2025). Menguasai KUP, PPh OP, PPN.", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80" },
        { title: "Pelatihan e-Faktur Coretax", desc: "Sertifikasi resmi terkait penggunaan sistem DJP Coretax (2024).", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80" }
      ]
    },
    {
      id: 2,
      title: "Magang & Kerja",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
      description: "Rekam jejak pengalaman kerja nyata.",
      items: [
        { title: "Tax Officer Intern", desc: "KAP Dummy Company. Rekonsiliasi PPN & SPT Tahunan.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80" },
        { title: "Staff Keuangan", desc: "PT Keuangan Nusantara. Entry transaksi dan laporan kas.", img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&q=80" }
      ]
    },
    {
      id: 3,
      title: "Organisasi & Kepanitiaan",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      description: "Kepemimpinan dalam acara & kegiatan kampus.",
      items: [
        { title: "Ketua Divisi Acara", desc: "Tax Festival Nasional 2022. Memimpin 15 orang tim.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" },
        { title: "Relawan Pajak", desc: "Tax Center Universitas. Membantu lapor SPT ratusan WPOP.", img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80" },
        { title: "Juara 2 Tax Planning", desc: "Kompetisi perencanaan pajak nasional tingkat mahasiswa.", img: "https://images.unsplash.com/photo-1565373677928-90e963765eec?w=400&q=80" }
      ]
    }
  ];

  const openModal = (category) => {
    setSelectedCategory(category);
    lockScroll();
  };

  const closeModal = () => {
    setSelectedCategory(null);
    unlockScroll();
  };

  return (
    <section id="gallery" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">Dokumentasi Aktivitas</h2>
        
        <div className="gallery-main-grid">
          {categories.map((cat) => (
            <div key={cat.id} className="gallery-main-card">
              <svg className="animated-border" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" rx="24" ry="24" />
              </svg>
              <div className="gallery-main-content glass-card">
                <div className="gallery-main-img-wrap">
                  <img src={cat.imageUrl} alt={cat.title} className="gallery-main-img" />
                  <div className="gallery-hover-overlay">
                    <button className="btn btn-primary" onClick={() => openModal(cat)}>
                      <ExternalLink size={18} /> View More
                    </button>
                  </div>
                </div>
                <div className="gallery-main-text">
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nested Modal for Sub-Images */}
      {selectedCategory && (
        <div className="nested-modal-backdrop" onClick={closeModal}>
          <div className="nested-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="nested-modal-header">
              <h2>Galeri: {selectedCategory.title}</h2>
              <button className="modal-close" onClick={closeModal}><X size={24} /></button>
            </div>
            <div className="nested-modal-body">
              <div className="sub-grid">
                {selectedCategory.items.map((item, idx) => (
                  <div key={idx} className="sub-card">
                    <div className="sub-img-wrapper">
                      <img src={item.img} alt={item.title} className="sub-img" />
                    </div>
                    <div className="sub-text">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
