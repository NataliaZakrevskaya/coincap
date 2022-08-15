import React from 'react';
import { ModalPropsType } from './types';
import closeIcon from '../../../images/shape.svg';
import style from './Modal.module.scss';

const Modal = ( { closeModal, children }: ModalPropsType ) => {
  return (
    <div className={ style.modal } onClick={ closeModal }>
      <div className={ style.modalContent } onClick={ e => e.stopPropagation() }>
        <div className={ style.closeIcon } onClick={ closeModal }>
          <img src={ closeIcon } loading={'lazy'} alt="closeIcon"/>
        </div>
        { children }
      </div>
    </div>
  );
};

export default Modal;