import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ClosePopupIcon from 'shared/accets/image/close_icon.svg';
import classes from './Modal.module.scss';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { KEYCODE_ESC } from '../../const/keycode';

type TModal = {
  children: React.ReactNode,
  popupClose: () => void,
}

const Modal = (props: TModal) => {
  const reactModal = document.getElementById('react-modals') as HTMLElement;
  const {
    children,
    popupClose,
  } = props;

  useEffect(() => {
    function closeByEscape(event: KeyboardEvent) {
      if (event.key === KEYCODE_ESC) {
        popupClose();
      }
    }
    document.addEventListener('keydown', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [popupClose]);

  return ReactDOM.createPortal(
    <ModalOverlay popupClose={popupClose}>
      <div id="popup" className={classes.popup}>
        <div className={classes.popup_container} onClick={(event) => event.stopPropagation()}>
          <ClosePopupIcon id="close-button" className={classes.close} onClick={popupClose} />
          {children}
        </div>
      </div>
    </ModalOverlay>,
    reactModal,
  );
};

export default Modal;
