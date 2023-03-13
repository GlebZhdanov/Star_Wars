import React from 'react';
import {SidebarItemsList} from "../model/items";
import {AppLink} from "../../../shared/ui/AppLink/AppLink";
import {RouteMatch} from "react-router-dom";


export const Sidebar = () => {

  const itemsList = SidebarItemsList.map((item) => (
      <AppLink key={item.path} to={item.path}>
        <span>
          {item.text}
        </span>
      </AppLink>
  ))

  return (
    <>
    {itemsList}
    </>
  );
};
