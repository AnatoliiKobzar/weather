import { createPortal } from 'react-dom';
import { ModalWindow, Overlay } from './Modal.styled';

export const Modal = ({ children }) => {
  return createPortal(
    <Overlay>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>,
    document.querySelector('#modal')
  );
};
