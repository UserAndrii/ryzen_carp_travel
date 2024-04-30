import React from 'react';

import { AdvantagesListProps } from '@/types';

export const AdvantagesList: React.FC<AdvantagesListProps> = ({
  advantages,
}) => {
  return (
    <div className="wrapper pt-0 md:p-0 lg:mb-[116px]">
      <ul className="flex flex-col gap-4 text-right w-[181px] md:w-[221px] md:gap-6 lg:w-full">
        {advantages?.map(({ id, subheading, description }) => (
          <li key={id} className="lg:flex lg:gap-6 lg:ml-10">
            <h4 className="text-accent mb-2 lg:mb-0 lg:w-[253px]">
              {subheading}
            </h4>
            <p className="text text-xs lg:text-xs/[24px] lg:w-[285px] lg:text-left">
              {description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
