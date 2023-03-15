import { useLocation } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { Header } from '../widgets/Header/Header';

export const App = () => {
  const location = useLocation();
  const renderHeader = (location.pathname === '/card' || location.pathname === '/');

  return (
    <div className="app">
      {
        renderHeader
      && <Header />
      }
      <AppRouter />
    </div>
  );
};
