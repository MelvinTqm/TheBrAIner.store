import React from 'react';
import StarBackground from './StarBackground';
import { Book3D } from './Book3D';
import Pricing from './Pricing';
import { BookOpen, Brain, Zap, Target, Star, ChevronDown, UserCheck, Layers, ArrowLeft } from 'lucide-react';

interface EbookLandingProps {
  onBack: () => void;
  onNavigate: (page: 'privacy' | 'terms' | 'contact') => void;
}

const EbookLanding: React.FC<EbookLandingProps> = ({ onBack, onNavigate }) => {
  const scrollToBuy = () => {
    document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContent = () => {
    document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
  };

  const chapters = [
    { 
        id: 1, 
        title: "From Tool to Thinking Partner", 
        desc: "AI isn't a shortcut machine—it interacts with thought, uncertainty, and cognition to support your mind." 
    },
    { 
        id: 2, 
        title: "Burnout, Overwhelm & Hidden Weight", 
        desc: "Burnout begins with uncertainty. Identifying the invisible emotional labor students and teachers carry." 
    },
    { 
        id: 3, 
        title: "Learn 10x Faster (Without Cheating)", 
        desc: "Move from memorising to constructing meaning using reflection, iteration, and feedback loops." 
    },
    { 
        id: 4, 
        title: "Students: From Chaos to Clarity", 
        desc: "Defeating blank-page anxiety, breaking work into micro-steps, and building realistic revision plans." 
    },
    { 
        id: 5, 
        title: "Teachers: Support & Structure", 
        desc: "Drafting feedback, identifying gaps, and reducing administrative overload so you have space to breathe." 
    },
    { 
        id: 6, 
        title: "Practical AI Workflows", 
        desc: "Real prompts for ChatGPT + Canva: Revision planners, mock exams, differentiated worksheets, and lesson plans." 
    },
    { 
        id: 7, 
        title: "From Beginner → Pro → Elite", 
        desc: "Growth is a progression. Move from needing structure to thinking critically with AI, not through it." 
    },
  ];

  return (
    <div className="min-h-screen bg-cosmic-900 text-slate-100 font-sans selection:bg-gold-500 selection:text-white animate-fade-in">
      
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center">
        <button 
          onClick={onBack}
          className="flex items-center text-slate-400 hover:text-white transition-colors gap-2 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-serif tracking-wide">TheBrAIner Home</span>
        </button>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <StarBackground />
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-20">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 font-medium text-sm tracking-wider uppercase mb-2">
              Bestseller by ThebrAIner.store
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              From <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">Beginner</span><br />
              To <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600 drop-shadow-[0_0_25px_rgba(234,179,8,0.4)]">Elite</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              AI won't make you smarter by itself. But it can help you think more clearly, organize complexity, and move from paralysis to progress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button 
                onClick={scrollToBuy}
                className="bg-gold-500 hover:bg-gold-400 text-cosmic-900 font-bold text-lg px-8 py-4 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Start Reading Now
              </button>
              <button 
                onClick={scrollToContent}
                className="border border-slate-600 hover:border-white text-slate-300 hover:text-white font-medium text-lg px-8 py-4 rounded-full transition-all bg-slate-900/50 backdrop-blur-sm"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image / 3D Book */}
          <div className="order-1 lg:order-2 flex justify-center perspective-1000">
             <Book3D />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          onClick={scrollToBuy}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 cursor-pointer hover:text-white transition-colors p-4 z-20"
        >
          <ChevronDown size={32} />
        </div>
      </header>

      {/* --- PROBLEM / AGITATION --- */}
      <section className="py-24 bg-gradient-to-b from-cosmic-900 to-indigo-950 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-12 text-white">The Voice Inside Us</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-slate-800/40 p-8 rounded-xl border border-slate-700 backdrop-blur-sm hover:border-red-400/30 transition-colors">
                    <h3 className="text-xl font-bold text-red-300 mb-4 flex items-center"><UserCheck className="mr-2"/> Students silently tell themselves:</h3>
                    <p className="text-2xl font-serif italic text-white mb-4">"I don't know where to start."</p>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Stay up late not because you're lazy, but because the work feels too big to begin. 
                        Too many tabs, expectations, and distractions create paralysis.
                    </p>
                </div>
                <div className="bg-slate-800/40 p-8 rounded-xl border border-slate-700 backdrop-blur-sm hover:border-red-400/30 transition-colors">
                    <h3 className="text-xl font-bold text-red-300 mb-4 flex items-center"><Layers className="mr-2"/> Teachers quietly think:</h3>
                    <p className="text-2xl font-serif italic text-white mb-4">"There is more to do than I can hold."</p>
                    <p className="text-slate-400 mt-4 text-sm leading-relaxed">
                        Carrying more than anyone realizes—marking, expectations, and invisible emotional weight. 
                        Burnout begins with uncertainty.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* --- SOLUTION / BENEFITS --- */}
      <section id="benefits" className="py-24 bg-slate-900 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Make yourself a <span className="text-gold-400">Queen</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">This book is not about shortcuts. It's about structure, confidence, and breathing space inside a busy mind.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:bg-slate-800/60 transition-all group">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                    <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Amplify Effort</h3>
                <p className="text-slate-400 text-sm">AI interacts with thought and uncertainty. It doesn't replace thinking—it supports it, turning chaos into ordered steps.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:bg-slate-800/60 transition-all group">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                    <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Deepen Understanding</h3>
                <p className="text-slate-400 text-sm">Move from memorizing to constructing meaning. Use reflection loops and active processing to learn 10x faster.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700 hover:bg-slate-800/60 transition-all group">
                <div className="w-12 h-12 bg-gold-500/20 rounded-lg flex items-center justify-center text-gold-400 mb-4 group-hover:scale-110 transition-transform">
                    <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Sustainable Growth</h3>
                <p className="text-slate-400 text-sm">Protect your wellbeing. A rested teacher is a better teacher. A supported student is a confident student.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CHAPTERS PREVIEW --- */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-cosmic-900">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/3 sticky top-24">
                    <h3 className="text-3xl font-serif text-white mb-6">What's Inside?</h3>
                    <p className="text-slate-400 mb-6">A complete journey across 7 chapters, taking you from the basics of AI interaction to elite-level critical thinking integration.</p>
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                        <p className="text-gold-400 font-bold mb-2">The Goal</p>
                        <p className="text-sm text-slate-300">"The goal is not to rely on AI — but to grow alongside it."</p>
                    </div>
                </div>
                <div className="md:w-2/3 grid gap-4">
                    {chapters.map((chapter) => (
                        <div key={chapter.id} className="flex items-start p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-slate-700">
                            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-800 text-gold-400 font-bold border border-slate-700 mr-4 mt-1">
                                {chapter.id}
                            </span>
                            <div>
                                <h4 className="text-lg font-bold text-white">{chapter.title}</h4>
                                <p className="text-slate-400 text-sm mt-1">{chapter.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- PRICING --- */}
      <Pricing />

      {/* --- FOOTER --- */}
      <footer className="bg-black py-12 border-t border-slate-800 text-sm text-slate-500">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <h5 className="text-white font-serif font-bold mb-2">ThebrAIner.store</h5>
                <p>Copyright © {new Date().getFullYear()} AI Descendants.</p>
                <p>All rights reserved.</p>
            </div>
            <div className="flex gap-6">
                <button 
                  onClick={() => onNavigate('privacy')} 
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => onNavigate('terms')} 
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="hover:text-white transition-colors"
                >
                  Contact Support
                </button>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default EbookLanding;