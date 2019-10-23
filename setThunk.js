const axios = require('axios').default;

const setPoints=(data)=>{
  return {
    type: 'LOGIN',
		payload: data
  };
}

//this is the thunk for middleware
export function fetchPoints() {
  return function(dispatch) {
    return axios.get('https://warply.s3.amazonaws.com/data/test_pois.json')
      .then(({ data }) => {
      dispatch(setPoints(data));
    });
  };
}
