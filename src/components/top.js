import React, { Component } from 'react';
export default class Top extends Component {
  render() {
    let name = this.props.name;
    return (<div className="topBg">
        {name}
    </div>)
  }
}