import React from 'react';
import { Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { AuthService, setNotification, UserState } from "../../../core";


type BannerEmailVerificationProps = {
    user: UserState;
};

const EmailVerification = ( { user }: BannerEmailVerificationProps ): JSX.Element  => {
    const dispatch = useDispatch();

    const sendEmailVerification = async () => {
        try {
            await AuthService.sendVerification( {} );
            dispatch(
                setNotification( {
                    message: 'Email Sent',
                    status: 'SUCCESS',
                    show: true,
                } )
            );
        } catch ( error ) {
            dispatch(
                setNotification( {
                    message: 'Something went wrong. Try again later',
                    status: 'FAIL',
                    show: true,
                } )
            );
        }
    };

    return (
        <Transition
            show={ !user.is_verified }
            enter="transition-opacity ease-in-out duration-500 sm:duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-1"
        >
            <div>
                <div className="fixed bottom-0 w-full bg-support-600">
                    <div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex items-center justify-around">
                            <div className="flex items-center flex-1 w-0">
                                <p className="ml-3 font-medium text-white truncate">
                                    <span>Your email is not verified</span>
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <button
                                    onClick={ sendEmailVerification }
                                    className="flex items-center justify-center px-4 py-2 text-sm font-medium bg-white border border-transparent rounded-md shadow-sm text-support-600 hover:bg-support-50 focus:outline-none"
                                >
                                    Resend Email
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
};

export { EmailVerification };
