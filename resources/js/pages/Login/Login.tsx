import React, { useEffect, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthService, currentRoute } from "../../core";
import { AppLayout } from "../../shared/components/layout/AppLayout";
import { ButtonForm, GithubSignInButton, HeaderForm, InputForm } from "../../shared";


type ErrorsType = {
    email: Array<string> | undefined;
};

const Login = (): JSX.Element => {
    const [ email, setEmail ] = useState<string>( '' );
    const [ password, setPassword ] = useState<string>( '' );
    const [ errors, setErrors ] = useState<ErrorsType>();
    const [ isLoading, setIsLoading ] = useState<boolean>( false );
    const hasErrors = useRef( false );
    const history = useHistory();

    const login = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        setErrors( { email: [] } );
        hasErrors.current = false;
        setIsLoading( true );
        try {
            if ( email.trim() && password.trim() ) {
                await AuthService.login( {
                    email: email,
                    password: password,
                } );
            }
        } catch ( { errors, status } ) {
            hasErrors.current = true;
            if ( status === 422 ) {
                setErrors( errors );
            } else if ( status === 429 ) {
                setErrors( { email: [ 'Too many request! Try again Later' ] } );
            } else if ( status === 500 ) {
                setErrors( {
                    email: [ 'Impossible to reach the server! Try again later' ],
                } );
            }
        } finally {
            setIsLoading( false );
            if ( !hasErrors.current ) {
                history.push( currentRoute( 'home' ).path );
            }
        }
    };

    useEffect( () => {
        document.title = 'Laravel React SPA - Login';
    }, [] );

    return (
        <AppLayout>
            <HeaderForm
                title="Sign in to your account"
                subTitle="Create a new one"
                link={ currentRoute( 'register' ).path }
            />
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow dark:bg-neutral-700 sm:rounded-lg sm:px-10">
                    <form onSubmit={ login } className="space-y-6">
                        <InputForm
                            label="email"
                            name="email"
                            type="email"
                            value={ email }
                            placeholder="test@test.com"
                            handleValue={ setEmail }
                            error={
                                errors && errors.email
                                    ? errors.email[ 0 ]
                                    : undefined
                            }
                        />
                        <InputForm
                            label="password"
                            name="password"
                            type="password"
                            value={ password }
                            placeholder="password"
                            handleValue={ setPassword }
                        />
                        <div className="flex justify-end">
                            <div className="text-sm">
                                <Link
                                    to={ currentRoute( 'forgot-password' ).path }
                                    className="font-medium text-primary-600 hover:text-primary-500"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                        <ButtonForm isLoading={ isLoading } full>
                            <span>Login</span>
                        </ButtonForm>
                    </form>
                    { process.env.REACT_APP_GITHUB_REDIRECT && (
                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300 dark:border-neutral-600"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span
                                        className="px-2 text-gray-500 bg-white dark:text-neutral-400 dark:bg-neutral-700">
                                        Or continue with
                                    </span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <GithubSignInButton
                                    to={ process.env.REACT_APP_GITHUB_REDIRECT }
                                />
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </AppLayout>
    );
};

export default Login;
