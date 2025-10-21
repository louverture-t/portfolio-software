import * as React from 'react';

// Button variants configuration
const buttonVariants = {
  default: 'bg-primary text-white hover:bg-blue-600',
  ghost: 'bg-transparent hover:bg-slate-200 dark:hover:bg-slate-700',
  outline: 'border border-slate-300 dark:border-slate-600 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800'
};

// Button sizes configuration
const buttonSizes = {
  default: 'px-4 py-2',
  sm: 'px-3 py-1.5 text-sm',
  lg: 'px-6 py-3 text-lg',
  icon: 'p-2'
};

export function Button({
  children,
  variant = 'default',
  size = 'default',
  className = '',
  ...props
}) {
  const variantClasses = buttonVariants[variant] || buttonVariants.default;
  const sizeClasses = buttonSizes[size] || buttonSizes.default;

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
