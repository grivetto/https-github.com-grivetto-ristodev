import React, { useState } from 'react';
import { RestaurantProfile } from './types';
import { PromptInitialScreen } from './components/PromptInitialScreen';
import { DynamicLandingPage } from './components/DynamicLandingPage';
import { ArchitectToolbar } from './components/ArchitectToolbar';
import { MarketingAnalysisDrawer } from './components/MarketingAnalysisDrawer';
import { EditProfileModal } from './components/EditProfileModal';
import { generateDynamicProfile } from './lib/presetEngine';

export default function App() {
  const [profile, setProfile] = useState<RestaurantProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleGenerate = async (input: string) => {
    setIsLoading(true);

    try {
      // Call server route to leverage Gemini 3.6 Flash AI generation
      const res = await fetch('/api/generate-restaurant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();

      if (data.success && data.profile) {
        setProfile(data.profile);
      } else {
        // Fallback to rich client-side engine if no API key or server error
        const localProfile = generateDynamicProfile(input);
        setProfile(localProfile);
      }
    } catch (err) {
      console.warn('Errore chiamata server, utilizzo motore locale:', err);
      const localProfile = generateDynamicProfile(input);
      setProfile(localProfile);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setProfile(null);
    setIsAnalysisOpen(false);
    setIsEditOpen(false);
  };

  if (!profile) {
    return <PromptInitialScreen onSubmit={handleGenerate} isLoading={isLoading} />;
  }

  // Viewport container width classes
  const viewportClasses = {
    desktop: 'w-full',
    tablet: 'max-w-[768px] mx-auto border-x-8 border-slate-900 rounded-3xl my-6 shadow-2xl overflow-hidden',
    mobile: 'max-w-[395px] mx-auto border-x-8 border-y-8 border-slate-900 rounded-[40px] my-6 shadow-2xl overflow-hidden',
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans">
      {/* Architect Toolbar */}
      <ArchitectToolbar
        profile={profile}
        viewport={viewport}
        setViewport={setViewport}
        onOpenAnalysis={() => setIsAnalysisOpen(true)}
        onOpenEdit={() => setIsEditOpen(true)}
        onReset={handleReset}
      />

      {/* Main Website Frame */}
      <div className="flex-1 bg-slate-900 overflow-x-hidden">
        <div className={`transition-all duration-300 ${viewportClasses[viewport]}`}>
          <DynamicLandingPage profile={profile} />
        </div>
      </div>

      {/* Marketing Analysis Drawer */}
      <MarketingAnalysisDrawer
        profile={profile}
        isOpen={isAnalysisOpen}
        onClose={() => setIsAnalysisOpen(false)}
      />

      {/* Live Edit Profile Modal */}
      <EditProfileModal
        profile={profile}
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSave={(updated) => setProfile(updated)}
      />
    </div>
  );
}
