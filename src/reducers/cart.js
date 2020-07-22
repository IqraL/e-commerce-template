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
                itemIds: [
                    ...state.itemIds.filter((item) => item !== action.payload),
                ],
            }
        case 'REMOVETOOLTIP':
            return {
                ...state,
                itemAddedTocart: false,
            }
        default:
            return state
    }
}

export default cartReducer
