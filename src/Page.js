import React, { Component } from 'react';

class Page extends Component {
  render() {
    var props = this.props.location.state;
    console.log("INFO Page", props);
    return <span>Page {parseInt(props.page, 10) + 1} Content</span>;
  }
}

export default Page;


