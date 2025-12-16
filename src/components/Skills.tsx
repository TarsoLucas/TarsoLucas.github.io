import { motion } from 'framer-motion';
import {
  FaReact, FaNode, FaPython, FaPhp, FaJava, FaAws, FaDocker, FaGitAlt, FaHtml5, FaCss3, FaAngular,
  FaThinkPeaks,
  FaBrain,
  FaGithub, FaGitlab,
  FaBitbucket
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript, SiPostgresql, SiMysql, SiMongodb,
  SiGraphql, SiTailwindcss, SiGo,
  SiFlask, SiFastapi,
  SiMaterialformkdocs,
  SiGooglecloud, 
} from 'react-icons/si';
import portfolioData from '../data/portfolio.json';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';
import { RiFirebaseLine } from 'react-icons/ri';
import { AiOutlineOpenAI, AiTwotoneApi } from 'react-icons/ai';
import { PiVectorThreeDuotone } from 'react-icons/pi';
import { VscAzure } from 'react-icons/vsc';

const Skills = () => {
  const { skills } = portfolioData;
  const { t } = useLanguage();

  const skillIcons: { [key: string]: React.ReactElement } = {
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
    'HTML5': <FaHtml5 />,
    'CSS3': <FaCss3 />,
    'Angular': <FaAngular />,
    'MaterialUI': <SiMaterialformkdocs />,
    'Flask': <SiFlask />,
    'FastAPI': <SiFastapi />,
    'Firebase': <RiFirebaseLine />,
    'RESTful APIs': <AiTwotoneApi />,
    'AWS Bedrock': <FaAws />,
    'OpenAI': <AiOutlineOpenAI />,
    'AI Embedding': <PiVectorThreeDuotone />,
    'Azure AI Foundry': <VscAzure />,
    'RAG': <FaThinkPeaks />,
    'Agno AI': <FaBrain />,
    'GCP': <SiGooglecloud />,
    'Cloud Run': <SiGooglecloud />,
    'App Engine': <SiGooglecloud />,
    'GitHub': <FaGithub />,
    'GitLab': <FaGitlab />,
    'Bitbucket': <FaBitbucket />,
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
        {skillList.map((skill) => (
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

