import { RouteProps } from 'react-router-dom';
import MainPage from "../../../pages/MainPage/MainPage";
import {AboutPage} from "../../../pages/AboutPage/AboutPage";
import {NotFoundPage} from "../../../pages/NotFoundPage/NotFoundPage";

export enum AppRoutes {
  MAIN = 'main',
  CARD = 'card',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CARD]: '/card',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.CARD]: {
    path: RoutePath.card,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
