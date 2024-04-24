import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroMob:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/images/hero/hero_bg_mob.jpg") 1x, url("/images/hero/hero_bg_mob@2x.jpg") 2x)',
        heroTab:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/images/hero/hero_bg_tab.jpg") 1x, url("/images/hero/hero_bg_tab@2x.jpg") 2x)',
        heroDesk:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/images/hero/hero_bg_desk.jpg") 1x, url("/images/hero/hero_bg_desk@2x.jpg") 2x)',

        aboutMob:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/images/about/about_bg_mob.jpg") 1x, url("/images/about/about_bg_mob@2x.jpg") 2x)',
        aboutTab:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/images/about/about_bg_tab.jpg") 1x, url("/images/about/about_bg_tab@2x.jpg") 2x)',
        aboutDesk:
          'linear-gradient(to bottom, rgba(2, 15, 8, 0.5), rgba(2, 15, 8, 0.5)), image-set(url("/images/about/about_bg_desk.jpg") 1x, url("/images/about/about_bg_desk@2x.jpg") 2x)',
      },

      colors: {
        bgMainColor: '#D9D9D9',
      },

      screens: {
        xs: '320px',
        sm: '480px',
        md: '768px',
        lg: '1280px',
      },

      maxWidth: {
        mob: '480px',
        tab: '768px',
        desk: '1280px',
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        karantina: ['Karantina', 'system-ui'],
      },

      fontSize: {
        logo: ['14px', '14px'],

        xxs: ['10px', '16px'],
        xs: ['12px', '14.52px'],
        sm: ['14px', '17px'],
        base: ['14px', '20px'],
        lg: ['37px', '45px'],
        xl: ['40px', '56px'],
      },

      letterSpacing: {
        thin: '-0.04em',
        base: '0.09em',
        normal: '0.1em',
        wide: '0.18em',
        large: '2.28em',
      },
    },
  },
  plugins: [],
};
export default config;
