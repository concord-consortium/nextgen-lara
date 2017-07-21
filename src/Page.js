import React, { Component } from 'react';

class Page extends Component {
  render() {
    var props = this.props.location.state;
    console.log("INFO Page", props);
    return (
        <div>
          <span>Page {parseInt(props.page, 10) + 1} Content</span>
          <ul>
          { Object.keys(props.embeddables).map(function (e, index) {
            return (
              <li className="left" key={index}>  
                <span className="padding">
                      {props.embeddables[e].prompt} 
                </span>
                <span className="padding">
                      {props.embeddables[e].type} 
                </span>
              </li>
            ); 
          }, this)}
          </ul>
        </div>
      );
  }
}

export default Page;


