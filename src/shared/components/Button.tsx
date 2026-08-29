import type { ButtonHTMLAttributes } from 'react';
import './button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, children, ...rest }: ButtonProps) {
  const classes = className ? `button ${className}` : 'button';

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
