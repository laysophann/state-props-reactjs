import React, { Component } from "react";
import Button from "./components/Button";
import Welcome from "./components/Welcome";
import Children from "./components/Children";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 2,
      data: [
        { name: "apple", isSelect: false },
        { name: "banana", isSelect: false },
        { name: "orange", isSelect: true },
      ],
    }
    this.onUpdateCount = this.onUpdateCount.bind(this);
  }

  onUpdateCount() {
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  onSelect(index) {
    let newData = [...this.state.data];
    newData[index].isSelect =! newData[index].isSelect
    this.setState({
      data: newData
    }, () => {
      console.log(this.state.data);
    })
  }

  render() {
    return (
      <div>
        <Button count={this.state.count} onUpdateCount={this.onUpdateCount} />
        <Welcome name="jack" />
        <Children> This is children </Children>
        <ul>
          {this.state.data.map((fruit, index) => (
            <li
              onClick={() => this.onSelect(index)}
              key={index}
              className={fruit.isSelect ? "red" : ""}
            >
              {fruit.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default App;
