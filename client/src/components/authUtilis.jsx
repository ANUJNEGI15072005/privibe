import Cookies from 'js-cookie';

export const loginUser = async (credentials) => {
  try {
    const response = await fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });

    const result = await response.json();
    const { success, message, token, name, email } = result;

    if (success) {
      Cookies.set('token', token);
      Cookies.set('name', name);  
      Cookies.set('email', email); 

      return { success: true, message };
    } else {
      throw new Error(message);
    }
  } catch (err) {
    throw new Error(err.message);
  }
};
