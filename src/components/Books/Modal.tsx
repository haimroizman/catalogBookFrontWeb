import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface BackdropProps {
  onClose: () => void;
}

const Backdrop = ({ onClose }: BackdropProps) => {
  return (
    <div
      className={classes.backdrop}
      onClick={onClose}
    />
  );
};

interface ModalOverlayProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalOverlay = ({ children, onClose }: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
      {/* <button
        className="bg-black hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg mb-4 ml-0.5"
        onClick={onClose}
      >
        Close
      </button> */}
    </div>
  );
};

const portalElement = document.getElementById("overlays") as HTMLElement;

const Modal = ({ children, onClose }: ModalOverlayProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay children={children} onClose={onClose} />,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
