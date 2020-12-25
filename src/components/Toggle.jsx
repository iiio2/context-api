import React from 'react';

const Toggle = ({ toggle }) => {
  return (
    <button onClick={toggle} className='btn btn-success mt-4'>
      Toggle
    </button>
  );
};

export default Toggle;
