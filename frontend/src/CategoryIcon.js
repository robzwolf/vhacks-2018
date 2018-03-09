import React from 'react';
import './Category.css';

export default class CategoryIcon extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(
            <div className='circle' style={this.props.style}>
                <p> {this.props.title} </p>
            </div>
        )
    }

}
