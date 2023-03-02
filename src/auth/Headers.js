let cokieActual;
const getHeadersAndToken = ()=>{
    if (!!cokieActual)
    return {
        'Access-Control-Allow-Origin':'*',
        'authorization': cokieActual.replace('token=','Bearer '),
        'Content-type': 'application/json'
    }
}

const saveToken = (jwt)=>{

    document.cookie = `token=${jwt};max-age=${60 * 60 * 3}; path=/; samesite=strict`
    cokieActual = document.cookie; 

}



 export { getHeadersAndToken,
    saveToken
}
