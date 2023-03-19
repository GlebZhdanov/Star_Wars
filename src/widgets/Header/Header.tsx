import HeaderIcon from 'shared/accets/image/icon-header.svg';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../Sidebar/ui/Sidebar';
import classes from './Header.module.scss';

export const Header = () => {
  const navigate = useNavigate();

  const redirectMainPage = () => {
    navigate('/');
  };

  return (
    <div className={classes.Header}>
      <HeaderIcon className={classes.image} onClick={redirectMainPage} />
      <div className={classes.content_link}>
        <Sidebar />
      </div>
    </div>
  );
};
