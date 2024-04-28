import React from 'react';
import Link from 'next/link';

import contactContent from '../../data/contact.json';

const LinkList: React.FC = () => {
  return (
    <ul className="w-[81px]">
      {contactContent.social.networks.map(({ id, name, link }) => (
        <li key={id}>
          <Link
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className="relative active-btn leading-6 after:bottom-0"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkList;
