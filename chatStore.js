import { createStore} from 'redux'

const customData = require('./test_pois.json');
const defaultState = {
  points: customData,
};
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
