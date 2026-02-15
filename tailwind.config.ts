import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: 'var(--bg)',
          surface: 'var(--surface)',
          text: 'var(--text)',
          muted: 'var(--muted)',
          primary: 'var(--primary)',
          accent: 'var(--accent)',
          success: 'var(--success)',
          border: 'var(--border)'
        }
      },
      boxShadow: {
        card: '0 12px 30px rgba(5, 109, 182, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
