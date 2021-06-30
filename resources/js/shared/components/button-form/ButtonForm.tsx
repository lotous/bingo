import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonFormProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    full?: boolean;
    isLoading?: boolean;
}

const ButtonForm = ( {
    children,
    type = 'submit',
    isLoading = false,
    full = false,
    ...rest
}: ButtonFormProps ): JSX.Element  => {
    return (
        <button
            { ...rest }
            type={ type }
            className={ `flex items-center justify-center ${
                full && 'w-full'
            } px-4 py-2 space-x-4 text-sm font-bold text-white bg-primary-500 dark:bg-primary-600 border border-transparent rounded-md shadow-sm ${
                isLoading
                    ? 'bg-opacity-75 cursor-not-allowed'
                    : 'hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2'
            }` }
            disabled={ isLoading }
        >
            { children }
            { isLoading && (
                <svg
                    className="w-4 h-4 ml-3 -mr-1 text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                </svg>
            ) }
        </button>
    );
};

export { ButtonForm };
