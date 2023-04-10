import React from 'react';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export function Button({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) {
  const mode = primary ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-500 hover:bg-gray-700';
  return (
    <button
      type="button"
      className={['rounded-lg', 'text-white', 'font-bold', 'py-2', 'px-4', mode, `text-${size}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}
