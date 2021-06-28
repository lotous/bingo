import React, { useEffect, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { getAuthUser } from '../../../core';
import { currentRoute } from '../../../core';
import { Loading, useThunkDispatch} from "../..";

interface PublicRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}

const PublicRoute = ({ component: Component, ...rest }: PublicRouteProps) => {
    const dispatch = useThunkDispatch();
    const [isAuthenticate, setIsAuthenticate] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const auth = async () => {
            try {
                await dispatch(getAuthUser());
                setIsAuthenticate(true);
            } catch (error) {
                setIsAuthenticate(false);
            } finally {
                setIsLoading(false);
            }
        };
        auth();
    }, [dispatch]);

    return !isLoading ? (
        <Route
            {...rest}
            render={(props) =>
                !isAuthenticate ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={currentRoute('home').path} />
                )
            }
        />
    ) : (
        <Loading />
    );
};

export { PublicRoute };
