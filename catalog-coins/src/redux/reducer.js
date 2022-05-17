
const initialState = {
    arrCoins: [],
    idCoin: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_API_COINS':
            const apiOne = action.payload.Coins;
            state.arrCoins = apiOne;
            return { ...state, ...state.arrCoins}
        case 'ADD_API_ID_COIN':
            const apiTwo = action.payload.IdCoin;
            state.idCoin = apiTwo;
            return { ...state, ...state.idCoin }
        default:
            return state;
    }
}
export default reducer;