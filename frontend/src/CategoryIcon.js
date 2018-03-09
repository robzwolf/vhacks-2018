import React from 'react';
import './Category.css';

export default class CategoryIcon extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(
            <div style={this.props.style} className='circle'>
                <p> {this.props.title} </p>
            </div>
        )
    }

}