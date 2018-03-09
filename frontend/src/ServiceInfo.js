import React from 'react';
import './card.css'


export default class ServiceInfo extends React.Component {
	constructor() {
		super();
		this.state = {}
	}

	render() {
		return(
			<div>
				<body>
				<div class="card test">
				<div class="card-body">	 
				<h4 class="card-title"> </h4>		        
				<p class="card-text"></p>			
				</div>
				</div>

		 		<div class="card">
					<div class="card-body">				 
			    <h4 class="card-title">Info</h4>				        
		        <p class="card-text"></p>			
				</div>
				</div>
				</body>
	 			</div>

			)
	}
}