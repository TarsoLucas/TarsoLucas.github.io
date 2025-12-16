import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-selector">
      <motion.button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => setLanguage('en')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="English"
      >
        <svg className="flag-icon" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
          <clipPath id="s">
            <path d="M0,0 v30 h60 v-30 z"/>
          </clipPath>
          <clipPath id="t">
            <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
          </clipPath>
          <g clipPath="url(#s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#b22234"/>
            <path d="M0,3.5 h60 M0,7 h60 M0,10.5 h60 M0,14 h60 M0,17.5 h60 M0,21 h60 M0,24.5 h60 M0,28 h60" stroke="#fff" strokeWidth="2.3"/>
            <path d="M0,0 v15 h30 v-15 z" fill="#3c3b6e"/>
          </g>
        </svg>
        <span className="lang-text">EN</span>
      </motion.button>
      <motion.button
        className={`lang-btn ${language === 'pt' ? 'active' : ''}`}
        onClick={() => setLanguage('pt')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Português"
      >
        <svg className="flag-icon" viewBox="0 0 60 42" xmlns="http://www.w3.org/2000/svg">
          <rect width="60" height="42" fill="#009b3a"/>
          <path d="M30,4 L56,21 L30,38 L4,21 Z" fill="#fedf00"/>
          <circle cx="30" cy="21" r="6.5" fill="#002776"/>
          <path d="M30,16 a6.5,6.5 0 0,0 0,10 a8,8 0 0,1 0,-10" fill="#fff"/>
        </svg>
        <span className="lang-text">PT</span>
      </motion.button>
    </div>
  );
};

export default LanguageSelector;

