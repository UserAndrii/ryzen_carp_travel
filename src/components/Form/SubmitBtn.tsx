import React from 'react';

export const SubmitBtn: React.FC = () => {
  return (
    <button
      type="submit"
      className="relative active-btn after:bottom-0 block font-medium text-3xl ml-auto lg:text-[32px]/[39px]"
    >
      SEND
    </button>
  );
};
