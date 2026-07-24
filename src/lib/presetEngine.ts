import { RestaurantProfile } from '../types';

export function generateDynamicProfile(input: string): RestaurantProfile {
  const lower = input.toLowerCase();

  // Helper keyword matchers
  const isVegan = lower.includes('vega') || lower.includes('bio') || lower.includes('plant') || lower.includes('salut') || lower.includes('orga');
  const isTrattoria = lower.includes('trattor') || lower.includes('osteri') || lower.includes('romana') || lower.includes('caserecc') || lower.includes('tradizion') || lower.includes('toscana');
  const isCyber = lower.includes('cyber') || lower.includes('pub') || lower.includes('neon') || lower.includes('craft') || lower.includes('birr') || lower.includes('game') || lower.includes('rock');
  const isLuxury = lower.includes('stellat') || lower.includes('luxury') || lower.includes('gourmet') || lower.includes('fine dining') || lower.includes('elegante') || lower.includes('sushi') || lower.includes('lounge');
  const isPizza = lower.includes('pizz') || lower.includes('napoletan') || lower.includes('forno') || lower.includes('verace');
  const isGelato = lower.includes('gelat') || lower.includes('pasticcer') || lower.includes('dolc') || lower.includes('caf') || lower.includes('caffè');
  const isBeach = lower.includes('chiring') || lower.includes('beac') || lower.includes('spiagg') || lower.includes('tropic') || lower.includes('tapas') || lower.includes('cocktail');
  const isBBQ = lower.includes('steak') || lower.includes('bbq') || lower.includes('carne') || lower.includes('grigli') || lower.includes('american');

  if (isVegan) {
    return {
      id: 'vegan-garden',
      name: 'Terra & Germoglio',
      tagline: 'Cucina Vegetale, Biologica & Consapevole',
      cuisineType: 'Ristorante Vegano & Plant-Based',
      ambiance: 'Fresco, Luminoso, Naturale, Eco-Sostenibile',
      heroHeadline: 'La Natura Nel Tuo Piatto, Senza Compromessi',
      heroSubheadline: 'Ingredienti a km 0, fermentazioni artigianali e ricette plant-based gourmet che nutrono corpo e spirito.',
      ctaText: 'Prenota un Tavolo Biologico',
      ctaSecondaryText: 'Esplora il Menu Stagionale',
      palette: {
        primary: '#1C1C1C', // Charcoal
        secondary: '#8B7E66', // Muted Gold / Earth
        accent: '#2d5a27', // Sage / Forest Green
        background: '#F7F4F0', // Creamy Editorial Canvas
        surface: '#ffffff',
        textPrimary: '#1C1C1C',
        textSecondary: '#625d56',
        border: 'rgba(28,28,28,0.12)',
        heroGradient: 'from-[#1C1C1C] via-[#2A2825] to-[#121212]',
      },
      fontConfig: {
        headingFont: 'Playfair Display',
        bodyFont: 'Inter',
        headingCategory: 'serif',
      },
      borderRadius: 'lg',
      analysis: {
        restaurantType: 'Ristorante Vegano & Organic Garden',
        targetAudience: 'Persone attente alla salute, flexitariani, appassionati di sostenibilità ed estetica naturale.',
        emotionalHook: 'Un’oasi di freschezza, genuinità e armonia con la natura.',
        dominantMood: 'Rigenerante, etico, accogliente e moderno.',
        valueProposition: '100% vegetale, filiera biologica certificata e sapore straordinario.',
        keyVisualTheme: 'Toni salvia e terra, texture in legno chiaro, elementi botanici e luce naturale.',
        recommendedCTA: 'Prenota un Tavolo Biologico',
      },
      aboutTitle: 'Filosofia Dalla Terra Alla Tavola',
      aboutStory: 'Nati dalla passione per la terra e la nutrizione consapevole, coltiviamo direttamente i nostri ortaggi nelle colline biologiche. Ogni piatto è una celebrazione della biodiversità e dell’alta gastronomia vegetale.',
      chefName: 'Chiara Valenti',
      chefRole: 'Chef Botanica & Co-Fondatrice',
      chefQuote: 'La cucina vegetale non è una rinuncia, ma un universo sconfinato di sapori vivaci.',
      customSections: [
        {
          id: 'bio-commitments',
          title: 'I Nostri 4 Pilastri Etici',
          subtitle: 'Sostenibilità al 100% in ogni dettaglio',
          iconName: 'Leaf',
          type: 'feature_list',
          content: {
            heading: 'Un impegno concreto per il pianeta',
            paragraph: 'Non usiamo prodotti chimici, riduciamo a zero gli sprechi e sosteniamo i piccoli agricoltori locali.',
            highlights: [
              'Coltivazione sinergica e orto biologico a km 0',
              'Energia 100% da fonti rinnovabili pulite',
              'Plastic-Free & Packaging compostabile per takeaway',
              'Acqua microfiltrata e zero sprechi alimentari'
            ]
          }
        }
      ],
      menuCategories: ['Antipasti Vivi', 'Primi Botanici', 'Secondi Gourmet', 'Dolci Sani'],
      menuItems: [
        {
          id: 'v1',
          name: 'Tartare di Barbabietola Affumicata',
          description: 'Servita con maionese all’aneto, capperi dissalati, caviale di tartufo e crostini di farro integrali.',
          price: '14.00 €',
          category: 'Antipasti Vivi',
          badge: 'Consigliato',
          dietary: ['vegan', 'gluten-free', 'signature']
        },
        {
          id: 'v2',
          name: 'Ravioli di Grano Saraceno al Zucca e Salvia',
          description: 'Ripieno cremoso di zucca mantovana arrostita, ricotta di anacardi e nocciole tostate.',
          price: '18.00 €',
          category: 'Primi Botanici',
          badge: 'Stagionale',
          dietary: ['vegan', 'signature']
        },
        {
          id: 'v3',
          name: 'Bistecca di Fungo Cardoncello Glassato',
          description: 'Marinatura allo miso scuro, purè di sedano rapa cremoso, riduzione di vino rosso biologico.',
          price: '21.00 €',
          category: 'Secondi Gourmet',
          badge: 'Chef Choice',
          dietary: ['vegan', 'gluten-free']
        },
        {
          id: 'v4',
          name: 'Cheesecake Crudista al Passion Fruit',
          description: 'Base di noci e datteri, crema morbida di cocco e anacardi, gelatina naturale al frutto della passione.',
          price: '9.00 €',
          category: 'Dolci Sani',
          dietary: ['vegan', 'gluten-free']
        }
      ],
      gallery: [
        {
          id: 'g1',
          title: 'L’Orto Sinergico',
          caption: 'I nostri ortaggi raccolti ogni mattina all’alba.',
          imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
          category: 'Ambiente'
        },
        {
          id: 'g2',
          title: 'Tartare Gourmet',
          caption: 'Dettaglio della nostra tartare di barbabietola affumicata.',
          imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
          category: 'Piatti'
        },
        {
          id: 'g3',
          title: 'Sala Botanica',
          caption: 'Tavoli in legno naturale immersi tra piante rigogliose.',
          imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
          category: 'Ambiente'
        }
      ],
      testimonials: [
        {
          id: 't1',
          author: 'Elena Rossi',
          role: 'Food Blogger',
          rating: 5,
          text: 'Un’esperienza culinaria illuminante! Piatto preferito: i ravioli al zucca e anacardi. Atmosfera rilassante e servizio impeccabile.',
          source: 'Google Reviews'
        },
        {
          id: 't2',
          author: 'Marco Bianchi',
          role: 'Guida Ristoranti Bio',
          rating: 5,
          text: 'Anche da non vegano sono rimasto estasiato dai sapori. La bistecca di cardoncello è un capolavoro di consistenza e gusto.',
          source: 'TripAdvisor'
        }
      ],
      address: 'Via delle Erbe 42, 20121 Milano (MI)',
      phone: '+39 02 8901 2345',
      email: 'prenotazioni@terraegermoglio.it',
      hours: {
        weekdays: 'Lun - Ven: 12:30 - 15:00 | 19:30 - 23:00',
        weekend: 'Sab - Dom: 12:00 - 23:30 (Orario Continuato e Brunch)',
        closedDays: 'Martedì Chiuso per Raccolta Orto'
      },
      socials: {
        instagram: 'https://instagram.com/terraegermoglio',
        facebook: 'https://facebook.com/terraegermoglio',
        tripadvisor: 'https://tripadvisor.com'
      },
      reservationType: 'table'
    };
  }

  if (isTrattoria) {
    return {
      id: 'trattoria-romana',
      name: 'Da Giggi er Romanesco',
      tagline: 'Autentica Trattoria e Osteria Romana dal 1968',
      cuisineType: 'Cucina Tipica Romana & Casereccia',
      ambiance: 'Caldo, Festoso, Tradizionale, Accogliente',
      heroHeadline: 'I Veri Sapori della Tradizione Romana',
      heroSubheadline: 'Carbonara cremosa senza panna, Cacio e Pepe mantecata a mano e vino dei Castelli Romani in caraffa.',
      ctaText: 'Prenota la Tua Sorprenotazione',
      ctaSecondaryText: 'Guarda le Nostre Specialità',
      palette: {
        primary: '#8b0000', // Deep Rustic Red
        secondary: '#d97706', // Terracotta Warm Gold
        accent: '#15803d', // Basil Green
        background: '#fffdfa', // Warm Ivory White
        surface: '#ffffff',
        textPrimary: '#281812',
        textSecondary: '#63473d',
        border: '#e8d6c8',
        heroGradient: 'from-amber-950/85 via-red-950/80 to-stone-900/90',
      },
      fontConfig: {
        headingFont: 'Playfair Display',
        bodyFont: 'Lora',
        headingCategory: 'serif',
      },
      borderRadius: 'sm',
      analysis: {
        restaurantType: 'Trattoria Romana & Osteria Tradizionale',
        targetAudience: 'Famiglie, gruppi di amici, turisti e amanti della cucina ricca, autentica e casereccia.',
        emotionalHook: 'Il calore di una tavolata in famiglia tra risate, stornelli e porzioni abbondanti.',
        dominantMood: 'Familiare, folkloristico, generoso e conviviale.',
        valueProposition: 'Materie prime capitoline originali (Guanciale IGP, Pecorino Romano DOP) e ricette tramandate da 3 generazioni.',
        keyVisualTheme: 'Tovaglie a quadri rossi e bianchi, dettagli in terracotta, legno antico e fiaschi di vino.',
        recommendedCTA: 'Prenota la Tua Sorprenotazione',
      },
      aboutTitle: 'Tre Generazioni al Servizio del Gusto',
      aboutStory: 'Fondata da Nonno Giggi nel cuore del Rione Monti, la nostra trattoria conserva il calore di una volta. Ogni mattina scegliamo il guanciale di Amatrice e il pecorino romano direttamente dai nostri fornitori storici di fiducia.',
      chefName: 'Mamma Lucia & Giggetto',
      chefRole: 'Pasticceri & Custodi della Tradizione',
      chefQuote: 'Er segreto della Carbonara? Guanciale croccante, pecorino e tanta passione romana!',
      customSections: [
        {
          id: 'tradition-menu',
          title: 'I Magnifici 4 Primi Romani',
          subtitle: 'Rigatoni e Tonnarelli fatti in casa ogni mattina',
          iconName: 'UtensilsCrossed',
          type: 'tasting_menu',
          content: {
            heading: 'La Quadrilogia Capitolina',
            paragraph: 'Gusta i quattro classici intramontabili preparati a regola d’arte.',
            highlights: [
              'Carbonara Verace: Guanciale di Amatrice croccante, tuorli d’uovo freschi, Pecorino Romano DOP.',
              'Cacio e Pepe: Tonnarelli all’uovo, Pepe nero di Rinjani macinato fresco, crema di Pecorino.',
              'Amatriciana Tradizionale: Pomodoro San Marzano, guanciale sfumato al vino bianco, pecorino.',
              'Gricia d’Epoca: Il primo antenato dell’amatriciana, ricco e profumato.'
            ]
          }
        }
      ],
      menuCategories: ['Antipasti della Casa', 'I Primi della Tradizione', 'Secondi alla Brace', 'Dolci Fatti in Casa'],
      menuItems: [
        {
          id: 'r1',
          name: 'Gran Tagliere de’ Giggi',
          description: 'Prosciutto dolce di Bassiano, coppiette romane, caciotta di pecora, carciofo alla romana e bruschetta al pomodoro.',
          price: '16.00 €',
          category: 'Antipasti della Casa',
          badge: 'Consigliato x2',
          dietary: ['signature']
        },
        {
          id: 'r2',
          name: 'Rigatoni alla Carbonara Verace',
          description: 'Guanciale di Amatrice croccante, tuorlo fresco, Pecorino Romano DOP, pepe nero macinato al momento.',
          price: '13.50 €',
          category: 'I Primi della Tradizione',
          badge: 'Il Più Richiesto',
          dietary: ['signature']
        },
        {
          id: 'r3',
          name: 'Coda alla Vaccinara della Nonna',
          description: 'Stufata lentamente per 6 ore con sedano croccante, pomodoro, uvetta, pinoli e cacao amaro.',
          price: '17.00 €',
          category: 'Secondi alla Brace',
          badge: 'Ricetta Storica'
        },
        {
          id: 'r4',
          name: 'Maritozzo con Panna e Pinoli',
          description: 'Soffice brioche romana farcita con panna fresca montata al momento e spolverata di zucchero a velo.',
          price: '6.00 €',
          category: 'Dolci Fatti in Casa'
        }
      ],
      gallery: [
        {
          id: 'rg1',
          title: 'La Carbonara Verace',
          caption: 'Cremosità unica senza aggiunta di panna.',
          imageUrl: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
          category: 'Piatti'
        },
        {
          id: 'rg2',
          title: 'Osteria all’Aperto',
          caption: 'I nostri tavoli nel caratteristico vicolo romano.',
          imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
          category: 'Ambiente'
        }
      ],
      testimonials: [
        {
          id: 'rt1',
          author: 'Sandro Neri',
          role: 'Cliente Storico',
          rating: 5,
          text: 'Vengo da Giggi da oltre vent’anni. La carbonara migliore di Roma, atmosfera calorosa come essere a casa!',
          source: 'Google'
        }
      ],
      address: 'Via dei Cappellari 18, Rione Monti, 00184 Roma (RM)',
      phone: '+39 06 6875 4321',
      email: 'info@dagiggiromanesco.it',
      hours: {
        weekdays: 'Mar - Ven: 12:30 - 15:30 | 19:00 - 23:30',
        weekend: 'Sab - Dom: 12:00 - 16:00 | 19:00 - 00:00',
        closedDays: 'Lunedì Chiuso'
      },
      socials: {
        instagram: 'https://instagram.com/dagiggirelromanesco',
        facebook: 'https://facebook.com/dagiggi'
      },
      reservationType: 'table'
    };
  }

  if (isCyber) {
    return {
      id: 'cyber-pub',
      name: 'NEON MATRIX PUB',
      tagline: 'Craft Beers, Arcade Zone & Underground Cyber Food',
      cuisineType: 'Pub Cyberpunk & Birreria Artigianale',
      ambiance: 'Futuristico, Energico, Neon, Underground',
      heroHeadline: 'ENTRA NEL FUTURO DEL GUSTO',
      heroSubheadline: '24 Spine di birra artigianale rotante, burger da 200g affumicati, neon ciano-fucsia e console retro-arcade anni ’90.',
      ctaText: 'RAGGIUNGI IL MATRIX',
      ctaSecondaryText: 'SCOPRI LE BIRRE ALLA SPINA',
      palette: {
        primary: '#06b6d4', // Cyan Neon
        secondary: '#d946ef', // Fuchsia Neon
        accent: '#facc15', // Bright Yellow
        background: '#090d16', // Ultra Dark Navy
        surface: '#111827', // Dark Card
        textPrimary: '#f3f4f6',
        textSecondary: '#9ca3af',
        border: '#1f2937',
        heroGradient: 'from-fuchsia-950/90 via-cyan-950/80 to-black',
      },
      fontConfig: {
        headingFont: 'Montserrat',
        bodyFont: 'Outfit',
        headingCategory: 'sans',
      },
      borderRadius: 'md',
      analysis: {
        restaurantType: 'Pub Cyberpunk & Craft Brewery',
        targetAudience: 'Millemials, Gen-Z, gamers, amanti delle birre artigianali e serate alternative.',
        emotionalHook: 'Un tuffo in un futuro distopico tra luci al neon, musica synthwave e cibo godurioso.',
        dominantMood: 'Elettrizzante, ribelle, immersivo e sociale.',
        valueProposition: 'Birre rare da microbirrifici indipendenti, smash burger esplosivi e cabinati arcade gratuiti.',
        keyVisualTheme: 'Sfondo nero/scuro, luci neon fucsia e ciano, dettagli metal e typography bold.',
        recommendedCTA: 'PRENOTA IL TUO SPOT GAMING',
      },
      aboutTitle: 'L’Underground della Birra Artigianale',
      aboutStory: 'Nato nel 2024 nei sotterranei industriali della città, Neon Matrix è un rifugio per chi cerca birre introvabili, burger spaventosi e una vera community gaming & synthwave.',
      chefName: 'DJ Deck & Master Brewer Alex',
      chefRole: 'Head Bartender & Grill Master',
      chefQuote: 'Niente birre industriali. Solo luppolo fresco, carne selezionata e voltaggio massimo.',
      customSections: [
        {
          id: 'tap-list',
          title: 'Live Tap Board 24 Spine',
          subtitle: 'Aggiornato in tempo reale con le birre della settimana',
          iconName: 'Beer',
          type: 'craft_grid',
          content: {
            heading: 'Luppoli Selezionati dal Mondo',
            paragraph: 'Dalle IPA super luppolate alle Imperial Stout invecchiate in botte.',
            highlights: [
              'Cyber Haze NEIPA 6.8% - Aromi tropicali di mango e maracuja',
              'Neon Pink Sour Ale 5.2% - Con lamponi freschi e fior di sale',
              'Dark Matrix Imperial Stout 10.5% - Note marcate di cacao e caffè espresso',
              'Tokyo Drift Pilsner 4.9% - Secca, fragrante e rinfrescante'
            ]
          }
        }
      ],
      menuCategories: ['Smash Burger', 'Finger & Cyber Fries', 'Craft Tap List', 'Cocktail Neon'],
      menuItems: [
        {
          id: 'c1',
          name: 'Cyber Monster Burger (200g)',
          description: 'Doppio patty di Fassona, cheddar fuso stagionato, bacon affumicato al legno di melo, salsa secret neon e cipolle fritte croccanti.',
          price: '15.00 €',
          category: 'Smash Burger',
          badge: 'BESTSELLER',
          dietary: ['signature']
        },
        {
          id: 'c2',
          name: 'Matrix Loaded Loaded Fries',
          description: 'Patatine fritte con buccia, pulled pork affumicato 12 ore, crema di formaggio Monterey Jack e jalapeno sott’olio.',
          price: '9.50 €',
          category: 'Finger & Cyber Fries',
          badge: 'Da Condividere'
        },
        {
          id: 'c3',
          name: 'Pinta Cyber Haze NEIPA (0.5L)',
          description: 'Birra artigianale non filtrata, estremamente profumata con luppoli Citra e Mosaic. Gradazione 6.8%.',
          price: '7.50 €',
          category: 'Craft Tap List'
        }
      ],
      gallery: [
        {
          id: 'cg1',
          title: 'Neon Tap Bar',
          caption: 'Le nostre 24 spine illuminate al neon.',
          imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
          category: 'Ambiente'
        },
        {
          id: 'cg2',
          title: 'Cyber Monster Smash',
          caption: 'Dettaglio del nostro burger croccante.',
          imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
          category: 'Food'
        }
      ],
      testimonials: [
        {
          id: 'ct1',
          author: 'Loris "Glitch" V.',
          role: 'Pro Gamer',
          rating: 5,
          text: 'Atmosfera spaziale, il burger col pulled pork è atomico e le birre in spina cambiano ogni settimana!',
          source: 'Google Reviews'
        }
      ],
      address: 'Via Docks Dora 88, 10155 Torino (TO)',
      phone: '+39 011 987 6543',
      email: 'info@neonmatrixpub.it',
      hours: {
        weekdays: 'Mar - Gio: 18:00 - 02:00',
        weekend: 'Ven - Dom: 18:00 - 04:00 (DJ Set & Arcade Night)',
        closedDays: 'Lunedì Chiuso'
      },
      socials: {
        instagram: 'https://instagram.com/neonmatrixpub',
        facebook: 'https://facebook.com/neonmatrix'
      },
      reservationType: 'table'
    };
  }

  if (isLuxury) {
    return {
      id: 'luxury-sushi',
      name: 'Orizuru Minimal Fine Dining',
      tagline: 'L’Arte della Culinaria Giapponese Contemporanea',
      cuisineType: 'Ristorante Giapponese & Omakase Lounge',
      ambiance: 'Minimal, Elegante, Esclusivo, Silenzioso',
      heroHeadline: 'L’Eccellenza del Gusto nel Segno dell’Essenziale',
      heroSubheadline: 'Esperienze Omakase esclusive guidate dal Maestro Kenji Takahashi. Pesce fresco di lenza, riso Akazu e ricerca della perfezione.',
      ctaText: 'Riserva il Tuo Banco Omakase',
      ctaSecondaryText: 'Esplora il Menu Degustazione',
      palette: {
        primary: '#111827', // Obsidian Black
        secondary: '#d4af37', // Refined Champagne Gold
        accent: '#991b1b', // Deep Crimson Accent
        background: '#0c0f12', // Dark Luxury Canvas
        surface: '#181d24',
        textPrimary: '#f9fafb',
        textSecondary: '#d1d5db',
        border: '#27303f',
        heroGradient: 'from-stone-950 via-slate-950/90 to-amber-950/40',
      },
      fontConfig: {
        headingFont: 'Cinzel',
        bodyFont: 'Plus Jakarta Sans',
        headingCategory: 'serif',
      },
      borderRadius: 'none',
      analysis: {
        restaurantType: 'Ristorante Luxury Fine Dining & Omakase',
        targetAudience: 'Clientela gourmet raffinata, coppie per serate speciali, manager ed amanti della cucina nipponica autentica.',
        emotionalHook: 'Un viaggio sensoriale di rara eleganza, precisione rituale e materie prime inarrivabili.',
        dominantMood: 'Raffinato, intimo, zen, prestigioso.',
        valueProposition: 'Esperienza Omakase personalizzata al banco, tonno rosso Balfegó e selezione di Sakè rari importati direttamente.',
        keyVisualTheme: 'Sfondo dark luxury, finiture d’oro satinato, legno di cedro scuro e composizioni minimaliste.',
        recommendedCTA: 'Riserva l’Esperienza Omakase',
      },
      aboutTitle: 'La Filosofia dell’Omakase',
      aboutStory: 'Nello spirito dell’Omakase ("Mi affido a te"), il nostro Mastro Sushi prepara ogni nigiri al momento di fronte agli ospiti. Utilizziamo riso stagionato con aceto di sakè nero Akazu e il miglior pescato selvaggio giornaliero.',
      chefName: 'Kenji Takahashi',
      chefRole: 'Executive Sushi Master',
      chefQuote: 'La perfezione non si raggiunge aggiungendo, ma togliendo ciò che è superfluo.',
      customSections: [
        {
          id: 'omakase-experience',
          title: 'Il Rituale Omakase in 12 Passaggi',
          subtitle: 'Disponibile solo su prenotazione al banco dello Chef',
          iconName: 'Sparkles',
          type: 'tasting_menu',
          content: {
            heading: 'Un Percorso Sensoriale Unico',
            paragraph: 'Solo 8 posti al banco per sera, per garantire un’attenzione maniacale ad ogni dettaglio.',
            highlights: [
              'Selezione di Sashimi Frollato a Freddo (Jukusei)',
              'Nigiri di Otoro Affumicato al Legno di Ciliegio',
              'Wagyu A5 di Kagoshima scottato alla lampada con tartufo nero',
              'Brodo Dashi tradizionale e Matcha Cerimoniale di Uji'
            ]
          }
        }
      ],
      menuCategories: ['Nigiri d’Autore', 'Sashimi Frollato', 'Percorso Omakase', 'Sakè & Cocktail'],
      menuItems: [
        {
          id: 'l1',
          name: 'Otoro Nigiri Aburi',
          description: 'Ventresca di tonno rosso Balfegó sfiammata alla lampada, caviale Ossetra e sale di Maldon.',
          price: '18.00 € / 2 pz',
          category: 'Nigiri d’Autore',
          badge: 'Iconico',
          dietary: ['signature', 'gluten-free']
        },
        {
          id: 'l2',
          name: 'Tris di Wagyu A5 Kagoshima',
          description: 'Carpaccio di Wagyu grado A5 con ponzu al tartufo, tartare su riso croccante e nigiri scottato.',
          price: '42.00 €',
          category: 'Nigiri d’Autore',
          badge: 'Rare Selection'
        },
        {
          id: 'l3',
          name: 'Percorso Omakase "Kuro" (12 Portate)',
          description: 'Percorso completo guidato dallo Chef con pescato del giorno, Wagyu A5 e dessert artigianale al Matcha.',
          price: '140.00 € / persona',
          category: 'Percorso Omakase',
          badge: 'Esperienza Esclusiva'
        }
      ],
      gallery: [
        {
          id: 'lg1',
          title: 'Banco Omakase in Cedro',
          caption: 'I soli 8 posti d’onore di fronte allo Chef.',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
          category: 'Ambiente'
        },
        {
          id: 'lg2',
          title: 'Otoro Nigiri col Caviale',
          caption: 'Pezzo forte della degustazione serale.',
          imageUrl: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=800&q=80',
          category: 'Piatti'
        }
      ],
      testimonials: [
        {
          id: 'lt1',
          author: 'Guida Espresso Gourmet',
          role: 'Critico Enogastronomico',
          rating: 5,
          text: 'Una delle esperienze Omakase più pure d’Italia. La tecnica di frollatura del pesce di Kenji è magistrale.',
          source: 'Guida Ristoranti 2026'
        }
      ],
      address: 'Piazza della Spiga 12, 20121 Milano (MI)',
      phone: '+39 02 7600 9988',
      email: 'omakase@orizuru.it',
      hours: {
        weekdays: 'Mar - Sab: 19:30 - 23:30 (Due turni Omakase)',
        weekend: 'Dom: 12:30 - 15:00 (Solo Pranzo Domenicale)',
        closedDays: 'Lunedì Chiuso'
      },
      socials: {
        instagram: 'https://instagram.com/orizurufinedining'
      },
      reservationType: 'table'
    };
  }

  // Default fallback engine dynamically adapting generic custom text
  const capitalizedInput = input.charAt(0).toUpperCase() + input.slice(1);
  
  return {
    id: `custom-${Date.now()}`,
    name: lower.includes('pizz') ? 'Pizzeria Bella Napoli' : (capitalizedInput.split(' ')[0] || 'L’Angolo del Gusto'),
    tagline: `Autentica Esperienza di ${capitalizedInput}`,
    cuisineType: capitalizedInput,
    ambiance: 'Accogliente, Curata nei Dettagli, Conviviale',
    heroHeadline: `Benvenuti da ${capitalizedInput.split(' ')[0] || 'Noi'}`,
    heroSubheadline: `Scopri la nostra proposta gastronomica unica dedicata a: ${input}. Materie prime freschissime e passione artigianale.`,
    ctaText: 'Prenota un Tavolo Ora',
    ctaSecondaryText: 'Consulta il Nostro Menu',
    palette: {
      primary: '#9a3412', // Warm Terracotta / Amber
      secondary: '#d97706',
      accent: '#0284c7',
      background: '#fafaf9',
      surface: '#ffffff',
      textPrimary: '#1c1917',
      textSecondary: '#57534e',
      border: '#e7e5e4',
      heroGradient: 'from-amber-950/85 via-orange-950/80 to-stone-900/90',
    },
    fontConfig: {
      headingFont: 'Playfair Display',
      bodyFont: 'Plus Jakarta Sans',
      headingCategory: 'serif',
    },
    borderRadius: 'md',
    analysis: {
      restaurantType: capitalizedInput,
      targetAudience: 'Amanti della buona tavola, gruppi di amici e famiglie che ricercano qualità ed un’atmosfera unica.',
      emotionalHook: 'Il sapore autentico delle cose fatte con dedizione e cura artigianale.',
      dominantMood: 'Caldo, rilassante ed entusiasmante.',
      valueProposition: 'Qualità senza compromessi, ingredienti freschi di giornata ed accoglienza calorosa.',
      keyVisualTheme: 'Elementi caldi, palette avvolgente, illuminazione soffusa e foto d’impatto.',
      recommendedCTA: 'Prenota il Tuo Tavolo',
    },
    aboutTitle: 'La Nostra Storia & Passione',
    aboutStory: `Creare un locale dedicato a "${input}" è stato il nostro sogno fin dal primo giorno. Selezioniamo quotidianamente gli ingredienti migliori per offrirvi sapori veri e momenti indimenticabili.`,
    chefName: 'Lo Staff di Cucina',
    chefRole: 'Maestri del Gusto',
    chefQuote: 'Cucinare è il modo più bello per condividere felicità ed emozioni.',
    customSections: [
      {
        id: 'specialties',
        title: 'I Nostri Punti di Forza',
        subtitle: 'Cosa rende speciale la nostra esperienza',
        iconName: 'Award',
        type: 'feature_list',
        content: {
          heading: 'Esperienza e Qualità Garantita',
          paragraph: 'Ci impegniamo ogni giorno per offrirvi solo il meglio.',
          highlights: [
            'Selezione rigorosa dei fornitori e filiera controllata',
            'Preparazioni fresche effettuate al momento nella nostra cucina',
            'Carta dei vini e bevande abbinata ad arte',
            'Ambiente confortevole adatto ad ogni occasione'
          ]
        }
      }
    ],
    menuCategories: ['Specialità della Casa', 'Piatti Principali', 'Contorni & Sfizi', 'Dessert Artigianali'],
    menuItems: [
      {
        id: 'm1',
        name: 'Piatto Signature della Casa',
        description: 'La nostra creazione simbolo preparata con ingredienti stagionali scelti e guarnizioni d’autore.',
        price: '16.50 €',
        category: 'Specialità della Casa',
        badge: 'Specialità',
        dietary: ['signature']
      },
      {
        id: 'm2',
        name: 'Selezione Gourmet dello Chef',
        description: 'Un incontro armonioso di sapori tradizionali rivisitati in chiave moderna.',
        price: '18.00 €',
        category: 'Piatti Principali',
        badge: 'Consigliato'
      },
      {
        id: 'm3',
        name: 'Dolce del Giorno Fatto in Casa',
        description: 'Preparato fresco ogni mattina con ricetta segreta del nostro pasticcere.',
        price: '6.50 €',
        category: 'Dessert Artigianali'
      }
    ],
    gallery: [
      {
        id: 'f1',
        title: 'L’Ambiente della Sala',
        caption: 'Spazi luminosi ed accoglienti pensati per il vostro relax.',
        imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
        category: 'Ambiente'
      },
      {
        id: 'f2',
        title: 'Dettaglio Gourmet',
        caption: 'Cura maniacale nella presentazione di ogni piatto.',
        imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
        category: 'Cucina'
      }
    ],
    testimonials: [
      {
        id: 'ft1',
        author: 'Chiara M.',
        role: 'Cliente Abituale',
        rating: 5,
        text: 'Cibo eccezionale, servizio cordiale ed un’atmosfera davvero piacevole. Consigliatissimo!',
        source: 'Google Reviews'
      }
    ],
    address: 'Via Garibaldi 45, 00100 Centro Città',
    phone: '+39 0123 456789',
    email: 'info@ilnostrolocale.it',
    hours: {
      weekdays: 'Mar - Ven: 12:00 - 15:00 | 19:00 - 23:00',
      weekend: 'Sab - Dom: 12:00 - 23:30 (Orario Continuato)',
      closedDays: 'Lunedì Chiuso'
    },
    socials: {
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    },
    reservationType: 'table'
  };
}
