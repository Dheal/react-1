import React, { Component } from "react";

class Tambahan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitung: 0,
    };
  }

  berhenti = () => {
    if (this.state.hitung > 0) {
      this.setState({
        hitung: this.state.hitung - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Counter with Class</h1>
        <p>{this.state.hitung}</p>
        <div className="styleButton">
          <button
            className="btn third"
            onClick={() => this.setState({ hitung: this.state.hitung + 1 })}>
            <b>+</b>
          </button>
          <button className="btn third" onClick={this.berhenti}>
            <b>-</b>
          </button>
        </div>
      </div>
    );
  }
}

export default Tambahan;
