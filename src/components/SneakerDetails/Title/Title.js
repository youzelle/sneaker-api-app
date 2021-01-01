import React from 'react';

import classes from './Title.module.css';

const title = (props) => {
    return(
        <div className={classes.TitleWrapper}>
            {props.title}
        </div>
    );
}

export default title;