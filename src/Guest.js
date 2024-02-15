import React, { Component } from "react";
import { MyContext } from "./Context";
export default class Guest extends Component {
  static contextType = MyContext;

  // componentDidMount = () => {
  //   console.log(this.context);
  // };

  render() {
     const {data, handleClick} = this.context;
    return (
      <div>
        <h3>Guest Component</h3>
        <h4>
          {/* this.context is provided by react */}
          Name: { data.name} Value: {data.value}
        </h4>
        <button onClick={handleClick}>Change Value</button>
      </div>
    );
  }
}
