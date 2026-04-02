import React, { useState } from 'react';
import './Experience.css';
import { X, Briefcase, Users, Calendar } from 'lucide-react';
import { lockScroll, unlockScroll } from '../utils/scrollLock';

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Partial items specifically for homepage
  const initialExperiences = [
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
    }
  ];

  // Full datasets for the Modal categorized
  const fullExperiences = {
    kerja: [
      ...initialExperiences,
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

  const toggleModal = () => {
    const newState = !isModalOpen;
    setIsModalOpen(newState);
    if (newState) {
      lockScroll();
    } else {
      unlockScroll();
    }
  };

  return (
    <section id="experience" className="section bg-alt">
      <div className="container">
        <h2 className="section-title">Work History & Experience</h2>
        
        <div className="timeline">
          {initialExperiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content glass-card">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="view-more-container">
           <button onClick={toggleModal} className="btn btn-secondary view-more-btn">
             Explore Full Experience Path
           </button>
        </div>
      </div>

      {/* Full Experience Popout Modal */}
      {isModalOpen && (
        <div className="exp-modal-backdrop" onClick={toggleModal}>
          <div className="exp-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <div className="exp-modal-header">
              <h2>Riwayat Lengkap Pengalaman</h2>
              <button className="exp-modal-close" onClick={toggleModal}><X size={24} /></button>
            </div>
            
            <div className="exp-modal-body">
              {/* Kolom 1: Magang dan Kerja */}
              <div className="exp-column">
                <h3 className="exp-col-title"><Briefcase size={20}/> Magang & Kerja</h3>
                <div className="exp-list">
                  {fullExperiences.kerja.map((item, idx) => (
                     <div key={idx} className="exp-mini-card">
                       <h4>{item.role}</h4>
                       <span className="exp-meta">{item.company} &bull; {item.period}</span>
                       <p>{item.description}</p>
                     </div>
                  ))}
                </div>
              </div>

               {/* Kolom 2: Organisasi */}
               <div className="exp-column">
                <h3 className="exp-col-title"><Users size={20}/> Organisasi</h3>
                <div className="exp-list">
                  {fullExperiences.organisasi.map((item, idx) => (
                     <div key={idx} className="exp-mini-card">
                       <h4>{item.role}</h4>
                       <span className="exp-meta">{item.company} &bull; {item.period}</span>
                       <p>{item.description}</p>
                     </div>
                  ))}
                </div>
              </div>

               {/* Kolom 3: Kepanitiaan */}
               <div className="exp-column">
                <h3 className="exp-col-title"><Calendar size={20}/> Kepanitiaan</h3>
                <div className="exp-list">
                  {fullExperiences.kepanitiaan.map((item, idx) => (
                     <div key={idx} className="exp-mini-card">
                       <h4>{item.role}</h4>
                       <span className="exp-meta">{item.company} &bull; {item.period}</span>
                       <p>{item.description}</p>
                     </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;
