import { registerRequest, registerSuccess, registerError } from './actions';
import { contactAPI } from '../../api/api';
import { setToken } from '../../api/api';

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