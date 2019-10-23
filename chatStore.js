import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//simple reducer
function chatStore(state={}, action) {

  switch(action.type) {
    case 'LOGIN':
      return {...state,
        points: action.payload,
        };
    default:
      return state;
  }
}
export default createStore(chatStore,applyMiddleware(thunk));
