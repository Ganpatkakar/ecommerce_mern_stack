import React, {Component} from 'react';

export default class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            title: '',
            price: '',
            category: [],
            selectedCategory: ''
        }
    }
    componentDidMount() {
        console.log("componentDidMount:: ProductForm");
    }

    productFormSumit = () => {
      console.log("productFormSumit");
    };

    deleteProduct = () => {
        console.log("deleteProduct");
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <h1> Add New Product</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" name="title" id="title" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Price</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text">Rs.</div>
                                    </div>
                                    <input type="number" name="price" id="price" className="form-control"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <label htmlFor="category">Category</label>
                                    <select className="form-control" name="selectedCategory"
                                            onChange={this.updateSubCategory} id="category">
                                        {
                                            this.state.category.map((category, index) => {
                                                <option key={category.name}>{category.name}</option>
                                            })
                                        }

                                    </select>
                                </div>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="subCategory">Sub Category</label>
                                    {/*<select className="form-control" name="selectedSubCategory" id="subCategory">
                                        {
                                            (this.state.category.selectedCategory.subCategory. !== 'undefined') ?
                                                this.state.category.subCategory.map((subCategory, index) => {
                                                    <option key={subCategory}>{subCategory}</option>
                                                })
                                                :
                                                null
                                        }
                                    </select>*/}
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="imageUrl">Image</label>
                                <input type="text" name="title" name="imageUrl" id="imageUrl" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary form-control" onClick={this.productFormSumit}>Save
                                </button>
                            </div>

                            {(this.state.productId) ?
                                <div className="form-group">
                                    <button className="btn btn-danger form-control" onClick={this.deleteProduct}>Delete
                                    </button>
                                </div>
                                :
                                null
                            }
                        </form>
                    </div>

                    <div className="col-sm-4">
                        <div className="card">
                            <img className="card-img-top" src={this.state.image} alt="TShirt"/>
                            <div className="card-body">
                                <h4 className="card-title">{this.state.title}</h4>
                                <p className="card-test">{this.state.price} RS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}