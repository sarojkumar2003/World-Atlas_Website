import axios from 'axios';

const PostApi = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
});


// HTTP GET METHOD
export const getAllCountries = () => {
    return PostApi.get('/all?fields=name,population,region,subregion,capital,flags');
}

// HTTP GET METHOD FOR THE INDIVIDUAL COUNTRY NAME
export const getCountriesIndData = (name) => {
    return PostApi.get(`/name/${name}?fields=name,population,region,subregion,capital,flags,borders,currencies,languages`);
}


export default PostApi;