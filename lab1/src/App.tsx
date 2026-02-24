import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [err, setErr] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || msg.length < 10) setErr('Kural hatası.');
    else setErr('');
  };

  return (
    <>
      <header>
        <h1>Web Tasarımı</h1>
        <nav aria-label="Menü">
          <ul><li><a href="#main">İçeriğe Geç</a></li></ul>
        </nav>
      </header>
      <main id="main">
        <section>
          <h2>Lab 1: Erişim</h2>
          <article>
            <h3>Öğrenci</h3>
            <p>Enes Malik ARI - 235541069</p>
            {/* Lokal görsel, boyut ve lazy loading (Performans & CLS için) */}
            <img src="/vite.svg" alt="Profil" width="80" height="80" loading="lazy" />
          </article>
        </section>
        <section>
          <h2>İletişim</h2>
          <form onSubmit={submit} noValidate>
            <div>
              <label htmlFor="mail">E-posta:</label>
              <input type="email" id="mail" required value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="txt">Mesaj:</label>
              <textarea id="txt" required minLength={10} value={msg} onChange={e => setMsg(e.target.value)} />
            </div>
            {err && <small role="alert">{err}</small>}
            <button type="submit">Gönder</button>
          </form>
        </section>
      </main>
      <footer><p>2026</p></footer>
    </>
  );
}

export default App;
