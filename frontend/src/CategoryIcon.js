import React from 'react';
import './Category.css';

export default class CategoryIcon extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(
            <div className='circle'>
                <p> {this.props.title} </p>
            </div>
        )
    }

}