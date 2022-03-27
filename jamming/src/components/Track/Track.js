import React, { Component } from "react";
import "./Track.css";

export default class Track extends Component {
    constructor(props){
        super(props)
        this.addTrack=this.addTrack.bind(this)
        this.removeTrack= this.removeTrack.bind(this)
    }
  rendeAction() {
    if (this.props.isRemoval) {
      return <button className="track-action" onClick={this.removeTrack}>-</button>;
    } else {
      return <button className="track-action" onClick={this.addTrack}>+</button>;
    }
  }
  addTrack(){
      this.props.onAdd(this.props.track)
  }
  removeTrack(){
    this.props.onRemove(this.props.track)
  }
  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3> {this.props.track.name} </h3>
          <p> {this.props.track.artist} | {this.props.track.album}</p>
        </div>
       {this.rendeAction()}
      </div>
    );
  }
}
