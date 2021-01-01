import React from 'react';

import classes from './ReleaseDate.module.css';

const releaseDate = (props) => {
    return(
        <div className={classes.ReleaseDateWrapper}>
            {props.date}
        </div>
    );
}

export default releaseDate;