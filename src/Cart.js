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

    return (
        <div>
            cart page: {console.log(productsInfo)} {products}
        </div>
    )
}

function CartProductView(props) {
    return (
        <div className="CartProductView">
            {console.log('26 _ ' + props.description)}
        </div>
    )
}

export default Cart
