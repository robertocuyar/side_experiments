import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Zge1vYa0weZcZ4TS9Sl2J7YVI5EnhusLTQoOXz3_ZSE'
    }
})