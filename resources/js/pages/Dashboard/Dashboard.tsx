import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUser, UserState } from "../../core";
import { AuthLayout } from "../../shared/components/layout/AuthLayout";


const Dashboard = () => {
    const user: UserState = useSelector(getUser);

    useEffect(() => {
        document.title = 'Laravel React SPA - Dashboard';
    }, []);

    return (
        <AuthLayout>
            <header>
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold leading-tight">
                        Hello {user.name}
                    </h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="px-4 py-8 sm:px-0">
                        <div className="border-4 border-dashed rounded-lg border-neutral-200 h-96"></div>
                    </div>
                </div>
            </main>
        </AuthLayout>
    );
};

export { Dashboard };
