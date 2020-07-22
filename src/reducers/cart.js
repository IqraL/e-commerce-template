const cartReducer = (
    state = { itemAddedTocart: false, itemIds: [] },
    action
) => {
    switch (action.type) {
        case 'ADDTOCART':
            return {
                itemAddedTocart: true,
                itemIds: [...state.itemIds, action.payload],
            }
        case 'REMOVEFROMCART':
            return {
                ...state,
                itemIds: [...state.filter((item) => item !== action.payload)],
            }

        default:
            return state
    }
}

export default cartReducer
