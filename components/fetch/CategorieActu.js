import axios from 'axios';

export const GetFetchCategorieActu = async () => {
    try {
      //const page = searchParams.pa
      const response = await axios.get(`${process.env.BASE_URL}/api/categorieActus`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const PostCategorieActu = async (data) => {
    try {
      //console.log(data)
     const response = await axios.post(`/api/categorieActus`, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const UpdateCategorieActu = async (data) => {
    try {
      //console.log(data)
     const response = await axios.patch(`/api/categorieActus`, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


