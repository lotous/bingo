import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthService, currentRoute } from "../../core";
import { ButtonForm, HeaderForm, InputForm } from "../../shared";
import { AppLayout } from "../../shared";


type ErrorsType = {
    email: Array<string> | undefined;
    name: Array<string> | undefined;
    password: Array<string> | undefined;
};

const Register = (): JSX.Element => {
    const [ name, setName ] = useState<string>( '' );
    const [ email, setEmail ] = useState<string>( '' );
    const [ password, setPassword ] = useState<string>( '' );
    const [ passwordConfirmation, setPasswordConfirmation ] = useState<string>(
        ''
    );
    const [ errors, setErrors ] = useState<ErrorsType>();
    const [ isLoading, setIsLoading ] = useState<boolean>();
    const hasErrors = useRef( false );
    const history = useHistory();

    const register = async ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        setIsLoading( true );
        hasErrors.current = false;
        setErrors( { email: [], name: [], password: [] } );
        try {
            if ( email.trim() && password.trim() && name.trim() ) {
                await AuthService.registerUser( {
                    name: name,
                    email: email,
                    password: password,
                    password_confirmation: passwordConfirmation,
                } );
            }
        } catch ( { errors, status } ) {
            hasErrors.current = true;
            if ( status === 422 ) {
                setErrors( errors );
            } else if ( status === 429 ) {
                setErrors( {
                    email: [ 'Too many request! Try again Later' ],
                    name: [],
                    password: [],
                } );
            } else {
                setErrors( {
                    email: [ 'Impossible to reach the server! Try again later' ],
                    name: [],
                    password: [],
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
        document.title = 'Laravel React SPA - Register';
    }, [] );

    return (
        <AppLayout>
            <HeaderForm
                title="Create your account"
                subTitle="Log in with an existing account"
                link={ currentRoute( 'login' ).path }
            />
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="px-4 py-8 bg-white shadow dark:bg-neutral-700 sm:rounded-lg sm:px-10">
                    <form onSubmit={ register } className="space-y-6">
                        <InputForm
                            label="name"
                            name="name"
                            type="text"
                            value={ name }
                            placeholder="John Doe"
                            handleValue={ setName }
                            error={
                                errors && errors.name
                                    ? errors.name[ 0 ]
                                    : undefined
                            }
                        />
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
                            handleValue={ setPassword }
                            error={
                                errors && errors.password
                                    ? errors.password[ 0 ]
                                    : undefined
                            }
                        />
                        <InputForm
                            label="Password Confirmation"
                            name="password_confirmation"
                            type="password"
                            value={ passwordConfirmation }
                            handleValue={ setPasswordConfirmation }
                        />
                        <ButtonForm isLoading={ isLoading } full>
                            <span>Register</span>
                        </ButtonForm>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
};

export default Register;
