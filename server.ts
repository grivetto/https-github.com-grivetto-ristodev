import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Server-side Gemini Client initialization
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }

  // API Route for AI Restaurant Profile Generation
  app.post('/api/generate-restaurant', async (req, res) => {
    try {
      const { prompt } = req.body;
      if (!prompt || typeof prompt !== 'string') {
        res.status(400).json({ error: 'Prompt mancante o non valido.' });
        return;
      }

      if (!ai) {
        // Fallback flag if API key is missing
        res.json({ useFallback: true, message: 'Gemini API key non configurata, utilizzo del motore di deduizione locale.' });
        return;
      }

      const systemInstruction = `Sei un Lead Web Developer e UI/UX Architect specializzato nel settore food & beverage.
Analizza psicologicamente e per il marketing l'input dell'utente sul tipo di ristorante o locale ("${prompt}").
Genera una struttura JSON completa di un sito web / landing page per questo locale.
REGOLE FONDAMENTALI:
1. NESSUN LOREM IPSUM: scrivi micro-copy in lingua italiana di altissima qualità, persuasivi e perfettamente coerenti con l'atmosfera.
2. Scegli colori esadecimali (HEX) e palette psicologicamente perfetti per questo tipo di cucina/atmosfera.
3. Scegli caratteri Google Fonts adeguati per i titoli (es. Playfair Display, Cinzel, Montserrat, Outfit, Bungee, Lora) e per il corpo del testo.
4. Crea voci di menu autentiche con descrizioni invitanti, ingredienti e prezzi realistici in euro (€).
5. Crea sezioni personalizzate, citazioni dello chef e recensioni realistiche.`;

      const responseSchema = {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          tagline: { type: Type.STRING },
          cuisineType: { type: Type.STRING },
          ambiance: { type: Type.STRING },
          heroHeadline: { type: Type.STRING },
          heroSubheadline: { type: Type.STRING },
          ctaText: { type: Type.STRING },
          ctaSecondaryText: { type: Type.STRING },
          palette: {
            type: Type.OBJECT,
            properties: {
              primary: { type: Type.STRING },
              secondary: { type: Type.STRING },
              accent: { type: Type.STRING },
              background: { type: Type.STRING },
              surface: { type: Type.STRING },
              textPrimary: { type: Type.STRING },
              textSecondary: { type: Type.STRING },
              border: { type: Type.STRING },
              heroGradient: { type: Type.STRING },
            },
            required: ['primary', 'secondary', 'accent', 'background', 'surface', 'textPrimary', 'textSecondary', 'border', 'heroGradient'],
          },
          fontConfig: {
            type: Type.OBJECT,
            properties: {
              headingFont: { type: Type.STRING },
              bodyFont: { type: Type.STRING },
              headingCategory: { type: Type.STRING },
            },
            required: ['headingFont', 'bodyFont', 'headingCategory'],
          },
          borderRadius: { type: Type.STRING },
          analysis: {
            type: Type.OBJECT,
            properties: {
              restaurantType: { type: Type.STRING },
              targetAudience: { type: Type.STRING },
              emotionalHook: { type: Type.STRING },
              dominantMood: { type: Type.STRING },
              valueProposition: { type: Type.STRING },
              keyVisualTheme: { type: Type.STRING },
              recommendedCTA: { type: Type.STRING },
            },
            required: ['restaurantType', 'targetAudience', 'emotionalHook', 'dominantMood', 'valueProposition', 'keyVisualTheme', 'recommendedCTA'],
          },
          aboutTitle: { type: Type.STRING },
          aboutStory: { type: Type.STRING },
          chefName: { type: Type.STRING },
          chefRole: { type: Type.STRING },
          chefQuote: { type: Type.STRING },
          menuCategories: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
          },
          menuItems: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                name: { type: Type.STRING },
                description: { type: Type.STRING },
                price: { type: Type.STRING },
                category: { type: Type.STRING },
                badge: { type: Type.STRING },
              },
              required: ['id', 'name', 'description', 'price', 'category'],
            },
          },
          testimonials: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                id: { type: Type.STRING },
                author: { type: Type.STRING },
                role: { type: Type.STRING },
                rating: { type: Type.NUMBER },
                text: { type: Type.STRING },
                source: { type: Type.STRING },
              },
              required: ['id', 'author', 'role', 'rating', 'text', 'source'],
            },
          },
          address: { type: Type.STRING },
          phone: { type: Type.STRING },
          email: { type: Type.STRING },
        },
        required: [
          'name', 'tagline', 'cuisineType', 'ambiance', 'heroHeadline', 'heroSubheadline',
          'ctaText', 'ctaSecondaryText', 'palette', 'fontConfig', 'analysis',
          'aboutTitle', 'aboutStory', 'menuCategories', 'menuItems', 'testimonials',
          'address', 'phone', 'email'
        ],
      };

      const aiResponse = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: `Analizza e crea il sito per questo locale: "${prompt}"`,
        config: {
          systemInstruction,
          responseMimeType: 'application/json',
          responseSchema: responseSchema as any,
        },
      });

      const jsonText = aiResponse.text;
      if (!jsonText) {
        throw new Error('Risposta AI vuota.');
      }

      const generatedProfile = JSON.parse(jsonText);
      res.json({ success: true, profile: generatedProfile });
    } catch (err: any) {
      console.error('Errore durante la generazione con Gemini:', err);
      res.json({ useFallback: true, error: err.message || 'Errore durante la generazione AI.' });
    }
  });

  // Vite Middleware in dev, static files in production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server GustoCraft attivo sulla porta http://localhost:${PORT}`);
  });
}

startServer();
