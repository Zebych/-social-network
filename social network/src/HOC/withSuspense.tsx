import React from 'react';
import Preloader from "../component/commen/Preloader/Preloader";


export const WithSuspense=(Component: any)=> {

    return (props:any) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
};

