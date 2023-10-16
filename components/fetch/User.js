import axios from 'axios';

export const GetFetchUser = async () => {
    try {
      //const page = searchParams.pa
      const response = await axios.get(`${process.env.BASE_URL}/api/users`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };




  