import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthService, getUser, setCurrentUser, setNotification, UserState } from "../../../core";
import { ButtonForm, InputForm } from "../..";


type ErrorsType = {
    email: Array<string> | undefined;
    name: Array<string> | undefined;
};

const ProfileInfoForm = (): JSX.Element => {
    const user: UserState = useSelector( getUser );
    const dispatch = useDispatch();
    const [ name, setName ] = useState<string>( user.name );
    const [ email, setEmail ] = useState<string>( user.email );
    const [ errors, setErrors ] = useState<ErrorsType>();
    const [ isLoading, setIsLoading ] = useState<boolean>( false );

    const updateProfile = async ( e: React.FormEvent<HTMLFormElement> ): Promise<void> => {
        setIsLoading( true );
        setErrors( { email: [], name: [] } );
        e.preventDefault();
        try {
            if ( user.name !== name || user.email !== email ) {
                const response = await AuthService.updateUser( {
                    name: name,
                    email: email,
                } );
                console.log( response );
                dispatch(
                    setNotification( {
                        message: 'Profile Saved',
                        status: 'SUCCESS',
                        show: true,
                    } )
                );
                dispatch(
                    setCurrentUser( {
                        email: email,
                        name: name,
                        is_verified: false,
                        is_github_account: false,
                    } )
                );
            }
        } catch ( error ) {
            if ( error.status === 422 ) {
                setErrors( error.errors );
            } else {
                dispatch(
                    setNotification( {
                        message: 'Something went wrong try again later',
                        status: 'FAIL',
                        show: true,
                    } )
                );
            }
        } finally {
            setIsLoading( false );
        }
    };

    return (
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <section>
                <form onSubmit={ updateProfile }>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div
                            className="px-4 py-6 bg-white dark:bg-neutral-700 sm:p-6 text-neutral-900 dark:text-neutral-200">
                            <div>
                                <h2 className="text-lg font-medium leading-6">
                                    Profile Info
                                </h2>
                            </div>
                            <div className="grid grid-cols-4 gap-6 mt-6">
                                <InputForm
                                    name="name"
                                    label="name"
                                    value={ name }
                                    handleValue={ setName }
                                    wrapperStyle="col-span-4 sm:col-span-2"
                                    error={
                                        errors && errors.name
                                            ? errors.name[ 0 ]
                                            : undefined
                                    }
                                />
                                <InputForm
                                    name="email"
                                    label="email"
                                    value={ email }
                                    handleValue={ setEmail }
                                    wrapperStyle="col-span-4 sm:col-span-2"
                                    error={
                                        errors && errors.email
                                            ? errors.email[ 0 ]
                                            : undefined
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex justify-end px-4 py-3 bg-neutral-50 dark:bg-neutral-600 sm:px-6">
                            <ButtonForm isLoading={ isLoading }>Save</ButtonForm>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export { ProfileInfoForm };
