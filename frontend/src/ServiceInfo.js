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
                    <p className = 'field'>Address: <strong>Via Frattina 48, 00187 Rome, Italy</strong></p>
                    <p className = 'field'>Phone Number: <strong>+39 06 679 0695</strong></p>
                    <p className = 'field'>Website: <strong><a href="https://www.yelp.com/biz/doctors-in-italy-roma?adjust_creative=XhLfyiDwZ4SS3zgOkHuhCA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_search=XhLfyjDwZ4SS3zgOkHuhCA:">Yelp Link</a></strong></p>
                    <p className = 'field'>Distance: <strong>2198 m</strong></p>
                </div>
            </div>
        )
	}
}