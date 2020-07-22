import React from 'react'

const productOverviewImg = {
    border: '1px black solid',
    width: '100px',
    height: '100px',
    display: 'grid',
    justifyItems: 'center',
}
const productOverviewDetails = {
    display: 'grid',
    border: ' 1px black solid',
    width: '100px',
    justifyItems: 'center',
}
const productImg = {
    width: '90px',
    height: '90px',
}

const productNameUI = {
    fontSize: '8px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
}

const productPriceUI = {
    fontSize: '8px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
}

function ProductOverview(props) {
    let { img, name, price, id } = props

    return (
        <div className="productOverviewWrapper">
            <div style={productOverviewImg}>
                <img style={productImg} src={img} />
            </div>
            <div style={productOverviewDetails}>
                <li
                    onClick={() => props.productClicked(id)}
                    style={productNameUI}
                >
                    {name}
                </li>
                <li
                    onClick={() => props.productClicked(id)}
                    style={productPriceUI}
                >
                    {price}
                </li>
            </div>
        </div>
    )
}
export default ProductOverview
