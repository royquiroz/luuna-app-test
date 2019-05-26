import React from "react";
import Router from "./Router";
import Navbar from "./components/navbar/Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
