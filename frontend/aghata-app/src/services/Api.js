import axios from 'axios';
import VITE_API_KEY from 'dotenv';

export default () => axios.create({
  baseURL: VITE_API_KEY,
});
