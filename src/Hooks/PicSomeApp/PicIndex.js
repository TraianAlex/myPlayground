import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CartContextProvider } from "./CartContext";
import App from "./App";
import "./PicIndex.css";

function PicIndex() {
  return (
    <CartContextProvider>
      <Router>
        <App />
      </Router>
    </CartContextProvider>
  );
}

export default PicIndex;

// https://scrimba.com/p/pBwJrS7/cZP2D4UD

// index.js

// index.html

/*
<html>
    <head>
        <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
        <link href="https://cdn.remixicon.com/releases/v2.1.0/remixicon.css" rel="stylesheet">
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div id="root"></div>
        <script src="index.pack.js"></script>
    </body>
</html>
*/
