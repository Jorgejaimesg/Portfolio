
import { Hero } from './components/Hero';
import  About  from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import MyServices from './components/Services'
import SoftSkills from './components/SoftSkills'
function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <About />
      <Skills />
      <SoftSkills />
      <MyServices/>
      <Projects />
      
      <footer className="py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Jorge Jaimes Gonzalez. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;