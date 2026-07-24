import React, { useState } from 'react';
import { ChefHat, Sparkles, Utensils, Wine, Pizza, Flame, IceCream, Compass, ArrowRight, Lightbulb } from 'lucide-react';

interface Props {
  onSubmit: (input: string) => void;
  isLoading: boolean;
}

export const PromptInitialScreen: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const [input, setInput] = useState('');

  const quickPresets = [
    { label: 'Ristorante Vegano & Organic', icon: Utensils, desc: 'Verde salvia, legno, cibo sano' },
    { label: 'Trattoria Romana Tradizionale', icon: Wine, desc: 'Rosso tovaglie, legno, carbonara' },
    { label: 'Pub Cyberpunk & Craft Beer', icon: Flame, desc: 'Nero, neon fucsia e ciano, 24 spine' },
    { label: 'Sushi Lounge Minimal Luxury', icon: Sparkles, desc: 'Nero e oro, Omakase, raffinatezza' },
    { label: 'Pizzeria Napoletana Verace', icon: Pizza, desc: 'Forno a legna, lievitazione 48h' },
    { label: 'Gelateria & Pasticceria Artigianale', icon: IceCream, desc: 'Colori pastello, laboratorio a vista' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input.trim());
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F4F0] text-[#1C1C1C] flex flex-col justify-between relative overflow-hidden font-sans selection:bg-[#1C1C1C] selection:text-[#F7F4F0]">
      {/* Editorial Decorative Background Hairlines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#1C1C1C15_1px,transparent_1px),linear-gradient(to_bottom,#1C1C1C15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8B7E66]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header Branding */}
      <header className="relative z-10 max-w-6xl mx-auto w-full px-6 py-8 flex items-center justify-between border-b border-[#1C1C1C]/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#1C1C1C] text-[#F7F4F0] flex items-center justify-center shadow-md">
            <ChefHat className="w-5 h-5 text-[#8B7E66]" />
          </div>
          <div>
            <span className="font-serif italic font-bold text-2xl tracking-tight text-[#1C1C1C] block">GustoCraft</span>
            <span className="text-[10px] text-[#8B7E66] font-semibold tracking-[0.25em] uppercase block">Editorial F&B Engine</span>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs text-[#625d56] bg-[#EAE4DD]/60 border border-[#1C1C1C]/10 px-4 py-2 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-[#8B7E66]" />
          <span className="tracking-wider uppercase text-[11px] font-medium">Generazione Dinamica & Sensoriale</span>
        </div>
      </header>

      {/* Main Central Section */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 py-12 flex-1 flex flex-col items-center justify-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1C1C1C]/5 border border-[#1C1C1C]/15 text-[#8B7E66] text-xs font-semibold uppercase tracking-[0.2em] mb-8">
          <Compass className="w-4 h-4 text-[#1C1C1C]" />
          <span>Motore Psicologico & F&B Architecture</span>
        </div>

        {/* Mandatory Prompt Question */}
        <h1 id="prompt-question-title" className="text-3xl sm:text-5xl font-serif text-[#1C1C1C] leading-[1.15] max-w-3xl mb-6">
          "Che tipo di ristorante o locale devi promuovere? Dimmi la tipologia, la cucina o l'atmosfera."
        </h1>

        <div className="w-12 h-[1px] bg-[#8B7E66] my-2" />

        <p className="text-[#625d56] text-base sm:text-lg max-w-2xl mb-10 leading-relaxed font-normal">
          Inserisci qualsiasi idea: il nostro motore dedurrà l'intera identità visiva, la palette cromatica psicologicamente perfetta, la tipografia, l'architettura delle sezioni ed il micro-copy in lingua italiana.
        </p>

        {/* Prompt Input Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mb-12">
          <div className="relative flex items-center bg-[#FFFFFF] border border-[#1C1C1C]/20 focus-within:border-[#1C1C1C] rounded-full p-2 shadow-sm transition-all duration-300">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Es: 'Chiringuito Cevicheria con dj set' oppure 'Trattoria Emiliana'..."
              className="w-full bg-transparent px-6 py-4 text-[#1C1C1C] text-base sm:text-lg placeholder:text-[#8B7E66]/60 focus:outline-none"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="bg-[#1C1C1C] hover:bg-[#8B7E66] text-[#F7F4F0] font-semibold px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-xs shrink-0 cursor-pointer shadow-md"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Generazione...</span>
                </>
              ) : (
                <>
                  <span>Crea Sito</span>
                  <ArrowRight className="w-4 h-4 text-[#8B7E66]" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Quick Inspiration Pills */}
        <div className="w-full max-w-3xl">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B7E66] mb-5">
            <Lightbulb className="w-3.5 h-3.5 text-[#1C1C1C]" />
            <span>Oppure scegli un'ispirazione guidata:</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {quickPresets.map((p, idx) => {
              const Icon = p.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onSubmit(p.label)}
                  disabled={isLoading}
                  className="group bg-[#FFFFFF] hover:bg-[#1C1C1C] border border-[#1C1C1C]/15 hover:border-[#1C1C1C] p-4 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xs"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-[#8B7E66] group-hover:text-[#F7F4F0] transition" />
                    <span className="text-xs font-bold text-[#1C1C1C] group-hover:text-[#F7F4F0] transition">{p.label}</span>
                  </div>
                  <span className="text-[11px] text-[#625d56] group-hover:text-[#EAE4DD] line-clamp-1 transition">{p.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

      </main>

      {/* Footer Info */}
      <footer className="relative z-10 max-w-6xl mx-auto w-full px-6 py-6 border-t border-[#1C1C1C]/10 text-center text-xs text-[#8B7E66] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono uppercase tracking-wider">
        <span>© GustoCraft - Editorial Architecture & Web Engine</span>
        <span>Adattamento dinamico in tempo reale • No Lorem Ipsum</span>
      </footer>
    </div>
  );
};
