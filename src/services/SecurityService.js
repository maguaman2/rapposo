const API = 'http://localhost:8081/api/v1/';
const model = 'auth';

const getUser = async (email) => {
    const response = await fetch(`${API}/${model}`,{
        method: 'GET'
    });    
    const data = await response.json();
    return  data;
}


const createCategory = async (category) => {
    const resp = await fetch(`${API}/${model}`, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(category)
    });
    return await resp.json();
}


export {
    listCategory,
    createCategory
    
}
