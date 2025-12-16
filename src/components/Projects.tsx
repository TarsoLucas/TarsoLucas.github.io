import { motion } from 'framer-motion';
import { FaGithub, FaStar } from 'react-icons/fa';
import portfolioData from '../data/portfolio.json';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
  const { projects } = portfolioData;
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">{t.projects.title}</span>
          </h2>
          <p className="section-subtitle">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {project.image && (
                <div
                  className="project-image-bg"
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className="project-image-overlay"></div>
                </div>
              )}

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-name">{project.name}</h3>
                  {project.stars && (
                    <div className="project-stars">
                      <FaStar /> {project.stars}
                    </div>
                  )}
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaGithub /> {t.projects.code}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="github-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>{t.projects.viewMore}</p>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary glow"
          >
            <FaGithub /> {t.projects.visitGithub}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

