import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, X, MapPin, Calendar, Heart, Music, Mail, Instagram,
  Send, Award, BookOpen, ChefHat, PenTool, ExternalLink,
  Sparkles, Code, Terminal, Compass
} from 'lucide-react';

// Import modular configurations and components
import { Track } from './types';
import { LazyImage } from './components/LazyImage';
import { playlist } from './data/playlist';

// Static asset URL constants for generated images
import tiaProfile from './assets/images/profile-setia-wati.webp';
import chenZheYuan from './assets/images/Chen-Zhe-Yuan.webp';
import parkJiSung from './assets/images/Park-Ji-Sung.webp';
import harryVaughan from './assets/images/Harry-Vaughan.webp';

export default function App() {
  // Navigation & UI States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('tentang');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // Email Form States
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [senderName, setSenderName] = useState('');

  // Favorite Songs State (all tracks liked by default)
  const [likedTracks, setLikedTracks] = useState<number[]>([0, 1, 2, 3]);

  const toggleLikeTrack = (index: number) => {
    setLikedTracks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const lastScrollY = useRef(0);

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUri = `ssetiawtti@gmail.com?subject=${encodeURIComponent(
      emailSubject || `Halo dari ${senderName || 'Pengunjung Website'}`
    )}&body=${encodeURIComponent(
      `Halo Setia Wati,\n\nNama saya: ${senderName}\n\n${emailBody}\n\nSalam hangat,\n${senderName}`
    )}`;
    window.location.href = mailtoUri;
    setIsModalOpen(false);
    // Clear fields
    setEmailSubject('');
    setEmailBody('');
    setSenderName('');
  };

  // Scroll spy to update active section in header
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 1. Scroll Spy section activation
      const sections = ['tentang', 'keahlian', 'favorit', 'motivasi', 'playlist'];
      const scrollPosition = scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      // 2. Hide / Show Header based on scroll direction
      // Avoid hiding if scroll is near top or if the mobile menu drawer is open
      if (scrollY > lastScrollY.current && scrollY > 80 && !isMenuOpen) {
        setIsHeaderVisible(false);
      } else if (scrollY < lastScrollY.current) {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = scrollY;
    };

    // Passive listener for maximum buttery-smooth scrolling on both mobile and desktop
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Smooth Scroll handler via JavaScript
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (targetId === 'navbar') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Calculate offset position to avoid navbar overlap
      const headerOffset = 85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Premium 3D Tilt Hover Effects on Favorites Card
  const handleMouseMoveTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation bounds
    const tiltX = -(y - centerY) / 15;
    const tiltY = (x - centerX) / 15;

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`;
    card.style.boxShadow = '0 20px 40px rgba(255, 123, 144, 0.22)';
  };

  const handleMouseLeaveTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0deg)';
    card.style.boxShadow = 'var(--shadow-card)';
  };

  return (
    <div id="portfolio-root" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* 1. Header / Navbar */}
      <header className={`header ${isHeaderVisible ? '' : 'hidden'}`} id="navbar">
        <div className="container nav-container">
          <a href="#navbar" className="logo" id="brand-logo" onClick={(e) => handleSmoothScroll(e, 'navbar')}>
            Kwettiau<span>.</span>
          </a>

          {/* Nav Menu */}
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="main-nav">
            <a
              href="#tentang"
              className={`nav-link ${activeSection === 'tentang' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, 'tentang')}
              id="nav-link-tentang"
            >
              Tentang
            </a>
            <a
              href="#keahlian"
              className={`nav-link ${activeSection === 'keahlian' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, 'keahlian')}
              id="nav-link-keahlian"
            >
              Keahlian
            </a>
            <a
              href="#favorit"
              className={`nav-link ${activeSection === 'favorit' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, 'favorit')}
              id="nav-link-favorit"
            >
              Idola
            </a>
            <a
              href="#motivasi"
              className={`nav-link ${activeSection === 'motivasi' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, 'motivasi')}
              id="nav-link-motivasi"
            >
              Motivasi
            </a>
            <a
              href="#playlist"
              className={`nav-link ${activeSection === 'playlist' ? 'active' : ''}`}
              onClick={(e) => handleSmoothScroll(e, 'playlist')}
              id="nav-link-playlist"
            >
              Lagu Favorit
            </a>
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="btn btn-primary"
              style={{ padding: '8px 20px', fontSize: '0.85rem' }}
              id="btn-nav-kontak"
            >
              Kontak
            </button>
          </nav>

          {/* Menu Toggle for Mobile */}
          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="section" id="hero-section" style={{ paddingTop: '140px', paddingBottom: '60px', background: 'linear-gradient(135deg, #ffb7c5 0%, #ffe4e1 100%)' }}>
        <div className="container">
          <div className="hero-wrapper">
            {/* Profile Image with absolute 3:4 constraint & Lazy Load */}
            <div className="hero-image-container" id="hero-img-container">
              <div className="hero-image-decor"></div>
              <div className="hero-image" style={{ padding: 0, overflow: 'hidden', border: '4px solid var(--card-bg)' }}>
                <LazyImage
                  src={tiaProfile}
                  alt="Setia Wati (KWETTIAU)"
                  id="tia-profile-photo"
                />
              </div>
            </div>

            <div className="hero-content">
              <span className="hero-badge" id="hero-status">IT Student &amp; Designer</span>
              <h1 className="hero-name" id="hero-title-name">Setia Wati</h1>
              <p className="hero-title" id="hero-subtitle">Biasa dipanggil Kwettiau</p>
              
              <div className="hero-school" id="hero-school-info">
                <Award className="skill-icon" />
                <span>SMK Patriot Pituruh</span>
              </div>

              <div className="hero-cta">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="btn btn-primary"
                  id="cta-hubungi"
                >
                  <Mail size={18} /> Hubungi Saya
                </button>
                <a
                  href="#tentang"
                  className="btn btn-secondary"
                  id="cta-pelajari"
                  onClick={(e) => handleSmoothScroll(e, 'tentang')}
                >
                  Tentang Saya
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About & Biodata Section */}
      <section className="section" id="tentang" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <h2 className="section-title" id="about-title">Tentang Saya</h2>
          <p className="section-subtitle" id="about-subtitle">
            Kenali lebih dalam petualangan hidup saya di persimpangan dunia teknologi, karya tulis, dan kreasi kuliner.
          </p>

          <div className="about-grid">
            <div className="about-text" id="about-story">
              <p>
                Halo! Saya <strong>Setia Wati</strong>, biasa disapa <strong>Kwettiau</strong>. Saya adalah seorang lulusan <strong>Teknik Komputer dan Jaringan (TKJ)</strong> berusia 18 tahun dari <strong>SMK Patriot Pituruh</strong>.
              </p>
              <p>
                Dunia IT tidak pernah gagal membuat saya takjub. Namun, selain menghabiskan waktu dengan merakit jaringan atau berkutat di depan baris kode, saya memiliki keseimbangan hidup yang unik melalui hobi menulis jurnal fiksi serta menjelajahi dunia seni memasak. Bagi saya, memasak adalah bentuk kompilasi resep kehidupan, sementara menulis adalah cara saya menyusun logika naratif yang indah.
              </p>
            </div>

            {/* Biodata Table */}
            <div className="bio-table-container" id="biodata-table-wrapper">
              <table className="bio-table" id="biodata-table">
                <tbody>
                  <tr>
                    <td className="bio-label">Umur</td>
                    <td className="bio-value">18 Tahun</td>
                  </tr>
                  <tr>
                    <td className="bio-label">Pendidikan</td>
                    <td className="bio-value">SMK Patriot Pituruh (TKJ)</td>
                  </tr>
                  <tr>
                    <td className="bio-label">Hobi</td>
                    <td className="bio-value">Dunia IT, Seni Memasak, &amp; Menulis</td>
                  </tr>
                  <tr>
                    <td className="bio-label">Domisili</td>
                    <td className="bio-value">Kab. Purworejo, Jawa Tengah, Indonesia</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Tech Stack & Skills Section */}
      <section className="section" id="keahlian" style={{ backgroundColor: '#fff5f6' }}>
        <div className="container">
          <h2 className="section-title" id="skills-title">Keahlian Jaringan &amp; IT</h2>
          <p className="section-subtitle" id="skills-subtitle">
            Kumpulan fondasi keahlian teknis TKJ dan pengembangan web yang saya kuasai selama menempuh studi.
          </p>

          <div className="skills-grid" id="skills-badges-container">
            <div className="skill-badge" id="skill-networking">
              <Award className="skill-icon" />
              <span>Networking Setup</span>
            </div>
            <div className="skill-badge" id="skill-cisco">
              <Award className="skill-icon" />
              <span>Cisco Packet Tracer</span>
            </div>
            {/* <div className="skill-badge" id="skill-html">
              <Award className="skill-icon" />
              <span>HTML5 Semantic</span>
            </div>
            <div className="skill-badge" id="skill-css">
              <Award className="skill-icon" />
              <span>CSS3 Flexbox &amp; Grid</span>
            </div>
            <div className="skill-badge" id="skill-responsive">
              <Award className="skill-icon" />
              <span>Mobile-First Responsive Layout</span>
            </div> */}
            <div className="skill-badge" id="skill-troubleshooting">
              <Award className="skill-icon" />
              <span>Hardware &amp; Lan Troubleshooting</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Favorites Section with premium mouse tilt parallax */}
      <section className="section" id="favorit" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <h2 className="section-title" id="favorites-section-title">Idola</h2>
          <p className="section-subtitle" id="favorites-section-subtitle">
            Inilah tokoh idola yang selalu mewarnai hari-hari saya.
          </p>

          <div className="favorites-grid" id="favorites-cards-container">
            
            {/* Card 1: Chen Zhe Yuan */}
            <div 
              className="favorite-card" 
              id="card-chen-zheyuan"
              onMouseMove={handleMouseMoveTilt}
              onMouseLeave={handleMouseLeaveTilt}
              style={{ transition: 'transform 0.15s ease-out, box-shadow 0.25s ease', willChange: 'transform, box-shadow' }}
            >
              <div className="card-image-wrapper">
                <LazyImage src={chenZheYuan} alt="Chen Zhe Yuan" className="card-image" />
                <span className="card-tag">Aktor &amp; Model</span>
              </div>
              <div className="card-body">
                <h3 className="card-title">Chen Zhe Yuan</h3>
                <p className="card-subtitle">Chinese Actor &amp; Model</p>
                <p className="card-text">
                  Dikenal lewat aktingnya yang sangat ekspresif dan manis di drama populer seperti <em>Hidden Love</em>. Dedikasi seni perannya menginspirasi saya untuk selalu menjiwai setiap hal yang saya tekuni.
                </p>
              </div>
            </div>

            {/* Card 2: Park Ji-Sung */}
            <div 
              className="favorite-card" 
              id="card-park-jisung"
              onMouseMove={handleMouseMoveTilt}
              onMouseLeave={handleMouseLeaveTilt}
              style={{ transition: 'transform 0.15s ease-out, box-shadow 0.25s ease', willChange: 'transform, box-shadow' }}
            >
              <div className="card-image-wrapper">
                <LazyImage src={parkJiSung} alt="Park Ji-Sung" className="card-image" />
                <span className="card-tag">Idol K-Pop</span>
              </div>
              <div className="card-body">
                <h3 className="card-title">Park Ji-Sung</h3>
                <p className="card-subtitle">NCT Dream Member &amp; Main Dancer</p>
                <p className="card-text">
                  Anggota termuda dari NCT Dream dengan talenta menari luar biasa. Perjalanannya dari usia belia mengajarkan saya arti dari kegigihan kerja keras yang melampaui batasan umur.
                </p>
              </div>
            </div>

            {/* Card 3: Harry Vaughan */}
            <div 
              className="favorite-card" 
              id="card-harry-vaughan"
              onMouseMove={handleMouseMoveTilt}
              onMouseLeave={handleMouseLeaveTilt}
              style={{ transition: 'transform 0.15s ease-out, box-shadow 0.25s ease', willChange: 'transform, box-shadow' }}
            >
              <div className="card-image-wrapper">
                <LazyImage src={harryVaughan} alt="Harry Vaughan" className="card-image" />
                <span className="card-tag">Aktor &amp; Model</span>
              </div>
              <div className="card-body">
                <h3 className="card-title">Harry Vaughan</h3>
                <p className="card-subtitle">Aktor &amp; Model Indonesia</p>
                <p className="card-text">
                  Seorang aktor dan model berkebangsaan Indonesia berdarah campuran Australia dan Indonesia. Ia mulai dikenal luas di industri hiburan Tanah Air setelah membintangi serial Private Bodyguard dan sinetron Asmara Gen Z.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Motivasi Section */}
      <section className="section" id="motivasi" style={{ backgroundColor: '#fff5f6' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title" id="motivasi-title">Motivasi</h2>
          <p className="section-subtitle" id="motivasi-subtitle">
            Pilar impian, semangat hidup, dan filosofi sederhana saya dalam berkarya.
          </p>

          <div className="glass-card obsession-quote-card" id="obsession-quote-block" style={{ padding: '36px', marginTop: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
              <div className="heart-icon-wrapper" id="heart-pulse-icon">
                <Heart size={24} fill="currentColor" />
              </div>
            </div>
            <p className="obsession-quote" id="quote-text" style={{ borderLeft: 'none', paddingLeft: 0, textAlign: 'center', fontSize: '1.4rem' }}>
              "Menyelaraskan jalinan sirkuit Cisco atau merajut baris HTML terasa lebih magis dengan lantunan melodi favorit. Dedikasi Chen Zhe Yuan, gerakan dinamis Park Ji-Sung, dan pesona seni Harry Vaughan mengingatkan saya untuk selalu bergerak maju dengan ketulusan."
            </p>
            <span className="obsession-by" id="quote-author" style={{ textAlign: 'center', marginTop: '12px', display: 'block' }}>— SETIA WATI (Kwettiau)</span>
          </div>
        </div>
      </section>

      {/* 7. My Playlist Section */}
      <section className="section" id="playlist" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 className="section-title" id="playlist-section-title">Lagu Favorit</h2>
          <p className="section-subtitle" id="playlist-section-subtitle">
            Lantunan nada penambah fokus dan penyemangat dalam belajar TI.
          </p>

          <div className="player-widget" id="music-player-widget" style={{ marginTop: '30px' }}>
            <div className="player-header">
              <Music size={18} className="player-header-icon" />
              <span className="player-header-title">Daftar Lagu Favorit</span>
            </div>

            <div className="playlist-tracks" style={{ marginTop: '0px' }}>
              {playlist.map((track, index) => {
                const isLiked = likedTracks.includes(index);
                return (
                  <div 
                    key={index} 
                    onClick={() => toggleLikeTrack(index)}
                    className={`track-item ${isLiked ? 'active' : ''}`}
                    style={{ transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    <div className="track-item-left">
                      <span className="track-number">{index + 1}</span>
                      <div>
                        <div className="track-name-bold">{track.title}</div>
                        <div className="track-artist-small">{track.artist}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLikeTrack(index);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          color: isLiked ? 'var(--accent-rose)' : 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '4px',
                          transition: 'transform 0.2s ease, color 0.2s ease',
                        }}
                        className="hover:scale-110 active:scale-95"
                        aria-label={isLiked ? "Hapus dari favorit" : "Sukai lagu"}
                      >
                        <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer / Contact Section */}
      <footer className="footer" id="kontak">
        <div className="container">
          <h2 className="footer-brand" id="footer-logo">Kwettiau<span>.</span></h2>
          <p className="footer-tagline" id="footer-tagline">
            Lulusan TKJ SMK Patriot Pituruh | Menulis Jurnal &amp; Seni Kuliner
          </p>

          <div className="footer-socials" id="footer-social-links">
            <a 
              href="https://www.tiktok.com/@aaitess1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="TikTok"
              id="social-tiktok"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                style={{ width: '18px', height: '18px' }}
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/ssetiawtii?igsh=OWYwYTIwd2t6OGdi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="Instagram"
              id="social-instagram"
            >
              <Instagram size={18} />
            </a>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="social-link"
              aria-label="Send Email"
              id="social-email"
              style={{ cursor: 'pointer' }}
            >
              <Mail size={18} />
            </button>
          </div>

          <div className="footer-credits" id="footer-credits-info">
            <p>&copy; {new Date().getFullYear()} Setia Wati. All rights reserved.</p>
            <p className="credit">Designed & Built by <a href="https://fatahmr.my.id" target="_blank" rel="noopener noreferrer">Fatahilah Miftahul Rahman</a></p>
          </div>
        </div>
      </footer>

      {/* 8. Interactive Email Dialog Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)} id="email-modal">
          <div className="modal-content" onClick={(e) => e.stopPropagation()} id="email-modal-body">
            <div className="modal-header">
              <h3 className="modal-title">Kirim Surat Untuk Kwettiau</h3>
              <button onClick={() => setIsModalOpen(false)} className="modal-close" aria-label="Tutup">
                <X size={18} />
              </button>
            </div>
            
            <form onSubmit={handleSendEmail} className="modal-body">
              <div className="form-group">
                <label className="form-label" htmlFor="senderName">Nama Anda</label>
                <input
                  type="text"
                  id="senderName"
                  className="form-input"
                  placeholder="Masukkan nama Anda..."
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="emailSubject">Subjek Pesan</label>
                <input
                  type="text"
                  id="emailSubject"
                  className="form-input"
                  placeholder="Subjek email..."
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="emailBody">Isi Pesan</label>
                <textarea
                  id="emailBody"
                  className="form-textarea"
                  placeholder="Tulis pesan manis Anda di sini..."
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} id="btn-submit-email">
                <Send size={16} /> Kirim Pesan via Mail Client
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
