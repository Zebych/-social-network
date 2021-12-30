import React from "react";
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";


function Settings () {
    return (
        <div >
            Settings
        </div>
    )
}

export default compose(AuthRedirect)(Settings)