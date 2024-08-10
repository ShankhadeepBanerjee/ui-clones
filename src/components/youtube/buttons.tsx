import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export const IconButton: React.FC<
  { children: ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => (
  <button
    className={twMerge(
      'p-2 transition-all duration-300  active:bg-slate-500 border border-transparent active:bg-white/20 hover:bg-white/10 rounded-full',
      className
    )}
    {...props}
  >
    {children}
  </button>
);

interface CategoryButtonProps {
  text: string;
  isActive?: boolean;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  text,
  isActive = false,
}) => (
  <button
    className={twMerge(
      'px-3 h-8 rounded-lg whitespace-nowrap text-sm',
      'transition-all duration-200 ease-in',
      isActive
        ? 'bg-white text-black'
        : 'bg-gray-600/40 hover:bg-gray-600/80 text-white'
    )}
  >
    {text}
  </button>
);
