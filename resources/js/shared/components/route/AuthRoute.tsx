import React, { useEffect, useState } from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { Loading } from "../..";
import { useThunkDispatch } from "../..";
import { currentRoute, getAuthUser } from "../../../core";


export interface AuthRouteProps extends RouteProps {}

const AuthRoute = ( {
    component: Component,
    ...rest
}: AuthRouteProps ): JSX.Element => {

    const dispatch = useThunkDispatch();
    const [ isAuthenticate, setIsAuthenticate ] = useState<boolean>( false );
    const [ isLoading, setIsLoading ] = useState<boolean>( true );

    useEffect( () => {
        const auth = async (): Promise<void> => {
            try {
                dispatch( getAuthUser() );
                setIsAuthenticate( true );
            } catch ( error ) {
                setIsAuthenticate( false );
            } finally {
                setIsLoading( false );
            }
        };
        auth();
    }, [ dispatch ] );

    return !isLoading ? (
        <Route
            { ...rest }
            render={ ( props: RouteComponentProps<{}> ): JSX.Element =>
                isAuthenticate ? ( Component ? (
                    <Component { ...props } />
                ) : ( <React.Fragment/> ) ) : (
                    <Redirect to={ currentRoute( 'login' ).path }/>
                )
            }
        />
    ) : (
        <Loading/>
    );
};

export { AuthRoute };
