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
                        <input onChange={props.onChange} type="checkbox" class="form-check-input" id="exampleCheck1"></input>
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

    updateCategories() {
        console.log('update reached')
        this.setState({

        })
    }

    render() {
        const quote = "Give every human being every right that you claim for yourself";
        const author = "- Robert Ingersoll";
        const categories = this.state.mainCategories;
        return(
            <div class="container">
                <div class="row">
                    <div className="col-sm"></div>
                    <div class="col-sm">
                        <CategoryIcon style={{background:'#FF8A5B'}} title= "Health"/>
                    </div>
                    <div className="col-sm"></div>
                </div>
                <div className="row">
                    <div class="col-sm">
                        <CategoryIcon style={{background:'#EA526F'}} title= "Education"/>
                    </div>
                    <div className="col-sm" id='quote-box'>
                        <div className="container">
                            <div className='row'>
                                <p>{quote}</p>
                            </div>
                            <div className='row'>
                                <p>{author}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm">
                        <CategoryIcon style={{background:'#25CED1'}} title= "Legal"/>
                    </div>
                </div>
                <div className="row" id = "bottom-row">
                    <div class="col-sm">
                        <CategoryIcon style={{background: '#FC9E4F', marginTop: "110px", marginLeft:"90px"}} title="Employment"/>
                    </div>
                    <div className="col-sm"></div>
                    <div class="col-sm">
                        <CategoryIcon style={{background:'#2D70BC', marginTop: "110px", marginRight:"112px"}} title="Language"/>
                    </div>
                </div>
                <div>
                    <CategorySelector onChange={this.updateCategories} categories={this.state.addCategories}/>
                </div>
            </div>
        )
    }
}
