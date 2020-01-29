import React, { Component } from "react";
import jokeImage from "./Joke.png";
import axios from "axios";

import "./index.css";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onclickbutton = this.onclickbutton.bind(this);
    this.onClickAnother = this.onClickAnother.bind(this);

    this.state = {
      jokelist: "",
      punchline: "",
      showMyComponent: false,
      showMyComponentTellMe: true,
      showMyComponentAnother: false
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5001/api").then(response => {
      console.log(response.data);

      if (response.data.length > 0) {
        const randomeNumber = Math.floor(Math.random() * response.data.length);
        this.setState({
          jokelist: response.data[randomeNumber].jokelist,
          punchline: response.data[randomeNumber].punchline
        });
        console.log(this.state.jokelist);
        console.log(this.state.punchline);
      }
    });
  }

  onclickbutton() {
    const joke = {
      punchline: this.state.punchline
    };

    this.setState({
      showMyComponent: true,
      showMyComponentTellMe: false,
      showMyComponentAnother: true
    });
    console.log(this.state.jokelist);
    console.log(joke);
    console.log("Hello");
  }

  onClickAnother() {
    axios.get("http://localhost:5001/api").then(response => {
      console.log(response.data);

      if (response.data.length > 0) {
        const randomeNumber = Math.floor(Math.random() * response.data.length);
        this.setState({
          jokelist: response.data[randomeNumber].jokelist,
          punchline: response.data[randomeNumber].punchline,
          showMyComponent: false,
          showMyComponentTellMe: true,
          showMyComponentAnother: false
        });
        console.log(this.state.jokelist);
        console.log(this.state.punchline);
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="text-center logo">
          <img src={jokeImage}></img>
        </div>

        <div id="joke">
          <div id="setup">{this.state.jokelist}</div>
          <div id="punchline">
            <div
              style={this.state.showMyComponent ? {} : { display: "none" }}
              id="zing"
            >
              {this.state.punchline}
            </div>
          </div>
        </div>
        <div
          id="buttons"
          style={this.state.showMyComponentTellMe ? {} : { display: "none" }}
        >
          <input
            id="tell-me"
            className="no-select"
            type="button"
            value="Tell Me!"
            onClick={this.onclickbutton}
          />
        </div>
        <div
          className="another1"
          style={this.state.showMyComponentAnother ? {} : { display: "none" }}
        >
          <div type="button" className="another" onClick={this.onClickAnother}>
            Another
          </div>
        </div>
      </div>
    );
  }
  e;
}
