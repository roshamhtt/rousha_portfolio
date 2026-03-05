import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar, Footer } from './components/Layout';
import { Cursor } from './components/Cursor';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { ThemeProvider } from './context/ThemeContext';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Home />
            </motion.div>
          } 
        />
        <Route 
          path="/project/:id" 
          element={
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ProjectDetail />
            </motion.div>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col relative">
          <Cursor />
          <div className="atmospheric-bg" />
          <div className="noise-overlay" />
          <Navbar />
          <div className="flex-grow">
            <AnimatedRoutes />
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
