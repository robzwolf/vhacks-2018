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
            <h1>
                {categories.map((category, i) =>
                    <CategoryIcon title={categories[i]}/>
                )}
            </h1>
        )
    }
}