import React, {useState, useEffect, Component} from 'react';
import { Link } from '@reach/router';
import {API_URL_ALL} from '../../config';
import { Container } from 'reactstrap';



const FetchingCountries = () => {

// State ------------------------------ //
    const [stateFromAPI, setNewState] = useState([]);
// END of State ----------------------- //


//  GET ALL------------------------------ //

const getAll = async () => {
    try {
    const response = await fetch(API_URL_ALL);
    const jsonData = await response.json();
    setNewState(jsonData);
}
    catch(errorResponse){
    console.error(errorResponse.message)
    }
};
// End Get ALL ------------------------------ //   


// Execute GET all ------------------------------ //
useEffect(() => {
    getAll(); // this is the one ACTUALLY requesting the fetch
}, []);


console.log(stateFromAPI);
//  --------------------------------------------- //



return(
    <React.Fragment>
    <Container>
    <br/>
<div style={{backgroundColor: 'azure'}}>
    {
    stateFromAPI.map((country, index) => (
        <div key={index} style={{marginBottom: '7%'}}>
            <Link to={`/${country.name}`} onClick={() => this.context.router.transitionTo(`/${country.name}`)}>
                <p>{country.name}</p>
                <img style={{maxWidth: '100px', border: '1px solid grey'}} src={country.flag}/>
            </Link>     
        </div>
        ))
    }
</div>
</Container>
    </React.Fragment>
)}

export default FetchingCountries;