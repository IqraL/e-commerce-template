import React, { useState } from 'react'
import Cart from './Cart'
import ProductOverviewsContainer from './ProductOverviewsContainer'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

const topWrapper = {
    display: 'grid',
    gridRowGap: '60px',
}
function App() {
    const [cartClicked, setCartClicked] = useState(false)

    console.log('cartClicked', cartClicked)
    return (
        <div className="App">
            <div style={topWrapper}>
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
    textDecoration: 'underline',
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

export default App
