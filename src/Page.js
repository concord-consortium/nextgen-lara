import React, { Component } from 'react';

class Page extends Component {
  render() {
    return <span> <a href="#">Page {this.props.number}</a> </span>;
  }
}

export default Page;


