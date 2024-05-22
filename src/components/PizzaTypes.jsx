import React, { Component } from "react";
import Item from "./Item";
import "./caro.css";

export default class PizzaTypes extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-4">PIZZA TYPES</h1>
        <div className="row">
          <Item
            imgSrc="https://i.pinimg.com/564x/de/db/cc/dedbccd9fb741314a1155884108ac4e9.jpg"
            title="Pepperoni Pizza"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <Item
            imgSrc="https://i.pinimg.com/564x/d1/25/17/d12517f97057d41cf07603971fde66a3.jpg"
            title="Family Pizza"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <Item
            imgSrc="https://i.pinimg.com/564x/7a/32/07/7a32072b3b9f55082b95e8b83f974b99.jpg"
            title="All Seasoned Pizza"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
          <Item
            imgSrc="https://i.pinimg.com/564x/b9/17/27/b91727407f7cb240b9270633b517245a.jpg"
            title="Vegetable Pizza"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
      </div>
    );
  }
}
