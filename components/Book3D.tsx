import React from 'react';
import { Crown } from 'lucide-react';

export const Book3D: React.FC = () => {
  return (
    <div className="relative group w-64 h-96 sm:w-80 sm:h-[500px] perspective-1000 mx-auto animate-float">
      <div className="relative w-full h-full transform-style-3d transition-transform duration-500 group-hover:rotate-y-[-10deg]">
        {/* Front Cover */}
        <div className="absolute inset-0 bg-[#1e1b4b] rounded-r-md shadow-2xl border-l-4 border-slate-700 flex flex-col items-center text-center overflow-hidden z-20">
            
            {/* Background Texture/Stars */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#312e81] via-[#0f172a] to-black z-0"></div>
            
            {/* Star dust effect */}
            <div className="absolute inset-0 opacity-50 z-0" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            {/* Content Container */}
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 pt-12 pb-8">
                
                {/* Title Section */}
                <div className="space-y-2">
                    <h1 className="font-serif text-5xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 drop-shadow-[0_2px_10px_rgba(255,255,255,0.3)] tracking-tight leading-none">
                        AI
                    </h1>
                    <h2 className="font-serif text-2xl sm:text-3xl text-white tracking-widest leading-none drop-shadow-md">
                        DESCENDANTS
                    </h2>
                    
                    <div className="relative py-4">
                         <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80"></div>
                         <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-1/4 h-[2px] bg-gold-500 blur-[1px]"></div>
                    </div>
                    
                    <p className="text-gold-400 font-serif text-lg tracking-wider font-semibold text-shadow-sm">From Beginner to Elite</p>
                </div>

                {/* Central Visual - Abstract Stairs to Crown */}
                <div className="flex-1 flex flex-col items-center justify-end pb-4 relative">
                    {/* Glowing Light Behind */}
                    <div className="absolute bottom-0 w-32 h-64 bg-gradient-to-t from-gold-500/20 via-blue-500/10 to-transparent blur-2xl"></div>
                    
                    {/* Crown Icon */}
                    <div className="relative z-10 mb-2 transform transition-transform group-hover:scale-110 duration-500">
                        <Crown size={56} className="text-slate-100 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] fill-white/10" strokeWidth={1} />
                        <div className="absolute inset-0 blur-md bg-gold-400/30 rounded-full"></div>
                    </div>
                    
                    {/* Stairs Graphic */}
                    <div className="flex flex-col items-center gap-1 z-10">
                        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-gold-600/60 to-transparent shadow-[0_0_10px_rgba(234,179,8,0.3)]"></div>
                        <div className="w-32 h-2 bg-gradient-to-r from-transparent via-gold-700/70 to-transparent"></div>
                        <div className="w-40 h-2.5 bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                         <div className="w-48 h-3 bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="space-y-2">
                    <h3 className="text-white font-serif font-bold text-2xl tracking-wide drop-shadow-md">ThebrAIner</h3>
                    <p className="text-gold-200/80 text-xs font-sans tracking-wide">
                        Make yourself from a pawn to a queen
                    </p>
                </div>
            </div>
        </div>
        
        {/* Book Spine (3D Effect) */}
        <div className="absolute top-0 bottom-0 -left-4 w-4 bg-slate-800 transform origin-right rotate-y-[-90deg] flex items-center justify-center border-l border-slate-700 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-700 to-slate-900"></div>
            <span className="relative z-10 text-gold-400 text-xs font-serif rotate-90 whitespace-nowrap tracking-widest font-bold opacity-80">AI DESCENDANTS</span>
        </div>

        {/* Pages (Side) */}
        <div className="absolute top-1 bottom-1 -right-2 w-2 bg-slate-100 transform origin-left rotate-y-[-90deg] shadow-inner"></div>
        <div className="absolute -bottom-2 left-0 right-0 h-2 bg-slate-100 transform origin-top rotate-x-[-90deg] border-b border-slate-300"></div>
      </div>
      
      {/* Shadow */}
      <div className="absolute -bottom-10 left-4 right-4 h-4 bg-black/60 blur-xl rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-500"></div>
    </div>
  );
};