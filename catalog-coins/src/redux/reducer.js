const initialState = {
    arrCoins: [],
    idCoin: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_API_COINS':
            const apiOne = action.payload.Coins;
            const newCoins = [...state.arrCoins, apiOne];
            console.log(newCoins);
            return { ...state, newCoins }
        case 'ADD_API_ID_COIN':
            const apiTwo = action.payload.IdCoin;
            const newCoinTwo = [...state.idCoin, apiTwo];
            return { ...state, newCoinTwo }
        default:
            return state;
    }
}
export default reducer;