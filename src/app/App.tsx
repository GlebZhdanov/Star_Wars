import AppRouter from "./router/AppRouter";
import {Header} from "../widgets/Header/Header";

export const App = () => {
  return (
    <div className={'app'}>
      <Header />
      <AppRouter />
    </div>
  );
};

