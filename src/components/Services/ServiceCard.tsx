import Image from 'next/image';
import React, { ReactNode } from 'react';

import servicesContent from '../../data/services.json';

interface IServiceCardProps {
  children: ReactNode;
  card: {
    id: string;
    image: string;
    call: string;
    description: string;
  };
}

const ServiceCard: React.FC<IServiceCardProps> = ({
  children,
  card: { id, image, call, description },
}) => {
  return (
    <div className="wrapper flex flex-col h-full">
      <div className="mb-4">
        <h2 className="title-bold mb-6">
          <span className="title">{servicesContent.title.content}</span>{' '}
          {servicesContent.title.accent}
        </h2>

        <p className="font-thin text-xxl text-right text-support">
          <span className="text-main">{`0${id}/`}</span>
          {servicesContent.amount}
        </p>
      </div>

      <Image
        width={280}
        height={213}
        src={image}
        alt={call}
        className="md:w-[463px] md:h-[370px] lg:w-[607px] lg:h-[429px] mb-3"
      />

      <p className="label text-right mb-6">{call}</p>

      {children}

      <p className="text">{description}</p>
    </div>
  );
};

export default ServiceCard;
