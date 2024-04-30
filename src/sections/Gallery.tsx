import React from 'react';

import { SlideList } from '@/components/Gallery';

import menuContent from '../data/menu.json';
import galleryContent from '../data/gallery.json';
import { Title } from '@/components/Other';

export const Gallery: React.FC = () => {
  return (
    <section
      id={menuContent.list[3]}
      className="bg-bgSecond bg-cover bg-center bg-no-repeat bg-galleryMob md:bg-galleryTab lg:bg-galleryDesk"
    >
      <div className="wrapper lg:px-0">
        <Title
          content={galleryContent.title.content}
          accent={galleryContent.title.accent}
          className="mb-6 md:mb-[72px] md:text-center lg:text-left lg:pl-5 lg:mb-6"
        />

        <SlideList />
      </div>
    </section>
  );
};
