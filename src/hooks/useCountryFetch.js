import { useState, useEffect, useCallback } from 'react';
import { API_URL_ALL, API_URL_NAME } from '../config'



const useCountryFetch = (countryName) => {

    const [countryState, setCountryState] = useState({});
    const [error, setError] = useState(false);


    const fetchCountryName = useCallback(async () => {
        try {
            const endpoint = `API_URL_NAME/${countryName}`
            const response = await (await fetch(endpoint)).json();
            console.log(response);
        
        setCountryState({
            ...response
            });
        }
        catch (error) {
            SetError(true);
            console.log(error.message);
        }
    });
    
}

export default useCountryFetch