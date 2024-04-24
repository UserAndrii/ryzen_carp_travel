import React from 'react';

import { Logo, MenuBtn, Hero } from '@/components/Header';

const Header: React.FC = () => {
  return (
    <header className="bg-cover bg-center bg-no-repeat bg-heroMob md:bg-heroTab lg:bg-heroDesk">
      <nav className="flex justify-between wrapper pt-9 pb-0">
        <Logo />
        <MenuBtn />
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
