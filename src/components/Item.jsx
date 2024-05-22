import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <img src={this.props.imgSrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
