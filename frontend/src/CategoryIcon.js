import React from 'react';
import './Category.css';

export default class CategoryIcon extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(
            <div className='container'>
              <div style={this.props.style} className="circle z-depth-2">
                  <h3> {this.props.title} </h3>
              </div>
            </div>
        )
    }

}
