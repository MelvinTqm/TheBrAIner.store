import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface InfoPageProps {
  title: string;
  content: React.ReactNode;
  onBack: () => void;
}

const InfoPage: React.FC<InfoPageProps> = ({ title, content, onBack }) => {
  return (
    <div className="min-h-screen bg-cosmic-900 text-slate-100 font-sans selection:bg-gold-500 selection:text-white animate-fade-in p-6 md:p-12 overflow-y-auto">
        <nav className="max-w-4xl mx-auto mb-12">
            <button 
            onClick={onBack}
            className="flex items-center text-slate-400 hover:text-white transition-colors gap-2 group"
            >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-serif tracking-wide">Back to Home</span>
            </button>
        </nav>

        <article className="max-w-3xl mx-auto prose prose-invert prose-lg pb-20">
            <h1 className="font-serif text-4xl md:text-5xl text-white mb-8 border-b border-slate-700 pb-6">{title}</h1>
            <div className="text-slate-300 leading-relaxed space-y-8">
                {content}
            </div>
        </article>
    </div>
  );
}

export default InfoPage;