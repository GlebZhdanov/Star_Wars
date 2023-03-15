import NoFoundPageImage from 'shared/accets/image/404.svg';
import { useNavigate } from 'react-router-dom';
import classes from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const redirectMainPage = () => {
    navigate('/');
  };

  return (
    <div className={classes.NotFoundPage}>
      <h1 className={classes.title}>
        404
      </h1>
      <button
        type="button"
        className={classes.button}
        onClick={redirectMainPage}
      >
        Return
      </button>
      <NoFoundPageImage className={classes.image} />
    </div>
  );
};
