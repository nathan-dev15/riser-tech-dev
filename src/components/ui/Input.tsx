import { InputHTMLAttributes, forwardRef, useId } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id: externalId, ...props }, ref) => {
    const generatedId = useId();
    const id = externalId || generatedId;
    const errorId = `${id}-error`;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {label}
            {props.required && (
              <span className="text-red-500 ml-1" aria-hidden="true">*</span>
            )}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          aria-invalid={error ? 'true' : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            'w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg',
            'focus:ring-2 focus:ring-amber-500 focus:border-transparent',
            'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100',
            'transition-all duration-200',
            error && 'border-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <p id={errorId} role="alert" className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
