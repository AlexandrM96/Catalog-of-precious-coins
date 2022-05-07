const initialState = {
    arrCoins: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_API_COINS':
            const api = action.payload.Coins;
            const newCoins = [...state.arrCoins, api];
            return { ...state, newCoins }
        case 'ADD_API_iNVESTMENT_COINS':
            const apiTwo = action.payload.InvCoins;
            const newCoinsTwo = [...state.iNVESTMENT, apiTwo];
            return { ...state, newCoinsTwo }
        case 'ADD_API_EXCLUSIVE_COINS':
            const apiThree = action.payload.ExcCoins;
            const newCoinsThree = [...state.EXCLUSIVE, apiThree];
            return { ...state, newCoinsThree }
        default:
            return state;
    }
}
export default reducer;