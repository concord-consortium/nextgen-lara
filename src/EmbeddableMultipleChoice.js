import React, { Component } from 'react';

class EmbeddableMultipleChoice extends Component {

    render() {
        return (
            <div>

                <span dangerouslySetInnerHTML={{__html: this.props.prompt}}></span>

                <ul>

                { Object.keys(this.props.choices).map(function (index) {

                    var choice = this.props.choices[index];
                    var text = choice.choice;

                    return (
                      <div>
                          <input type="checkbox" />
                          <span>{text}</span>
                      </div>
                    );

                }, this)}

                </ul>

            </div>

        );
    }

}

export default EmbeddableMultipleChoice;

