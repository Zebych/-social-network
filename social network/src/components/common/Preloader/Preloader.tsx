import React from "react";
import Spinner from "../../../images/tail-spin.svg";

export const Preloader = () => {
    return (
        <img style={{position: 'absolute'}} alt={'Preloader'} src={Spinner} />
    )
}