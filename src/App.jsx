import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <h1 className="text-center bg-cyan-600 text-xl font-extrabold text-white py-4 shadow-md">
  WELCOME TO YOUR TODO
</h1>
      <Navbar />
      <Home/>
    </div>
  );
}

export default App;
