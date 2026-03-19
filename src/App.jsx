import { useState } from 'react';
import { useLanguage } from './context/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function App() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a
        href="https://wa.me/4915219338756?text=Hi%2C%20I'd%20like%20to%20get%20a%20free%20demo%20of%20my%20shop."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <header className="hero" id="home">
        <nav className="nav">
          <a href="#home" className="logo">Cycroom Media</a>
          <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>{t.nav.home}</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>{t.nav.about}</a></li>
            <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>{t.nav.portfolio}</a></li>
            <li><a href="#pricing" onClick={() => setMenuOpen(false)}>{t.nav.pricing}</a></li>
            <li><a href="blog/" onClick={() => setMenuOpen(false)}>{t.nav.blog}</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>{t.nav.contact}</a></li>
            <li><LanguageSwitcher onSelect={() => setMenuOpen(false)} /></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>{t.hero.title}</h1>
          <p className="hero-subheadline">{t.hero.subheadline}</p>
          <p className="live-counter">{t.hero.liveCounter} <span>7</span> {t.hero.shops}</p>
          <div className="hero-cta">
            <a href="https://wa.me/4915219338756?text=Hi%2C%20I'd%20like%20to%20get%20a%20free%20demo%20of%20my%20shop." className="btn btn-primary" target="_blank" rel="noopener noreferrer">{t.hero.ctaDemo}</a>
            <a href="#portfolio" className="btn btn-secondary">{t.hero.ctaWork}</a>
          </div>
        </div>
        <div className="hero-bg"></div>
      </header>

      <main>
        <section className="section about" id="about">
          <h2 className="section-title">{t.about.title}</h2>
          <div className="about-content">
            <div className="about-photo"><div className="photo-placeholder">Your Photo</div></div>
            <div className="about-text"><p>{t.about.text}</p></div>
          </div>
        </section>

        <section className="section before-after" id="before-after">
          <h2 className="section-title">{t.beforeAfter.title}</h2>
          <p className="section-subtitle">{t.beforeAfter.subtitle}</p>
          <div className="before-after-grid">
            <div className="before-after-card before">
              <h3>{t.beforeAfter.before}</h3>
              <p>{t.beforeAfter.beforeDesc}</p>
              <div className="image-placeholder"><span>{t.beforeAfter.beforeImg}</span></div>
            </div>
            <div className="before-after-arrow">→</div>
            <div className="before-after-card after">
              <h3>{t.beforeAfter.after}</h3>
              <p>{t.beforeAfter.afterDesc}</p>
              <div className="image-placeholder"><span>{t.beforeAfter.afterImg}</span></div>
            </div>
          </div>
        </section>

        <section className="section testimonials" id="testimonials">
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-subtitle">{t.testimonials.subtitle}</p>
          <div className="testimonials-grid">
            <div className="testimonial-placeholder"><div className="video-placeholder"><span>{t.testimonials.video1}</span><small>{t.testimonials.video1Desc}</small></div></div>
            <div className="testimonial-placeholder"><div className="video-placeholder"><span>{t.testimonials.video2}</span><small>{t.testimonials.video2Desc}</small></div></div>
            <div className="testimonial-placeholder"><div className="video-placeholder"><span>{t.testimonials.video3}</span><small>{t.testimonials.video3Desc}</small></div></div>
          </div>
        </section>

        <section className="section portfolio" id="portfolio">
          <h2 className="section-title">{t.portfolio.title}</h2>
          <div className="portfolio-grid">
            <article className="portfolio-card"><div className="card-header"><div className="card-logo">KM</div><span className="card-city">Barcelona</span></div><h3>Kumasi Market</h3><p className="card-type">Modern Marketplace</p><a href="https://kumasimarket.cycroommedia.com" className="btn btn-outline" target="_blank" rel="noopener noreferrer">{t.portfolio.viewDemo}</a></article>
            <article className="portfolio-card"><div className="card-header"><div className="card-logo">VA</div><span className="card-city">Hamburg</span></div><h3>Veer Afro Shop</h3><p className="card-type">Grocery & Retail</p><a href="https://veerafroshophamburg.cycroommedia.com" className="btn btn-outline" target="_blank" rel="noopener noreferrer">{t.portfolio.viewDemo}</a></article>
            <article className="portfolio-card"><div className="card-header"><div className="card-logo">MM</div><span className="card-city">Germany</span></div><h3>Malata Markt</h3><p className="card-type">Digital Catalog</p><a href="https://malatamarktgermany.cycroommedia.com" className="btn btn-outline" target="_blank" rel="noopener noreferrer">{t.portfolio.viewDemo}</a></article>
            <article className="portfolio-card"><div className="card-header"><div className="card-logo">BK</div><span className="card-city">Germany</span></div><h3>Briefklar</h3><p className="card-type">Service & Professional</p><a href="https://briefklar.cycroommedia.com" className="btn btn-outline" target="_blank" rel="noopener noreferrer">{t.portfolio.viewDemo}</a></article>
          </div>
        </section>

        <section className="section why-us" id="why-us">
          <h2 className="section-title">{t.whyUs.title}</h2>
          <div className="features-grid">
            <div className="feature-block"><span className="feature-icon">📦</span><h3>{t.whyUs.feature1}</h3><p>{t.whyUs.feature1Desc}</p></div>
            <div className="feature-block"><span className="feature-icon">💼</span><h3>{t.whyUs.feature2}</h3><p>{t.whyUs.feature2Desc}</p></div>
            <div className="feature-block"><span className="feature-icon">🔧</span><h3>{t.whyUs.feature3}</h3><p>{t.whyUs.feature3Desc}</p></div>
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <h2 className="section-title">{t.pricing.title}</h2>
          <div className="pricing-grid">
            <div className="pricing-card"><h3>🥉 Bronze</h3><ul className="pricing-features"><li><span className="check">10</span> {t.pricing.products}</li><li><span className="check">✅</span> {t.pricing.whatsapp}</li><li><span className="check">❌</span> {t.pricing.catalog}</li><li><span className="check">❌</span> {t.pricing.checkout}</li><li><span className="check">❌</span> {t.pricing.domain}</li><li><span className="check">1</span> {t.pricing.updates}</li></ul><div className="pricing-cost"><p className="setup">{t.pricing.setupFee}: €149</p><p className="monthly"><strong>€29</strong>/mo</p></div></div>
            <div className="pricing-card popular"><span className="badge">{t.pricing.popular}</span><h3>🥈 Silver</h3><ul className="pricing-features"><li><span className="check">50</span> {t.pricing.products}</li><li><span className="check">✅</span> {t.pricing.whatsapp}</li><li><span className="check">✅</span> {t.pricing.catalog}</li><li><span className="check">❌</span> {t.pricing.checkout}</li><li><span className="check">❌</span> {t.pricing.domain}</li><li><span className="check">3</span> {t.pricing.updates}</li></ul><div className="pricing-cost"><p className="setup">{t.pricing.setupFee}: €299</p><p className="monthly"><strong>€49</strong>/mo</p></div></div>
            <div className="pricing-card"><h3>🥇 Gold</h3><ul className="pricing-features"><li><span className="check">∞</span> {t.pricing.products}</li><li><span className="check">✅</span> {t.pricing.whatsapp}</li><li><span className="check">✅</span> {t.pricing.catalog}</li><li><span className="check">✅</span> {t.pricing.checkout}</li><li><span className="check">✅</span> {t.pricing.domain}</li><li><span className="check">∞</span> {t.pricing.updates}</li></ul><div className="pricing-cost"><p className="setup">{t.pricing.setupFee}: €499</p><p className="monthly"><strong>€79</strong>/mo</p></div></div>
          </div>
          <p className="pricing-note">{t.pricing.note}</p>
        </section>

        <section className="section how-it-works" id="how-it-works">
          <h2 className="section-title">{t.howItWorks.title}</h2>
          <div className="steps-grid">
            <div className="step-block"><span className="step-icon">📱</span><span className="step-number">{t.howItWorks.step1}</span><p>{t.howItWorks.step1Desc}</p></div>
            <div className="step-arrow">→</div>
            <div className="step-block"><span className="step-icon">👀</span><span className="step-number">{t.howItWorks.step2}</span><p>{t.howItWorks.step2Desc}</p></div>
            <div className="step-arrow">→</div>
            <div className="step-block"><span className="step-icon">🚀</span><span className="step-number">{t.howItWorks.step3}</span><p>{t.howItWorks.step3Desc}</p></div>
          </div>
        </section>

        <section className="section blog-preview" id="blog">
          <h2 className="section-title">{t.blog.title}</h2>
          <p className="section-subtitle">{t.blog.subtitle}</p>
          <div className="blog-grid">
            <a href="blog/beste-afroshops-hamburg-2025.html" className="blog-card"><h3>Die 10 besten Afroshops in Hamburg (2025)</h3><p>Feature your clients, rank for shop searches.</p><span className="blog-read">{t.blog.readMore}</span></a>
            <a href="blog/afroshop-website-erstellen-kosten.html" className="blog-card"><h3>Afroshop Website erstellen: Kosten & Dauer</h3><p>For buyers at the decision stage.</p><span className="blog-read">{t.blog.readMore}</span></a>
            <a href="blog/whatsapp-digital-tools-afroshop.html" className="blog-card"><h3>WhatsApp reicht nicht mehr: 5 digitale Tools</h3><p>Challenge the status quo.</p><span className="blog-read">{t.blog.readMore}</span></a>
          </div>
          <div className="blog-cta"><a href="blog/" className="btn btn-outline">{t.blog.viewAll}</a></div>
        </section>

        <section className="section contact" id="contact">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="contact-subtext">{t.contact.subtext}</p>
          <a href="https://wa.me/4915219338756?text=Hi%2C%20I'd%20like%20to%20get%20a%20free%20demo%20of%20my%20shop." className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {t.contact.whatsapp}
          </a>
          <div className="contact-details">
            <p><a href="mailto:info@cycroommedia.com">info@cycroommedia.com</a></p>
            <p><a href="https://www.cycroommedia.com">www.cycroommedia.com</a></p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <a href="#home" className="footer-logo">Cycroom Media</a>
          <p className="footer-copy">{t.footer.copy}</p>
          <nav className="footer-nav">
            <a href="#home">{t.nav.home}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#portfolio">{t.nav.portfolio}</a>
            <a href="#pricing">{t.nav.pricing}</a>
            <a href="blog/">{t.nav.blog}</a>
            <a href="#contact">{t.nav.contact}</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
