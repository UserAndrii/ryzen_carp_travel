import React from 'react';

import { Hero, Logo, MenuBtn } from '@/components/Header';

const Header: React.FC = () => {
  return (
    <header className="w-full h-full bg-cover bg-center bg-no-repeat bg-heroMob md:bg-heroTab lg:bg-heroDesk">
      <nav className="container flex justify-between mx-auto px-5 pt-9 max-w-mob">
        <Logo />
        <MenuBtn />
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
