import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkProps } from 'react-router-dom';

type NavLinkDesktopProps = React.PropsWithoutRef<NavLinkProps> &
    React.RefAttributes<HTMLAnchorElement> & {
    children: ReactNode;
};

const NavLinkDesktop = ( { children, ...rest }: NavLinkDesktopProps ): JSX.Element => {
    return (
        <NavLink
            { ...rest }
            activeClassName="border-lightBlue-500 text-neutral-900 dark:text-neutral-400 hover:border-lightBlue-500"
            className="inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 border-transparent text-neutral-500 dark:text-neutral-400 hover:border-neutral-300 hover:text-neutral-700 dark:hover:text-neutral-200"
        >
            { children }
        </NavLink>
    );
};

export default NavLinkDesktop;
