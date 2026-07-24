import React, { useState, useEffect } from 'react';
import {
  Utensils, Phone, MapPin, Clock, Calendar, Users, Star,
  CheckCircle, ArrowRight, Heart, ShoppingBag, Info, Leaf,
  Beer, Sparkles, Award, ExternalLink, X, Search, ChevronRight, MessageSquare
} from 'lucide-react';
import { RestaurantProfile, MenuItem, GalleryItem } from '../types';

interface Props {
  profile: RestaurantProfile;
}

export const DynamicLandingPage: React.FC<Props> = ({ profile }) => {
  const p = profile.palette;
  const f = profile.fontConfig;

  // Selected Category Filter for Menu
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutti');
  const [menuSearch, setMenuSearch] = useState<string>('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');

  // Interactive Booking Modal State
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: '2',
    notes: '',
  });

  // Selected Gallery Lightbox Item
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);

  // Selected Menu Item Modal
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(null);
  const [orderNotification, setOrderNotification] = useState<string | null>(null);

  // Load Google Fonts Dynamically
  useEffect(() => {
    const headingFont = f.headingFont.replace(/ /g, '+');
    const bodyFont = f.bodyFont.replace(/ /g, '+');
    const fontUrl = `https://fonts.googleapis.com/css2?family=${headingFont}:wght@400;600;700;800&family=${bodyFont}:wght@300;400;500;600;700&display=swap`;

    let link = document.getElementById('dynamic-google-fonts') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.id = 'dynamic-google-fonts';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = fontUrl;
  }, [f.headingFont, f.bodyFont]);

  // Filter menu items
  const filteredMenuItems = profile.menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'Tutti' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(menuSearch.toLowerCase()) ||
                          item.description.toLowerCase().includes(menuSearch.toLowerCase());
    const matchesDietary = dietaryFilter === 'all' || (item.dietary && item.dietary.includes(dietaryFilter as any));
    return matchesCategory && matchesSearch && matchesDietary;
  });

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingOpen(false);
    }, 3500);
  };

  const handleAddToOrder = (item: MenuItem) => {
    setOrderNotification(`Aggiunto all'ordine: ${item.name}`);
    setTimeout(() => setOrderNotification(null), 3000);
  };

  // Determine if open now
  const now = new Date();
  const currentHour = now.getHours();
  const isOpenNow = currentHour >= 12 && currentHour <= 23;

  return (
    <div
      className="min-h-screen text-[#1C1C1C] antialiased selection:bg-[#1C1C1C] selection:text-[#F7F4F0]"
      style={{
        backgroundColor: p.background || '#F7F4F0',
        color: p.textPrimary || '#1C1C1C',
        fontFamily: `'${f.bodyFont}', sans-serif`,
      }}
    >
      {/* Toast Notification */}
      {orderNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1C1C1C] text-[#F7F4F0] px-6 py-4 rounded-full shadow-2xl border border-[#8B7E66]/40 flex items-center gap-3 text-xs uppercase tracking-widest animate-bounce">
          <ShoppingBag className="w-4 h-4 text-[#8B7E66]" />
          <span className="font-semibold">{orderNotification}</span>
        </div>
      )}

      {/* Main Website Navigation Header */}
      <nav
        className="sticky top-[49px] z-40 border-b backdrop-blur-md transition-all duration-300"
        style={{
          backgroundColor: `${p.surface || '#FFFFFF'}f0`,
          borderColor: p.border || 'rgba(28,28,28,0.1)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span
              className="text-2xl sm:text-3xl font-serif italic tracking-tight"
              style={{
                color: p.primary || '#1C1C1C',
                fontFamily: `'${f.headingFont}', serif`,
              }}
            >
              {profile.name}
            </span>
            {isOpenNow ? (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-emerald-950/5 text-emerald-800 border border-emerald-800/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-ping" />
                Aperto Ora
              </span>
            ) : (
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-[#EAE4DD] text-[#625d56]">
                Chiuso
              </span>
            )}
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#625d56]">
            <a href="#about" className="hover:text-[#1C1C1C] transition">Filosofia</a>
            <a href="#menu" className="hover:text-[#1C1C1C] transition">Menu</a>
            {profile.customSections.length > 0 && (
              <a href="#specialties" className="hover:text-[#1C1C1C] transition">Specialità</a>
            )}
            <a href="#gallery" className="hover:text-[#1C1C1C] transition">Galleria</a>
            <a href="#contacts" className="hover:text-[#1C1C1C] transition">Orari & Contatti</a>
          </div>

          <button
            onClick={() => setBookingOpen(true)}
            className="font-semibold text-xs px-6 py-2.5 rounded-full uppercase tracking-widest border transition-all duration-300 hover:bg-[#8B7E66] hover:border-[#8B7E66] cursor-pointer shadow-xs"
            style={{
              backgroundColor: p.primary || '#1C1C1C',
              borderColor: p.primary || '#1C1C1C',
              color: '#F7F4F0',
            }}
          >
            {profile.ctaText}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`relative min-h-[82vh] flex items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-b ${p.heroGradient || 'from-[#1C1C1C] via-[#2a2825] to-[#121212]'} text-[#F7F4F0] py-24`}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-[0.3em] bg-[#F7F4F0]/10 backdrop-blur-md border border-[#F7F4F0]/20 mb-8 text-[#8B7E66]">
            <Sparkles className="w-3.5 h-3.5 text-[#8B7E66]" />
            <span>01 — {profile.cuisineType}</span>
          </div>

          <h1
            className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight leading-[1.05] mb-6"
            style={{ fontFamily: `'${f.headingFont}', serif` }}
          >
            {profile.heroHeadline}
          </h1>

          <div className="w-16 h-[1px] bg-[#8B7E66] my-6 mx-auto" />

          <p className="text-base sm:text-xl text-[#EAE4DD] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            {profile.heroSubheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="w-full sm:w-auto font-semibold px-9 py-4 rounded-full shadow-xl transition-all duration-300 hover:bg-[#8B7E66] hover:border-[#8B7E66] text-xs uppercase tracking-widest flex items-center justify-center gap-3 cursor-pointer border border-transparent"
              style={{
                backgroundColor: p.primary || '#1C1C1C',
                color: '#F7F4F0',
              }}
            >
              <span>{profile.ctaText}</span>
              <ArrowRight className="w-4 h-4 text-[#8B7E66]" />
            </button>

            <a
              href="#menu"
              className="w-full sm:w-auto bg-transparent hover:bg-[#F7F4F0]/10 border border-[#F7F4F0]/30 text-[#F7F4F0] font-semibold px-9 py-4 rounded-full transition-all text-xs uppercase tracking-widest text-center"
            >
              {profile.ctaSecondaryText}
            </a>
          </div>

          {/* Bottom quick highlights bar */}
          <div className="mt-16 pt-8 border-t border-[#F7F4F0]/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono uppercase tracking-wider text-[#EAE4DD]/80 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-[#8B7E66]" />
              <span className="truncate">{profile.address.split(',')[0]}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#8B7E66]" />
              <span>12:00 — 23:30</span>
            </div>
            <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-[#8B7E66]" />
              <span>{profile.phone}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About & Philosophy Section */}
      <section id="about" className="py-28 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.3em] block mb-3 text-[#8B7E66]"
            >
              02 — LA NOSTRA FILOSOFIA
            </span>
            <h2
              className="text-3xl sm:text-5xl font-serif leading-tight mb-6"
              style={{
                color: p.textPrimary || '#1C1C1C',
                fontFamily: `'${f.headingFont}', serif`,
              }}
            >
              {profile.aboutTitle}
            </h2>

            <div className="w-12 h-[1px] bg-[#1C1C1C]/20 mb-6" />

            <p className="text-base sm:text-lg leading-relaxed mb-6 text-[#625d56]">
              {profile.aboutStory}
            </p>

            {profile.chefQuote && (
              <div
                className="p-8 rounded-2xl border border-[#1C1C1C]/15 bg-white/70 mt-8 shadow-xs"
              >
                <p className="font-serif italic text-lg sm:text-xl leading-relaxed mb-4 text-[#1C1C1C]">
                  "{profile.chefQuote}"
                </p>
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#8B7E66]">
                  — {profile.chefName} {profile.chefRole ? `(${profile.chefRole})` : ''}
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-[#1C1C1C]/10 aspect-[4/3] bg-[#EAE4DD]">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Atmosfera del locale"
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business-Specific Custom Sections */}
      {profile.customSections.map((sec) => (
        <section
          key={sec.id}
          id="specialties"
          className="py-24 px-6 lg:px-8 border-y border-[#1C1C1C]/10 bg-[#FFFFFF]"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] block mb-3 text-[#8B7E66]">
                03 — {sec.subtitle}
              </span>
              <h2
                className="text-3xl sm:text-4xl font-serif"
                style={{
                  color: p.textPrimary || '#1C1C1C',
                  fontFamily: `'${f.headingFont}', serif`,
                }}
              >
                {sec.title}
              </h2>
            </div>

            <div className="bg-[#F7F4F0] p-8 sm:p-12 rounded-2xl border border-[#1C1C1C]/10 shadow-xs">
              <h3 className="text-2xl font-serif mb-3 text-[#1C1C1C]">
                {sec.content.heading}
              </h3>
              <p className="text-sm mb-8 text-[#625d56] leading-relaxed">
                {sec.content.paragraph}
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {sec.content.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-5 rounded-xl bg-white border border-[#1C1C1C]/10">
                    <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#8B7E66]" />
                    <span className="text-xs font-medium text-[#1C1C1C] leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Dynamic Menu Section */}
      <section id="menu" className="py-28 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] block mb-3 text-[#8B7E66]">
            04 — PROPOSTA GASTRONOMICA
          </span>
          <h2
            className="text-3xl sm:text-5xl font-serif mb-4"
            style={{
              color: p.textPrimary || '#1C1C1C',
              fontFamily: `'${f.headingFont}', serif`,
            }}
          >
            Il Nostro Menu
          </h2>
          <div className="w-12 h-[1px] bg-[#8B7E66] my-4 mx-auto" />
          <p className="text-sm text-[#625d56]">
            Ingredienti freschissimi di giornata, preparazioni al momento e cura per le intolleranze.
          </p>
        </div>

        {/* Search & Dietary Filters */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Search input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#8B7E66] absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Cerca un piatto..."
              value={menuSearch}
              onChange={(e) => setMenuSearch(e.target.value)}
              className="w-full pl-11 pr-5 py-3 rounded-full border border-[#1C1C1C]/20 text-xs bg-white focus:outline-none focus:border-[#1C1C1C] text-[#1C1C1C] placeholder:text-[#8B7E66]/60 transition"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setSelectedCategory('Tutti')}
              className={`px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-widest transition-all cursor-pointer ${selectedCategory === 'Tutti' ? 'bg-[#1C1C1C] text-[#F7F4F0] shadow-xs' : 'bg-white border border-[#1C1C1C]/15 text-[#625d56] hover:border-[#1C1C1C] hover:text-[#1C1C1C]'}`}
            >
              Tutti ({profile.menuItems.length})
            </button>
            {profile.menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-widest transition-all cursor-pointer ${selectedCategory === cat ? 'bg-[#1C1C1C] text-[#F7F4F0] shadow-xs' : 'bg-white border border-[#1C1C1C]/15 text-[#625d56] hover:border-[#1C1C1C] hover:text-[#1C1C1C]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {filteredMenuItems.length > 0 ? (
            filteredMenuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-7 rounded-2xl border border-[#1C1C1C]/12 hover:border-[#1C1C1C] transition-all duration-300 flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <div>
                      <h4
                        className="text-xl font-serif font-bold group-hover:text-[#8B7E66] transition"
                        style={{
                          color: p.textPrimary || '#1C1C1C',
                          fontFamily: `'${f.headingFont}', serif`,
                        }}
                      >
                        {item.name}
                      </h4>
                      {item.badge && (
                        <span
                          className="inline-block mt-1 text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#1C1C1C] text-[#F7F4F0]"
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-lg font-mono font-bold shrink-0 text-[#1C1C1C]">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs text-[#625d56] leading-relaxed mt-2 mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C1C1C]/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {item.dietary?.map((d, i) => (
                      <span key={i} className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-[#EAE4DD] text-[#1C1C1C]">
                        {d}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleAddToOrder(item)}
                    className="text-xs font-semibold uppercase tracking-widest flex items-center gap-1 text-[#1C1C1C] hover:text-[#8B7E66] transition cursor-pointer"
                  >
                    <span>Ordina</span>
                    <ChevronRight className="w-4 h-4 text-[#8B7E66]" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12 text-[#8B7E66] text-xs uppercase tracking-widest">
              Nessun piatto trovato per i filtri selezionati.
            </div>
          )}
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-28 px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#1C1C1C]/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] block mb-3 text-[#8B7E66]">
            05 — ATMOSFERA & DETTAGLI
          </span>
          <h2
            className="text-3xl sm:text-5xl font-serif"
            style={{
              color: p.textPrimary || '#1C1C1C',
              fontFamily: `'${f.headingFont}', serif`,
            }}
          >
            Galleria Fotografica
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.gallery.map((img) => (
            <div
              key={img.id}
              onClick={() => setLightboxImage(img)}
              className="group relative overflow-hidden rounded-2xl border border-[#1C1C1C]/15 cursor-pointer aspect-video bg-[#1C1C1C]"
            >
              <img
                src={img.imageUrl}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-6 text-[#F7F4F0]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8B7E66]">{img.category}</span>
                <h5 className="font-serif text-lg">{img.title}</h5>
                <p className="text-xs text-[#EAE4DD] mt-1">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-[#1C1C1C]/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-4xl w-full bg-[#1C1C1C] text-[#F7F4F0] rounded-2xl overflow-hidden border border-[#8B7E66]/40" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#F7F4F0]/10 text-white rounded-full hover:bg-[#F7F4F0]/20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={lightboxImage.imageUrl} alt={lightboxImage.title} className="w-full h-[60vh] object-cover" />
            <div className="p-6">
              <h4 className="text-2xl font-serif">{lightboxImage.title}</h4>
              <p className="text-xs text-[#EAE4DD] mt-2">{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section className="py-28 px-6 lg:px-8 border-t border-[#1C1C1C]/10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] block mb-3 text-[#8B7E66]">
              06 — REVIEWS & STAMPA
            </span>
            <h2
              className="text-3xl sm:text-5xl font-serif"
              style={{
                color: p.textPrimary || '#1C1C1C',
                fontFamily: `'${f.headingFont}', serif`,
              }}
            >
              Dicono di Noi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {profile.testimonials.map((t) => (
              <div key={t.id} className="bg-[#F7F4F0] p-8 rounded-2xl border border-[#1C1C1C]/12 shadow-xs flex flex-col justify-between">
                <p className="font-serif italic text-[#1C1C1C] text-lg leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between border-t border-[#1C1C1C]/10 pt-4">
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-wider text-[#1C1C1C]">{t.author}</h5>
                    <span className="text-[11px] text-[#625d56]">{t.role} • {t.source}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#8B7E66] font-mono text-xs">
                    <Star className="w-4 h-4 fill-[#8B7E66]" />
                    <span>{t.rating}.0</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form & Contact Footer Section */}
      <section id="contacts" className="py-28 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 sm:p-14 rounded-2xl border border-[#1C1C1C]/15 shadow-sm">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] block mb-3 text-[#8B7E66]">
              07 — PRENOTAZIONI
            </span>
            <h2
              className="text-3xl font-serif mb-6"
              style={{
                color: p.textPrimary || '#1C1C1C',
                fontFamily: `'${f.headingFont}', serif`,
              }}
            >
              {profile.ctaText}
            </h2>
            <p className="text-[#625d56] mb-8 text-xs sm:text-sm leading-relaxed">
              Assicurati il tuo tavolo per vivere un'esperienza gastronomica unica. Riceverai conferma immediata via SMS o Email.
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#8B7E66] mb-1">Nome Completo</label>
                <input
                  type="text"
                  required
                  placeholder="Mario Rossi"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  className="w-full px-5 py-3 rounded-full border border-[#1C1C1C]/20 text-xs focus:outline-none focus:border-[#1C1C1C] bg-[#F7F4F0]/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#8B7E66] mb-1">Telefono</label>
                  <input
                    type="tel"
                    required
                    placeholder="+39 333 1234567"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="w-full px-5 py-3 rounded-full border border-[#1C1C1C]/20 text-xs focus:outline-none focus:border-[#1C1C1C] bg-[#F7F4F0]/50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#8B7E66] mb-1">Ospiti</label>
                  <select
                    value={bookingData.guests}
                    onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                    className="w-full px-5 py-3 rounded-full border border-[#1C1C1C]/20 text-xs focus:outline-none focus:border-[#1C1C1C] bg-[#F7F4F0]/50"
                  >
                    <option value="1">1 Persona</option>
                    <option value="2">2 Persone</option>
                    <option value="3">3 Persone</option>
                    <option value="4">4 Persone</option>
                    <option value="5+">5+ Persone (Gruppo)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#8B7E66] mb-1">Data</label>
                  <input
                    type="date"
                    required
                    value={bookingData.date}
                    onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    className="w-full px-5 py-3 rounded-full border border-[#1C1C1C]/20 text-xs focus:outline-none focus:border-[#1C1C1C] bg-[#F7F4F0]/50"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#8B7E66] mb-1">Orario</label>
                  <select
                    value={bookingData.time}
                    onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                    className="w-full px-5 py-3 rounded-full border border-[#1C1C1C]/20 text-xs focus:outline-none focus:border-[#1C1C1C] bg-[#F7F4F0]/50"
                  >
                    <option value="12:30">12:30 (Pranzo)</option>
                    <option value="13:30">13:30 (Pranzo)</option>
                    <option value="19:30">19:30 (Cena)</option>
                    <option value="20:30">20:30 (Cena)</option>
                    <option value="21:30">21:30 (Cena)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full font-semibold py-4 rounded-full transition text-[#F7F4F0] bg-[#1C1C1C] hover:bg-[#8B7E66] text-xs uppercase tracking-widest mt-4 cursor-pointer border border-[#1C1C1C]"
              >
                Conferma Prenotazione Tavolo
              </button>
            </form>
          </div>

          {/* Info & Address Column */}
          <div className="flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1C1C1C]/10 pt-8 lg:pt-0 lg:pl-12">
            <div>
              <h3
                className="text-2xl font-serif mb-6"
                style={{
                  color: p.textPrimary || '#1C1C1C',
                  fontFamily: `'${f.headingFont}', serif`,
                }}
              >
                Dove Trovarci & Orari
              </h3>

              <div className="space-y-6 text-xs text-[#625d56]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#8B7E66]" />
                  <div>
                    <strong className="block text-[#1C1C1C] mb-0.5 uppercase tracking-wider text-[10px]">Indirizzo:</strong>
                    <span>{profile.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5 text-[#8B7E66]" />
                  <div>
                    <strong className="block text-[#1C1C1C] mb-0.5 uppercase tracking-wider text-[10px]">Telefono & Whatsapp:</strong>
                    <span>{profile.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 shrink-0 mt-0.5 text-[#8B7E66]" />
                  <div>
                    <strong className="block text-[#1C1C1C] mb-0.5 uppercase tracking-wider text-[10px]">Orari di Apertura:</strong>
                    <p>{profile.hours.weekdays}</p>
                    <p>{profile.hours.weekend}</p>
                    {profile.hours.closedDays && (
                      <p className="text-red-700 font-semibold mt-1">{profile.hours.closedDays}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer copyright */}
            <div className="mt-12 pt-6 border-t border-[#1C1C1C]/10 text-[10px] font-mono uppercase tracking-widest text-[#8B7E66]">
              © {new Date().getFullYear()} {profile.name}. GustoCraft Editorial Architecture.
            </div>
          </div>
        </div>
      </section>

      {/* Booking Success Modal */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 bg-[#1C1C1C]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#F7F4F0] rounded-2xl p-8 max-w-md w-full border border-[#1C1C1C]/20 shadow-2xl relative text-[#1C1C1C]">
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#8B7E66] hover:text-[#1C1C1C] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-[#1C1C1C] text-[#F7F4F0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#8B7E66]" />
                </div>
                <h3 className="text-2xl font-serif text-[#1C1C1C] mb-2">Prenotazione Confermata!</h3>
                <p className="text-xs text-[#625d56] leading-relaxed">
                  Grazie {bookingData.name}! Abbiamo riservato il tuo tavolo per il {bookingData.date} alle {bookingData.time}.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-serif text-[#1C1C1C] mb-2">{profile.ctaText}</h3>
                <p className="text-xs text-[#625d56] mb-6">Compila i dati per confermare il tuo tavolo presso {profile.name}.</p>
                
                <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#8B7E66] mb-1">Nome Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Mario Rossi"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-full border border-[#1C1C1C]/20 text-xs focus:outline-none focus:border-[#1C1C1C] bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#8B7E66] mb-1">Data</label>
                      <input
                        type="date"
                        required
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        className="w-full px-4 py-3 rounded-full border border-[#1C1C1C]/20 text-xs focus:outline-none focus:border-[#1C1C1C] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold uppercase tracking-widest text-[#8B7E66] mb-1">Ospiti</label>
                      <select
                        value={bookingData.guests}
                        onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                        className="w-full px-4 py-3 rounded-full border border-[#1C1C1C]/20 text-xs focus:outline-none focus:border-[#1C1C1C] bg-white"
                      >
                        <option value="2">2 Persone</option>
                        <option value="3">3 Persone</option>
                        <option value="4">4 Persone</option>
                        <option value="5+">5+ Persone</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full font-semibold py-3.5 rounded-full text-[#F7F4F0] bg-[#1C1C1C] hover:bg-[#8B7E66] transition text-xs uppercase tracking-widest mt-2 shadow-xs cursor-pointer"
                  >
                    Invia Prenotazione
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
