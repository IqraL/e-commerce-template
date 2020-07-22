import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from './actions'
import { sampleProducts } from './sampleProducts'

function Cart(props) {
    const dispatch = useDispatch()
    const productIds = useSelector((state) => state.cart.itemIds)
    const [productsInfo, setProductsInfo] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProductsInfo(
            sampleProducts.filter((product) => productIds.includes(product.id))
        )
    }, [])

    useEffect(() => {
        setProducts(
            productsInfo.map((product) => (
                <CartProductView description={product} />
            ))
        )
    }, [productsInfo])

    return <div>{products}</div>
}

function CartProductView(props) {
    const [product, setProduct] = useState({})
    useEffect(() => {
        setProduct(JSON.parse(JSON.stringify(props.description)))
    }, [])
    return (
        <div className="CartProductView">
            <img width="100px" height="100px" src={product.img} />
        </div>
    )
}

export default Cart
