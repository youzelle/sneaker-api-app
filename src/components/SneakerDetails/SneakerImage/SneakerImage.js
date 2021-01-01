import React from 'react';


import classes from './SneakerImage.module.css';

const sneakerImage = (props) => {
    return(
        <div className={classes.SneakerImageWrapper}>
            <img src={props.smallImageUrl} alt=" of the trainer"/>
        </div>
    );
}

export default sneakerImage;