import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section relative-bg-container">
      {/* Latar Belakang Logo UNAIR Transparan */}
      <div className="watermark-logo">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Logo_of_Airlangga_University.svg/1024px-Logo_of_Airlangga_University.svg.png" 
          alt="UNAIR Watermark" 
        />
      </div>

      <div className="container relative-z-index">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-split-layout">
          
          {/* Kolom Kiri: Narasi dan Pendidikan */}
          <div className="about-text-column glass-card">
            <p className="about-desc">
              Saya adalah seorang lulusan Perpajakan dengan dedikasi tinggi terhadap tata kelola keuangan, kepatuhan perpajakan (*tax compliance*), dan efisiensi pelaporan pajak penghasilan serta pajak pertambahan nilai (PPn). 
              Dengan kombinasi analitis yang tajam dan kemampuan komunikasi efektif, saya selalu berupaya menjembatani kesenjangan antara regulasi perpajakan yang rumit dengan strategi rasional bagi wajib pajak.
            </p>
            
            <h3 className="edu-title">Riwayat Pendidikan</h3>
            <ul className="edu-list">
              <li>
                <div className="edu-item">
                  <div className="edu-bullet"></div>
                  <div className="edu-content">
                    <h4>Universitas Airlangga</h4>
                    <span className="edu-major">D3 Perpajakan</span>
                    <span className="edu-score">IPK: 3.85 / 4.00</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="edu-item">
                  <div className="edu-bullet"></div>
                  <div className="edu-content">
                    <h4>SMA Negeri 1 Surabaya</h4>
                    <span className="edu-major">Ilmu Pengetahuan Sosial (IPS)</span>
                    <span className="edu-score">Nilai Akhir Rata-rata: 92</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="edu-item">
                  <div className="edu-bullet"></div>
                  <div className="edu-content">
                    <h4>SMP Negeri 1 Surabaya</h4>
                    <span className="edu-major">Pendidikan Dasar & Menengah</span>
                    <span className="edu-score">Lulusan Berprestasi</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Kolom Kanan: Video Youtube */}
          <div className="about-video-column">
            <div className="video-wrapper glass-card">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/g6y4E2TkpVY?si=Y_zh3vdPDHrEaGat" 
                title="Profile Video Faradina" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
              </iframe>
            </div>
            <p className="video-caption">Kenali saya lebih dekat melalui video profil interaktif di atas!</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
