const initialState = {
  user_id: null,
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  balance: null,
  authenticated: false,
  reduxDemo: "Hello WLH4!",
  toChange: "Unchanged",
  userObj: {}
}

const UPDATE_USER_ID = 'fj;lna;ne;lisna;';
const UPDATE_USERNAME = 'dfhn;neoznsd;kljf;sajk';
const UPDATE_USER_DETAILS = 'kdfja;bafe;uoba;lk';
const CHANGE_STRING = 'eoihan;djkbilaeunae;o';
const UPDATE_USER_OBJ = 'fkjas;dkfja;dfjk;lafjnebliaj'

export function updateUserId(id){
  return {
    type: UPDATE_USER_ID,
    payload: id
  }
};

export function updateUsername(newName){
  return {
    type: UPDATE_USERNAME,
    payload: newName
  }
};

export function updateUserDetails(obj){
  return {
    type: UPDATE_USER_DETAILS,
    payload: obj
  }
};

export function changeString(newString){
  return {
    type: CHANGE_STRING,
    payload: newString
  }
}

export function updateUserObject(userObj){
  return {
    type: UPDATE_USER_OBJ,
    payload: userObj
  }
}

export default function reducer(state = initialState, action){
  const {type , payload} = action;
  switch(type){
    case UPDATE_USER_ID: 
      return {...state , user_id: payload}
    case UPDATE_USERNAME:
      return {...state , username: payload}
    case UPDATE_USER_DETAILS:
      return {...state , ...payload}
    case CHANGE_STRING:
      return {...state , toChange: payload}
    case UPDATE_USER_OBJ:
      return {...state , userObj: payload}
    default:
      return state
  }
}

