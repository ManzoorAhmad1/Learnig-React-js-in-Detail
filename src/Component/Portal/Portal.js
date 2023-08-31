import React, { Fragment } from "react";
import classes from "./Portal.module.css";
import ReactDOM from "react-dom";
const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModelOverLay = (props) => {
    return (
        <div className={classes.model}>
            <div className={classes.content}>{props.children}</div>
            {/* {props.children} */}
        </div>
    );
};
let portalModel = document.getElementById("OverLays");
const Model = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, portalModel)}
            {ReactDOM.createPortal(
                <ModelOverLay>{props.children}</ModelOverLay>,
                portalModel
            )}

            {/* this way to create Card is correct but this is a createPortal subject//////// */}

            {/* <div>
                <BackDrop />
                <ModelOverLay>{props.children}</ModelOverLay>
            </div> */}
        </Fragment>
    );
};

export default Model;
