
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[20rem] w-[20rem] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>
      <div className="relative z-10 text-center space-y-8">
        <h1 className="text-6xl md:text-8xl font-bold animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-300% animate-gradient">
            Jorge Jaimes Gonzalez
          </span>
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-300% animate-gradient">
            Software Developer
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto px-4 animate-fade-in-up">
          Crafting digital experiences with code and creativity
        </p>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </header>
  );
}