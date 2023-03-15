import React, { FC } from 'react';
import classes from './ModalOverlay.module.scss';

type TModalOverlay = {
  children: React.ReactNode,
  popupClose?: () => void,
}

const ModalOverlay: FC<TModalOverlay> = ({ children, popupClose }) => {
  const handleClosePopup = () => {
    if (popupClose) {
      popupClose();
    }
  };

  return (
    <div onClick={handleClosePopup} className={classes.overlay}>
      {children}
    </div>
  );
};

export default ModalOverlay;
