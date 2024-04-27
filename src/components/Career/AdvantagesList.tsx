import React from 'react';

export interface AdvantagesListProps {
  advantages: { id: number; subheading: string; description: string }[];
}

const AdvantagesList: React.FC<AdvantagesListProps> = ({ advantages }) => {
  return (
    <ul className="flex flex-col gap-4 text-right w-[181px]">
      {advantages?.map(({ id, subheading, description }) => (
        <li key={id}>
          <h4 className="text-accent mb-2">{subheading}</h4>
          <p className="text text-xs">{description}</p>
        </li>
      ))}
    </ul>
  );
};

export default AdvantagesList;
