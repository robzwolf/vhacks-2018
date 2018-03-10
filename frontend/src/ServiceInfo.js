import React from 'react';
import './ServiceInfo.css'


export default class ServiceInfo extends React.Component {
	constructor() {
		super();
		this.state = {}
	}

	render() {
		return(
		    <div className ="service-description">
                <div className ='cover-image-container'>
                    <div id ='cover-image-overlay'>
                    </div>
                    <img className='cover-image' src = "https://i.imgur.com/osgAGGo.jpg" />
                </div>
                <div id = 'service-info'>
                    <h3> Name </h3>
                    <p className = 'field'>Address:</p>
                    <p className = 'field'>Phone Number:</p>
                    <p className = 'field'>Website:</p>
                    <p className = 'field'>Distance:</p>
                </div>
            </div>
        )
	}
}