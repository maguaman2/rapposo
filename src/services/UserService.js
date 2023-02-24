const API = 'http://localhost:8081/api/v1/';
const model = 'users';

const getUserByEmail = async (email) => {
    const response = await fetch(`${API}/${model}/email/${email}`,{
        method: 'GET'
    });    
    const data = await response.json();
    return  data;
}


export {
    getUserByEmail,
    
}
