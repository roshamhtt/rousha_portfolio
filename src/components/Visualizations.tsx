import React from 'react';
import { motion } from 'motion/react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from 'recharts';

// Skills Data
const skillsData = [
  { subject: 'Product Strategy', A: 90, fullMark: 100 },
  { subject: 'User Research', A: 85, fullMark: 100 },
  { subject: 'Visual Design', A: 95, fullMark: 100 },
  { subject: 'Prototyping', A: 90, fullMark: 100 },
  { subject: 'Design Systems', A: 80, fullMark: 100 },
  { subject: 'Front-end Dev', A: 70, fullMark: 100 },
];

export const SkillsRadar = () => {
  return (
    <div className="w-full h-[400px] flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
          <PolarGrid stroke="rgba(255,255,255,0.05)" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#71717a', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#10b981"
            fill="#10b981"
            fillOpacity={0.15}
            isAnimationActive={true}
            animationDuration={1500}
            animationBegin={300}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

interface MetricProps {
  data: {
    label: string;
    before: number;
    after: number;
  }[];
}

export const ProjectImpactChart = ({ data }: MetricProps) => {
  return (
    <div className="w-full h-[400px] mt-12 bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10">
      <h3 className="text-xl font-display uppercase tracking-tight mb-8 text-white">Impact Metrics</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.05)" />
          <XAxis type="number" hide />
          <YAxis
            dataKey="label"
            type="category"
            tick={{ fill: '#a1a1aa', fontSize: 10, fontWeight: 500 }}
            width={150}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
            contentStyle={{ 
              backgroundColor: '#18181b', 
              borderRadius: '12px', 
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              fontSize: '12px'
            }}
          />
          <Legend verticalAlign="top" align="right" wrapperStyle={{ color: '#fff', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }} />
          <Bar 
            dataKey="before" 
            name="Before" 
            fill="#3f3f46" 
            radius={[0, 4, 4, 0]} 
            barSize={12} 
            isAnimationActive={true}
            animationDuration={1500}
            animationBegin={500}
          />
          <Bar 
            dataKey="after" 
            name="After" 
            fill="#10b981" 
            radius={[0, 4, 4, 0]} 
            barSize={12} 
            isAnimationActive={true}
            animationDuration={1500}
            animationBegin={1000}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// A simple D3-like SVG visualization for "Design Flow"
export const DesignFlowViz = () => {
  const nodes = [
    { x: 100, label: 'Empathy', sub: 'Understand' },
    { x: 250, label: 'Define', sub: 'Focus' },
    { x: 400, label: 'Ideate', sub: 'Create' },
    { x: 550, label: 'Prototype', sub: 'Build' },
    { x: 700, label: 'Test', sub: 'Validate' }
  ];

  return (
    <div className="w-full py-16 flex flex-col items-center">
      <svg viewBox="0 0 800 240" className="w-full max-w-5xl overflow-visible">
        {/* Glow Effect */}
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Connection Lines */}
        <motion.path 
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M 100 120 Q 200 60 300 120 T 500 120 T 700 120" 
          fill="none" 
          stroke="#10b981" 
          strokeWidth="2" 
          strokeDasharray="6 6" 
          className="opacity-30"
        />
        
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.g 
            key={node.label} 
            className="group cursor-default"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * i, duration: 0.6 }}
          >
            {/* Outer Ring */}
            <motion.circle
              cx={node.x}
              cy={120}
              r="12"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="1"
              strokeOpacity={0.2}
              whileHover={{ r: 16, strokeOpacity: 0.5 }}
              className="transition-all duration-500"
            />
            
            {/* Inner Core */}
            <motion.circle
              cx={node.x}
              cy={120}
              r="4"
              fill="#10b981"
              filter="url(#glow)"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4
              }}
            />

            {/* Labels */}
            <text
              x={node.x}
              y={165}
              textAnchor="middle"
              className="text-[11px] font-display uppercase tracking-[0.2em] fill-zinc-100 group-hover:fill-emerald-400 transition-colors"
            >
              {node.label}
            </text>
            <text
              x={node.x}
              y={185}
              textAnchor="middle"
              className="text-[9px] font-mono uppercase tracking-[0.1em] fill-zinc-500 opacity-60"
            >
              {node.sub}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};
