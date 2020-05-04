import React, {Fragment, useState, useEffect}from 'react';
import {useParams} from 'react-router-dom';
import { API_URL_NAME } from '../../config';



const Country = (props) => {


let {countryName} = useParams(); // it seem grab whatever is at the end of the URL (slug)...



const getCountry = async () => {
    try {
    const response = await fetch(API_URL_NAME`${countryName}`);
    const countryData = await response.json();
    console.log(countryData);

}
    catch(errorResponse){
    console.error(errorResponse.message)
    }

}; // end of getCountry function

getCountry();


    return(
        <React.Fragment>

        { 
            countryName === "Afghanistan" 
            ? 
            <div><p>Country: {countryName}</p> 
                It's Afganistan! 
            </div>
            
            : 
            <div>
                <p>Country: {countryName}</p> 
                It's not Afganistan! 
            </div>
        }
        </React.Fragment>
)}

export default Country