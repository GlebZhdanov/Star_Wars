import {RoutePath} from "../../../shared/config/routeConfig/routeConfig";

export interface SidebarItemsType {
  path: string;
  text: string;
}

export const SidebarItemsList: SidebarItemsType[] = [
  {
    path: RoutePath.main,
    text: 'Home',
  },
  {
    path: RoutePath.card,
    text: 'Characters',
  },
];
