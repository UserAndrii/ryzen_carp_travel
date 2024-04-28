import React from 'react';

import { Slide } from '@/components/Gallery';

import menuContent from '../data/menu.json';
import galleryContent from '../data/gallery.json';

const Gallery: React.FC = () => {
  return (
    <section
      id={menuContent.list[3]}
      className="bg-bgSecond bg-cover bg-center bg-no-repeat bg-galleryMob md:bg-galleryTab lg:bg-galleryDesk"
    >
      <div className="wrapper">
        <h2 className="title-bold mb-6">
          <span className="title">{galleryContent.title.content}</span>{' '}
          {galleryContent.title.accent}
        </h2>

        <Slide />
      </div>
    </section>
  );
};

export default Gallery;
