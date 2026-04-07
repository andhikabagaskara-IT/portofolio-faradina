import React from 'react';
import { Link } from 'react-router-dom';
import './Experience.css';

const Experience = () => {
  // Partial items specifically for homepage
  const initialExperiences = [
    {
      role: "Digital Content Creator",
      company: "Taxspeed Company",
      period: "Sep 2025 - Sekarang",
      description: "Bertanggung jawab dalam pelaporan SPT Tahunan klien corporate, melakukan rekonsiliasi data PPN, serta membantu persiapan dokumen untuk pemeriksaan pajak. Mengoperasikan DJP Online dan e-Faktur secara rutin."
    },
    {
      role: "Staff Administrasi Keuangan & Pajak",
      company: "Victory Tax Consultant Company",
      period: "Jun 2025 - Agt 2025",
      description: "Melakukan entry data transaksi harian, mengelola kas kecil, dan menyiapkan draft laporan keuangan bulanan. Memastikan kepatuhan terhadap pencatatan faktur pajak masukan."
    }
  ];

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
           <Link to="/experience" className="btn btn-secondary view-more-btn">
             Explore Full Experience Path
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
