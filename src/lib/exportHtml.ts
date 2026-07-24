import { RestaurantProfile } from '../types';

export function generateStandaloneHtml(profile: RestaurantProfile): string {
  const p = profile.palette;
  const f = profile.fontConfig;

  // Font URL generator
  const headingFontName = f.headingFont.replace(/ /g, '+');
  const bodyFontName = f.bodyFont.replace(/ /g, '+');
  const googleFontsUrl = `https://fonts.googleapis.com/css2?family=${headingFontName}:wght@400;600;700;800&family=${bodyFontName}:wght@300;400;500;600;700&display=swap`;

  const menuHtml = profile.menuItems.map(item => `
    <div class="bg-[${p.surface}] border border-[${p.border}] p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
      <div class="flex justify-between items-start gap-4">
        <div>
          <h4 class="text-xl font-bold text-[${p.textPrimary}] font-heading">${item.name}</h4>
          ${item.badge ? `<span class="inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[${p.primary}] text-white">${item.badge}</span>` : ''}
        </div>
        <span class="text-lg font-extrabold text-[${p.primary}] whitespace-nowrap font-mono">${item.price}</span>
      </div>
      <p class="mt-3 text-sm text-[${p.textSecondary}] leading-relaxed">${item.description}</p>
      ${item.dietary && item.dietary.length > 0 ? `
        <div class="mt-4 flex flex-wrap gap-1.5">
          ${item.dietary.map(d => `<span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[${p.primary}]/10 text-[${p.primary}]">${d}</span>`).join('')}
        </div>
      ` : ''}
    </div>
  `).join('');

  const galleryHtml = profile.gallery.map(img => `
    <div class="group relative overflow-hidden rounded-xl shadow-sm aspect-video">
      <img src="${img.imageUrl}" alt="${img.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 text-white">
        <h5 class="font-bold text-lg font-heading">${img.title}</h5>
        <p class="text-xs text-gray-200 mt-1">${img.caption}</p>
      </div>
    </div>
  `).join('');

  const testimonialsHtml = profile.testimonials.map(t => `
    <div class="bg-[${p.surface}] p-6 rounded-xl border border-[${p.border}] shadow-sm flex flex-col justify-between">
      <p class="italic text-[${p.textSecondary}] text-sm leading-relaxed">"${t.text}"</p>
      <div class="mt-6 flex items-center justify-between border-t border-[${p.border}] pt-4">
        <div>
          <h5 class="font-bold text-sm text-[${p.textPrimary}] font-heading">${t.author}</h5>
          <span class="text-xs text-[${p.textSecondary}]">${t.role} • ${t.source}</span>
        </div>
        <div class="text-amber-500 text-sm">★ ${t.rating}.0</div>
      </div>
    </div>
  `).join('');

  return `<!DOCTYPE html>
<html lang="it" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${profile.name} - ${profile.tagline}</title>
  <meta name="description" content="${profile.heroSubheadline}">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="${googleFontsUrl}" rel="stylesheet">
  
  <style>
    body {
      font-family: '${f.bodyFont}', sans-serif;
      background-color: ${p.background};
      color: ${p.textPrimary};
    }
    .font-heading {
      font-family: '${f.headingFont}', ${f.headingCategory === 'serif' ? 'serif' : 'sans-serif'};
    }
  </style>
</head>
<body class="antialiased selection:bg-[${p.primary}] selection:text-white">

  <!-- Header Navigation -->
  <header class="sticky top-0 z-50 bg-[${p.surface}]/90 backdrop-blur-md border-b border-[${p.border}] shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <a href="#" class="text-2xl font-black tracking-tight text-[${p.primary}] font-heading">${profile.name}</a>
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-[${p.textPrimary}]">
        <a href="#about" class="hover:text-[${p.primary}] transition">Filosofia</a>
        <a href="#menu" class="hover:text-[${p.primary}] transition">Menu</a>
        <a href="#gallery" class="hover:text-[${p.primary}] transition">Galleria</a>
        <a href="#contacts" class="hover:text-[${p.primary}] transition">Contatti</a>
      </nav>
      <a href="#booking" class="bg-[${p.primary}] text-white font-bold text-sm px-6 py-2.5 rounded-lg shadow-md hover:opacity-95 transition">
        ${profile.ctaText}
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative min-h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden bg-gradient-to-b ${p.heroGradient} text-white">
    <div class="relative z-10 max-w-4xl mx-auto py-20">
      <span class="inline-block px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-bold bg-white/10 backdrop-blur-md border border-white/20 mb-6">
        ${profile.cuisineType}
      </span>
      <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading leading-tight mb-6">
        ${profile.heroHeadline}
      </h1>
      <p class="text-lg sm:text-xl text-gray-200 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
        ${profile.heroSubheadline}
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#booking" class="w-full sm:w-auto bg-[${p.primary}] hover:bg-[${p.primary}]/90 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition text-base">
          ${profile.ctaText}
        </a>
        <a href="#menu" class="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-8 py-4 rounded-xl backdrop-blur-md transition text-base">
          ${profile.ctaSecondaryText}
        </a>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-20 px-4 max-w-7xl mx-auto">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span class="text-xs font-bold uppercase tracking-widest text-[${p.primary}]">La Nostra Identità</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-[${p.textPrimary}] font-heading mt-2 mb-6">${profile.aboutTitle}</h2>
        <p class="text-[${p.textSecondary}] leading-relaxed mb-6 text-base">${profile.aboutStory}</p>
        
        ${profile.chefQuote ? `
          <div class="p-6 rounded-xl bg-[${p.primary}]/5 border-l-4 border-[${p.primary}] mt-6">
            <p class="italic text-sm text-[${p.textPrimary}]">"${profile.chefQuote}"</p>
            <div class="mt-3 font-bold text-xs text-[${p.primary}] font-heading">— ${profile.chefName}, ${profile.chefRole}</div>
          </div>
        ` : ''}
      </div>
      <div class="rounded-2xl overflow-hidden shadow-xl border border-[${p.border}]">
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80" alt="Ispirazione Ristorante" class="w-full h-auto object-cover" />
      </div>
    </div>
  </section>

  <!-- Menu Section -->
  <section id="menu" class="py-20 bg-[${p.surface}] border-y border-[${p.border}]">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="text-xs font-bold uppercase tracking-widest text-[${p.primary}]">Proposta Gastronomica</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-[${p.textPrimary}] font-heading mt-2">Il Nostro Menu</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        ${menuHtml}
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section id="gallery" class="py-20 max-w-7xl mx-auto px-4">
    <div class="text-center max-w-2xl mx-auto mb-12">
      <span class="text-xs font-bold uppercase tracking-widest text-[${p.primary}]">Atmosfera & Piatti</span>
      <h2 class="text-3xl sm:text-4xl font-bold text-[${p.textPrimary}] font-heading mt-2">Galleria Fotografica</h2>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      ${galleryHtml}
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="py-20 bg-[${p.primary}]/5 border-t border-[${p.border}]">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold uppercase tracking-widest text-[${p.primary}]">Cosa Dicono di Noi</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-[${p.textPrimary}] font-heading mt-2">Recensioni & Dicono di Noi</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        ${testimonialsHtml}
      </div>
    </div>
  </section>

  <!-- Booking & Contacts Section -->
  <section id="booking" class="py-20 max-w-7xl mx-auto px-4">
    <div class="grid lg:grid-cols-2 gap-12 bg-[${p.surface}] p-8 sm:p-12 rounded-2xl border border-[${p.border}] shadow-xl">
      <div>
        <span class="text-xs font-bold uppercase tracking-widest text-[${p.primary}]">Prenotazione Online</span>
        <h2 class="text-3xl font-bold text-[${p.textPrimary}] font-heading mt-2 mb-6">${profile.ctaText}</h2>
        <p class="text-[${p.textSecondary}] mb-8 text-sm">Scegli la data, l'orario e il numero di persone. Riceverai conferma immediata.</p>

        <form onsubmit="event.preventDefault(); alert('Grazie! La tua prenotazione presso ${profile.name} è stata ricevuta.');" class="space-y-4">
          <div>
            <label class="block text-xs font-bold uppercase text-[${p.textSecondary}] mb-1">Nome Completo</label>
            <input type="text" required placeholder="Mario Rossi" class="w-full px-4 py-3 rounded-lg border border-[${p.border}] bg-[${p.background}] text-[${p.textPrimary}] focus:outline-none focus:ring-2 focus:ring-[${p.primary}]">
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold uppercase text-[${p.textSecondary}] mb-1">Data</label>
              <input type="date" required class="w-full px-4 py-3 rounded-lg border border-[${p.border}] bg-[${p.background}] text-[${p.textPrimary}] focus:outline-none focus:ring-2 focus:ring-[${p.primary}]">
            </div>
            <div>
              <label class="block text-xs font-bold uppercase text-[${p.textSecondary}] mb-1">Ospiti</label>
              <select class="w-full px-4 py-3 rounded-lg border border-[${p.border}] bg-[${p.background}] text-[${p.textPrimary}] focus:outline-none focus:ring-2 focus:ring-[${p.primary}]">
                <option>2 Persone</option>
                <option>3 Persone</option>
                <option>4 Persone</option>
                <option>5+ Persone</option>
              </select>
            </div>
          </div>
          <button type="submit" class="w-full bg-[${p.primary}] hover:opacity-95 text-white font-bold py-4 rounded-xl shadow-lg transition">
            Conferma Prenotazione
          </button>
        </form>
      </div>

      <div id="contacts" class="flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[${p.border}] pt-8 lg:pt-0 lg:pl-12">
        <div>
          <h3 class="text-2xl font-bold text-[${p.textPrimary}] font-heading mb-6">Info & Orari</h3>
          <div class="space-y-4 text-sm text-[${p.textSecondary}]">
            <p><strong>Indirizzo:</strong> ${profile.address}</p>
            <p><strong>Telefono:</strong> ${profile.phone}</p>
            <p><strong>Email:</strong> ${profile.email}</p>
            <div class="border-t border-[${p.border}] pt-4 mt-4">
              <p class="font-bold text-[${p.textPrimary}] mb-1">Orari di Apertura:</p>
              <p>${profile.hours.weekdays}</p>
              <p>${profile.hours.weekend}</p>
              ${profile.hours.closedDays ? `<p class="text-red-600 font-semibold mt-1">${profile.hours.closedDays}</p>` : ''}
            </div>
          </div>
        </div>

        <div class="mt-8 pt-6 border-t border-[${p.border}] text-xs text-[${p.textSecondary}]">
          © ${new Date().getFullYear()} ${profile.name}. Tutti i diritti riservati. Landing page generata con GustoCraft.
        </div>
      </div>
    </div>
  </section>

</body>
</html>`;
}
