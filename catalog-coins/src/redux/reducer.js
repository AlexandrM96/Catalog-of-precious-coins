const initialState = {
    COMMEMORATIVE: [],
    iNVESTMENT: [],
    EXCLUSIVE: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_API_COMMEMORATIVE_COINS':
            const apiOne = action.payload.ComCoins;
            const newCoinsOne = [...state.COMMEMORATIVE, apiOne];
            return { ...state, newCoinsOne }
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