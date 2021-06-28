import { RouteType } from '..';

const ROUTES: Array<RouteType> = [
    {
        name: 'login',
        path: '/login',
    },
    {
        name: 'register',
        path: '/register',
    },
    {
        name: 'forgot-password',
        path: '/forgot-password',
    },
    {
        name: 'reset-password',
        path: '/reset-password',
    },
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'profile',
        path: '/profile',
    },
];


const allRoutes = (): Array<RouteType> => {
    return [
        {
            name: 'login',
            path: '/login',
        },
        {
            name: 'register',
            path: '/register',
        },
        {
            name: 'forgot-password',
            path: '/forgot-password',
        },
        {
            name: 'reset-password',
            path: '/reset-password',
        },
        {
            name: 'home',
            path: '/',
        },
        {
            name: 'profile',
            path: '/profile',
        },
    ];
};

const navBarRoutes = (): Array<RouteType> => {
    return [
        {
            name: 'Dashboard',
            path: '/',
        },
        {
            name: 'Profile',
            path: '/profile',
        },
    ];
};

const currentRoute = (name: string, params?: object): RouteType => {
    let route = ROUTES.filter((route) => route.name === name)[0];
    if (params) {
        for (const [key, value] of Object.entries(params)) {
            route = { ...route, path: route.path.replace(`:${key}`, value) };
        }
    }
    return route;
};

export { allRoutes, currentRoute, navBarRoutes };
