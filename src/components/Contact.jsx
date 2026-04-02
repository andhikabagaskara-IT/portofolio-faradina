import React, { useState } from 'react';
import './Contact.css';
import { Mail, Link, MessageSquare, Download, Send } from 'lucide-react';

const Contact = ({ onOpenCVModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    origin: '',
    purpose: 'Rencana Kolaborasi',
    otherPurpose: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendWhatsapp = (e) => {
    e.preventDefault();
    const finalPurpose = formData.purpose === 'Lainnya' ? formData.otherPurpose : formData.purpose;
    const message = `Halo Kak Faradina, perkenalkan nama saya ${formData.name} dari ${formData.origin}. Saya menghubungi Anda terkait: ${finalPurpose}. (Nomor Kontak saya: ${formData.phone})`;
    
    // Encode the url
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6281234567890?text=${encodedMessage}`;
    
    window.open(waUrl, '_blank');
  };

  return (
    <footer id="contact" className="contact-footer bg-alt">
      <div className="container contact-container">
        
        {/* Contact Info & Methods */}
        <div className="contact-content">
          <h2 className="contact-title">Mari Berdiskusi Lebih Lanjut.</h2>
          <p className="contact-subtitle">
            Apakah Anda memiliki pertanyaan seputar perpajakan, peluang kolaborasi, atau sekadar ingin terhubung? 
            Jangan ragu untuk menghubungi saya melalui WhatsApp atau saluran profesional di bawah ini.
          </p>
          
          <div className="contact-methods">
            <a href="mailto:contact@faradinapajak.com" className="contact-card glass-card">
              <Mail className="contact-icon" />
              <div className="contact-info">
                <h3>Email</h3>
                <p>contact@faradinapajak.com</p>
              </div>
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-card glass-card">
              <Link className="contact-icon" />
              <div className="contact-info">
                <h3>LinkedIn</h3>
                <p>Faradina Tax Specialist</p>
              </div>
            </a>

            <div className="cv-box glass-card" style={{ marginTop: '20px' }}>
              <Download size={32} className="contact-icon" style={{ marginBottom: '16px' }} />
              <h3>Unduh Dokumen Profesional</h3>
              <p>Dapatkan informasi lebih lengkap mengenai riwayat pendidikan, sertifikasi, dan pengalaman saya dalam bentuk CV.</p>
              <button onClick={onOpenCVModal} className="btn btn-primary cv-btn">
                Download Curriculum Vitae
              </button>
            </div>
          </div>
        </div>
        
        {/* WhatsApp Lead Form */}
        <div className="contact-form-side">
          <div className="wa-form-card glass-card" id="wa-form-highlight">
            <h3><MessageSquare size={24} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }}/> Chat WhatsApp</h3>
            <p className="wa-form-desc">Kirim pesan langsung ke WhatsApp saya menggunakan form di bawah ini.</p>
            
            <form onSubmit={handleSendWhatsapp} className="wa-form">
              <div className="form-group">
                <label>Nama Lengkap</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Masukkan nama..." />
              </div>

              <div className="form-group">
                <label>Asal / Instansi</label>
                <input type="text" name="origin" value={formData.origin} onChange={handleInputChange} required placeholder="Perusahaan / Kampus Anda..." />
              </div>

              <div className="form-group">
                <label>Kepentingan</label>
                <div className="select-wrapper">
                  <select name="purpose" value={formData.purpose} onChange={handleInputChange} required>
                    <option value="Rencana Kolaborasi">Rencana Kolaborasi</option>
                    <option value="Rencana Proyek Penyelesaian Pajak">Rencana Proyek Penyelesaian Pajak</option>
                    <option value="Diskusi Pajak">Diskusi Pajak</option>
                    <option value="Lainnya">Lainnya (Freetext)</option>
                  </select>
                </div>
              </div>

              {formData.purpose === 'Lainnya' && (
                <div className="form-group">
                  <label>Tuliskan Kepentingan Anda</label>
                  <input type="text" name="otherPurpose" value={formData.otherPurpose} onChange={handleInputChange} required placeholder="Ketik disini..." />
                </div>
              )}

              <div className="form-group">
                <label>Nomor Telepon Anda</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required placeholder="08..." />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                <Send size={18} /> Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Faradina - Tax Specialist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
