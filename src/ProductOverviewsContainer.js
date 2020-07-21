import React from 'react'
import ProductOverview from './ProductOverview'
import ProductDetails from './ProductDetails'

class ProductOverviewsContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [1, 2, 3],
            productClicked: false,
            selectedProduct: null,
        }
    }
    createProductComponents() {
        //console.log('createProductComponents')
        const { products } = this.state
        let productOverViews = []
        products.forEach((product) => {
            productOverViews.push(
                <ProductOverview
                    id={product}
                    img=""
                    name=""
                    price=""
                    productClicked={this.productSelected.bind(this)}
                />
            )
        })
        console.log(products)
        return <div>{productOverViews}</div>
    }

    productSelected(selectedProduct) {
        console.log(`26 selectedProduct : ${selectedProduct}`)

        this.setState(
            (state, props) => {
                return {
                    productClicked: !state.productClicked,
                    selectedProduct,
                }
            },
            () => () => console.log(`32 state: ${this.state}`)
        )
    }

    componentDidMount() {
        //  getProducts from server save to redux
    }

    render() {
        return (
            <div>
                {!this.state.productClicked ? (
                    this.createProductComponents()
                ) : (
                    <ProductDetails
                        viewAllProducts={() =>
                            this.setState({
                                productClicked: false,
                                selectedProduct: null,
                            })
                        }
                        details=""
                    />
                )}
                {}

                <ProductOverview
                    productClicked={this.productSelected.bind(this)}
                    id="30"
                    img=""
                    name=""
                    price=""
                />
            </div>
        )
    }
}

export default ProductOverviewsContainer
