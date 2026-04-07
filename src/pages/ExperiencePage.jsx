import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, Users, Calendar } from 'lucide-react';
import '../components/Experience.css';

const ExperiencePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fullExperiences = {
    kerja: [
      {
        role: "Digital Content Creator",
        company: "Taxspeed Company",
        period: "Sep 2025 - Sekarang",
        description: "Membuat konten edukasi perpajakan untuk platform media sosial, termasuk video TikTok, Instagram Reels, dan carousel edukatif. Berkolaborasi dengan tim untuk menyederhanakan topik pajak yang kompleks menjadi konten yang menarik dan mudah dipahami oleh audiens luas."
      },
      {
        role: "Staff Finance & Tax Consultant",
        company: "Victory Tax Consultant Company",
        period: "Jun 2025 - Agt 2025",
        description: "Melakukan entry data transaksi harian, mengelola kas kecil, dan menyiapkan draft laporan keuangan bulanan. Memastikan kepatuhan terhadap pencatatan faktur pajak masukan."
      },
      {
        role: "Staff Tax Consultant (Intern)",
        company: "Karunia Tax Consultant Company",
        period: "Des 2024 - Sekarang",
        description: "Bertanggung jawab dalam pelaporan SPT Tahunan klien corporate, melakukan rekonsiliasi data PPN, serta membantu persiapan dokumen untuk pemeriksaan pajak. Mengoperasikan DJP Online dan e-Faktur secara rutin."
      },
      {
        role: "Staff Tax Officer (Intern)",
        company: "PT Angkasa Pura (Airnav BUMN)",
        period: "Jan 2023 - Nov 2024",
        description: "Melakukan entry data transaksi harian, mengelola kas kecil, dan menyiapkan draft laporan keuangan bulanan. Memastikan kepatuhan terhadap pencatatan faktur pajak masukan."
      },
      {
        role: "Admin Finance & Accounting",
        company: "Koperasi Bhumi Sembada",
        period: "2022 - 2023",
        description: "Membantu UMKM melakukan setup e-Faktur dan memandu pelaporan PPh 21 masa."
      },
      {
        role: "Brand Ambassador",
        company: "PT Sinergritas Indonesia Muda (Suweger)",
        period: "2022 - 2023",
        description: "Membantu meningkatkan brand awareness dan melakukan promosi produk."
      },
      {
        role: "Brand Ambassador",
        company: "Linguo ID",
        period: "2022 - 2023",
        description: "Membantu kampanye english Course dan meningkatkan brand awareness."
      }
    ],
    organisasi: [
      {
        role: "Finalis & Duta Terfavorit Universitas Airlangga",
        company: "Duta Vokasi UNAIR",
        period: "2024",
        description: "Terpilih sebagai salah satu dari 10 finalis Duta Vokasi UNAIR 2023 dari 1000+ pendaftar, serta meraih penghargaan Duta Terfavorit pilihan audiens."
      },
      {
        role: "Profesional Finance",
        company: "Badan Eksekutif Mahasiswa UNAIR Vokasi",
        period: "2023",
        description: "Bertanggung jawab dalam mengelola keuangan organisasi, menyusun laporan keuangan bulanan, serta memastikan kepatuhan terhadap pencatatan faktur pajak masukan."
      }
    ],
    kepanitiaan: [
      {
        role: "Ketua Divisi Acara",
        company: "Tax Festival Nasional",
        period: "Agustus 2022",
        description: "Memimpin tim divisi acara, menyusun rundown, dan berkoordinasi langsung dengan pembicara ahli perpajakan nasional."
      },
      {
        role: "Koordinator Sponsorship",
        company: "Lomba Akuntansi & Pajak",
        period: "2021",
        description: "Menghimpun pendanaan dari KAP dan BUMN untuk menyelenggarakan kegiatan nasional dengan sukses."
      }
    ]
  };

  return (
    <div className="page-container" style={{ padding: '40px 20px', minHeight: '100vh', background: 'var(--color-bg)' }}>
      <div className="container">
        <button 
          onClick={() => navigate('/#experience')} 
          className="btn btn-secondary" 
          style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <ArrowLeft size={20} /> Back to Experience
        </button>

        <header style={{ marginBottom: '50px' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '10px' }}>Full Experience Path</h1>
          <p style={{ color: 'var(--color-text)', opacity: 0.8 }}>Jelajahi perjalanan profesional, organisasi, dan kepanitiaan saya secara lengkap.</p>
        </header>

        <div className="exp-modal-body" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', background: 'transparent', padding: 0 }}>
          {/* Kolom 1: Magang dan Kerja */}
          <div className="exp-column">
            <h3 className="exp-col-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--color-secondary)', borderBottom: '2px solid rgba(var(--color-primary-rgb), 0.2)' }}>
              <Briefcase size={20}/> Magang & Kerja
            </h3>
            <div className="exp-list">
              {fullExperiences.kerja.map((item, idx) => (
                 <div key={idx} className="exp-mini-card glass-card" style={{ 
                   padding: '24px', 
                   marginBottom: '15px', 
                   borderRadius: '24px', 
                   backdropFilter: 'blur(10px)',
                   background: 'rgba(255, 255, 255, 0.05)',
                   border: '1px solid rgba(255, 255, 255, 0.1)'
                 }}>
                   <h4 style={{ color: 'var(--color-primary)', marginBottom: '5px', fontSize: '1.2rem' }}>{item.role}</h4>
                   <span className="exp-meta" style={{ display: 'block', fontSize: '0.9rem', opacity: 0.7, marginBottom: '12px' }}>
                     {item.company} &bull; {item.period}
                   </span>
                   <p style={{ fontSize: '0.95rem', lineHeight: '1.7', opacity: 0.9 }}>{item.description}</p>
                 </div>
              ))}
            </div>
          </div>

           {/* Kolom 2: Organisasi */}
           <div className="exp-column">
            <h3 className="exp-col-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--color-secondary)', borderBottom: '2px solid rgba(var(--color-primary-rgb), 0.2)' }}>
              <Users size={20}/> Organisasi
            </h3>
            <div className="exp-list">
              {fullExperiences.organisasi.map((item, idx) => (
                 <div key={idx} className="exp-mini-card glass-card" style={{ 
                   padding: '24px', 
                   marginBottom: '15px', 
                   borderRadius: '24px', 
                   backdropFilter: 'blur(10px)',
                   background: 'rgba(255, 255, 255, 0.05)',
                   border: '1px solid rgba(255, 255, 255, 0.1)'
                 }}>
                   <h4 style={{ color: 'var(--color-primary)', marginBottom: '5px', fontSize: '1.2rem' }}>{item.role}</h4>
                   <span className="exp-meta" style={{ display: 'block', fontSize: '0.9rem', opacity: 0.7, marginBottom: '12px' }}>
                     {item.company} &bull; {item.period}
                   </span>
                   <p style={{ fontSize: '0.95rem', lineHeight: '1.7', opacity: 0.9 }}>{item.description}</p>
                 </div>
              ))}
            </div>
          </div>

           {/* Kolom 3: Kepanitiaan */}
           <div className="exp-column">
            <h3 className="exp-col-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--color-secondary)', borderBottom: '2px solid rgba(var(--color-primary-rgb), 0.2)' }}>
              <Calendar size={20}/> Kepanitiaan
            </h3>
            <div className="exp-list">
              {fullExperiences.kepanitiaan.map((item, idx) => (
                 <div key={idx} className="exp-mini-card glass-card" style={{ 
                   padding: '24px', 
                   marginBottom: '15px', 
                   borderRadius: '24px', 
                   backdropFilter: 'blur(10px)',
                   background: 'rgba(255, 255, 255, 0.05)',
                   border: '1px solid rgba(255, 255, 255, 0.1)'
                 }}>
                   <h4 style={{ color: 'var(--color-primary)', marginBottom: '5px', fontSize: '1.2rem' }}>{item.role}</h4>
                   <span className="exp-meta" style={{ display: 'block', fontSize: '0.9rem', opacity: 0.7, marginBottom: '12px' }}>
                     {item.company} &bull; {item.period}
                   </span>
                   <p style={{ fontSize: '0.95rem', lineHeight: '1.7', opacity: 0.9 }}>{item.description}</p>
                 </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
