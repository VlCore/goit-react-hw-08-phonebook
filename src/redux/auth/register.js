import { registerRequest, registerSuccess, registerError } from './actions';
import { contactAPI } from '../../api/api';

export const registerUser = (name, email, password) => async dispatch => {
  try {
    dispatch(registerRequest());

    const response = await contactAPI.post('/users/signup', {
      name,
      email,
      password,
    });

    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError('Registration failed'));
  }
};