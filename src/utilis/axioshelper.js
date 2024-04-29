import axios from 'axios'

const URL = "http://localhost:8000/api/v1/user"


export const adduser =async(data)=>{
    try {
        const response = await axios.post(URL,data)
        return response
    } catch (error) {
        console.log(error)
        
    }
    
    
}