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
        role: "Tax Officer (Intern)",
        company: "KAP Dummy Company",
        period: "Des 2024 - Sekarang",
        description: "Bertanggung jawab dalam pelaporan SPT Tahunan klien corporate, melakukan rekonsiliasi data PPN, serta membantu persiapan dokumen untuk pemeriksaan pajak. Mengoperasikan DJP Online dan e-Faktur secara rutin."
      },
      {
        role: "Staff Administrasi Keuangan",
        company: "PT Keuangan Nusantara",
        period: "Jan 2023 - Nov 2024",
        description: "Melakukan entry data transaksi harian, mengelola kas kecil, dan menyiapkan draft laporan keuangan bulanan. Memastikan kepatuhan terhadap pencatatan faktur pajak masukan."
      },
      {
        role: "Freelance Junior Tax Consultant",
        company: "Private Clients",
        period: "2022 - 2023",
        description: "Membantu UMKM melakukan setup e-Faktur dan memandu pelaporan PPh 21 masa."
      }
    ],
    organisasi: [
      {
        role: "Wakil Ketua",
        company: "Himpunan Mahasiswa Perpajakan",
        period: "2021 - 2022",
        description: "Bertanggung jawab merangkul 200+ anggota, menjalankan program kerja mentoring pajak, dan menjadi narahubung utama dengan Kanwil DJP setempat."
      },
      {
        role: "Staff Divisi Edukasi",
        company: "Tax Center Universitas",
        period: "2020 - 2021",
        description: "Memberikan bimbingan gratis kepada wajib pajak orang pribadi saat relawan pajak tahunan (Tax Volunteer)."
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
          onClick={() => navigate('/')} 
          className="btn btn-secondary" 
          style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <ArrowLeft size={20} /> Back to Home
        </button>

        <header style={{ marginBottom: '50px' }}>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '10px' }}>Full Experience Path</h1>
          <p style={{ color: 'var(--color-text)', opacity: 0.8 }}>Jelajahi perjalanan profesional, organisasi, dan kepanitiaan saya secara lengkap.</p>
        </header>

        <div className="exp-modal-body" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {/* Kolom 1: Magang dan Kerja */}
          <div className="exp-column">
            <h3 className="exp-col-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--color-secondary)' }}>
              <Briefcase size={20}/> Magang & Kerja
            </h3>
            <div className="exp-list">
              {fullExperiences.kerja.map((item, idx) => (
                 <div key={idx} className="exp-mini-card glass-card" style={{ padding: '20px', marginBottom: '15px' }}>
                   <h4 style={{ color: 'var(--color-primary)', marginBottom: '5px' }}>{item.role}</h4>
                   <span className="exp-meta" style={{ display: 'block', fontSize: '0.9rem', opacity: 0.7, marginBottom: '10px' }}>
                     {item.company} &bull; {item.period}
                   </span>
                   <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{item.description}</p>
                 </div>
              ))}
            </div>
          </div>

           {/* Kolom 2: Organisasi */}
           <div className="exp-column">
            <h3 className="exp-col-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--color-secondary)' }}>
              <Users size={20}/> Organisasi
            </h3>
            <div className="exp-list">
              {fullExperiences.organisasi.map((item, idx) => (
                 <div key={idx} className="exp-mini-card glass-card" style={{ padding: '20px', marginBottom: '15px' }}>
                   <h4 style={{ color: 'var(--color-primary)', marginBottom: '5px' }}>{item.role}</h4>
                   <span className="exp-meta" style={{ display: 'block', fontSize: '0.9rem', opacity: 0.7, marginBottom: '10px' }}>
                     {item.company} &bull; {item.period}
                   </span>
                   <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{item.description}</p>
                 </div>
              ))}
            </div>
          </div>

           {/* Kolom 3: Kepanitiaan */}
           <div className="exp-column">
            <h3 className="exp-col-title" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', color: 'var(--color-secondary)' }}>
              <Calendar size={20}/> Kepanitiaan
            </h3>
            <div className="exp-list">
              {fullExperiences.kepanitiaan.map((item, idx) => (
                 <div key={idx} className="exp-mini-card glass-card" style={{ padding: '20px', marginBottom: '15px' }}>
                   <h4 style={{ color: 'var(--color-primary)', marginBottom: '5px' }}>{item.role}</h4>
                   <span className="exp-meta" style={{ display: 'block', fontSize: '0.9rem', opacity: 0.7, marginBottom: '10px' }}>
                     {item.company} &bull; {item.period}
                   </span>
                   <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>{item.description}</p>
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
