import React, { Component } from 'react';

class EmbeddableMultipleChoice extends Component {

    render() {
        return (
            <div>

                <span>{this.props.prompt}</span>

                <ul>

                { Object.keys(this.props.choices).map(function (index) {

                    var choice = this.props.choices[index];
                    var text = choice.choice;

                    return (
                      <li>
                          <input type="checkbox" />
                          <span>{text}</span>
                      </li>
                    );

                }, this)}

                </ul>

            </div>

        );
    }

}

export default EmbeddableMultipleChoice;

