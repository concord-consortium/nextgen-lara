import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

//
// Render Pages bar
//
class Pages extends Component {

  render() {

    return (
		<div className="pagesBar">
          { Object.keys(this.props.pages).map(function (page, index) {
            console.log('INFO Pages creating Link: ', this.props.pages[page]);
            var embeddables = this.props.pages[page].embeddables;
            return (
                <span key={"span-"+index} className="padding" >

                  <Link
                    to={{
                      pathname: "/pages/"+index,
                      state: { page: page, embeddables: embeddables }
                    }} 
                    key={index} >Page {index+1}</Link> 

                </span>
              );
          }, this)}
        </div>
	  );
  }
}

export default Pages;


