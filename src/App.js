import "./styles.css";
import React from "react";
import { useState } from "react";

const musicDB = {
  thrashMetal: [
    { album: "Dystopia", rating: "5/5" },
    { album: "Ride the lightning", rating: "4/5" },
    { album: "Rest In Peace", rating: "4/5" }
  ],
  blackMetal: [
    { album: "None", rating: "5/5" },
    { album: "Chimera", rating: "3/5" },
    { album: "Northern Chaos Gods", rating: "4/5" }
  ],
  deathMetal: [
    { album: "Left Hand Path", rating: "4/5" },
    { album: " Seven Churches", rating: "4.5/5" },
    { album: "Symbolic", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("thrashMetal");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Metal Mania</h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite metal albums. Select a genre to get started{" "}
      </p>
      <div>
        {Object.keys(musicDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {musicDB[selectedGenre].map((music) => (
            <li
              key={music.album}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {music.album} </div>
              <div style={{ fontSize: "smaller" }}> {music.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
