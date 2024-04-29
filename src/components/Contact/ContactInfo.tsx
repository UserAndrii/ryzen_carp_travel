import React from 'react';
import LinkList from './LinkList';

export interface ContactInfoProps {}

import contactContent from '../../data/contact.json';
import Link from 'next/link';
import { Title } from '../Other';

const ContactInfo: React.FC<ContactInfoProps> = () => {
  return (
    <>
      <Title
        content={contactContent.title.content}
        accent={contactContent.title.accent}
        className="mb-9"
      />

      <div className="mb-3 md:flex md:ml-[34px] md:gap-[90px] md:mb-16">
        <div className="mb-6 md:m-0">
          <div className="flex justify-end gap-5 mb-6">
            <div>
              <Link
                className="block relative active-btn after:bottom-0"
                href={`tel:${contactContent.phone.phone1.replace(/[() ]/g, '')}`}
              >
                {contactContent.phone.phone1}
              </Link>
              <Link
                className="block relative active-btn after:bottom-0"
                href={`tel:${contactContent.phone.phone2.replace(/[() ]/g, '')}`}
              >
                {contactContent.phone.phone2}
              </Link>
            </div>
            <p className="text text-xs w-[81px]">{contactContent.phone.text}</p>
          </div>

          <div className="flex justify-end gap-5">
            <Link
              className="relative active-btn after:bottom-0"
              href="mailto:example@example.com"
            >
              {contactContent.email.address}
            </Link>
            <p className="text text-xs w-[81px]">{contactContent.email.text}</p>
          </div>
        </div>

        <div className="flex justify-end gap-5 mb-3 md:m-0">
          <p className="text text-xs">{contactContent.social.text}</p>
          <LinkList />
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
