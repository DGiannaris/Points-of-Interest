import { createStore} from 'redux'
//let customData;
// let sec;
// const fetchAsync = async () =>
// 	await (await fetch('https://warply.s3.amazonaws.com/data/test_pois.json')).json()
//
//
//
//
//   fetchAsync()
//       .then(data => sec=data)
//       .catch(reason => console.log(reason.message))




const customData = require('./test_pois.json');
//console.log(customData)
const defaultState = {
  points: customData,
};

  // even though I dont use him this reducer could potentially work for the login creds
function chatStore(state=defaultState, action) {

  switch(action.type) {
    case "LOGIN":
    console.log(sec);
      return {...state,
        points: sec,
        };
    default:
      return state;
  }
}
export default createStore(chatStore);
