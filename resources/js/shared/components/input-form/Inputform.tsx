import React, { InputHTMLAttributes } from 'react';

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    wrapperStyle?: string;
    handleValue: ( value: string ) => void;
}

const InputForm = ( {
    name,
    label,
    value,
    handleValue,
    type = 'text',
    placeholder,
    error,
    wrapperStyle = '',
    ...rest
}: InputFormProps ): JSX.Element => {
    return (
        <div className={ wrapperStyle }>
            <label
                htmlFor={ name }
                className="block text-sm font-medium capitalize text-neutral-700 dark:text-neutral-200"
            >
                { label }
            </label>
            <div className="mt-1">
                <input
                    type={ type }
                    name={ name }
                    id={ name }
                    className={ `appearance-none block w-full px-3 py-2 border rounded-md shadow-sm text-neutral-700 dark:text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-primary-500 sm:text-sm dark:bg-neutral-700 dark:focus:bg-neutral-600  ${
                        !error
                            ? 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                            : 'border-red-300 focus:ring-red-500 focus:border-red-500'
                    }` }
                    placeholder={ placeholder }
                    value={ value }
                    onChange={ ( e ) => handleValue( e.target.value ) }
                    { ...rest }
                />
                { error && <p className="text-sm text-red-500">{ error }</p> }
            </div>
        </div>
    );
};

export { InputForm };
