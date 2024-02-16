import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalInterface {
  open: boolean;
  className?: string;
  children: any
}

const Modal: React.FC<ModalInterface> = ({ children,open=true,className }) => {
    
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current
    if (open) {
      modal?.showModal()
    }
    return ()=> modal?.close()

  }, [open]);


  return createPortal(
    <dialog ref={dialog} className={className}>
      {children}
    </dialog>,
    document.getElementById('modal')!
  );
};

export default Modal;
