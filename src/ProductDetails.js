import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'

const productDetailsWrapper = {
    display: 'grid',
    'grid-template-columns': '1fr 1fr',
    'justify-items': 'center',
}
const productDetailsImgWrapper = {
    display: 'grid',
    'justify-items': 'center',
}
const productDetailsImg = {
    width: '100px',
    height: '100px',
}
const productDetailsDetailsContainer = {}
const productDetailsHeader = {
    display: 'grid',
    'grid-template-columns': '1fr 1fr',
    'grid-column-gap': '12px',
}

const productName = { 'font-size': '10px' }

const addToCartButtonUI = {
    width: '50px',
    height: '15px',
    'font-size': '6px',
    'background-color': 'black',
    border: 'none',
    color: 'white',
}

const productDesUI = {
    display: 'grid',
    'justify-items': 'center',
    'padding-top': '15px',
    'font-size': '8px',
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
            <div style={productDetailsDetailsContainer}>
                <div style={productDetailsHeader}>
                    <div style={productName}>product Name</div>
                    <Button style={addToCartButtonUI}>Add to Cart</Button>
                </div>
                <div style={productDesUI}>
                    With your permission we and our partners may use precise
                    geolocation data and identification through device scanning.
                    You may click to consent to our and our partners’ processing
                    as described above. Alternatively you may click to refuse to
                    consent or access more detailed information and change your
                    preferences before consenting. Please note that some
                    processing of your personal data may not require your
                    consent, but you have a right to object to such processing.
                    Your preferences will apply to this website only.
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
