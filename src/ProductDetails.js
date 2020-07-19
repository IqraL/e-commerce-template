import React from 'react'
const productDetailsWrapper = {
    display: 'grid',
    'grid-template-columns': '1fr 1fr',
    'justify-items': 'center',
}
const productDetailsImgWrapper = {
    display: 'grid',
    // border: '1px solid black',
    // width: '250px',
    // height: '100px',
    'justify-items': 'center',
}
const productDetailsImg = {
    width: '100px',
    height: '100px',
}
const productDetailsDetailsContainer = {
    // border: ' 1px blue solid',
    // width: '100px',
    // height: '30px',
}

function ProductDetails() {
    return (
        <div style={productDetailsWrapper}>
            <div style={productDetailsImgWrapper}>
                <img
                    style={productDetailsImg}
                    src="https://freemans.scene7.com/is/image/OttoUK/466w/creation-l-warp-look-sweater~E35415FRSC.jpg"
                />
            </div>
            <div style={productDetailsDetailsContainer}></div>
        </div>
    )
}

export default ProductDetails
