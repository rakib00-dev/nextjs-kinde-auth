'use client';
import React, { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>count is {count}</div>
      <button
        onClick={() => setCount((e) => e + 1)}
        className="p-4 text-white cursor-pointer bg-gray-600 "
      >
        Increment
      </button>
    </>
  );
};

export default Button;
