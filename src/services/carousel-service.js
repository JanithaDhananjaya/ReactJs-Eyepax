import axios from 'axios';

const getSlides = (size) => {
    return axios({
        method: 'GET',
        url: 'http://localhost:3600/api/carousel?slides=5'
    })
};


export default {
    getSlides
};