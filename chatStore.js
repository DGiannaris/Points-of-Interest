import { createStore} from 'redux'

const customData = require('./test_pois.json');
const defaultState = {
  points: customData,
};

  // even though I dont use him this reducer could potentially work for the login creds
function chatStore(state=defaultState, action) {
  switch(action.type) {
    case "LOGIN":
      return {...state,
        points: customData ,
        };
    default:
      return state;
  }
}
export default createStore(chatStore);
