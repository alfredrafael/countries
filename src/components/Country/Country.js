import React, {Fragment, useState, useEffect}from 'react';
import {useParams} from 'react-router-dom';
import { API_URL_NAME } from '../../config';




const Country = (props) => {


let {countryName} = useParams();

// State ------------------------------ //
const [stateCountry, setStateCountry] = useState([]);
// END of State ----------------------- //


//  GET ALL------------------------------ //

const getCountry = async () => {
    try {
    const response = await fetch(`API_URL_NAME${props.children}`);
    const jsonData = await response.json();
    console.log(jsonData);
    setStateCountry(jsonData);
}
    catch(errorResponse){
    console.error(errorResponse.message)
    }
};
// End Get ALL ------------------------------ //   


// Execute GET all ------------------------------ //
useEffect(() => {
    getCountry(); // this is the one ACTUALLY requesting the fetch
}, []);


console.log(stateCountry);
//  --------------------------------------------- //


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