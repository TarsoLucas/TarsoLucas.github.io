import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

const Experience = () => {
  const { experience } = portfolioData;
  const { t } = useLanguage();

  // Map experience data to translations
  const experienceKeys = ['agilize1', 'eureka', 'sirioLibanes', 'ford', 'giusoft', 'revolucaoZ'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">{t.experience.title}</span>
          </h2>
          <p className="section-subtitle">
            {t.experience.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experienceKeys.map((key, index) => {
            const expData = t.experience[key as keyof typeof t.experience] as any;
            const jobData = experience[index];

            return (
              <motion.div
                key={key}
                className="timeline-item"
                variants={itemVariants}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index < experienceKeys.length - 1 && <div className="timeline-line"></div>}
                </div>

                <motion.div
                  className={`experience-card ${jobData?.promoted ? 'promoted' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {jobData?.promoted && (
                    <div className="promoted-badge">
                      <FaTrophy /> {t.experience.promoted}
                    </div>
                  )}

                  <div className="experience-header">
                    <div className="experience-icon">
                      <FaBriefcase />
                    </div>
                    <div className="experience-info">
                      <h3 className="experience-position">{expData.position}</h3>
                      <h4 className="experience-company">{jobData?.company}</h4>
                      <div className="experience-meta">
                        <span className="experience-period">{expData.period}</span>
                        <span className="experience-location">{expData.location}</span>
                      </div>
                    </div>
                  </div>

                  {expData.description && (
                    <p className="experience-description">{expData.description}</p>
                  )}

                  <ul className="experience-achievements">
                    {expData.achievements.map((achievement: string, i: number) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>

                  <div className="experience-tech">
                    {jobData?.tech.map((tech: string) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

