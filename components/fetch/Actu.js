import axios from 'axios';

export const GetFetchActu = async () => {
    try {
      //const page = searchParams.pa
      const response = await axios.get(`${process.env.BASE_URL}/api/actus`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  export const PostActu = async (data) => {
    try {
      //console.log(data)
     const response = await axios.post(`/api/actus`, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const UpdateActu = async (data) => {
    try {
      //console.log(data)
     const response = await axios.patch(`/api/actus`, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };




  