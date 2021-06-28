import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import {AuthService} from "../../core";
import {AppLayout, ButtonForm, HeaderForm, InputForm} from "../../shared";

type ErrorsType = {
    email: Array<string> | undefined;
};

const ForgotPassword = () => {
    const [errors, setErrors] = useState<ErrorsType>();
    const [email, setEmail] = useState<string>('');
    const [success, setSuccess] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const sendEmailReset = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (email.trim()) {
                await AuthService.forgotPassword({ email: email });
                setSuccess(true);
            }
        } catch ({ errors, status }) {
            if (status === 422) {
                setErrors(errors);
            } else if (status === 429) {
                setErrors({ email: ['Too many request! Try again Later'] });
            } else {
                setErrors({
                    email: ['Impossible to reach the server! Try again later'],
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        document.title = 'Laravel React SPA - Forgot Password';
    }, []);

    return (
        <AppLayout>
            <HeaderForm title="Reset Password Link" />
            {!success && (
                <form
                    onSubmit={sendEmailReset}
                    className="flex flex-col justify-center w-full px-4 mx-auto space-y-5 xl:w-1/3 md:w-1/2"
                >
                    <InputForm
                        label="email"
                        name="email"
                        type="email"
                        value={email}
                        placeholder="yourmail@test.com"
                        handleValue={setEmail}
                        error={
                            errors && errors.email ? errors.email[0] : undefined
                        }
                    />
                    <ButtonForm isLoading={isLoading} full>
                        <span>Send Reset Link</span>
                    </ButtonForm>
                </form>
            )}
            <Transition
                show={success}
                leave="transition ease-out duration-75 delay-1000"
                enterTo="opacity-0"
                enterFrom="opacity-1"
            >
                <div className="flex flex-col items-center justify-center space-y-4 ">
                    <svg
                        className="w-24 h-24 text-green-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span className="text-2xl font-bold">Email Sent!</span>
                </div>
            </Transition>
        </AppLayout>
    );
};

export default ForgotPassword;
