import React from 'react';
import './ReviewForm.css';

//TODO:POST request set up
const myInit = {
    method: 'GET',
    cache: 'default'
};

export default class ReviewForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            boards: [],
            categories: [],
            searched: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(data) {

    }

    render() {
        return (
            <div id = 'review-form-container'>
            <div id = 'review-form-overlay'>
            </div>
            <div className="card" id="review-form">
                <div className = "card-body" id="card-content">
                    <h5 className="card-title">Submit A Review</h5>
                    <p className="card-text">Share a review blah blah blah blah</p>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Example textarea</label>
                            <textarea value={this.state.value} onChange={this.handleChange} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}
