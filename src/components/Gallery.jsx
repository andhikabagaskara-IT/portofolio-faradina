import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import { ExternalLink } from 'lucide-react';

const Gallery = () => {
  const categories = [
    {
      id: 1,
      title: "Sertifikasi",
      imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
      description: "Berbagai sertifikasi perpajakan profesional."
    },
    {
      id: 2,
      title: "Magang & Kerja",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
      description: "Rekam jejak pengalaman kerja nyata."
    },
    {
      id: 3,
      title: "Organisasi & Kepanitiaan",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      description: "Kepemimpinan dalam acara & kegiatan kampus."
    }
  ];

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
                    <Link to={`/gallery/${cat.id}`} className="btn btn-primary">
                      <ExternalLink size={18} /> View More
                    </Link>
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
    </section>
  );
};

export default Gallery;
