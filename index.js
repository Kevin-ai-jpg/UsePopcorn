import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StateProvider from "./StateProvider";
import StarRating from "./starRating";

function Test() {
  const [movieRating, setMovieRating] = React.useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
