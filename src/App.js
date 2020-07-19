import React from "react";
import ProductOverviewsContainer from "./ProductOverviewsContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="topWrapper">
        <Banner />
        <ProductOverviewsContainer />
      </div>
    </div>
  );
}

function Banner() {
  return <div className="headerWrapper"> Sample e-commerce site</div>;
}
export default App;
