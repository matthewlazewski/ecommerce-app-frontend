import React, { Component } from 'react';
import ItemDataService from '../services/item.service';

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription  = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.newItem = this.newItem.bind(this);

        this.state = {
            id: null,
            name: "",
            description: "",
            price: 0,
            category: "",

            submitted: false
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value 
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value 
        });
    }

    onChangePrice(e) {
        this.setState({
            price: e.target.value 
        });
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value 
        });
    }

    saveItem() {
        const data = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category: this.state.category
        }

        ItemDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    description: response.data.description,
                    price: response.data.price,
                    category: response.data.category,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e)
            });
    };

    newItem() {
        this.setState({
            id: null,
            name: "",
            description: "",
            price: 0,
            category: "", 

            submitted: false
        })
    }

    render(){
        return(
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Item submitted successfully</h4>
                        <button className="btn btn-success" onClick={this.newTutorial}>
                            Add 
                        </button>
                    </div>
                ): (
                    <div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="name"
                                required
                                value={this.state.name}
                                onChange={this.onChangeName}
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                            />
                        </div><div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="price"
                                required
                                value={this.state.price}
                                onChange={this.onChangePrice}
                                name="price"
                            />
                        </div><div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input 
                                type="text"
                                className="form-control"
                                id="category"
                                required
                                value={this.state.category}
                                onChange={this.onChangeCategory}
                                name="category"
                            />
                        </div>

                        <button onClick={this.saveItem} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        )
    }
};
