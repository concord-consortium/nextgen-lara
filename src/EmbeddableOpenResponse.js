import React, { Component } from 'react';

class EmbeddableOpenResponse extends Component {

    render() {
        var prompt = this.props.prompt;
        return (
          <div>
            <span dangerouslySetInnerHTML={{__html: prompt}}></span> <br />
            <textarea rows="10" cols="40">
            </textarea>
          </div>
        );
    }

}

export default EmbeddableOpenResponse;
