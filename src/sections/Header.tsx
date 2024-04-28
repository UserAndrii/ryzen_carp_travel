'use client';

import React, { useState } from 'react';

import { Logo, MenuBtn, Hero } from '@/components/Header';
import { MobileMenu } from '@/components/MobileMenu';

const Header: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(prev => !prev);

    if (!isOpenMenu && window.innerWidth <= 767) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'hidden auto';
    }
  };

  return (
    <header className="relative bg-cover bg-center bg-no-repeat bg-heroMob md:bg-heroTab lg:bg-heroDesk">
      <nav className="flex justify-between wrapper pt-9 pb-0">
        <Logo />
        <MenuBtn title="MENU" onClick={toggleMenu} />
      </nav>
      <Hero />

      <MobileMenu onClick={toggleMenu} isOpenMenu={isOpenMenu} />
    </header>
  );
};

export default Header;