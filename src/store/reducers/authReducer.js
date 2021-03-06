const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const initialState = {
  auth: null,
  id: null,
  name: null
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOG_IN:
      return {...state, auth: true, id: action.id, name: action.name}
    case LOG_OUT:
      return {auth: false, id: null, name: null}
    default:
      return state;
  }
};

export default authReducer;