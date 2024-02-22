import React from 'react';
import './button.css';

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
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {

    let sizeStyle;
    switch (size) {
        case 'small':
            sizeStyle = 'text-xs py-2 px-4';
            break;
        case 'medium':
            sizeStyle = 'text-sm py-3 px-5';
            break;
        case 'large':
        default:
            sizeStyle = 'text-base py-3 px-6';
            break;
    }

    const buttonStyling = 'font-sans font-semibold border-0 rounded-full cursor-pointer inline-block leading-normal';
    const mode = primary ? 'text-white bg-blue-500' : 'text-gray-700 bg-transparent shadow-inner';

  return (
    <button
      type="button"
          className={[buttonStyling, sizeStyle, mode, backgroundColor].join(' ')}
          {...props}>

          {label}

    </button>
  );
};
