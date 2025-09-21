import React from "react";
import "./people.css";

export default function VIPDisplay({ people }) {
  return (
    <div className="people-grid">
      {people.map((person, index) => (
        <div key={index} className="person-box">
          <img src={person.image} alt={person.name} />
          <h3>{person.name}</h3>
          <p><strong>Birth Year:</strong> {person.birth_year}</p>
          <p><strong>Company:</strong> {person.source}</p>
          <p><strong>Worth:</strong> {person.worth}</p>

        </div>
      ))}
    </div>
  );
}
