
import { Github, Linkedin, Mail, Eye, Target, Download } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  src="..\me.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                About Me
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Mechanical Engineer and software developer by training, with a strong desire to make the transition into the technological world. My experience in fields outside of programming has given me transferable skills that make it easier to face new challenges with confidence. I am committed to continuous learning and ready to apply my experience meaningfully in software development.

                I am excited to apply these skills in the field of software development, where my focus on adaptability and continuous learning will allow me to contribute meaningfully and grow professionally. I am ready to face new challenges and bring a fresh and dynamic approach to any team I collaborate with.
              </p>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">Professional Objective</h3>
                <p className="text-gray-300 leading-relaxed">
                  To secure a challenging position as a software developer where I can leverage my engineering background and programming skills to create innovative solutions, while continuously learning and growing in a dynamic tech environment.
                </p>
              </div>
              <div className="flex gap-6 items-center">
                {[
                  { icon: Github, href: 'https://github.com/Jorgejaimesg', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/jorge-jaimes-gonzalez-1a3466192/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:jorgejg0914@hotmail.com', label: 'Email' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transform hover:scale-110 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2 text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800/50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold">Mission</h3>
              </div>
              <p className="text-gray-300">
                My mission is to provide creative and effective solutions in web development and engineering, helping SMEs and large companies. Thanks to my multidisciplinary approach and communication skills, I offer innovative and customized results, always adapting to the needs of each client.
              </p>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <Eye className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold">Vision</h3>
              </div>
              <p className="text-gray-300">
                My mission is to provide creative and effective solutions in web development and engineering, helping SMEs and large companies. Thanks to my multidisciplinary approach and communication skills, I offer innovative and customized results, always adapting to the needs of each client.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}