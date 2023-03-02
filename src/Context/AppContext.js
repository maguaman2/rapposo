import React, { useState } from "react";
const AppContext = React.createContext();

function AppProvider (props) {
    const [ role , setRole ]=useState('');


    return(
        <AppContext.Provider value = {{
            role, setRole,
        }} >
            {props.children}
        </AppContext.Provider>
    )
}

export{AppContext, AppProvider}
