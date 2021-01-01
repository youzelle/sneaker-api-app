import React from 'react';

import classes from './SneakerDetails.module.css';
import Title from './Title/Title';
import ReleaseDate from './ReleaseDate/ReleaseDate';
import SneakerImage from './SneakerImage/SneakerImage';
import Price from './Price/Price';

const sneakerDetails = (props) => {
    return(
        <div className={classes.SneakerDetailsWrapper}>
                <Title title={props.info.title}/>  
                <ReleaseDate date={props.info.releaseDate}/>
                <SneakerImage image={props.info.media}/>
                <Price price={props.info.retailPrice}/>
        </div>
    );
}

export default sneakerDetails;