import React from 'react';

export interface SubmitBtnProps {}

const SubmitBtn: React.FC<SubmitBtnProps> = () => {
  return (
    <button type="submit" className="block font-medium text-3xl ml-auto">
      SEND
    </button>
  );
};

export default SubmitBtn;
