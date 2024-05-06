import React from 'react';
import { createPortal } from 'react-dom';

const ModalContainer = (props) => {
  const { children } = props;

  // createPortal을 사용하여 modal을 생성
  return createPortal(<>{children}</>, document.getElementById('modal'));
}

export default ModalContainer;