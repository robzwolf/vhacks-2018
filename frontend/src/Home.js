import React from 'react';
import CategoryIcon from './CategoryIcon';
import './Home.css'

const CategorySelector = (props) => {
    const cats = props.categories;
    return (
        <div class="card card-body">
            <h4 class="card-title">Additional Categories</h4>
            <div className='row'>
                {cats.map((cat, i) =>
                    <div class="col-sm" key={i}>
                    <div class="form-check">
                        <input onChange={() => props.onChange(cat, i - 1)} type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                        <label class="form-check-label" for="exampleCheck1"> {cat} </label>
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
