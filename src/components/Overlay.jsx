import React from 'react';

const Overlay = ({ onClick }) => {
  return (
    <div
      className="fixed inset-0 bg-black opacity-20 z-30"
      onClick={onClick}
    ></div>
  );
};

export default Overlay;
