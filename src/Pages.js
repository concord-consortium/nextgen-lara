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
            // console.log('INFO Pages creating Link: ', page);
            return (
                <span key={"span-"+index} className="padding" >

                  <Link
                    to={{
                      pathname: "/pages/"+index,
                      state: { page: page }
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


