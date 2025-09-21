import { useEffect, useState } from "react";
import VIPDisplay from "./VIPDisplay";
function VIP() {
    const [people, setPeople]=useState([])
    useEffect(()=>{
        getPeople()
    })
 const getPeople = async () => {
  try {
    const url = `https://expressrichpepole.onrender.com`;
    const response = await fetch(url);
    const data = await response.json();
    setPeople(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
   <div className="container">
    <h2>VIP people</h2>
    <VIPDisplay people={people}></VIPDisplay>
   </div>
  );
}

export default VIP;
