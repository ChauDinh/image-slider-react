import React from "react";

import "./App.css";
import ImageGaleries from "./components/ImageGaleries/ImageGaleries";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageGaleries />
      <Footer />
    </div>
  );
}

export default App;
