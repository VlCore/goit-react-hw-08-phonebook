import { combineReducers } from 'redux';

const userInitialState = { email: null, token: null };

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'auth/loginSuccess':
    case 'auth/registerSuccess':
      return { ...state, ...action.payload };

    case 'auth/loginError':
    case 'auth/registerError':
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'auth/loginRequest':
    case 'auth/registerRequest':
      return true;

    case 'auth/loginSuccess':
    case 'auth/loginError':
    case 'auth/registerSuccess':
    case 'auth/registerError':
      return false;

    default:
      return state;
  }
};

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case 'auth/loginError':
    case 'auth/registerError':
      return action.payload;

    case 'auth/loginRequest':
    case 'auth/registerRequest':
    case 'auth/loginSuccess':
    case 'auth/registerSuccess':
      return null;

    default:
      return state;
  }
};

const authReducer = combineReducers({
  user: userReducer,
  isLoading: loadingReducer,
  error: errorReducer,
});

export default authReducer;