import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './context/LanguageContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Hero key="home" />
      case 'solutions':
        return <Solutions key="solutions" />
      case 'skills':
        return <Skills key="skills" />
      case 'experience':
        return <Experience key="experience" />
      case 'projects':
        return <Projects key="projects" />
      default:
        return <Hero key="home" />
    }
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  }

  const pageTransition = {
    duration: 0.3,
    ease: 'easeInOut' as const
  }

  return (
    <LanguageProvider>
      <div className="app">
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="app-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App
