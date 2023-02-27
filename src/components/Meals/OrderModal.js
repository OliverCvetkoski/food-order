import "./OrderModal.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";


const Backdrop = props => {
    return <div className="backdrop" onClick={props.onClose}></div>
};

const ModalOverlay = props => {
    return <div className="orderModal">
        <div className="content">{props.children}</div>
    </div>
};

const portalElement = document.getElementById("overlays");

const OrderModal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay >{props.children}</ModalOverlay>, portalElement)}

    </Fragment>

};

export default OrderModal;