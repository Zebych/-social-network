import React from "react";
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";


function Music () {
    return (
        <div >
            Music
        </div>
    )
}

export default compose(AuthRedirect)(Music)