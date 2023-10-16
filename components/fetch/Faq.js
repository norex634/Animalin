import axios from 'axios';

export const GetFetchFaq = async () => {
    try {
      //const page = searchParams.pa
      const response = await axios.get(`${process.env.BASE_URL}/api/faqs`);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const PostFaq = async (data) => {
    try {
      //console.log(data)
     const response = await axios.post(`/api/faqs`, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const UpdateFaq = async (data) => {
    try {
      //console.log(data)
     const response = await axios.patch(`/api/faqs`, data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
