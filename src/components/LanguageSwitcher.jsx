import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES } from '../translations';

export function LanguageSwitcher({ onSelect }) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="lang-switcher">
      <button
        type="button"
        className="lang-trigger"
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Select language"
      >
        <span className="lang-globe-icon" aria-hidden>🌐</span>
      </button>
      {open && (
        <ul className="lang-dropdown-menu" role="menu">
          {LANGUAGES.map(({ code, flag, name }) => (
            <li key={code}>
              <button
                type="button"
                role="menuitem"
                className={`lang-option ${lang === code ? 'active' : ''}`}
                onClick={() => {
                  setLang(code);
                  setOpen(false);
                  onSelect?.();
                }}
              >
                <span className="lang-flag">{flag}</span>
                <span className="lang-name">{name}</span>
                {lang === code && <span className="lang-check">✓</span>}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
