import axios from 'axios';

export const GetFetchAnimal = async (searchParams) => {
    try {
      //const page = searchParams.pa
      const response = await axios.get(`${process.env.BASE_URL}/api/animals`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const PostAnimal = async (data) => {
    try {
      console.log(data)
      const response = await axios.post(`/api/animals`,data);
      
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const GetAnimal = async (idAnimal) => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/api/animal/${idAnimal}`);
      //console.log("idanimal",idAnimal)
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  //patch animal
  export const UpdateAnimal = async (data) => {
    try {
      const response = await axios.patch(`/api/animals`,data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };




  