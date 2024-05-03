'use client';

import React, { useState } from 'react';

import { Logo, MenuBtn, Hero, MenuList } from '@/components/Header';
import { MobileMenu } from '@/components/MobileMenu';

export const Header: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(prev => !prev);

    if (!isOpenMenu && window.innerWidth <= 767) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'auto';
    }
  };

  return (
    <header className="relative bg-cover bg-center bg-no-repeat bg-heroMob md:bg-heroTab lg:bg-heroDesk">
      <MobileMenu onClick={toggleMenu} isOpenMenu={isOpenMenu} />

      <nav className="flex justify-between wrapper pt-9 pb-0 md:pt-6">
        <Logo />
        <MenuBtn title="MENU" onClick={toggleMenu} />
        <MenuList
          containerStyle="hidden md:flex gap-6"
          itemStyle="relative text-md tracking-wide py-2 active-btn after:bottom-[6px]"
        />
      </nav>

      <Hero />
    </header>
  );
};
