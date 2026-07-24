import React, { useState } from 'react';
import { X, Save, Palette, Type, Phone, MapPin } from 'lucide-react';
import { RestaurantProfile } from '../types';

interface Props {
  profile: RestaurantProfile;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updated: RestaurantProfile) => void;
}

export const EditProfileModal: React.FC<Props> = ({ profile, isOpen, onClose, onSave }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<RestaurantProfile>({ ...profile });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm font-sans">
      <div className="bg-[#1C1C1C] border border-[#8B7E66]/30 text-[#F7F4F0] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
        
        <div className="flex items-center justify-between pb-4 border-b border-[#8B7E66]/30">
          <h3 className="font-serif font-bold text-xl text-[#F7F4F0]">Personalizza Micro-Copy e Colori</h3>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-[#2A2825] text-[#8B7E66] hover:text-[#F7F4F0] cursor-pointer transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 text-xs">
          
          <div>
            <label className="block text-[#8B7E66] font-semibold uppercase tracking-wider mb-1">Nome Ristorante / Locale</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#121212] border border-[#8B7E66]/30 rounded-xl px-4 py-2.5 text-[#F7F4F0] focus:outline-none focus:border-[#8B7E66]"
            />
          </div>

          <div>
            <label className="block text-[#8B7E66] font-semibold uppercase tracking-wider mb-1">Tagline / Sottotitolo</label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full bg-[#121212] border border-[#8B7E66]/30 rounded-xl px-4 py-2.5 text-[#F7F4F0] focus:outline-none focus:border-[#8B7E66]"
            />
          </div>

          <div>
            <label className="block text-[#8B7E66] font-semibold uppercase tracking-wider mb-1">Titolo Principale (Hero Headline)</label>
            <input
              type="text"
              value={formData.heroHeadline}
              onChange={(e) => setFormData({ ...formData, heroHeadline: e.target.value })}
              className="w-full bg-[#121212] border border-[#8B7E66]/30 rounded-xl px-4 py-2.5 text-[#F7F4F0] focus:outline-none focus:border-[#8B7E66]"
            />
          </div>

          <div>
            <label className="block text-[#8B7E66] font-semibold uppercase tracking-wider mb-1">Sottotitolo Hero (Micro-copy)</label>
            <textarea
              rows={3}
              value={formData.heroSubheadline}
              onChange={(e) => setFormData({ ...formData, heroSubheadline: e.target.value })}
              className="w-full bg-[#121212] border border-[#8B7E66]/30 rounded-xl px-4 py-2.5 text-[#F7F4F0] focus:outline-none focus:border-[#8B7E66]"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#8B7E66] font-semibold uppercase tracking-wider mb-1">Pulsante Principale (CTA)</label>
              <input
                type="text"
                value={formData.ctaText}
                onChange={(e) => setFormData({ ...formData, ctaText: e.target.value })}
                className="w-full bg-[#121212] border border-[#8B7E66]/30 rounded-xl px-4 py-2.5 text-[#F7F4F0] focus:outline-none focus:border-[#8B7E66]"
              />
            </div>
            <div>
              <label className="block text-[#8B7E66] font-semibold uppercase tracking-wider mb-1">Colore Primario (HEX)</label>
              <div className="flex gap-2">
                <input
                  type="color"
                  value={formData.palette.primary}
                  onChange={(e) => setFormData({
                    ...formData,
                    palette: { ...formData.palette, primary: e.target.value }
                  })}
                  className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <input
                  type="text"
                  value={formData.palette.primary}
                  onChange={(e) => setFormData({
                    ...formData,
                    palette: { ...formData.palette, primary: e.target.value }
                  })}
                  className="w-full bg-[#121212] border border-[#8B7E66]/30 rounded-xl px-3 py-2 text-[#F7F4F0] font-mono"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[#8B7E66] font-semibold uppercase tracking-wider mb-1">Telefono</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#121212] border border-[#8B7E66]/30 rounded-xl px-4 py-2.5 text-[#F7F4F0] focus:outline-none focus:border-[#8B7E66]"
              />
            </div>
            <div>
              <label className="block text-[#8B7E66] font-semibold uppercase tracking-wider mb-1">Indirizzo</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-[#121212] border border-[#8B7E66]/30 rounded-xl px-4 py-2.5 text-[#F7F4F0] focus:outline-none focus:border-[#8B7E66]"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-[#8B7E66]/30 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-[#2A2825] text-[#8B7E66] font-semibold uppercase tracking-wider hover:bg-[#3A3835] hover:text-[#F7F4F0] transition cursor-pointer"
            >
              Annulla
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#8B7E66] hover:bg-[#726753] text-[#F7F4F0] font-semibold uppercase tracking-wider transition flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Save className="w-4 h-4" />
              <span>Salva Modifiche</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
