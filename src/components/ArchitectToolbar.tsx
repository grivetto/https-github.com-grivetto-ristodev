import React from 'react';
import { ChefHat, Compass, Download, Edit3, Monitor, Smartphone, Tablet, RefreshCw, Check } from 'lucide-react';
import { RestaurantProfile } from '../types';
import { generateStandaloneHtml } from '../lib/exportHtml';

interface Props {
  profile: RestaurantProfile;
  viewport: 'desktop' | 'tablet' | 'mobile';
  setViewport: (v: 'desktop' | 'tablet' | 'mobile') => void;
  onOpenAnalysis: () => void;
  onOpenEdit: () => void;
  onReset: () => void;
}

export const ArchitectToolbar: React.FC<Props> = ({
  profile,
  viewport,
  setViewport,
  onOpenAnalysis,
  onOpenEdit,
  onReset,
}) => {
  const [downloaded, setDownloaded] = React.useState(false);

  const handleExportHtml = () => {
    const htmlContent = generateStandaloneHtml(profile);
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `index.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="sticky top-0 z-50 bg-[#1C1C1C] border-b border-[#8B7E66]/30 text-[#F7F4F0] py-2.5 px-4 sm:px-6 shadow-md font-sans">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        
        {/* Left: Brand info & Reset */}
        <div className="flex items-center gap-3">
          <button
            onClick={onReset}
            className="flex items-center gap-2 bg-[#2A2825] hover:bg-[#8B7E66] text-[#F7F4F0] px-3.5 py-1.5 rounded-full border border-[#8B7E66]/40 transition duration-200 cursor-pointer text-[11px] font-semibold uppercase tracking-wider"
            title="Cambia tipo di locale o inserisci un nuovo prompt"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#8B7E66]" />
            <span>Nuovo Locale</span>
          </button>

          <div className="hidden lg:flex items-center gap-2 text-[#8B7E66] text-[11px] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono">Locale:</span>
            <strong className="text-[#F7F4F0] font-serif italic truncate max-w-[180px]">{profile.name}</strong>
          </div>
        </div>

        {/* Center: Device Viewport Switcher */}
        <div className="flex items-center bg-[#121212] p-1 rounded-full border border-[#8B7E66]/30 gap-1 text-[11px] font-semibold uppercase tracking-wider">
          <button
            onClick={() => setViewport('desktop')}
            className={`px-3 py-1 rounded-full flex items-center gap-1 transition cursor-pointer ${viewport === 'desktop' ? 'bg-[#8B7E66] text-[#F7F4F0]' : 'text-[#8B7E66] hover:text-[#F7F4F0]'}`}
            title="Vista Desktop"
          >
            <Monitor className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Desktop</span>
          </button>

          <button
            onClick={() => setViewport('tablet')}
            className={`px-3 py-1 rounded-full flex items-center gap-1 transition cursor-pointer ${viewport === 'tablet' ? 'bg-[#8B7E66] text-[#F7F4F0]' : 'text-[#8B7E66] hover:text-[#F7F4F0]'}`}
            title="Vista Tablet (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tablet</span>
          </button>

          <button
            onClick={() => setViewport('mobile')}
            className={`px-3 py-1 rounded-full flex items-center gap-1 transition cursor-pointer ${viewport === 'mobile' ? 'bg-[#8B7E66] text-[#F7F4F0]' : 'text-[#8B7E66] hover:text-[#F7F4F0]'}`}
            title="Vista Mobile (395px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Mobile</span>
          </button>
        </div>

        {/* Right: Actions (Analysis, Edit, Export HTML) */}
        <div className="flex items-center gap-2">
          
          <button
            onClick={onOpenAnalysis}
            className="flex items-center gap-1.5 bg-[#2A2825] hover:bg-[#8B7E66] text-[#F7F4F0] px-3.5 py-1.5 rounded-full border border-[#8B7E66]/30 transition duration-200 cursor-pointer text-[11px] font-semibold uppercase tracking-wider"
          >
            <Compass className="w-3.5 h-3.5 text-[#8B7E66]" />
            <span className="hidden sm:inline">Analisi Brand</span>
          </button>

          <button
            onClick={onOpenEdit}
            className="flex items-center gap-1.5 bg-[#2A2825] hover:bg-[#8B7E66] text-[#F7F4F0] px-3.5 py-1.5 rounded-full border border-[#8B7E66]/30 transition duration-200 cursor-pointer text-[11px] font-semibold uppercase tracking-wider"
          >
            <Edit3 className="w-3.5 h-3.5 text-[#8B7E66]" />
            <span className="hidden sm:inline">Personalizza</span>
          </button>

          <button
            onClick={handleExportHtml}
            className="flex items-center gap-2 bg-[#F7F4F0] hover:bg-[#EAE4DD] text-[#1C1C1C] font-semibold px-4 py-1.5 rounded-full shadow-sm transition duration-200 cursor-pointer text-[11px] uppercase tracking-wider"
          >
            {downloaded ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-700" />
                <span>Scaricato!</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-[#1C1C1C]" />
                <span>Esporta HTML</span>
              </>
            )}
          </button>

        </div>

      </div>
    </div>
  );
};
