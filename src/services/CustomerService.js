import { getHeadersAndToken } from "../auth/Headers";
const API = 'http://localhost:8081/api/v1';
const model = 'customers';

const listCustomer = async (email) => {
    const response = await fetch(`${API}/${model}`,{
        method: 'GET',
        headers: getHeadersAndToken()   
    });    
    return await response.json();    
}


export {
   
    listCustomer
    
}
