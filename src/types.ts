export interface ColorPalette {
  primary: string; // e.g. "#1e3a8a" or "#15803d"
  secondary: string; // e.g. "#f59e0b"
  accent: string; // e.g. "#dc2626"
  background: string; // e.g. "#fdfbf7"
  surface: string; // e.g. "#ffffff"
  textPrimary: string; // e.g. "#1f2937"
  textSecondary: string; // e.g. "#4b5563"
  border: string; // e.g. "#e5e7eb"
  heroGradient: string; // e.g. "from-amber-900/90 to-stone-900/95"
}

export interface FontConfig {
  headingFont: string; // e.g. "Playfair Display"
  bodyFont: string; // e.g. "Plus Jakarta Sans"
  headingCategory: 'serif' | 'sans' | 'display' | 'handwriting';
}

export interface MarketingAnalysis {
  restaurantType: string;
  targetAudience: string;
  emotionalHook: string;
  dominantMood: string;
  valueProposition: string;
  keyVisualTheme: string;
  recommendedCTA: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  badge?: string;
  dietary?: ('vegan' | 'vegetarian' | 'gluten-free' | 'spicy' | 'signature')[];
  image?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  rating: number;
  text: string;
  avatar?: string;
  source: string;
}

export interface CustomSection {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  content: {
    heading: string;
    paragraph: string;
    highlights: string[];
    ctaText?: string;
  };
  type: 'philosophy' | 'feature_list' | 'event_list' | 'tasting_menu' | 'craft_grid';
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  imageUrl: string;
  category: string;
}

export interface RestaurantProfile {
  id: string;
  name: string;
  tagline: string;
  cuisineType: string;
  ambiance: string;
  heroHeadline: string;
  heroSubheadline: string;
  ctaText: string;
  ctaSecondaryText: string;
  
  // Design & Branding
  palette: ColorPalette;
  fontConfig: FontConfig;
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
  
  // Marketing & Analysis
  analysis: MarketingAnalysis;
  
  // Content Sections
  aboutTitle: string;
  aboutStory: string;
  chefName?: string;
  chefQuote?: string;
  chefRole?: string;
  
  customSections: CustomSection[];
  
  menuCategories: string[];
  menuItems: MenuItem[];
  
  gallery: GalleryItem[];
  testimonials: Testimonial[];
  
  // Operational Details
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    weekend: string;
    closedDays?: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
    tripadvisor?: string;
  };
  reservationType: 'table' | 'takeout' | 'ticket' | 'event';
}
