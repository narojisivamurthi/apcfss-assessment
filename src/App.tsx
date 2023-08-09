import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { MainBody } from "./Components/style";
import PrimaryNavigation from "./Components/PrimaryNavigation/PrimaryNavigation";
import RouterComponent from "./Components/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainBody>
          <PrimaryNavigation />
          <RouterComponent />
        </MainBody>
      </BrowserRouter>
    </div>
  );
}

export default App;
