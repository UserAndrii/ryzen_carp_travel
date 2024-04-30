import React from 'react';
import Link from 'next/link';

import { LinkList } from './LinkList';

import { contactData } from '@/data';

export const ContactInfo: React.FC = () => {
  return (
    <div className="mb-3 md:flex md:ml-[34px] md:gap-[90px] md:mb-16 lg:flex-col lg:gap-[124px] lg:mb-0 lg:ml-[83px]">
      <div className="mb-6 md:m-0">
        <div className="flex justify-end gap-5 mb-6 lg:mb-16">
          <div className="flex flex-col">
            <Link
              className="contact"
              href={`tel:${contactData.phone.phone1.replace(/[() ]/g, '')}`}
            >
              {contactData.phone.phone1}
            </Link>
            <Link
              className="contact"
              href={`tel:${contactData.phone.phone2.replace(/[() ]/g, '')}`}
            >
              {contactData.phone.phone2}
            </Link>
          </div>
          <p className="text text-xs w-[81px]">{contactData.phone.text}</p>
        </div>

        <div className="flex justify-end gap-5">
          <Link className="contact" href="mailto:example@example.com">
            {contactData.email.address}
          </Link>
          <p className="text text-xs w-[81px]">{contactData.email.text}</p>
        </div>
      </div>

      <div className="flex justify-end gap-5 mb-3 md:m-0 lg:flex-row-reverse lg:justify-normal">
        <p className="text text-xs lg:w-[81px]">{contactData.social.text}</p>

        <LinkList />
      </div>
    </div>
  );
};
