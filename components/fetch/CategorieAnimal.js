
import axios from 'axios';

export const GetFetchCategorieAnimal = async (searchParams) => {
    try {
      //const page = searchParams.pca
      const response = await axios.get(`${process.env.BASE_URL}/api/categorie-animal`);
      
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const GetAllCategorieAnimal = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/api/categories`);
      
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const PostCategorieAnimal = async (data) => {
    try {
      //console.log(data)
     const response = await axios.post(`/api/categories`, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const UpdateCategorieAnimal = async (data) => {
    try {
      //console.log(data)
     const response = await axios.patch(`/api/categorie-animal`, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


