import classes from './Modal.module.css';

export default function Modal({ children, onClose }) {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}