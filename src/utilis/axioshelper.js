import axios from 'axios'

const URL = "http://localhost:8000/api/v1/users"


export const adduser =async(data)=>{
    try {
        const response = await axios.post(URL,data)
        return response
    } catch (error) {
        console.log(error)
        
    }
    
    
}

export const signin = async(loginInfo)=>{
    try {
        const { data } = await axios.post(URL + "/login", loginInfo);
        return data;
      } catch (error) {
        console.log(error);
        return {
          status: "error",
          message: error.message,
        };
      }
}