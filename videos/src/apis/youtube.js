import axios from 'axios';

const KEY = 'AIzaSyAjY2X-bjjqPhoTjEa_CIxuEDQ2u-1Qbzo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }

})