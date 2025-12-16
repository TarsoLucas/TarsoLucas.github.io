import { motion } from 'framer-motion';
import {
  FaReact, FaNode, FaPython, FaPhp, FaJava, FaAws, FaDocker, FaGitAlt
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiPostgresql, SiMysql, SiMongodb,
  SiGraphql, SiTailwindcss, SiGo
} from 'react-icons/si';
import portfolioData from '../data/portfolio.json';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

const Skills = () => {
  const { skills } = portfolioData;
  const { t } = useLanguage();

  const skillIcons: { [key: string]: JSX.Element } = {
    'React': <FaReact />,
    'TypeScript': <SiTypescript />,
    'JavaScript': <SiJavascript />,
    'Node.js': <FaNode />,
    'Go': <SiGo />,
    'PHP': <FaPhp />,
    'Python': <FaPython />,
    'Java': <FaJava />,
    'PostgreSQL': <SiPostgresql />,
    'MySQL': <SiMysql />,
    'MongoDB': <SiMongodb />,
    'GraphQL': <SiGraphql />,
    'TailwindCSS': <SiTailwindcss />,
    'AWS S3': <FaAws />,
    'Docker': <FaDocker />,
    'Git': <FaGitAlt />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const renderSkillCategory = (title: string, skillList: string[], delay: number) => (
    <motion.div
      className="skill-category"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay }}
    >
      <h3 className="skill-category-title">{title}</h3>
      <div className="skill-grid">
        {skillList.map((skill, index) => (
          <motion.div
            key={skill}
            className="skill-card"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' 
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="skill-icon">
              {skillIcons[skill] || <span>💻</span>}
            </div>
            <span className="skill-name">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">{t.skills.title}</span>
          </h2>
          <p className="section-subtitle">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {renderSkillCategory(t.skills.frontend, skills.frontend, 0)}
          {renderSkillCategory(t.skills.backend, skills.backend, 0.1)}
          {renderSkillCategory(t.skills.apis, skills.apis, 0.2)}
          {renderSkillCategory(t.skills.databases, skills.databases, 0.3)}
          {renderSkillCategory(t.skills.ai, skills.ai, 0.4)}
          {renderSkillCategory(t.skills.cloud, [...skills.cloud, ...skills.tools.slice(0, 3)], 0.5)}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

