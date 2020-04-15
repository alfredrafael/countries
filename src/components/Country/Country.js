import React from 'react';


const Country = ({name, flag, region}) => {
return(
    <React.Fragment>
        Country Goes here
        <h1>{name}</h1>
        <img src={flag}/>
        <p>Region: {region} </p>
    </React.Fragment>
)}

export default Country