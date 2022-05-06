import store from "../redux/store";

//общий запрос
export function ApiCommemorativeCoins() {

    const url = `http://localhost:5000/commemorative_coins`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_COMMEMORATIVE_COINS',
                payload: {
                    ComCoins: data,
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}

//общий запрос
export function ApiInvestmentCoins() {

    const url = `http://localhost:5000/investment_coins`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_iNVESTMENT_COINS',
                payload: {
                    InvCoins: data,
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}

//общий запрос
export function ApiExclusiveCoins() {

    const url = `http://localhost:5000/exclusive_coins`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_EXCLUSIVE_COINS',
                payload: {
                    ExcCoins: data,
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}