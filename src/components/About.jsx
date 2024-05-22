import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">ABOUT PIZZA</h1>

        <div className="row">
          <div className="col-md-6">
            <img
              src="https://th.bing.com/th/id/R.47e00e05f8d6528583202cd96e18992a?rik=h%2fdgUexj7W7KZg&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f20400000%2fPIZZA-pizza-20461160-1600-1200.jpg&ehk=Qw%2bjfQA1O8UbLkJhLixjt0h93BHTRzHfXScMqKg1h70%3d&risl=&pid=ImgRaw&r=0"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
