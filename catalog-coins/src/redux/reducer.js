
const initialState = {
    arrCoins: [],
    idCoin: [],
    ADD: 'ad'
}

function reducer(state = initialState, action) {
    console.log('wwwwww',state, action);
    switch (action.type) {
        case 'ADD_API_COINS':
            const apiOne = action.payload.Coins;
            state.arrCoins = apiOne;
            // const newCoins = [...state.arrCoins, apiOne];
            return { ...state, ...state.arrCoins}
        case 'ADD_API_ID_COIN':
            const apiTwo = action.payload.IdCoin;
            state.idCoin = apiTwo;
            // const newCoinTwo = [...state.idCoin, apiTwo];
            return { ...state, ...state.idCoin }
            case 'AD':
                const ad = action.payload.a;
                return { ...state, ...state.ADD }
        default:
            console.log('ddd', state);
            return state;
    }
}
export default reducer;