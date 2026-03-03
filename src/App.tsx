import { useState } from 'react';
import './index.css';

function App() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || msg.length < 10) {
      setErr('Kural hatası: Lütfen geçarli e-posta ve en az 10 karakterli mesaj girin.');
    } else {
      setErr('');
      alert('Mesaj başarıyla gönderildi!');
      setEmail('');
      setMsg('');
    }
  };

  return (
    <>
      <header>
        <nav aria-label="Ana Menü">
          <ul>
            <li><a href="#about">Hakkımda</a></li>
            <li><a href="#projects">Projeler</a></li>
            <li><a href="#contact">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">
        {/* Hakkımda Section */}
        <section id="about">
          <h2>Hakkımda</h2>
          <div className="about-content">
            <figure>
              <img src="/lighthouse.png" alt="Profil Fotoğrafı" width="200" height="200" loading="eager" />
            </figure>
            <div>
              <h3>Enes Malik ARI</h3>
              <p>Öğrenci No: 235541069</p>
              <p>Modern web teknolojilerine ilgi duyan ve Web Tasarımı & Programlama alanında sürekli kendini geliştiren bir geliştirici adayı.</p>
            </div>
          </div>
        </section>

        {/* Projeler Section */}
        <section id="projects">
          <h2>Projeler</h2>
          <div className="project-grid">
            <article className="project-card">
              <h3>Proje 1: E-ticaret</h3>
              <p>React, Redux, ve Node.js kullanılarak geliştirilmiş modern bir e-ticaret platformu.</p>
            </article>
            <article className="project-card">
              <h3>Proje 2: Hava Durumu Uygulaması</h3>
              <p>Fetch API kullanarak dış servisten (OpenWeather) hava durumu çeken uygulama.</p>
            </article>
            <article className="project-card">
              <h3>Proje 3: Portföy</h3>
              <p>Responsive tasarım ve mobile-first kurallarına uygun hazırladığım bu portföy sitesi.</p>
            </article>
            <article className="project-card">
              <h3>Proje 4: Görev Yöneticisi</h3>
              <p>Yerel depolama kullanan, sürüklenebilir görev listesi (To-do) uygulaması.</p>
            </article>
          </div>
        </section>

        {/* İletişim Section */}
        <section id="contact">
          <h2>İletişim</h2>
          <form onSubmit={submit} noValidate aria-label="İletişim Formu">
            <div className="form-group">
              <label htmlFor="mail">E-posta:</label>
              <input
                type="email"
                id="mail"
                name="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                aria-invalid={err && !email ? 'true' : 'false'}
              />
            </div>
            <div className="form-group">
              <label htmlFor="txt">Mesaj:</label>
              <textarea
                id="txt"
                name="message"
                required
                minLength={10}
                rows={5}
                value={msg}
                onChange={e => setMsg(e.target.value)}
                aria-invalid={err && msg.length < 10 ? 'true' : 'false'}
              />
            </div>
            {err && (
              <div className="form-group">
                <small role="alert" style={{ color: "var(--color-primary)", fontWeight: "bold" }}>{err}</small>
              </div>
            )}
            <button type="submit">Gönder</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Enes Malik ARI - Web Tasarımı ve Programlama LAB-3</p>
      </footer>
    </>
  );
}

export default App;
