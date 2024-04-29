import React from 'react';

import aboutContent from '../data/about.json';
import menuContent from '../data/menu.json';
import { Title } from '@/components/Other';

const About: React.FC = () => {
  return (
    <section
      id={menuContent.list[0]}
      className="bg-cover bg-center bg-no-repeat bg-aboutMob md:bg-aboutTab lg:bg-aboutDesk"
    >
      <div className="wrapper">
        <div className="relative md:flex md:justify-between md:mb-16">
          <Title
            content={aboutContent.title.content}
            accent={aboutContent.title.accent}
            className="mb-2 md:mb-0"
          />

          <div className="w-[180px] mb-10 md:w-[220px] md:pt-3 md:mb-0">
            <p className="text mb-5 md:mb-4">
              <span className="text-accent">
                {aboutContent.description.accent}
              </span>{' '}
              {aboutContent.description.mission}
            </p>

            <p className="text">
              <span className="text-accent">{aboutContent.believe.accent}</span>{' '}
              {aboutContent.believe.philosophy}
            </p>
          </div>

          <div className="w-[180px] ml-auto mb-10 md:absolute md:bottom-0 md:left-0 md:mb-0 md:w-[221px]">
            <p className="text-accent uppercase">
              {aboutContent.audience.target}
            </p>
            <p className="text-accent text-right uppercase">
              {' '}
              {aboutContent.audience.to}
            </p>
            <p className="text tracking-tighter md:tracking-[0.02em]">
              {aboutContent.audience.offer}
            </p>
          </div>
        </div>

        <p className="text md:pl-[241px]">
          <span className="text-accent">{aboutContent.methods.accent}</span>{' '}
          {aboutContent.methods.approach}
        </p>
      </div>
    </section>
  );
};

export default About;
