import React from 'react';

import Header from '@/sections/Header';
import About from '@/sections/About';
import Services from '@/sections/Services';
import Career from '@/sections/Career';
import Gallery from '@/sections/Gallery';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Services />
        <Career />
        <Gallery />
      </main>
      <Contact />
    </>
  );
}
