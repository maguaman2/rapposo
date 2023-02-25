const API = 'http://localhost:8081/api/v1';
const model = 'auth';

const getUser = async (email) => {
    const response = await fetch(`${API}/${model}`,{
        method: 'GET'
    });    
    const data = await response.json();
    return  data;
}


const login = async (credentials) => {
    const resp = await fetch(`${API}/${model}/authenticate`, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    return await resp.json();
}


export {
    getUser,
    login
    
    
}
