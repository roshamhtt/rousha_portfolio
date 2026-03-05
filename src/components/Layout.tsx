import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Projects', href: '/#projects' },
    { name: 'Process', href: '/#process' },
    { name: 'About', href: '/#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-6 py-3 shadow-lg shadow-black/5 dark:shadow-white/5"
      >
        <Link to="/" className="text-sm md:text-base font-bold tracking-tighter uppercase">
          ROUSHA <span className="text-zinc-400">MOSHTAGHIAN</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4 pl-4 border-l border-zinc-800">
            <a
              href="#contact"
              className="bg-zinc-50 text-zinc-900 px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 glass rounded-2xl p-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-400"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-zinc-50 text-zinc-900 px-5 py-3 rounded-xl text-center font-medium"
          >
            Let's Talk
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-white text-2xl font-bold tracking-tighter mb-6 uppercase">
            ROUSHA<span className="text-zinc-500">MOSHTAGHIAN</span>
          </h2>
          <p className="max-w-xs mb-8">
            Crafting digital experiences that bridge the gap between human needs and business goals.
          </p>
          <div className="flex gap-4">
            {['LinkedIn'].map((social) => (
              <a 
                key={social}
                href={social === 'LinkedIn' ? "https://www.linkedin.com/in/roushamoshtaghian" : "#"} 
                className="hover:text-white transition-colors relative group"
              >
                {social}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Projects', 'Process', 'About'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="mailto:roshamhtt@gmail.com" className="hover:text-white transition-colors">roshamhtt@gmail.com</a></li>
            </ul>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-zinc-800 text-sm">
        © {new Date().getFullYear()} Rousha Moshtaghian. All rights reserved.
      </div>
    </footer>
  );
};
