import React from 'react'
import './homePage.css'

const productOverviewImg = {
    border: '1px black solid',
    width: '100px',
    height: '100px',
    display: 'grid',
    'justify-items': 'center',
}
const productOverviewDeatils = {
    border: ' 1px black solid',
    width: '100px',
    height: '30px',
}
const productImg = {
    width: '90px',
    height: '90px',
}

function ProductOverview(props) {
    let { img, name, price } = props
    return (
        <div className="productOverviewWrapper">
            <div style={productOverviewImg}>
                <img
                    style={productImg}
                    src="https://freemans.scene7.com/is/image/OttoUK/466w/creation-l-warp-look-sweater~E35415FRSC.jpg"
                />
            </div>
            <div style={productOverviewDeatils}>
                {name} £{price}
            </div>
        </div>
    )
}
export default ProductOverview
