import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API_KEY || 'ac2e3ab638b0e375e2c104e35ae4798d'
  }
});
