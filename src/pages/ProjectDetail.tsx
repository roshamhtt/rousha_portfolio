import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User, Target, CheckCircle2, Monitor, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectImpactChart } from '../components/Visualizations';

export const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Project not found</h1>
        <Link to="/" className="text-zinc-500 underline">Go back home</Link>
      </div>
    );
  }

  return (
    <main className="pt-40 pb-32 relative">
      <div className="section-container">
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-zinc-500 hover:text-emerald-500 transition-colors mb-16 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-mono uppercase tracking-widest">Back to Projects</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.21, 0.45, 0.32, 0.9] }}
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.4em] mb-6 block"
              >
                {project.category}
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
              >
                {project.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-light text-zinc-400 leading-tight"
              >
                {project.description}
              </motion.p>
            </div>
            
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 py-16 border-y border-white/5"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <p className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest">My Role</p>
            <p className="text-xl font-serif italic text-zinc-100">{project.role}</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="space-y-4"
          >
            <p className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest">Duration</p>
            <p className="text-xl font-serif italic text-zinc-100">{project.duration}</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="space-y-4"
          >
            <p className="text-[10px] text-zinc-500 uppercase font-mono tracking-widest">Focus</p>
            <p className="text-xl font-serif italic text-zinc-100">{project.category}</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] }}
          className="aspect-video rounded-[4rem] overflow-hidden mb-32 bg-zinc-900 border border-white/5 shadow-2xl shadow-emerald-500/5"
        >
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-40">
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-4">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500 mb-4">The Problem</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-2xl md:text-3xl font-light text-zinc-300 leading-tight">{project.problem}</p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
          >
            <div className="lg:col-span-4">
              <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500 mb-4">The Solution</h2>
            </div>
            <div className="lg:col-span-8">
              <p className="text-2xl md:text-3xl font-light text-zinc-300 leading-tight">{project.solution}</p>
            </div>
          </motion.section>

          {project.prototypeUrl && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500 mb-4">Interactive Prototype</h2>
                  <h3 className="heading-lg">Experience the <span className="font-serif italic text-zinc-400">solution</span>.</h3>
                </div>
                <div className="flex items-center gap-3">
                  {project.figmaUrl && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-zinc-950 text-xs font-bold transition-all hover:bg-emerald-400"
                    >
                      <ExternalLink size={14} />
                      Open in Figma
                    </motion.a>
                  )}
                  <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono">
                    <Monitor size={14} className="text-emerald-500" />
                    Desktop Optimized
                  </div>
                </div>
              </div>
              
              <div className="aspect-video w-full rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900 relative group">
                <iframe 
                  className="w-full h-full"
                  src={project.prototypeUrl}
                  allowFullScreen
                />
                <div className="absolute inset-0 pointer-events-none border-[12px] border-zinc-950/20 rounded-[3rem]" />
              </div>
            </motion.section>
          )}

          {project.comparison && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500 mb-4">Visual Evolution</h2>
                <h3 className="heading-lg">Before <span className="font-serif italic text-zinc-400">&</span> After.</h3>
                <p className="text-zinc-400 mt-6">{project.comparison.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 bg-zinc-900 group relative">
                    <img 
                      src={project.comparison.before} 
                      alt="Before Redesign" 
                      className="w-full h-full object-cover transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">Original</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-emerald-500/20 bg-zinc-900 shadow-2xl shadow-emerald-500/5 relative">
                    <img 
                      src={project.comparison.after} 
                      alt="After Redesign" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-bold">New Design</span>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {project.individualPosts && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500 mb-4">
                  {project.id === 'thrive-moms' ? 'Project Gallery' : project.id === 'crunch-fitness' ? 'Portfolio' : 'Content Strategy'}
                </h2>
                <h3 className="heading-lg">
                  {project.id === 'thrive-moms' ? 'Portfolio' : project.id === 'crunch-fitness' ? 'My' : 'Individual'}{' '}
                  <span className="font-serif italic text-zinc-400">
                    {project.id === 'thrive-moms' ? 'Showcase' : project.id === 'crunch-fitness' ? 'Design' : 'Post'}
                  </span>{' '}
                  {project.id !== 'thrive-moms' && project.id !== 'crunch-fitness' && 'Breakdown'}.
                </h3>
              </div>
              
              <div className={`grid gap-4 ${project.id === 'crunch-fitness' ? 'grid-cols-2 lg:grid-cols-4 items-end' : 'grid-cols-2 md:grid-cols-3'}`}>
                {project.individualPosts.map((post, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02, zIndex: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 cursor-zoom-in"
                  >
                    <img 
                      src={post} 
                      alt={`Portfolio Image ${idx + 1}`} 
                      className="w-full h-auto block"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {project.process.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-16">
                <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500 mb-4">Design Process</h2>
                <h3 className="heading-lg">Methodology <span className="font-serif italic text-zinc-400">&</span> Execution.</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {project.process.map((step, index) => (
                  <motion.div 
                    key={step.title} 
                    className="p-10 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/[0.08] transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="text-4xl font-display text-emerald-500 transition-colors mb-6">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                    <p className="text-zinc-500 leading-relaxed text-sm mb-6">{step.description}</p>
                    {step.image && (
                      <div className="mt-6 rounded-2xl overflow-hidden border border-white/5 bg-zinc-900">
                        <img 
                          src={step.image} 
                          alt={step.title} 
                          className="w-full h-auto object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {project.brainstormingImages && project.brainstormingImages.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500 mb-4">Ideation</h2>
                <h3 className="heading-lg">Brainstorming <span className="font-serif italic text-zinc-400">Sessions</span>.</h3>
              </div>
              <div className="space-y-8">
                {project.brainstormingImages.map((img, idx) => (
                  <div key={idx} className="rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900">
                    <img 
                      src={img} 
                      alt={`Brainstorming Session ${idx + 1}`} 
                      className="w-full h-auto block"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {project.understandingUsersImages && project.understandingUsersImages.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500 mb-4">Research</h2>
                <h3 className="heading-lg">Understanding <span className="font-serif italic text-zinc-400">Users</span>.</h3>
              </div>
              <div className="space-y-8">
                {project.understandingUsersImages.map((img, idx) => (
                  <div key={idx} className="rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900">
                    <img 
                      src={img} 
                      alt={`Understanding Users ${idx + 1}`} 
                      className="w-full h-auto block"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {project.results.length > 0 && (
            <motion.section 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-zinc-900 text-white p-12 md:p-24 rounded-[4rem] border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] -z-10" />
              <div className="mb-16">
                <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500 mb-4">Key Results</h2>
                <h3 className="heading-lg">{project.metrics ? 'Measuring ' : 'Project '}<span className="font-serif italic text-zinc-400">{project.metrics ? 'impact' : 'Outcomes'}</span>.</h3>
              </div>
              <div className="grid grid-cols-1 gap-8 mb-20">
                {project.results.map((result, idx) => (
                  <motion.div 
                    key={result} 
                    className="flex items-start gap-6 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (0.1 * idx) }}
                  >
                    <div className="w-8 h-8 rounded-full border border-emerald-500/30 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-xl md:text-2xl font-light text-zinc-300 leading-tight">{result}</p>
                  </motion.div>
                ))}
              </div>
              
              {project.metrics && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 p-8 rounded-3xl bg-black/20 border border-white/5"
                >
                  <ProjectImpactChart data={project.metrics} />
                </motion.div>
              )}
            </motion.section>
          )}

          {project.learnings && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pb-24"
            >
              <div className="mb-12">
                <h2 className="text-[10px] font-mono uppercase tracking-[0.4em] text-emerald-500 mb-4">Learnings</h2>
                <h3 className="heading-lg">Final <span className="font-serif italic text-zinc-400">reflections</span>.</h3>
              </div>
              <p className="text-2xl md:text-3xl font-light text-zinc-400 leading-tight">{project.learnings}</p>
            </motion.section>
          )}
        </div>
      </div>
    </main>
  );
};
