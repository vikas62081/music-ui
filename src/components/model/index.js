import React from "react";
import './index.css'
const Modal = ({ open = false, onClose, children }) => {
    if (!open) {
        return null;
    }
    return (
        <>
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close" onClick={onClose} >&times;</span>
                    <div style={{ padding: 10 }}>
                        {children}
                    </div>

                </div>

            </div>
        </>
    )
}

export default Modal;