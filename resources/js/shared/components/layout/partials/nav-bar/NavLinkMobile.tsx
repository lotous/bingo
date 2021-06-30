import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { NavLinkProps } from 'react-router-dom';

type NavLinkMobileProps = React.PropsWithoutRef<NavLinkProps> &
    React.RefAttributes<HTMLAnchorElement> & {
    children: ReactNode;
};

const NavLinkMobile = ( { children, ...rest }: NavLinkMobileProps ): JSX.Element => {
    return (
        <NavLink
            { ...rest }
            activeClassName="text-primary-700 border-primary-500 bg-primary-50 dark:bg-primary-300"
            className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
        >
            { children }
        </NavLink>
    );
};

export default NavLinkMobile;
