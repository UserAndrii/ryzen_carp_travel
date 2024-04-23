import '../../styles/components/actionBtn.css';
import React from 'react';

const ActionBtn: React.FC = () => {
  return (
    <button className="relative font-bold w-full h-[53px] bg-white/10 hover:bg-white/20 focus:bg-white/20 transition overflow-hidden cursor-pointer">
      <span className="left"></span>
      <span className="front"></span>
      <span className="right"></span>
      <span className="behind"></span>
      JOIN NOW
    </button>
  );
};

export default ActionBtn;
