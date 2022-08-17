import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";


const Modal: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const el = useRef(document.createElement("div"));


  useEffect(() => {
    // Use this in case CRA throws an error about react-hooks/exhaustive-deps
    const current = el.current;
    const modalRoot = document.querySelector("#modal-root") as HTMLElement;

    // We assume `modalRoot` exists with '!'
    modalRoot!.appendChild(current);
    return () => void modalRoot!.removeChild(current);
  }, []);

  return createPortal(children, el.current);
};

export default Modal;