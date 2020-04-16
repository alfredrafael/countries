import React, {useState, useEffect}from 'react';
import { API_URL_NAME } from '../../config';


const Country = ({countryName}) => {


// State ------------------------------ //
    const [stateCountryName, setCountryName] = useState([]);
// END of state ------------------------------ //


//  ------------------------------ //
const getCountry = async () => {
    try {
        const response = await fetch(API_URL_NAME`${countryName}`);
        const jsonData = await response.json();
        setCountryName(jsonData);
    }
    
    catch(errorResponse){
    console.error(errorResponse.message)
    }


}; 
//  ------------------------------ //


useEffect(()=>{
    getCountry();
    }, []
);

console.log(stateCountryName);



    return (
        <React.Fragment>
            Country Goes here
            <h1>{countryName}</h1>
        </React.Fragment>
    )
}

export default Country