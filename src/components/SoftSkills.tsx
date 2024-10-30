'use client'

import { motion } from 'framer-motion'
import { Brain, Users, Lightbulb, Target, MessageSquare, Clock, ShieldCheck, Ear } from 'lucide-react'

const softSkills = [
{
    name: 'Problem Solving',
    description: 'Analytical thinking and creative approach to overcome technical challenges.',
    icon: <Brain className="w-8 h-8" />,
},
{
    name: 'Team Player',
    description: 'Works collaboratively with others, valuing diverse perspectives to achieve shared goals.',
    icon: <Users className="w-8 h-8" />,
},
{
    name: 'Adaptability',
    description: 'Quick to learn and adapt to new technologies and changing project requirements.',
    icon: <Lightbulb className="w-8 h-8" />,
},
{
    name: 'Goal-Oriented',
    description: 'Focused on achieving objectives and delivering high-quality results on time.',
    icon: <Target className="w-8 h-8" />,
},
{
    name: 'Communication',
    description: 'Clear and effective communication with team members and stakeholders.',
    icon: <MessageSquare className="w-8 h-8" />,
},
{
    name: 'Creative Problem-Solver',
    description: 'Generates innovative ideas and solutions, thinking outside the box to overcome challenges.',
    icon: <Lightbulb className="w-8 h-8" />,
},
{
    name: 'Active Listener',
    description: 'Pays close attention to others, demonstrating empathy and understanding to foster effective communication.',
    icon: <Ear className="w-8 h-8" />,
},
{
    name: 'Time Management',
    description: 'Organizes tasks efficiently, prioritizing effectively to meet deadlines and maintain productivity.',
    icon: <Clock className="w-8 h-8" />,
},
{
    name: 'Resilient',
    description: 'Stays focused and positive under pressure, overcoming setbacks and maintaining productivity.',
    icon: <ShieldCheck className="w-8 h-8" />,
}
]

export default function SoftSkills() {
return (
    <section className="py-32 bg-gray-900/50">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Soft Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {softSkills.map((skill, index) => (
            <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
            >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full flex flex-col">
                <div className="text-4xl mb-4 text-blue-400">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-400 flex-grow">{skill.description}</p>
            </div>
            </motion.div>
        ))}
        </div>
    </div>
    </section>
)
}