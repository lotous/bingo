import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { currentRoute, getUser, UserState } from "../../../core";
import { PasswordChangeForm, ProfileInfoForm } from "../..";
import { AuthLayout } from "../layout/AuthLayout";


const UserProfile = (): JSX.Element => {
    const user: UserState = useSelector( getUser );

    useEffect( () => {
        document.title = 'Laravel React SPA - User profile';
    }, [] );

    return (
        <AuthLayout>
            { !user.is_github_account ? (
                <React.Fragment>
                    <ProfileInfoForm/>
                    <PasswordChangeForm/>
                </React.Fragment>
            ) : (
                <Redirect to={ currentRoute( 'home' ).path }/>
            ) }
        </AuthLayout>
    );
};


export { UserProfile };
