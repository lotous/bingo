import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import {getUser} from "../../../core";
import {EmailVerification, FlashMessage} from "../..";
import {Navbar} from "./partials/nav-bar/NavBar";


type AuthProps = {
    children: ReactNode;
};

const AuthLayout = ({ children }: AuthProps) => {
    const user = useSelector(getUser);

    return (
        <div className="h-full dark:bg-neutral-800 bg-neutral-100 dark:text-neutral-200 text-neutral-900">
            <Navbar />
            <main>
                <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">{children}</div>
                </div>
            </main>
            <EmailVerification user={user} />
            <FlashMessage />
        </div>
    );
};

export { AuthLayout };
