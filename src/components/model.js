// Modal.js
import React from "react";
import styles from "./desktop-1.module.css";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? styles.modalDisplayBlock : styles.modalDisplayNone;

    return (
        <div className={`${styles.modal} ${showHideClassName}`}>
            <section className={styles.modalMain}>
                {children}
                <button onClick={handleClose}>Close</button>
            </section>
        </div>
    );
};

export default Modal;
