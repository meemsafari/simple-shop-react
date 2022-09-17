import React from 'react'
import './Modal.css'
import Wrapper from "../../../hoc/Wrapper";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
    return(
        <Wrapper>
            <Backdrop show={props.show} click={props.modalClose} />
            <div className="modal" style={{
                transform: props.show ? 'translateY(0)' : 'translateY()',
                display: props.show ? 'block' : 'none'
            }}>
                {props.children}
            </div>
        </Wrapper>
    )
}

export default Modal
