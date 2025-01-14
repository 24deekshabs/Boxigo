import axios from 'axios';

const API_URL = 'http://test.api.boxigo.in/sample-data/';
export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('API Response:', response.data); // Logging the API response
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error); // Logging any error
    throw error;
  }
};
