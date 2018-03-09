import React from 'react';
import CategoryIcon from './CategoryIcon';
import './Home.css'

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: ['Health', 'Paperwork', 'Education', 'Language', 'Employment']
        }
    }

    render() {
        const categories = this.state.categories;
        return(
            <div class="container">
                <div class="row">
                    <div className="col-sm"></div>
                    <div class="col-sm">
                           <CategoryIcon title= "Health"/>

                    </div>
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div class="col-sm">
                        <CategoryIcon title= "Education"/>
                    </div>
                    <div className="col-sm"></div>
                    <div class="col-sm">
                            <CategoryIcon title= "Health"/>         
                    </div>
                </div>
                <div className="row" id = "bottom-row">
                    <div class="col-sm">
                          <CategoryIcon style={{background: "#7DCE82", marginTop: "100px", marginLeft:"100px"}} title="Education"/>
                    </div>
                    <div className="col-sm"></div>
                    <div class="col-sm">
                      <CategoryIcon style={{background: "#7DCE82", marginTop: "100px", marginLeft:"10px", marginRight:"190px"}} title="Language"/>
                      
                    </div>
                </div>
                </div>
        )
    }
}