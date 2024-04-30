import React from 'react';

import { About, Career, Contact, Gallery, Header, Services } from '@/sections';

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
