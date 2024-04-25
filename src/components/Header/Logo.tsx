import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../public/icons/logo.png';

export interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Link
      href="/"
      className="flex flex-col text-logo tracking-wider font-karantina cursor-pointer"
    >
      <Image src={logo} alt="Carp Travel logo" aria-label="Carp Travel logo" />
      CarpTravel
    </Link>
  );
};

export default Logo;
