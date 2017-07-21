import React, { Component }     from 'react';
import EmbeddableXhtml          from './EmbeddableXhtml';
import EmbeddableOpenResponse   from './EmbeddableOpenResponse';
import EmbeddableMultipleChoice from './EmbeddableMultipleChoice';

class Page extends Component {
  render() {
    var props = this.props.location.state;
    console.log("INFO Page", props);
    return (
        <div>
          <span>Page {parseInt(props.page, 10) + 1} Content</span>
          <ul>
          { Object.keys(props.embeddables).map(function (index) {
            var embeddable = props.embeddables[index];
            var type = embeddable.type;

            if(type == 'Embeddable::OpenResponse') {
                return (
                    <li className="left padding" key={index}>  
                      <EmbeddableOpenResponse prompt={embeddable.prompt} />
                    </li>
                );
            }

            return (
              <li className="left padding" key={index}>  
                <span className="padding">
                      {props.embeddables[index].prompt} 
                </span>
                <span className="padding">
                      {props.embeddables[index].type} 
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


