import { motion } from 'framer-motion';
import { FaHome, FaLightbulb, FaCode, FaBriefcase, FaRocket } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Navigation.css';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const { language, setLanguage, t } = useLanguage();

  const tabs = [
    { id: 'home', icon: <FaHome />, labelEn: 'Home', labelPt: 'Início' },
    { id: 'solutions', icon: <FaLightbulb />, labelEn: 'Solutions', labelPt: 'Soluções' },
    { id: 'skills', icon: <FaCode />, labelEn: 'Tech Stack', labelPt: 'Tecnologias' },
    { id: 'experience', icon: <FaBriefcase />, labelEn: 'Experience', labelPt: 'Experiência' },
    { id: 'projects', icon: <FaRocket />, labelEn: 'Projects', labelPt: 'Projetos' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <span className="gradient-text">Tarso Oliveira</span>
        </div>

        <div className="nav-tabs">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="nav-icon">{tab.icon}</span>
              <span className="nav-label">
                {t.language === 'en' ? tab.labelEn : tab.labelPt}
              </span>
            </motion.button>
          ))}
        </div>

        <div className="nav-language-selector">
          <motion.button
            className={`nav-lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="English"
          >
            <svg className="nav-flag-icon" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
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
            <span className="nav-lang-text">EN</span>
          </motion.button>
          <motion.button
            className={`nav-lang-btn ${language === 'pt' ? 'active' : ''}`}
            onClick={() => setLanguage('pt')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Português"
          >
            <svg className="nav-flag-icon" viewBox="0 0 60 42" xmlns="http://www.w3.org/2000/svg">
              <rect width="60" height="42" fill="#009b3a"/>
              <path d="M30,4 L56,21 L30,38 L4,21 Z" fill="#fedf00"/>
              <circle cx="30" cy="21" r="6.5" fill="#002776"/>
              <path d="M30,16 a6.5,6.5 0 0,0 0,10 a8,8 0 0,1 0,-10" fill="#fff"/>
            </svg>
            <span className="nav-lang-text">PT</span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

