import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router-dom";
import React from "react";


export interface GuardRouteProps extends RouteProps {}

export class GuardRoute extends React.Component<GuardRouteProps> {

    redirectTo: string  = "home";

    public render() {
        // Extract RouteProps without component property to rest.
        const { component: Component, ...rest } = this.props;
        return <Route {...rest} render={this.renderFn} />
    }

    private renderFn = (renderProps: RouteComponentProps<any>) => {


        if (this.props.routeCondition) {
            const { component: Component } = this.props; // JSX accepts only upprcase.
            if (!Component) {
                return null;
            }
            return <Component {...renderProps} />
        }

        return <Redirect to={this.redirectTo} />;
    };
}
