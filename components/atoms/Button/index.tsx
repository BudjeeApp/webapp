import React from 'react';

interface ButtonProps {
  /**
     * Is this the principal call to action on the page?
     */
  primary?: boolean;
  /**
     * What background color to use
     */
  backgroundColor?: string;
  /**
     * How large should the button be?
     */
  size?: 'small' | 'medium' | 'large';
  /**
     * Button contents
     */
  label: string;
  /**
     * Optional click handler
     */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
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
