// const addCoins = {
//     type: 'ADD_API_COINS',
//     text: 'Add Coins'
// }

const addIdCoin = {
    type: 'ADD_API_ID_COIN',
    text: 'Id Coins'
}

const ad= {
    type: 'AD',
    text: 'AD'
}

export function addCoins(data) {
    return {
        type: 'ADD_API_COINS',
      payload: {
        Coins: data
      }
    }
  }
  
//   export function addIdCoin() {
//     return {
//         type: 'ADD_API_ID_COIN',
//       payload: {
//         id: id
//       }
//     }
//   }

//   export function ad() {
//     return {
//         type: 'AD',
//       payload: {
//         id: id
//       }
//     }
//   }