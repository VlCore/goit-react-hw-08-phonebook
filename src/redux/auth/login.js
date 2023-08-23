import { loginRequest, loginSuccess, loginError } from './actions';
import { contactAPI } from '../../api/api'
import { setToken } from '../../api/api';

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