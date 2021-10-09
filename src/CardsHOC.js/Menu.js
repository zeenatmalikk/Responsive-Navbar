import { Card, CardActionArea } from "@material-ui/core";
import React from "react";

const Menu = (props) => {
  console.log("fyjdfj", props.data);

  return (
    <div>
      <Card style={{ width: "100%" }}>
        <CardActionArea>
          <img src={props.data.img} height="250px" width="100%" />
          {/* <div className='cont-dish'> */}
          <h1 className="dish-title">{props.data.title}</h1>
          <p className="dish-desc">{props.data.desc}</p>
          <hr className="border-b"></hr>
          <div className="price-cart">
            <p className="price-h">{props.data.price}</p>
            <i
              class="fas fa-shopping-cart"
              style={{ fontSize: "20px", color: "#9E2D0F" }}
            ></i>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Menu;
