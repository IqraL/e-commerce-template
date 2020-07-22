import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from './actions'
import { sampleProducts } from './sampleProducts'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined'

function Cart(props) {
    const dispatch = useDispatch()
    const productIds = useSelector((state) => state.cart.itemIds)
    const [productsInfo, setProductsInfo] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProductsInfo(
            sampleProducts.filter((product) => productIds.includes(product.id))
        )
        console.log(productsInfo)
    }, [productIds])

    useEffect(() => {
        setProducts(
            productsInfo.map((product) => (
                <CartProductView
                    key={`${product.id}_${product.price}`}
                    description={product}
                />
            ))
        )
    }, [productsInfo, productIds])

    return <div>{products}</div>
}

const cartProductWrapper = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr  1fr 1fr 1fr',
}
function CartProductView(props) {
    const [product, setProduct] = useState({})
    useEffect(() => {
        setProduct(JSON.parse(JSON.stringify(props.description)))
    }, [])

    const dispatch = useDispatch()

    return (
        <div style={cartProductWrapper}>
            <div></div>
            <img width="100px" height="100px" src={product.img} />
            <div>{product.name}</div>

            <div>{product.price}</div>
            <div>
                <CancelOutlinedIcon
                    onClick={() => dispatch(removeFromCart(product.id))}
                />
            </div>
            <div></div>
        </div>
    )
}

export default Cart
