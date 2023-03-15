import React, { ReactNode } from 'react';
import { NavLink, LinkProps } from 'react-router-dom';
import classes from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  children: ReactNode;
}

export const AppLink = (props: AppLinkProps) => {
  const { to, children } = props;
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? `${classes.link_active}` : `${classes.link_inactive}`)}
    >
      {children}
    </NavLink>
  );
};
