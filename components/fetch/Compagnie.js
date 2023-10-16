import axios from 'axios';

export const fetchCompagnie = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/api/compagnies`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };