import React from "react"
import { AppContext } from "./Context/AppContext";

function Dashboard(){
  const { role } = React.useContext(AppContext);

  return (
  <p>Dashboard {role}</p>
  );
}


export default Dashboard