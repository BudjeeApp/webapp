import React from 'react';

interface Formprops {
  primary?: boolean;
  backgroundColor: string;
  type?: 'button' | 'text',
}

export default function Input({
  primary = false,
  type = 'button',
  backgroundColor,
}: Formprops) {
  const mode = primary ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-700';
  return (
    <input
      type={type}
      className={['rounded-lg', 'text-white', 'font-bold', 'py-2', 'px-4', mode].join(' ')}
      style={{ backgroundColor }}
    />
  );
}
