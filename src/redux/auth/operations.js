import { combineReducers } from 'redux';
import { contactAPI } from '../../api/api'
import { setToken } from '../../api/api';
export const loginRequest = () => ({
    type: 'auth/loginRequest',
  });
  
  export const loginSuccess = user => ({
    type: 'auth/loginSuccess',
    payload: user,
  });
  
  export const loginError = error => ({
    type: 'auth/loginError',
    payload: error,
  });
  
  export const registerRequest = () => ({
    type: 'auth/registerRequest',
  });
  
  export const registerSuccess = user => ({
    type: 'auth/registerSuccess',
    payload: user,
  });
  
  export const registerError = error => ({
    type: 'auth/registerError',
    payload: error,
  });
  export const logout = () => ({
    type: 'auth/logout',
  });


export const loginUser = ( email, password) => async dispatch => {
  try {
    dispatch(loginRequest());

    const response = await contactAPI.post('/users/login', {
      email,
      password,
    });
    setToken(response.data.token)

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError('Invalid email or password'));
  }
};


const userInitialState = { email: null, token: null };

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
      case 'auth/loginSuccess':
      case 'auth/registerSuccess':
        return { ...state, ...action.payload };
  
      case 'auth/logout':
        return userInitialState; 
  
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


export const registerUser = (name, email, password) => async dispatch => {
  try {
    dispatch(registerRequest());

    const response = await contactAPI.post('/users/signup', {
      name,
      email,
      password,
    });
    setToken(response.data.token)

    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError('Registration failed'));
  }
};