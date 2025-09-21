import React from "react";
import "./pix.css";

export default function DisplayPix({ pics }) {
  return (
    <div className="pix-grid">
      {pics.length > 0 ? (
        pics.map((pic) => (
          <div key={pic.id} className="pix-item">
            <img src={pic.webformatURL} alt={pic.tags} />
            <div className="pix-info">
              <p><strong>User:</strong> {pic.user}</p>
              <p><strong>Likes:</strong> {pic.likes}</p>
              <p><strong>Tags:</strong> {pic.tags}</p>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
