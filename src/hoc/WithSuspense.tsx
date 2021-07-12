import React from 'react';
import Preloader from "../components/common/Preloader/Preloader";

const WithSuspense = (Component:any) => {
    return (props:any)=>{
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
};

export default WithSuspense;