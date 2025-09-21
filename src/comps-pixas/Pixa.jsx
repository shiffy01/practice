import { useState } from "react";
import PixaInput from "./PixaInput.jsx";
import DisplayPix from "./DisplayPix.jsx";
import { getPix } from "../services.js";

function Pixa() {
  const [pics, setPics] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPics = async (query) => {
    setLoading(true);
    const results = await getPix(query);
    setPics(results || []);
    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Picture Search</h2>
      <PixaInput getPics={getPics} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DisplayPix pics={pics} />
      )}
    </div>
  );
}

export default Pixa;
