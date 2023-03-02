import React from "react"
import { AppContext } from "./Context/AppContext";

function Customers(){
  const { role } = React.useContext(AppContext);

  return (
    <>

  <p>Lista de clientes {role}</p>
    </>
  );
}


export default Customers