import React, { useState, useEffect } from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Tooltip from '@material-ui/core/Tooltip'

import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeToolTip } from './actions'
import { sampleProducts } from './sampleProducts'

const productDetailsWrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr 4fr 4fr 1fr',
    justifyItems: 'center',
}
const productDetailsImgWrapper = {
    display: 'grid',
    justifyItems: 'center',
}
const productDetailsImg = {
    width: '100px',
    height: '100px',
}
const productDetailsDetailsContainer = {}
const productDetailsHeader = {
    display: 'grid',
    gridTemplateColumns: '0fr 1fr 1fr 1fr',
    gridColumnGap: '12px',
}

const productName = { fontSize: '10px' }
const addToCartButtonUI = {
    width: '50px',
    height: '15px',
    fontSize: '6px',
    backgroundColor: 'black',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
}

const productDesUI = {
    display: 'grid',
    justifyItems: 'center',
    paddingTop: '15px',
    fontSize: '8px',
}

const backArrowUI = {
    fontSize: '0.8rem',
    cursor: 'pointer',
}

function ProductDetails(props) {
    const { productId } = props
    const itemAddedTocart = useSelector((state) => state.cart.itemAddedTocart)
    const dispatch = useDispatch()
    const [productDetails, setProductDetails] = useState({})

    const closeToolTip = () => {
        if (itemAddedTocart)
            setTimeout(() => {
                dispatch(removeToolTip())
            }, 3000)
    }

    useEffect(() => {
        try {
            setProductDetails(
                sampleProducts.filter(
                    (product) => product.id === props.productId
                )[0]
            )
        } catch (e) {
            console.log(e)
        }
    }, [])

    closeToolTip()

    return (
        <div style={productDetailsWrapper}>
            <div></div>
            <div style={productDetailsImgWrapper}>
                <img style={productDetailsImg} src={productDetails.img} />
            </div>
            <div style={productDetailsDetailsContainer}>
                <div style={productDetailsHeader}>
                    <ArrowBackIcon
                        style={backArrowUI}
                        onClick={() => props.viewAllProducts()}
                    />
                    <div style={productName}>{productDetails.name}</div>
                    <div style={productName}>{productDetails.price}</div>

                    <Tooltip open={itemAddedTocart} title="Item added to cart">
                        <Button
                            onClick={() => dispatch(addToCart(productId))}
                            style={addToCartButtonUI}
                        >
                            Add to Cart
                        </Button>
                    </Tooltip>
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
            <div></div>
        </div>
    )
}

export default ProductDetails
