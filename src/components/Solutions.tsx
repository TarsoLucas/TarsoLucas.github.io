import { motion } from 'framer-motion';
import { 
  FaRobot, FaCloud, FaCode, FaChartLine, FaMobile, FaDatabase,
  FaLightbulb, FaRocket, FaCog
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Solutions.css';

const Solutions = () => {
  const { language } = useLanguage();

  const solutions = [
    {
      icon: <FaRobot />,
      titleEn: 'AI Integration & Automation',
      titlePt: 'Integração de IA & Automação',
      descEn: 'Intelligent chatbots, RAG systems, and AI-powered automation using AWS Bedrock, OpenAI, and Azure AI. Transform your business with cutting-edge AI solutions.',
      descPt: 'Chatbots inteligentes, sistemas RAG e automação com IA usando AWS Bedrock, OpenAI e Azure AI. Transforme seu negócio com soluções de IA de ponta.',
      features: ['Chatbots', 'RAG Systems', 'AI Agents', 'Process Automation']
    },
    {
      icon: <FaCloud />,
      titleEn: 'Cloud Architecture & DevOps',
      titlePt: 'Arquitetura Cloud & DevOps',
      descEn: 'Scalable cloud solutions on AWS and GCP. CI/CD pipelines, infrastructure as code, and containerization for modern applications.',
      descPt: 'Soluções cloud escaláveis em AWS e GCP. Pipelines CI/CD, infraestrutura como código e containerização para aplicações modernas.',
      features: ['AWS/GCP', 'Docker', 'Terraform', 'CI/CD']
    },
    {
      icon: <FaCode />,
      titleEn: 'Full Stack Development',
      titlePt: 'Desenvolvimento Full Stack',
      descEn: 'Modern web applications with React, Node.js, Go, and PHP. From concept to deployment, delivering robust and scalable solutions.',
      descPt: 'Aplicações web modernas com React, Node.js, Go e PHP. Do conceito ao deploy, entregando soluções robustas e escaláveis.',
      features: ['React', 'Node.js', 'Go', 'PHP']
    },
    {
      icon: <FaChartLine />,
      titleEn: 'Data Engineering & Analytics',
      titlePt: 'Engenharia de Dados & Analytics',
      descEn: 'Build data pipelines, ETL processes, and analytics dashboards. Turn your data into actionable insights.',
      descPt: 'Construção de pipelines de dados, processos ETL e dashboards analíticos. Transforme seus dados em insights acionáveis.',
      features: ['ETL', 'Data Pipelines', 'Analytics', 'Dashboards']
    },
    {
      icon: <FaMobile />,
      titleEn: 'API Development & Integration',
      titlePt: 'Desenvolvimento de APIs & Integração',
      descEn: 'RESTful and GraphQL APIs designed for performance and scalability. Seamless third-party integrations.',
      descPt: 'APIs RESTful e GraphQL projetadas para performance e escalabilidade. Integrações perfeitas com terceiros.',
      features: ['REST', 'GraphQL', 'Microservices', 'Integrations']
    },
    {
      icon: <FaDatabase />,
      titleEn: 'Database Design & Optimization',
      titlePt: 'Design & Otimização de Banco de Dados',
      descEn: 'PostgreSQL, MySQL, and MongoDB solutions. Database architecture, optimization, and migration services.',
      descPt: 'Soluções PostgreSQL, MySQL e MongoDB. Arquitetura, otimização e migração de bancos de dados.',
      features: ['PostgreSQL', 'MySQL', 'MongoDB', 'Optimization']
    }
  ];

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
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="solutions">
      <div className="solutions-container">
        <motion.div
          className="solutions-hero"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="solutions-hero-icon">
            <FaLightbulb />
          </div>
          <h1 className="solutions-title">
            <span className="gradient-text">
              {language === 'en' ? 'Smart Solutions for Modern Challenges' : 'Soluções Inteligentes para Desafios Modernos'}
            </span>
          </h1>
          <p className="solutions-subtitle">
            {language === 'en' 
              ? 'I deliver fast, scalable, and innovative technology solutions that drive real business results'
              : 'Entrego soluções tecnológicas rápidas, escaláveis e inovadoras que geram resultados reais para o negócio'}
          </p>
          
          <div className="solutions-stats">
            <div className="stat-item">
              <FaRocket />
              <div>
                <div className="stat-number">7+</div>
                <div className="stat-label">{language === 'en' ? 'Years Experience' : 'Anos de Experiência'}</div>
              </div>
            </div>
            <div className="stat-item">
              <FaCog />
              <div>
                <div className="stat-number">20+</div>
                <div className="stat-label">{language === 'en' ? 'Projects Delivered' : 'Projetos Entregues'}</div>
              </div>
            </div>
            <div className="stat-item">
              <FaLightbulb />
              <div>
                <div className="stat-number">100%</div>
                <div className="stat-label">{language === 'en' ? 'Client Satisfaction' : 'Satisfação do Cliente'}</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="solutions-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="solution-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="solution-icon glow-strong">
                {solution.icon}
              </div>
              <h3 className="solution-title">
                {language === 'en' ? solution.titleEn : solution.titlePt}
              </h3>
              <p className="solution-description">
                {language === 'en' ? solution.descEn : solution.descPt}
              </p>
              <div className="solution-features">
                {solution.features.map((feature, i) => (
                  <span key={i} className="feature-tag">{feature}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;

