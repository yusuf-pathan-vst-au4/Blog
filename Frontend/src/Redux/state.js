import { createStore } from 'redux';

// ---------------------------------------------------------------------------

// 1. Save all the channels at one place - Application State
let initialState = {
  loginemail: '',
  loginpassword: '',
  signupemail: '',
  signuppassword: '',
  user: ''
};

// 2. function - expose that function - to raise/trigger change requests - dispatch function - already present in redux
// dispatch(action)

// 3. function - make the necessary changes - reducer function
function appReducerFunction(state = initialState, action) {
  //console.log("redux state here", state)

  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'loginemail':
      stateCopy.loginemail = action.payload;
      return stateCopy;
    case 'loginpassword':
      stateCopy.loginpassword = action.payload;
      return stateCopy;
    case 'clear':
      stateCopy.productname = '';
      stateCopy.productimage = '';
      stateCopy.productprice = '';
      stateCopy.SECTION = '';
      stateCopy.productquantity = '';
      stateCopy.productcolor = '';
      stateCopy.SIZE = '';
      stateCopy.CATEGORIES = '';
      stateCopy.order = [];
      stateCopy.currentItems = [];
      return stateCopy;
    default:
      return stateCopy;
  }
}

// 4. Create a package - (state, dispatch) - store - there should be a way to create this store - already present in redux
const store = createStore(appReducerFunction);

// console.log("store " , store , store.getState());

export default store;
