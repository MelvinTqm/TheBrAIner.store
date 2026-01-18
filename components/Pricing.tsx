import React, { useState } from 'react';
import { Check, Lock, CreditCard, Tag } from 'lucide-react';

// --- CONFIGURATION ---
const REGULAR_PRICE = 27.00;

// Valid discount codes
const VALID_CODES: Record<string, number> = {
  '20PERCENTOFF': 0.20,
  '30PERCENTOFF': 0.30,
};
// ---------------------

const Pricing: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal'>('stripe');
  
  // Redeem Code State
  const [redeemCode, setRedeemCode] = useState('');
  const [appliedDiscountPercent, setAppliedDiscountPercent] = useState(0);
  const [redeemMessage, setRedeemMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const finalPrice = REGULAR_PRICE * (1 - appliedDiscountPercent);

  const handleApplyCode = () => {
    const code = redeemCode.trim().toUpperCase();
    if (!code) return;

    if (VALID_CODES.hasOwnProperty(code)) {
      setAppliedDiscountPercent(VALID_CODES[code]);
      setRedeemMessage({ type: 'success', text: `Success! ${(VALID_CODES[code] * 100).toFixed(0)}% discount applied.` });
    } else {
      setAppliedDiscountPercent(0);
      setRedeemMessage({ type: 'error', text: 'Invalid or expired code.' });
    }
  };

  const clearCode = () => {
      setRedeemCode('');
      setAppliedDiscountPercent(0);
      setRedeemMessage(null);
  };

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert(`This is a demo. No payment was processed, but you would have received the book for $${finalPrice.toFixed(2)}!`);
    }, 2000);
  };

  return (
    <section id="buy" className="py-20 bg-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-indigo-950 opacity-50 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Invest in Your <span className="text-gold-400">Future</span></h2>
          <p className="text-slate-300 text-lg">Stop being overwhelmed. Start becoming Elite.</p>
        </div>

        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col md:flex-row">
          {/* Product Info */}
          <div className="p-8 md:w-1/2 border-b md:border-b-0 md:border-r border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-2">AI Descendants</h3>
            <p className="text-gold-400 font-medium mb-6">Digital PDF Edition</p>
            
            <div className="flex items-baseline gap-3 mb-6 flex-wrap">
                {appliedDiscountPercent > 0 && (
                     <span className="text-2xl text-slate-500 line-through decoration-slate-500/50">${REGULAR_PRICE.toFixed(2)}</span>
                )}
                <div className="text-5xl font-bold text-white">
                    ${finalPrice.toFixed(2)} <span className="text-lg text-slate-400 font-normal">USD</span>
                </div>
            </div>
            
            {appliedDiscountPercent > 0 && (
                <div className="mb-6 inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    <Tag size={14} /> {(appliedDiscountPercent * 100).toFixed(0)}% OFF APPLIED
                </div>
            )}
            
            <ul className="space-y-4">
              {[
                "Instant PDF Download",
                "7 Core Chapters of Wisdom",
                "Practical ChatGPT + Canva Workflows",
                "Teacher & Student Workflows",
                "Lifetime Updates"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-slate-700 text-xs text-slate-400">
              <p className="flex items-center mb-2"><Lock className="w-3 h-3 mr-1" /> Secure 256-bit SSL Encrypted payment.</p>
              <p>100% Satisfaction Guarantee.</p>
            </div>
          </div>

          {/* Payment Form */}
          <div className="p-8 md:w-1/2 bg-slate-800/50">
            <h4 className="text-xl font-bold text-white mb-6">Payment Details</h4>
            
            {/* Payment Selector */}
            <div className="flex gap-4 mb-6">
              <button 
                onClick={() => setPaymentMethod('stripe')}
                className={`flex-1 py-3 rounded-lg border flex justify-center items-center transition-all ${paymentMethod === 'stripe' ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-slate-700 border-slate-600 text-slate-400 hover:bg-slate-600'}`}
              >
                <CreditCard className="w-5 h-5 mr-2" /> Card
              </button>
              <button 
                onClick={() => setPaymentMethod('paypal')}
                className={`flex-1 py-3 rounded-lg border flex justify-center items-center transition-all ${paymentMethod === 'paypal' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-700 border-slate-600 text-slate-400 hover:bg-slate-600'}`}
              >
                <span className="font-bold italic">Pay</span><span className="italic">Pal</span>
              </button>
            </div>

            <form onSubmit={handlePurchase} className="space-y-4">
              
              {/* Redeem Code Input */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Redeem Code</label>
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        value={redeemCode}
                        onChange={(e) => setRedeemCode(e.target.value)}
                        disabled={appliedDiscountPercent > 0}
                        className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none uppercase placeholder-slate-600 text-sm" 
                        placeholder="ENTER CODE" 
                    />
                    {appliedDiscountPercent > 0 ? (
                         <button 
                            type="button"
                            onClick={clearCode}
                            className="bg-slate-700 hover:bg-slate-600 text-white px-3 rounded-lg font-medium transition-colors text-sm"
                        >
                            Remove
                        </button>
                    ) : (
                        <button 
                            type="button"
                            onClick={handleApplyCode}
                            className="bg-slate-700 hover:bg-slate-600 text-white px-3 rounded-lg font-medium transition-colors text-sm"
                        >
                            Apply
                        </button>
                    )}
                </div>
                {redeemMessage && (
                    <p className={`text-xs mt-1 ${redeemMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {redeemMessage.text}
                    </p>
                )}
              </div>

              {paymentMethod === 'stripe' ? (
                <>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Email Address</label>
                    <input type="email" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-1">Card Information</label>
                    <div className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 flex items-center">
                       <CreditCard className="text-slate-500 w-5 h-5 mr-3" />
                       <input type="text" required className="bg-transparent w-full text-white outline-none placeholder-slate-600" placeholder="0000 0000 0000 0000" />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-slate-400 mb-1">Expiry</label>
                      <input type="text" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="MM/YY" />
                    </div>
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-slate-400 mb-1">CVC</label>
                      <input type="text" required className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="123" />
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8 text-slate-300 bg-slate-900/50 rounded-lg border border-slate-700 border-dashed">
                  You will be redirected to PayPal to complete your purchase safely.
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-slate-900 font-bold py-4 rounded-lg shadow-lg transform transition hover:scale-[1.02] flex justify-center items-center mt-6"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  `Pay $${finalPrice.toFixed(2)} & Download`
                )}
              </button>
            </form>
          </div>
        </div>
        <p className="text-center text-slate-500 text-sm mt-8">
           Delivery: You will receive an email with the download link immediately after payment.
        </p>
      </div>
    </section>
  );
};

export default Pricing;