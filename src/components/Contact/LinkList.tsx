import React from 'react';
import Link from 'next/link';

import { contactData } from '@/data';

export const LinkList: React.FC = () => {
  return (
    <ul className="w-[81px] lg:text-right">
      {contactData.social.networks.map(({ id, name, link }) => (
        <li key={id}>
          <Link
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className="contact"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
