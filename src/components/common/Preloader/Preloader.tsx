import React from 'react';

import loader from "../../../assets/images/Ajux_loader.gif";
import classes from "../Preloader/Preloader.module.css"


const Preloader = () => {
    return (
        <div className={classes.loaderPoz}>
            <div className={classes.loader}>
                <img className={classes.loader} src={loader}/>
            </div>
        </div>

    );
};

export default Preloader;

