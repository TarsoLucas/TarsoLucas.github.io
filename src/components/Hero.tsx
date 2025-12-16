import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
  const { personal } = portfolioData;
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="glow-orb glow-orb-1"></div>
        <div className="glow-orb glow-orb-2"></div>
        <div className="glow-orb glow-orb-3"></div>
      </div>

      <motion.div
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-tag" variants={itemVariants}>
          <span className="tag-bracket">{'<'}</span>
          <span className="tag-text">Software Engineer</span>
          <span className="tag-bracket">{'/>'}</span>
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="gradient-text">{personal.name}</span>
        </motion.h1>

        <motion.p className="hero-subtitle" variants={itemVariants}>
          {t.hero.subtitle}
        </motion.p>

        <motion.p className="hero-bio" variants={itemVariants}>
          {t.hero.bio}
        </motion.p>

        <motion.div className="hero-cta" variants={itemVariants}>
          <a href={`mailto:${personal.email}`} className="btn btn-primary glow">
            {t.hero.getInTouch}
          </a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            {t.hero.viewWork}
          </a>
        </motion.div>

        <motion.div className="hero-contact" variants={itemVariants}>
          <a href={`mailto:${personal.email}`} className="contact-item" title="Email">
            <FaEnvelope />
            <span>{personal.email}</span>
          </a>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="scroll-line"></div>
          <div className="scroll-dot"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

