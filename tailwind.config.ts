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

        servicePoint: "url('/icons/point.svg')",
      },

      colors: {
        main: '#FFFFFF',
        support: 'rgba(255, 255, 255, 0.2)',
        bgMain: '#D9D9D9',
        btnBg: 'rgba(255, 255, 255, 0.1)',
        btnBgActive: 'rgba(255, 255, 255, 0.2)',
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
        sm: ['12px', '24px'],
        md: ['14px', '17px'],

        base: ['14px', '20px'],
        slide: ['20px', '17px'],

        lg: ['37px', '45px'],
        xl: ['40px', '56px'],
        xxl: ['43px', '52px'],
      },

      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.01em',
        normal: '0.04em',
        wide: '0.1em',
        wider: '0.18em',
        widest: '0.2em',
        extraWidest: '0.8em',
      },
    },
  },
  plugins: [],
};
export default config;
