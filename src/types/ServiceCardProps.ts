import { ReactNode } from 'react';

export interface ServiceCardProps {
  children: ReactNode;
  card: {
    id: string;
    image: string;
    call: string;
    description: string;
  };
  activeSlide: number;
}
