import React, {ComponentType} from "react";
import {Preloader} from "../components/common/Preloader/Preloader";


export function ReactSuspense(Component: ComponentType) {

    return (props: any)=> {
       return <React.Suspense fallback={<Preloader/>}>
            <Component {...props} />
        </React.Suspense>
    }
}
