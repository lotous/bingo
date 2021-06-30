import React, { useEffect, useState } from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import { getAuthUser } from '../../../core';
import { currentRoute } from '../../../core';
import { Loading, useThunkDispatch } from "../..";

/**
 * Solucion
 * https://stackoverflow.com/questions/42309708/create-own-react-route-class-in-typescript
 */


export interface PublicRouteProps extends RouteProps {
}

const PublicRoute = ( { component: Component, ...rest }: PublicRouteProps ): JSX.Element => {
    const dispatch = useThunkDispatch();
    const [ isAuthenticate, setIsAuthenticate ] = useState<boolean>( false );
    const [ isLoading, setIsLoading ] = useState<boolean>( true );

    useEffect( () => {
        const auth = async () => {
            try {
                await dispatch( getAuthUser() );
                setIsAuthenticate( true );
            } catch ( error ) {
                setIsAuthenticate( false );
            } finally {
                setIsLoading( false );
            }
        };
        auth();
    }, [ dispatch ] );

    const renderFn = ( props: RouteComponentProps<{}> ) => {
        if ( !isAuthenticate ) {

            if ( !Component ) {
                return null;
            }
            return <Component { ...props } />
        }

        return <Redirect to={ currentRoute( 'home' ).path }/>;
    };

    return !isLoading ? (
        <Route
            { ...rest }
            render={ renderFn }
        />
    ) : (
        <Loading/>
    );
};

export { PublicRoute };
