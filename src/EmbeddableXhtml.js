import React, { Component } from 'react';

class EmbeddableXhtml extends Component {

    render() {
        return (
          <div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
        );
    }

}

export default EmbeddableXhtml;

