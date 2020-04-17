import React, {Fragment, useState, useEffect}from 'react';
import {useParams} from 'react-router-dom';
import { API_URL_NAME } from '../../config';




const Country = () => {

    let {countryName} = useParams();
    
    return(
        <React.Fragment>
            <p>Country: {countryName}</p>
            <p>Country: {countryName.region}</p>

        </React.Fragment>
)}

export default Country