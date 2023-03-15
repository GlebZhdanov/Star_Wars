import HeaderIcon from 'shared/accets/image/icon-header.svg';
import { Sidebar } from '../Sidebar/ui/Sidebar';
import classes from './Header.module.scss';

export const Header = () => (
  <div className={classes.Header}>
    <HeaderIcon />
    <div className={classes.content_link}>
      <Sidebar />
    </div>
  </div>
);
