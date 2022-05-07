import store from "../redux/store";

//общий запрос
export function ApiRequestListCoins(adress) {
console.log(adress);
    const url = `http://localhost:5000/${adress}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_COINS',
                payload: {
                    Coins: data,
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}

//общий запрос
export function ApiRequestListCoinsId(adress) {

    const url = `http://localhost:5000/${adress}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            store.dispatch({
                type: 'ADD_API_ID_COIN',
                payload: {
                    Coins: data,
                }
            })
        }
        )
        .catch((error) => {
            console.error('Error:', error);
        });
}
