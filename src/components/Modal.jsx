
function Modal({children, onClose}){
    return(
        <div className="modal-overlay">
            <div className="modal-box">
                <button className="modal-close-btn" onClick={onClose}>x</button>
                {children}
            </div>
        </div>
    );
}

export default Modal;