import classes from './App.module.scss'
import {AboutPage} from "../../pages/AboutPage/AboutPage";
import { Route, Routes, Link } from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage";

export const App = () => {
  return (
    <div className={classes.App}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Routes>
        <Route path={'/about'} element={<AboutPage/>} />
        <Route path={'/'} element={<MainPage/>} />
      </Routes>
    </div>
  );
};

