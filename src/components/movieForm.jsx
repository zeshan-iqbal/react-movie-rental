import React, { Component } from "react";

class MovieForm extends Component {
  state = {};
  handlSave = () => {
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1>Movie {this.props.match.params.id}</h1>
        <button className="btn btn-primary btn-sm" onClick={this.handlSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
