import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom'

export default class CategoryIcon extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(
            <div>
                <Link to={'/info'}>
                  <div style={this.props.style} className="circle z-depth-2">
                      <h3 className='category-title'> {this.props.title} </h3>
                  </div>
                </Link>
            </div>
        )
    }

}
