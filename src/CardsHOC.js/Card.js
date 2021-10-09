import { Container, Grid } from "@material-ui/core";
import React from "react";
import Menu from "./Menu";

const data = [
  {
    img: "https://bslthemes.site/tastyc/fullwidth/wp-content/uploads/2021/04/gallery-i-1-700x456.jpg",
    title: "Boiled cray fish",
    desc: "Lorem ipsum dolor lorem ipsum dolor lorem",
    price: "$4.5",
  },
  {
    img: "https://bslthemes.site/tastyc/fullwidth/wp-content/uploads/2021/04/gallery-i-4-700x456.jpg",
    title: "Paella sea food",
    desc: "Lorem ipsum dolor lorem ipsum dolor lorem",
    price: "$5.5",
  },
  {
    img: "https://bslthemes.site/tastyc/fullwidth/wp-content/uploads/2021/04/gallery-i-6-700x456.jpg",
    title: "Casserole",
    desc: "Lorem ipsum dolor lorem ipsum dolor lorem",
    price: "$4",
  },
];

const Card = () => {
  return (
    <div>
      <Container>
      <Grid container>
        {data.map((item) => (
          <Grid item md={4} xs={12} style={{ justifyContent:"center" , display:"flex" , alignItems:"center" }}>
            <Menu data={item} />
            
          </Grid>
        ))}
      </Grid>
      </Container>
    </div>
  );
};

export default Card;
