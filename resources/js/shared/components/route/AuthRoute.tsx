import React, { useEffect, useState } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { Loading } from "../..";
import { useThunkDispatch }  from "../..";
import { currentRoute, getAuthUser } from "../../../core";


interface GuardedRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}

const AuthRoute = ({ component: Component, ...rest }: GuardedRouteProps) => {
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
            render={(props: any) =>
                isAuthenticate ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={currentRoute('login').path} />
                )
            }
        />
    ) : (
        <Loading />
    );
};

export { AuthRoute };
