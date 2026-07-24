import React from 'react';
import { X, Palette, Type, Target, Compass, CheckCircle2, Sparkles } from 'lucide-react';
import { RestaurantProfile } from '../types';

interface Props {
  profile: RestaurantProfile;
  isOpen: boolean;
  onClose: () => void;
}

export const MarketingAnalysisDrawer: React.FC<Props> = ({ profile, isOpen, onClose }) => {
  if (!isOpen) return null;

  const a = profile.analysis;
  const p = profile.palette;
  const f = profile.fontConfig;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity font-sans">
      <div className="w-full max-w-xl bg-[#1C1C1C] border-l border-[#8B7E66]/30 text-[#F7F4F0] h-full overflow-y-auto p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
        
        <div>
          {/* Top Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#8B7E66]/30">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#8B7E66]/20 text-[#8B7E66]">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-[#F7F4F0]">Analisi Strategica & Brand Rules</h3>
                <span className="text-xs text-[#8B7E66] font-mono uppercase tracking-wider">Deduzione Automatica dell'Identità Visiva</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-[#2A2825] text-[#8B7E66] hover:text-[#F7F4F0] transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Analysis Content */}
          <div className="mt-6 space-y-6 text-sm">
            
            {/* Type & Persona */}
            <div className="bg-[#2A2825] p-5 rounded-2xl border border-[#8B7E66]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#8B7E66] font-semibold text-xs uppercase tracking-wider">
                <Target className="w-4 h-4" />
                <span>Tipologia & Target Persona</span>
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-[#F7F4F0]">{a.restaurantType}</h4>
                <p className="text-[#F7F4F0]/80 mt-1 text-xs leading-relaxed">{a.targetAudience}</p>
              </div>
            </div>

            {/* Palette & Psychology */}
            <div className="bg-[#2A2825] p-5 rounded-2xl border border-[#8B7E66]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#8B7E66] font-semibold text-xs uppercase tracking-wider">
                <Palette className="w-4 h-4" />
                <span>Palette Cromatica & Psicologia del Colore</span>
              </div>
              <p className="text-xs text-[#F7F4F0]/80 leading-relaxed">
                Colori selezionati per stimolare l'emozione della tipologia: <strong className="text-[#F7F4F0] font-serif italic">{profile.ambiance}</strong>.
              </p>

              <div className="grid grid-cols-4 gap-2 pt-2">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full h-10 rounded-lg shadow-inner border border-white/10" style={{ backgroundColor: p.primary }} />
                  <span className="text-[10px] text-[#8B7E66] font-mono">Primario</span>
                  <span className="text-[10px] font-bold text-[#F7F4F0] font-mono">{p.primary}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full h-10 rounded-lg shadow-inner border border-white/10" style={{ backgroundColor: p.secondary }} />
                  <span className="text-[10px] text-[#8B7E66] font-mono">Secondario</span>
                  <span className="text-[10px] font-bold text-[#F7F4F0] font-mono">{p.secondary}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full h-10 rounded-lg shadow-inner border border-white/10" style={{ backgroundColor: p.accent }} />
                  <span className="text-[10px] text-[#8B7E66] font-mono">Accento</span>
                  <span className="text-[10px] font-bold text-[#F7F4F0] font-mono">{p.accent}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-full h-10 rounded-lg shadow-inner border border-white/10" style={{ backgroundColor: p.background }} />
                  <span className="text-[10px] text-[#8B7E66] font-mono">Sfondo</span>
                  <span className="text-[10px] font-bold text-[#F7F4F0] font-mono">{p.background}</span>
                </div>
              </div>
            </div>

            {/* Typography Strategy */}
            <div className="bg-[#2A2825] p-5 rounded-2xl border border-[#8B7E66]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#8B7E66] font-semibold text-xs uppercase tracking-wider">
                <Type className="w-4 h-4" />
                <span>Strategia Tipografica (Google Fonts)</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center bg-[#1C1C1C] px-3 py-2 rounded-lg border border-[#8B7E66]/20">
                  <span className="text-[#8B7E66]">Titoli (Heading):</span>
                  <span className="font-serif font-bold text-[#F7F4F0] text-sm">{f.headingFont} ({f.headingCategory})</span>
                </div>
                <div className="flex justify-between items-center bg-[#1C1C1C] px-3 py-2 rounded-lg border border-[#8B7E66]/20">
                  <span className="text-[#8B7E66]">Corpo del Testo:</span>
                  <span className="font-sans font-bold text-[#F7F4F0] text-sm">{f.bodyFont}</span>
                </div>
              </div>
            </div>

            {/* Value Proposition & Emotional Hook */}
            <div className="bg-[#2A2825] p-5 rounded-2xl border border-[#8B7E66]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#8B7E66] font-semibold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Value Proposition & Gancio Emozionale</span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-[#8B7E66] block mb-0.5">Leva Emozionale:</span>
                  <span className="text-[#F7F4F0] font-serif italic font-medium">"{a.emotionalHook}"</span>
                </div>
                <div className="pt-2">
                  <span className="text-[#8B7E66] block mb-0.5">Proposta di Valore (UVP):</span>
                  <span className="text-[#F7F4F0] font-medium">{a.valueProposition}</span>
                </div>
              </div>
            </div>

            {/* Recommended CTA Strategy */}
            <div className="bg-[#8B7E66]/20 p-5 rounded-2xl border border-[#8B7E66]/40 space-y-2">
              <div className="flex items-center gap-2 text-[#8B7E66] font-semibold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>Call to Action (CTA) Ottimizzata</span>
              </div>
              <p className="text-xs text-[#F7F4F0] font-semibold">
                Pulsante Primario consigliato: <span className="underline decoration-[#8B7E66] font-serif">{a.recommendedCTA}</span>
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-[#8B7E66]/30 mt-6">
          <button
            onClick={onClose}
            className="w-full bg-[#8B7E66] hover:bg-[#726753] text-[#F7F4F0] font-semibold py-3 rounded-full transition text-xs uppercase tracking-wider cursor-pointer"
          >
            Chiudi Analisi e Torna al Sito
          </button>
        </div>

      </div>
    </div>
  );
};
