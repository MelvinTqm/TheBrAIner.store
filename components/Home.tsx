import React from 'react';
import StarBackground from './StarBackground';
import { ArrowRight, Brain, Zap } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: 'ebook' | 'author' | 'faq') => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-cosmic-900 text-white font-sans relative overflow-hidden flex flex-col animate-fade-in">
      <StarBackground />
      
      {/* Navbar */}
      <nav className="relative z-20 p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
         <div 
            className="font-serif font-bold text-xl tracking-widest text-slate-200 cursor-pointer"
            onClick={() => window.location.reload()}
         >
            TheBrAIner.store
         </div>
         <div className="hidden md:flex gap-8 text-sm text-slate-400 tracking-wider uppercase font-medium">
             <span 
                onClick={() => onNavigate('author')} 
                className="hover:text-white cursor-pointer transition-colors duration-300"
             >
                The Author
             </span>
             <span 
                onClick={() => onNavigate('faq')} 
                className="hover:text-white cursor-pointer transition-colors duration-300"
             >
                FAQs
             </span>
             <span className="hover:text-white cursor-pointer transition-colors duration-300">Contact</span>
         </div>
         <button className="md:hidden text-white">
            <div className="space-y-2">
                <div className="w-8 h-0.5 bg-white"></div>
                <div className="w-8 h-0.5 bg-white"></div>
            </div>
         </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center relative z-10 px-4 text-center">
         
         {/* Logo Container */}
         <div className="mb-12 relative group cursor-pointer" onClick={() => onNavigate('ebook')}>
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            
            {/* 
               IMPORTANT: Ensure 'logo.png' exists in your project's public folder. 
               The image is styled to match the dark theme and float slightly.
            */}
            <img 
                src="./logo.png"
                alt="The BrAIner Logo"
                className="relative w-64 md:w-96 h-auto mx-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback styling if image is missing
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent && !parent.querySelector('.fallback-logo')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-logo flex items-center justify-center gap-4 text-5xl md:text-7xl font-bold font-serif italic tracking-tighter text-white';
                    fallback.innerHTML = '<span>The<span style="color:#94a3b8">Br</span><span style="color:#ffffff">AI</span><span style="color:#94a3b8">ner</span></span>';
                    parent.appendChild(fallback);
                  }
                }}
            />
         </div>

         <div className="space-y-6 max-w-3xl mx-auto">
             <h2 className="text-lg md:text-xl font-sans text-gold-500 tracking-[0.2em] uppercase animate-pulse">
                Strategy • Intelligence • Evolution
             </h2>
             
             <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white leading-tight">
                Unlock Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-white to-slate-400">Cognitive Potential</span>
             </h1>
             
             <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
                Welcome to the academy for the new era. We merge human intuition with artificial intelligence to create elite thinkers.
             </p>
         </div>

         <div className="mt-12 flex flex-col sm:flex-row gap-6 items-center">
            <button 
                onClick={() => onNavigate('ebook')}
                className="group relative px-8 py-5 bg-white text-black font-bold text-lg rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] w-full sm:w-auto min-w-[250px]"
            >
                <div className="absolute inset-0 bg-slate-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center justify-center gap-3 tracking-wide">
                    ACCESS THE BOOK <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                </span>
            </button>
            
             <button 
                onClick={() => onNavigate('author')}
                className="px-8 py-5 border border-white/20 hover:border-white text-white font-medium text-lg rounded-sm transition-all duration-300 w-full sm:w-auto min-w-[250px] backdrop-blur-sm hover:bg-white/5"
             >
                MEET THE AUTHOR
            </button>
         </div>
      </main>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-10 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block"></div>
      <div className="absolute top-0 right-10 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block"></div>
    </div>
  )
}

export default Home;