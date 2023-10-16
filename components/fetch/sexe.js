
import axios from 'axios';

export const GetFetchSexe = async (searchParams) => {
    try {
      //const page = searchParams.pr
      const response = await axios.get(`${process.env.BASE_URL}/api/sexes`);
      
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };



