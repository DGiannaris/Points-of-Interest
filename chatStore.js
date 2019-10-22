import { createStore} from 'redux'

let sec;
//'hackish way to get initial state,sorry'
const fetchAsync = async () =>
	await (await fetch('https://warply.s3.amazonaws.com/data/test_pois.json')).json()

  fetchAsync()
      .then(data => sec=data)
      .catch(reason => console.log(reason.message))





//simple reducer
function chatStore(state={}, action) {

  switch(action.type) {
    case "LOGIN":

      return {...state,
        points: sec,
        };
    default:
      return state;
  }
}
export default createStore(chatStore);
