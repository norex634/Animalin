
import axios from 'axios';

export const GetFetchRace = async (searchParams) => {
    try {
      //const page = searchParams.pr
      const response = await axios.get(`${process.env.BASE_URL}/api/race-animal`);
      
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const GetAllRaceAnimal = async () => {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/api/races`);
      
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const PostRace = async (data) => {
    try{
      const response = await axios.post(`/api/races`, data);
    }catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const UpdateRace= async (data) => {
    try {
      //console.log(data)
     const response = await axios.patch(`/api/actus`, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


