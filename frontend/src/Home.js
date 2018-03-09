import React from 'react';
import CategoryIcon from './CategoryIcon';

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
                        <CategoryIcon title="Health"/>
                    </div>
                    <div className="col-sm"></div>
                </div>
                <div className='row'>
                    <div class="col-sm">
                        <CategoryIcon title= "Education"/>
                    </div>
                    <div className="col-sm"></div>
                    <div class="col-sm">
                        <CategoryIcon title= "Health"/>
                    </div>
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
                </div>
        )
    }
}