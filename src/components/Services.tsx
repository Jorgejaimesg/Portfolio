
import { motion } from 'framer-motion'
import { Code, Database, Globe, Layout, Server, Terminal } from 'lucide-react';

const service = [
{
    name: 'Web Development',
    description: 'Creating responsive and dynamic websites using modern frameworks and technologies.',
    icon: <Globe className="w-8 h-8" />,
},

{
    name: 'Backend Development',
    description: 'Building robust server-side applications and APIs to power your digital solutions.',
    icon: <Server className="w-8 h-8" />,
},
{
    name: 'Database Design',
    description: 'Designing and optimizing database structures for efficient data management.',
    icon: <Database className="w-8 h-8" />,
},
{
    name: 'UI/UX Design',
    description: 'Creating intuitive and visually appealing user interfaces for web.',
    icon: <Layout className="w-8 h-8" />,
},
{
    name: 'Custom Software Solutions',
    description: 'Developing tailored software solutions to meet your specific business needs.',
    icon: <Code className="w-8 h-8" />,
},
{
    name: 'G-Code Design',
    description: 'Programming G-code for precision CNC machining with FANUC controls, tailored for milling operations.',
    icon: <Terminal className="w-8 h-8" />,
}
]

export default function MyServices() {
return (
    <section className="py-32 bg-gray-900/50">
    <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Services I Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {service.map((item, index) => (
            <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
            >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full flex flex-col">
                <div className="text-4xl mb-4 text-blue-400">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-400 flex-grow">{item.description}</p>
            </div>
            </motion.div>
        ))}
        </div>
    </div>
    </section>
)
}