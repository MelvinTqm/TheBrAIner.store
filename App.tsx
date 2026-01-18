import React, { useState } from 'react';
import Home from './components/Home';
import EbookLanding from './components/EbookLanding';
import InfoPage from './components/InfoPage';

type ViewState = 'home' | 'ebook' | 'author' | 'faq' | 'privacy' | 'terms' | 'contact';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('home');

  // Content for Meet the Author
  const authorContent = (
    <>
      <p className="text-xl font-light text-white">
        TheBrAIner is not a traditional tech expert, programmer, or academic — and that’s exactly the point.
      </p>
      <p>
        TheBrAIner represents a new generation of thinkers who grew up with AI, not above it or against it. Instead of treating artificial intelligence as a shortcut or a threat, theBrAIner explores how AI can become a thinking partner — a tool that supports clarity, learning, creativity, and better decision-making in real life.
      </p>
      <p>
        Across projects, writing, and experiments, theBrAIner focuses on one core idea:
      </p>
      <blockquote className="border-l-4 border-gold-500 pl-6 py-2 my-8 bg-slate-800/50 italic text-gold-100 font-serif text-lg">
        Technology should reduce mental weight — not replace human thinking.
      </blockquote>
      <p>
        The work of theBrAIner sits at the intersection of:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-slate-200 marker:text-gold-500">
        <li>Learning & Education</li>
        <li>Productivity & Structure</li>
        <li>Mindset & Reflection</li>
        <li>Ethical, Responsible AI Use</li>
      </ul>
      <p>
        Rather than teaching people what buttons to click, theBrAIner teaches how to think better with modern tools, especially for students, teachers, and young builders navigating pressure, overload, and constant change.
      </p>
      <p>
        AI Descendants is one part of a broader mission — to help people move from confusion to clarity, from overwhelm to structure, and from passive consumption to intentional growth.
      </p>
    </>
  );

  // Content for FAQs
  const faqContent = (
    <div className="space-y-12">
      <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-bold text-white mb-3">Is this book only for tech-savvy people?</h3>
        <p>No. This book is written for normal people — students, teachers, and learners who may feel curious, confused, or even intimidated by AI. No technical background is required.</p>
      </div>

      <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-bold text-white mb-3">Does this book teach people to cheat or rely on AI?</h3>
        <p>No. This book is strongly against shortcuts that replace thinking. It focuses on ethical, responsible AI use — using AI to support learning, planning, and reflection, not to bypass effort.</p>
      </div>

      <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-bold text-white mb-3">What makes this book different from other AI books?</h3>
        <p className="mb-4">Most AI books focus on tools, features, and hype.</p>
        <p className="font-semibold text-white mb-2">This book focuses on:</p>
        <ul className="list-disc pl-5 space-y-1 marker:text-gold-500">
            <li>Mindset</li>
            <li>Structure</li>
            <li>Real daily struggles</li>
            <li>Thinking systems</li>
            <li>Burnout prevention</li>
        </ul>
        <p className="mt-4">It’s about how AI fits into human life, not the other way around.</p>
      </div>

      <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-bold text-white mb-3">Is this book useful for teachers as well as students?</h3>
        <p>Yes. Many sections are written specifically with teachers in mind, including workload support, planning structure, feedback systems, and wellbeing protection.</p>
      </div>

      <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-bold text-white mb-3">Will this book become outdated as AI tools change?</h3>
        <p>No — because it teaches principles, frameworks, and thinking habits, not tool-specific instructions. The ideas remain useful even as platforms evolve.</p>
      </div>

      <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-bold text-white mb-3">Is this book practical or just motivational?</h3>
        <p>Both — but always practical first. You'll find real workflows, study & planning systems, classroom-friendly ideas, reflection prompts, and clear examples. Motivation is used to support action — not replace it.</p>
      </div>

      <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
        <h3 className="text-xl font-bold text-white mb-3">What comes after this book?</h3>
        <p>This book is the foundation. Future projects from theBrAIner will expand into guided learning systems, practical templates & toolkits, deeper workflow design, and companion resources for students & teachers.</p>
        <p className="mt-2 text-gold-400 italic">This is the starting point, not the end.</p>
      </div>
    </div>
  );

  // Content for Privacy Policy
  const privacyContent = (
    <div className="space-y-6">
        <p className="text-slate-400"><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
        <p>At TheBrAIner.store, we prioritize your privacy. This Privacy Policy explains how we collect, use, and protect your information when you purchase "AI Descendants" or visit our website.</p>
        
        <h3 className="text-2xl font-serif text-white mt-10 mb-4 pb-2 border-b border-slate-700">1. Information We Collect</h3>
        <p>We collect your email address and payment information to process your order and deliver your digital product. Please note that payment processing is handled securely by third-party providers (Stripe or PayPal); we do not store your full credit card details on our servers.</p>
        
        <h3 className="text-2xl font-serif text-white mt-10 mb-4 pb-2 border-b border-slate-700">2. How We Use Your Information</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>To process transactions and deliver the ebook download link.</li>
          <li>To send important product updates or corrections.</li>
          <li>To improve our website and customer service.</li>
        </ul>

        <h3 className="text-2xl font-serif text-white mt-10 mb-4 pb-2 border-b border-slate-700">3. Data Protection</h3>
        <p>We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.</p>

        <h3 className="text-2xl font-serif text-white mt-10 mb-4 pb-2 border-b border-slate-700">4. Contact Us</h3>
        <p>If there are any questions regarding this privacy policy, you may contact us at <span className="text-gold-400">support@thebrainer.store</span>.</p>
    </div>
  );

  // Content for Terms of Service
  const termsContent = (
    <div className="space-y-6">
        <h3 className="text-2xl font-serif text-white mb-4 pb-2 border-b border-slate-700">1. Acceptance of Terms</h3>
        <p>By accessing this website and purchasing "AI Descendants", you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>

        <h3 className="text-2xl font-serif text-white mt-10 mb-4 pb-2 border-b border-slate-700">2. Digital Product Policy</h3>
        <p>This is a digital product (PDF). Delivery is immediate via email. Due to the nature of digital goods, please ensure you have read the description carefully. However, we offer a satisfaction guarantee — if you encounter issues or are unsatisfied, please contact support.</p>

        <h3 className="text-2xl font-serif text-white mt-10 mb-4 pb-2 border-b border-slate-700">3. Intellectual Property</h3>
        <p>All content included in "AI Descendants" (text, graphics, logos, images) is the property of TheBrAIner and is protected by copyright laws. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the ebook without express written permission.</p>

        <h3 className="text-2xl font-serif text-white mt-10 mb-4 pb-2 border-b border-slate-700">4. Limitation of Liability</h3>
        <p>In no event shall TheBrAIner.store be liable for any damages (including, without limitation, damages for loss of data or profit) arising out of the use or inability to use the materials on TheBrAIner.store.</p>
    </div>
  );

  // Content for Contact Support
  const contactContent = (
    <div className="space-y-8">
        <p className="text-xl text-slate-300">We are here to help you on your journey from Beginner to Elite.</p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-gold-500/30 transition-colors">
              <h3 className="text-gold-400 font-bold text-lg mb-4 tracking-wide uppercase">Customer Support</h3>
              <p className="mb-4 text-slate-300 text-sm">For issues with downloads, payment queries, or general questions about the book:</p>
              <a href="mailto:support@thebrainer.store" className="text-white font-mono text-lg md:text-xl hover:text-gold-400 transition-colors border-b border-slate-600 hover:border-gold-400 pb-1">support@thebrainer.store</a>
              <p className="text-slate-500 text-xs mt-6">Typical response time: 24-48 hours.</p>
          </div>

          <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-gold-500/30 transition-colors">
              <h3 className="text-gold-400 font-bold text-lg mb-4 tracking-wide uppercase">General Inquiries</h3>
              <p className="mb-4 text-slate-300 text-sm">For mentorship programs, press, or collaboration opportunities:</p>
              <a href="mailto:hello@thebrainer.store" className="text-white font-mono text-lg md:text-xl hover:text-gold-400 transition-colors border-b border-slate-600 hover:border-gold-400 pb-1">hello@thebrainer.store</a>
          </div>
        </div>
    </div>
  );

  return (
    <>
      {view === 'home' && (
        <Home onNavigate={(page) => setView(page as ViewState)} />
      )}
      {view === 'ebook' && (
        <EbookLanding 
            onBack={() => setView('home')} 
            onNavigate={(page) => setView(page)}
        />
      )}
      {view === 'author' && (
        <InfoPage 
            title="Meet the Author — theBrAIner" 
            content={authorContent} 
            onBack={() => setView('home')} 
        />
      )}
      {view === 'faq' && (
        <InfoPage 
            title="Frequently Asked Questions" 
            content={faqContent} 
            onBack={() => setView('home')} 
        />
      )}
      {view === 'privacy' && (
        <InfoPage 
            title="Privacy Policy" 
            content={privacyContent} 
            onBack={() => setView('ebook')} 
        />
      )}
      {view === 'terms' && (
        <InfoPage 
            title="Terms of Service" 
            content={termsContent} 
            onBack={() => setView('ebook')} 
        />
      )}
      {view === 'contact' && (
        <InfoPage 
            title="Contact Support" 
            content={contactContent} 
            onBack={() => setView('ebook')} 
        />
      )}
    </>
  );
};

export default App;