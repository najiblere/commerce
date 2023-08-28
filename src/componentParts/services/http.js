import axios from 'axios';


export const customBaseUrl = 'https://nmszazzau.herokuapp.com';



export const httpGet = async (url, otherUrl) => {
  
    try {
      const res = await axios.get(
        url,
         {
              headers: {
                Authorization: `${localStorage.token}`,
              },
            }
          
      );
      return res.data;
    } catch (error) {
        console.log(error)
      return error?.response?.data;
    }
  };

  export const httpPost = async (url, postBody) => {

    try {
      const res = await axios.post(
        `${url}`,
        postBody,
        
         {
              headers: {
                Authorization: `${localStorage.token}`,
                'content-type': 'application/json',
              },
            }          
      );
      return res.data;
    } catch (error) {
      return error.response?.data;
    }
  };
  export const httpPut = async (url, postBody) => {

    try {
      const res = await axios.put(
        `${url}`,
        postBody,
        
         {
              headers: {
                Authorization: `${localStorage.token}`,
                'content-type': 'application/json',
              },
            }          
      );
      return res.data;
    } catch (error) {
      return error.response?.data;
    }
  };
  