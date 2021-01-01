import React from 'react';

import classes from './Price.module.css';

const price = (props) => {
    return(
        <div className={classes.PriceWrapper}>
            {props.price}
        </div>
    );
}

export default price;