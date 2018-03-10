import React from 'react';
import CategoryIcon from './CategoryIcon';
import './Home.css'

const CategorySelector = (props) => {
    const cats = props.categories;
    return (
        <div className="card card-body" id = "category-form">
            <h4 className="card-title">Additional Categories</h4>
            <div className='row'>
                {cats.map((cat, i) =>
                    <div className="col-sm" key={i}>
                    <div className="form-check">
                        <input onChange={() => props.onChange(cat, i - 1)} type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label className="form-check-label" for="exampleCheck1"> {cat} </label>
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
    }

    componentDidMount() {
        //TODO: populate state with db categories
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
            <div class="container">
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
                                <p>{quote}</p>
                            </div>
                            <div className='row'>
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
        )
    }
}
