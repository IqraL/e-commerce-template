import React from "react";
import "./homePage.css";

const productOverviewImg = {
  border: "1px black solid",
  width: "100px",
  height: "100px",
};
const productOverviewDeatils = {
  border: " 1px black solid",
  width: "100px",
  height: "30px",
};

function ProductOverview(props) {
  let { img, name, price } = props;
  return (
    <div className="productOverviewWrapper">
      <div style={productOverviewImg}>{img}</div>
      <div style={productOverviewDeatils}>
        {name} £{price}
      </div>
    </div>
  );
}
export default ProductOverview;
