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
      <div className="mb-4 md:flex md:justify-between md:items-center md:mb-9">
        <h2 className="title-bold mb-6 md:mb-0">
          <span className="title">{servicesContent.title.content}</span>{' '}
          {servicesContent.title.accent}
        </h2>

        <p className="font-thin text-xxl text-right text-support md:text-xxl_tab">
          <span className="text-main">{`0${id}/`}</span>
          {servicesContent.amount}
        </p>
      </div>

      <div className="flex-auto flex flex-col gap-3 md:flex-row md:gap-4">
        <Image
          width={280}
          height={213}
          src={image}
          alt={call}
          className="object-cover w-auto h-auto md:w-[463px] md:h-[370px] lg:w-[607px] lg:h-[429px]"
        />

        <div className="flex flex-col justify-between flex-auto">
          <div className="mb-5 md:flex md:flex-col-reverse md:mb-0">
            <p className="label text-right mb-6 md:mb-0 md:text-left">{call}</p>

            {children}
          </div>

          <p className="block text md:text-[13px]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
