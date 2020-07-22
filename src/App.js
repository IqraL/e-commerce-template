import React, { useState } from 'react'
import ProductOverviewsContainer from './ProductOverviewsContainer'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

function App() {
    const [cartClicked, setCartClicked] = useState(false)

    console.log('cartClicked', cartClicked)
    return (
        <div className="App">
            <div className="topWrapper">
                <Banner cartClicked={(value) => setCartClicked(value)} />
                {!cartClicked ? <ProductOverviewsContainer /> : <Cart />}
            </div>
        </div>
    )
}

const headerWrapper = {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    justifyItems: 'center',
}

function Banner(props) {
    return (
        <div style={headerWrapper}>
            <div
                style={{ cursor: 'pointer' }}
                onClick={() => props.cartClicked(false)}
            >
                Sample e-commerce site
            </div>
            <div
                style={{ cursor: 'pointer' }}
                onClick={() => props.cartClicked(true)}
            >
                <ShoppingCartOutlinedIcon />
            </div>
        </div>
    )
}

function Cart(props) {
    return <div>cart page</div>
}
export default App
