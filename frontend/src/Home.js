import React from 'react';
import CategoryIcon from './CategoryIcon';
import './Home.css'
import axios from 'axios';

const CategorySelector = (props) => {
    const cats = props.categories;
    return (
        <div className="card card-body" id = "category-form">
            <p id="additional-cats" className="card-title">Additional Categories</p>
            <div className='row'>
                {cats.map((cat, i) =>
                    <div className="col-sm" key={i}>
                    <div className="form-check">
                        <input onChange={() => props.onChange(cat, i - 1)} type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label id="additional-cats" className="form-check-label" for="exampleCheck1"> {cat} </label>
                    </div>
                </div>)}
            </div>
        </div>

    )

}

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            mainCategories: ['Health', 'Paperwork', 'Education', 'Language', 'Employment'],
            addCategories: ['Housing', 'Loans', 'Taxes']
        }
        this.updateCategories = this.updateCategories.bind(this);
        this.fetchReviews = this.fetchReviews.bind(this);
    }

    componentDidMount() {
        //TODO: populate state with db categories
        this.fetchReviews();
    }

    fetchReviews() {
        console.log('fetch reached')

        axios.get('http://localhost:5000/anisha')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    updateCategories(category, index) {
        var arr = this.state.mainCategories;
        arr[index] = category;
        this.setState({
            mainCategories: arr
        })
    }

    render() {
        const quote = "Give every human being every right that you claim for yourself";
        const author = "- Robert Ingersoll";
        const categories = this.state.mainCategories;
        return(
            <div id = "hp-container">
                <div id = "homepage-overlay">
                </div>
            <div class="container" id="grid">
                <div class="row" id='row-one'>
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <CategoryIcon title={categories[0]}/>
                    </div>
                    <div className="col-sm"></div>
                </div>


                <div className="row" id='row-two'>
                    <div className="col-sm">
                        <CategoryIcon title={categories[1]}/>
                    </div>
                    <div className="col-sm">
                        <div className="container" id='row-quote'>
                            <div className='row'>
                                <p id = "p-quote">{quote}</p>
                            </div>
                            <div className='row' id = "author-paragraph">
                                <p>{author}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <CategoryIcon title= {categories[2]}/>
                    </div>
                </div>


                <div className="row" id = "row-three">
                    <div className="col-sm">
                        <CategoryIcon style={{ marginRight: '-7vh'}}
                                      title={categories[3]}/>
                    </div>
                    <div className="col-sm"></div>
                    <div className="col-sm">
                        <CategoryIcon style={{marginLeft: '-7vh'}}
                                      title={categories[4]}/>
                    </div>
                </div>
                <div>
                    <CategorySelector onChange={this.updateCategories} categories={this.state.addCategories}/>
                </div>
            </div>
            </div>
        )
    }
}
