
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Pepita Confections',
    description: 'A web application focused on inventory and cost management for a clothing manufacturing company.',
    image: '/pepita.png',
    tech: ['Lit', 'Javascript'],
    github: '#'
  },
  {
    title: 'JSA-Services',
    description: 'Web application focused on the sale and management of sales of services in companies',
    image: '/jsaService.png',
    tech: ['TypeScript', 'React', 'Java', 'SpringBoot', 'MySQL'],
    github: '#'
  },
  {
    title: 'Zap-Store',
    description: ' web application focused on inventory and sales management for an electrical devices company',
    image: '/zapStore.jpg',
    tech: ['Java', 'MySQL'],
    github: '#'
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 bg-gray-700/50 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}