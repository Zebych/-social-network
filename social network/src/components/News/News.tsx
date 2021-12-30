import React from "react";
import {compose} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";


function News () {
    return (
        <div >
            News
        </div>
    )
}

export default compose(AuthRedirect)(News)