import React from 'react';
import { Link } from 'react-router-dom';

type HeaderFormProps = {
    title: string;
    subTitle?: string;
    link?: string;
};

const HeaderForm = ( { title, subTitle = '', link = '' }: HeaderFormProps ): JSX.Element => {
    return (
        <div className="mb-5 sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-3xl font-extrabold text-center capitalize text-neutral-900 dark:text-neutral-200">
                { title }
            </h2>
            { subTitle && (
                <p className="mt-2 text-sm text-center text-gray-600 capitalize dark:text-neutral-200 max-w">
                    Or
                    { link ? (
                        <Link
                            to={ link }
                            className="ml-1 font-medium text-primary-600 hover:text-primary-500"
                        >
                            { subTitle }
                        </Link>
                    ) : (
                        <span className="ml-1 font-medium text-primary-600 hover:text-primary-500">
                            { subTitle }
                        </span>
                    ) }
                </p>
            ) }
        </div>
    );
};

export { HeaderForm };
