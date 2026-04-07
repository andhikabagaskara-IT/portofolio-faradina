import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../components/Gallery.css';

// Import Certification Images
import dutaVokasi from '../assets/img/Duta Fakultas vokasi UNAIR.jpg';
import certifiedFinance from '../assets/img/Airlangga University Certified Finance professional.jpg';
import djpTaxation from '../assets/img/Direktorat Jendral Pajak certified Taxation.jpg';
import seminarPajak from '../assets/img/seminarnasionalperpajakan.jpg';
import workshopAirlangga from '../assets/img/Airlangga University certified workshop.jpg';
import certifiedTaxationVokasi from '../assets/img/Vocational faculty certified Taxation.jpg';
import taxAccountingVokasi from '../assets/img/Vocational faculty certified tax and accounting.jpg';
import campusAmbassadorVokasi from '../assets/img/Vocational faculty certified Campus ambassador.jpg';
import entrepreneurVokasi from '../assets/img/Vocational Entrepreneur.jpg';
import upgradingTaxation2 from '../assets/img/Upgrading Taxation2.jpg';
import upgradingTaxation from '../assets/img/Upgrading Taxation.jpg';
import financeBerdikari from '../assets/img/Finance of Berdikari x Dies Natalis Fakultas Vokasi.jpg';
import financeSambangDesa from '../assets/img/Finance of sambang desa.jpg';
import financeSekolahRakyat from '../assets/img/Finance of Sekolah rakyat.jpg';

// Import Work/Internship Images
import raraAirnav from '../assets/img/raraairnav.jpg';
import raraKarunia from '../assets/img/rarakarunia.jpg';
import raraPujasera from '../assets/img/rarapujasera.jpg';
import raraSweger from '../assets/img/rarasweger.jpg';
import raraLinguo from '../assets/img/raralinguo.jpg';
import raraWisuda from '../assets/img/rarawisuda.jpg';

// Import Org Images
import raraDuta from '../assets/img/raraduta.jpg';
import raraBem from '../assets/img/rarabem.jpg';

const GalleryPage = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryData = {
    "1": {
      title: "Sertifikasi",
      description: "Berbagai sertifikasi perpajakan profesional dan penghargaan akademik.",
      items: [
        { title: "Duta Fakultas Vokasi UNAIR", desc: "Keterangan sertifikasi...", img: dutaVokasi },
        { title: "Certified Finance Professional", desc: "Keterangan sertifikasi...", img: certifiedFinance },
        { title: "Certified Taxation - DJP", desc: "Keterangan sertifikasi...", img: djpTaxation },
        { title: "Seminar Nasional Perpajakan", desc: "Keterangan sertifikasi...", img: seminarPajak },
        { title: "Certified Workshop Airlangga", desc: "Keterangan sertifikasi...", img: workshopAirlangga },
        { title: "Certified Taxation Vokasi", desc: "Keterangan sertifikasi...", img: certifiedTaxationVokasi },
        { title: "Certified Tax and Accounting", desc: "Keterangan sertifikasi...", img: taxAccountingVokasi },
        { title: "Campus Ambassador Vokasi", desc: "Keterangan sertifikasi...", img: campusAmbassadorVokasi },
        { title: "Vocational Entrepreneur", desc: "Keterangan sertifikasi...", img: entrepreneurVokasi },
        { title: "Upgrading Taxation 2", desc: "Keterangan sertifikasi...", img: upgradingTaxation2 },
        { title: "Upgrading Taxation", desc: "Keterangan sertifikasi...", img: upgradingTaxation },
        { title: "Finance of Berdikari", desc: "Keterangan sertifikasi...", img: financeBerdikari },
        { title: "Finance of Sambang Desa", desc: "Keterangan sertifikasi...", img: financeSambangDesa },
        { title: "Finance of Sekolah Rakyat", desc: "Keterangan sertifikasi...", img: financeSekolahRakyat },
      ]
    },
    "2": {
      title: "Magang & Kerja",
      description: "Rekam jejak pengalaman kerja nyata dan profesional.",
      items: [
        { title: "Magang di Airnav", desc: "Keterangan sertifikasi...", img: raraAirnav },
        { title: "Pengalaman di Karunia", desc: "Keterangan sertifikasi...", img: raraKarunia },
        { title: "Pengalaman di Pujasera", desc: "Keterangan sertifikasi...", img: raraPujasera },
        { title: "Pengalaman di Sweger", desc: "Keterangan sertifikasi...", img: raraSweger },
        { title: "Pengalaman di Linguo", desc: "Keterangan sertifikasi...", img: raraLinguo },
        { title: "Momen Wisuda", desc: "Keterangan sertifikasi...", img: raraWisuda },
      ]
    },
    "3": {
      title: "Organisasi & Kepanitiaan",
      description: "Kepemimpinan dalam acara & kegiatan kampus.",
      items: [
        { title: "Duta Kampus", desc: "Keterangan sertifikasi...", img: raraDuta },
        { title: "BEM Vokasi", desc: "Keterangan sertifikasi...", img: raraBem },
      ]
    }
  };

  const currentCategory = galleryData[categoryId] || galleryData["1"];

  return (
    <div className="page-container" style={{ padding: '40px 20px', minHeight: '100vh', background: 'var(--color-bg)' }}>
      <div className="container">
        <button 
          onClick={() => navigate('/#gallery')} 
          className="btn btn-secondary" 
          style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <ArrowLeft size={20} /> Back to Documentation
        </button>

        <header style={{ marginBottom: '50px' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '10px' }}>
            Galeri: {currentCategory.title}
          </h1>
          <p style={{ color: 'var(--color-text)', opacity: 0.8 }}>{currentCategory.description}</p>
        </header>

        <div className="sub-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
          {currentCategory.items.map((item, idx) => (
            <div key={idx} className="sub-card glass-card" style={{ overflow: 'hidden', transition: 'transform 0.3s' }}>
              <div className="sub-img-wrapper" style={{ height: '250px', background: '#f0f0f0' }}>
                <img src={item.img} alt={item.title} className="sub-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="sub-text" style={{ padding: '20px' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>{item.title}</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', opacity: 0.8 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
