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