import React from 'react';
import CategoryIcon from './CategoryIcon';
import './Home.css'

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
          //should be an API call
            categories: ['Health', 'Legal', 'Education', 'Language', 'Employment']
        }
    }

    render() {
        const categories = this.state.categories;
        return(
            <div class="container">
                <div class="row">
                    <div className="col-sm"></div>
                    <div class="col-sm">
                        <CategoryIcon style={{background:'#FF8A5B'}} title="Health"/>
                    </div>
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div class="col-sm">
                        <CategoryIcon style={{background:'#EA526F'}} title= "Education"/>
                    </div>
                    <div class="col-sm">
                        <CategoryIcon style={{background:'#25CED1'}} title= "Health"/>
                    </div>
                </div>
                <div className="row" id = "bottom-row">
                    <div class="col-sm" style={{marginLeft: '75px'}}>
                        <CategoryIcon style={{background:'#FC9E4F', marginTop: "100px", marginLeft: "100px"}} title= "Education"/>
                    </div>
                    <div className="col-sm"></div>
                    <div class="col-sm">
                        <CategoryIcon style={{background:'#7C0B2B', marginTop: "100px", marginLeft: "10px", marginRight: "190px"}} title= "Health" style={{right: '175px' }}/>
                    </div>
                </div>
                </div>
        )
    }
}
