import { useState, useEffect, useCallback } from 'react';
import { API_URL_ALL, API_URL_NAME } from '../config'



const useCountryFetch = ({countryData}) => {

    const [countryState, setCountryState] = useState({});
    const [error, setError] = useState(false);


    const fetchCountryData = useCallback(async () => {
        try {
            const endpoint = `API_URL_NAME${countryData.name}`
            const response = await (await fetch(endpoint)).json();
            console.log(response);
        
        setCountryState({
            countryState: response,
            });
        }
        catch (error) {
            setError(true);
        }
    });

    useEffect(() => {
        fetchCountryData()
    }, [fetchCountryData, countryData]);
   
    return [countryData]
}

export default useCountryFetch