import { useState } from "react";
import PixaInput from "./PixaInput.jsx";
import DisplayPix from "./DisplayPix.jsx";

function Pixa() {
    const [pics, setPics]=useState([])
 const getPics = async (query) => {
  try {
    const url = `https://pixabay.com/api/?key=52395410-7bac2aabc55e9acf9ad5e8961&q=${encodeURIComponent(query)}&image_type=photo&per_page=50`;
    const response = await fetch(url);
    const data = await response.json();
    console.log("Total hits:"+ data.totalHits);
    setPics(data.hits);
  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
   <div className="container">
    <h2>Picture Search</h2>
    <PixaInput getPics={getPics}></PixaInput>
    <DisplayPix pics={pics}></DisplayPix>
   </div>
  );
}

export default Pixa;
