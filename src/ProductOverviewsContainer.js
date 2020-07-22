import React from 'react'
import ProductOverview from './ProductOverview'
import ProductDetails from './ProductDetails'

const multipleProductOverviews = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyItems: 'center',
}
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
                    img="https://freemans.scene7.com/is/image/OttoUK/466w/creation-l-warp-look-sweater~E35415FRSC.jpg"
                    name="product name"
                    price="£5.00"
                    productClicked={this.productSelected.bind(this)}
                />
            )
        })
        return <div style={multipleProductOverviews}>{productOverViews}</div>
    }

    productSelected(selectedProduct) {
        this.setState((state, props) => {
            return {
                productClicked: !state.productClicked,
                selectedProduct,
            }
        })
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
                        productId={this.state.selectedProduct}
                    />
                )}
            </div>
        )
    }
}

export default ProductOverviewsContainer
