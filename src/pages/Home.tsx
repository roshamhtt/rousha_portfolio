import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Mail, Linkedin, Github, Download, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, experiences, skills } from '../data/projects';
import { SkillsRadar, DesignFlowViz } from '../components/Visualizations';

const Hero = () => {
  return (
    <section className="section-container pt-48 pb-16 relative min-h-[80vh] flex flex-col justify-center">
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" 
      />
      
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute -left-12 top-0 hidden lg:block"
        >
          <span className="vertical-text text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600">
            based in Toronto/ available 2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-[10px] font-mono uppercase tracking-widest mb-12"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Designer
        </motion.div>

        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
              }
            }
          }}
          className="heading-xl mb-12 relative"
        >
          <div className="flex flex-wrap items-baseline gap-x-6">
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: 45 },
                visible: { opacity: 1, y: 0, rotateX: 0 }
              }}
              className="inline-block"
            >
              CRAFTING
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              className="text-zinc-600 italic font-serif lowercase tracking-normal text-[0.6em] md:text-[0.5em] lg:text-[0.4em] translate-y-[-0.2em]"
            >
              digital
            </motion.span>
          </div>
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 40, rotateX: 45 },
              visible: { opacity: 1, y: 0, rotateX: 0 }
            }}
            className="block"
          >
            EXPERIENCES<span className="text-emerald-500">.</span>
          </motion.span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="lg:col-span-7"
          >
            <p className="text-2xl md:text-4xl font-light text-zinc-400 leading-tight max-w-4xl">
              I craft digital experiences that <span className="text-zinc-100 font-medium">not only look good but drive action.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="aspect-square rounded-full border border-white/5 p-8 relative flex items-center justify-center">
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute inset-0 rounded-full border border-emerald-500/20" 
              />
              <div className="text-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="text-6xl font-display text-zinc-800 mb-2"
                >
                  02+
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-[10px] font-mono uppercase tracking-widest text-zinc-500"
                >
                  Years of Experience
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectGrid = () => {
  return (
    <section id="projects" className="section-container bg-zinc-950">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.15, 
              ease: [0.21, 0.45, 0.32, 0.9] 
            }}
            className="group cursor-pointer"
          >
            <Link to={`/project/${project.id}`}>
              <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-8 bg-zinc-900 relative group border border-white/5">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                  <div className="flex gap-2">
                    {project.tags?.slice(0, 2).map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-widest text-white border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-3xl font-display font-medium text-white uppercase tracking-normal mb-2 group-hover:text-emerald-500 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 text-sm italic font-serif">{project.category}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-zinc-950 transition-all duration-500">
                  <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: 'Discover', desc: 'Deep dive into user needs, market trends, and business goals through research.' },
    { title: 'Define', desc: 'Synthesize findings to define the core problem and user personas.' },
    { title: 'Ideate', desc: 'Brainstorm solutions, sketch wireframes, and map out user journeys.' },
    { title: 'Prototype', desc: 'Bring ideas to life with interactive prototypes for testing.' },
    { title: 'Test', desc: 'Validate designs with real users and gather actionable feedback.' },
    { title: 'Iterate', desc: 'Refine and polish based on data and insights for the final solution.' }
  ];

  return (
    <section id="process" className="section-container relative">
      <div className="absolute top-0 right-0 hidden lg:block">
        <span className="vertical-text text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-800">
          Methodology / 01-06
        </span>
      </div>
      <div className="mb-24 text-center max-w-3xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500 mb-4 block"
        >
          The Approach
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="heading-lg mb-6"
        >
          A <span className="font-serif italic text-zinc-400">systematic</span> way <br />to solve complex problems.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 text-lg font-light"
        >
          My design process is built on iterative cycles of discovery and validation, ensuring that every decision is backed by user needs and business objectives.
        </motion.p>
      </div>
      
      <div className="mb-32">
        <DesignFlowViz />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div 
            key={step.title} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative p-10 rounded-[2.5rem] border border-white/5 bg-zinc-900/50 backdrop-blur-sm hover:border-emerald-500/20 transition-all group"
          >
            <div className="flex justify-between items-start mb-8">
              <div className="text-4xl font-display text-emerald-500 group-hover:scale-110 transition-transform">{String(index + 1).padStart(2, '0')}</div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 size={20} className="text-emerald-500" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-zinc-100">{step.title}</h3>
            <p className="text-zinc-500 leading-relaxed font-light">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-container bg-zinc-950 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
        >
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500 mb-4 block"
          >
            The Designer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mb-12"
          >
            About <span className="font-serif italic text-zinc-400">me</span>.
          </motion.h2>
          <div className="space-y-8 text-zinc-400 text-xl font-light leading-relaxed">
            <p>
              AI-savvy Designer with <span className="text-zinc-100">2+ years of experience</span> creating engaging digital experiences using modern design and AI tools. Skilled in user research, rapid prototyping, and translating behavioral insights into measurable usability improvements.
            </p>
            <p>
              Experienced collaborating with clinicians, engineers, and cross-functional teams to deliver user-centered solutions in healthcare and lifestyle products.
            </p>
            <div className="pt-8">
              <a 
                href="https://drive.google.com/file/d/1i8y3_EjvNaCcO2DXaiKBwiLqkMAzWsn7/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block group relative px-8 py-4 overflow-hidden rounded-full border border-white/10 text-zinc-100 font-medium transition-all hover:bg-white/5"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download Resume <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 rounded-[2rem] relative overflow-hidden flex items-center justify-center"
        >
          <div className="absolute top-0 right-0 p-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-700">Competencies</span>
          </div>
          <div className="w-full max-w-md">
            <SkillsRadar />
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7"
        >
          <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-zinc-800" /> Experience
          </h3>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="relative pl-8 border-l border-white/5"
              >
                <div className="absolute top-0 left-0 w-[2px] h-6 bg-emerald-500" />
                <div className="flex flex-wrap justify-between items-baseline gap-4 mb-4">
                  <h4 className="text-2xl font-semibold text-zinc-100">{exp.role}</h4>
                  <span className="text-xs font-mono text-zinc-500 bg-white/5 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <p className="text-sm text-emerald-500 mb-6 uppercase tracking-[0.2em] font-medium">
                  {exp.company} {exp.location && <span className="text-zinc-600 ml-2">/ {exp.location}</span>}
                </p>
                <p className="text-lg text-zinc-400 leading-relaxed font-light max-w-3xl">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-5"
        >
          <h3 className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-zinc-800" /> Expertise
          </h3>
          <div className="grid grid-cols-1 gap-12">
            {skills.map((skill, idx) => (
              <motion.div 
                key={skill.category}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="glass p-8 rounded-3xl border border-white/5"
              >
                <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-500 mb-6">{skill.category}</h4>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.05
                      }
                    }
                  }}
                  className="flex flex-wrap gap-3"
                >
                  {skill.items.map((item) => (
                    <motion.span 
                      key={item} 
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 }
                      }}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/30 transition-all cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Sarah Johnson', role: 'Product Manager @ EcoTrack', text: 'Working with this designer was a game-changer for our product. Their ability to synthesize complex user feedback into simple, elegant UI is unmatched.' },
    { name: 'Michael Chen', role: 'CTO @ FinFlow', text: 'Not just a designer, but a strategic partner. They understood our business goals and translated them into a visual language that our users love.' }
  ];

  return (
    <section className="section-container overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {reviews.map((review, idx) => (
          <motion.div 
            key={review.name} 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 * idx, ease: [0.21, 0.45, 0.32, 0.9] }}
            className="glass p-12 rounded-[2rem] relative"
          >
            <div className="absolute top-12 left-12 text-6xl font-serif text-white/5 pointer-events-none">“</div>
            <p className="text-2xl font-serif italic text-zinc-300 mb-12 relative z-10 leading-relaxed">
              {review.text}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-display">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-zinc-100">{review.name}</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-container bg-zinc-900 text-white rounded-[4rem] my-24 overflow-hidden relative border border-white/5">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-emerald-500/10 blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-blue-500/10 blur-[120px] -z-10" />
      
      <div className="py-24 px-12 md:px-24 relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500 mb-8 block">Get in Touch</span>
          <h2 className="font-display text-6xl md:text-9xl uppercase leading-[0.85] tracking-tighter mb-16">
            Let's build <br />something <br /><span className="text-zinc-600 italic font-serif lowercase tracking-normal">extraordinary</span>.
          </h2>
          <div className="flex justify-center mt-24">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-12 md:p-16 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center group max-w-2xl w-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8 group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-4">Email Me</p>
              <a href="mailto:roshamhtt@gmail.com" className="text-2xl md:text-4xl font-light hover:text-emerald-500 transition-colors">
                roshamhtt@gmail.com
              </a>
            </motion.div>
          </div>

          <div className="mt-24 flex justify-center gap-12">
            <motion.a whileHover={{ y: -5 }} href="https://www.linkedin.com/in/roushamoshtaghian" className="text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
              <Linkedin size={20} /> <span className="text-[10px] font-mono uppercase tracking-widest">LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <main>
      <Hero />
      <ProjectGrid />
      <Process />
      <About />
      <Contact />
    </main>
  );
};
