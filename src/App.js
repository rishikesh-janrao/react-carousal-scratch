import "./App.css";
import React from "react";
import Carousal from "./Carousal/Carousal";
import Slide from "./Carousal/Slide";
const slides = [
  "assets/images/1.jpg",
  "assets/images/2.jpg",
  "assets/images/3.jpg",
  "assets/images/4.jpg",
  "assets/images/5.jpg",
];

function App() {
  return (
    <main className="App">
      <Carousal autoSide={true}>
      {slides.map((src) => (
        <Slide src={src} key={src} />
      ))}
    </Carousal>
    </main>
  );
}

export default App;
