import React from 'react';
import LinkList from './LinkList';

export interface ContactInfoProps {}

import contactContent from '../../data/contact.json';
import Link from 'next/link';

const ContactInfo: React.FC<ContactInfoProps> = () => {
  return (
    <>
      <h2 className="title-bold mb-9">
        <span className="title">{contactContent.title.content}</span>{' '}
        {contactContent.title.accent}
      </h2>

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

      <div className="flex justify-end gap-5 mb-6">
        <Link
          className="relative active-btn after:bottom-0"
          href="mailto:example@example.com"
        >
          {contactContent.email.address}
        </Link>
        <p className="text text-xs w-[81px]">{contactContent.email.text}</p>
      </div>

      <div className="flex justify-end gap-5 mb-3">
        <p className="text text-xs">{contactContent.social.text}</p>
        <LinkList />
      </div>
    </>
  );
};

export default ContactInfo;
