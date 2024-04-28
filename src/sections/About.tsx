import React from 'react';

import aboutContent from '../data/about.json';
import menuContent from '../data/menu.json';

const About: React.FC = () => {
  return (
    <section
      id={menuContent.list[0]}
      className="bg-cover bg-center bg-no-repeat bg-aboutMob md:bg-aboutTab lg:bg-aboutDesk"
    >
      <div className="wrapper">
        <h2 className="title-bold mb-2">
          <span className="title">{aboutContent.title.content}</span>{' '}
          {aboutContent.title.accent}
        </h2>

        <div className="w-[180px] mb-10">
          <p className="text mb-5">
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

        <div className="w-[185px] ml-auto mb-10">
          <p className="text-accent uppercase">
            {aboutContent.audience.target}
          </p>
          <p className="text-accent text-right uppercase">
            {' '}
            {aboutContent.audience.to}
          </p>
          <p className="text">{aboutContent.audience.offer}</p>
        </div>

        <p className="text">
          <span className="text-accent">{aboutContent.methods.accent}</span>{' '}
          {aboutContent.methods.approach}
        </p>
      </div>
    </section>
  );
};

export default About;
