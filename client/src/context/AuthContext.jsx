import  { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; 

const AuthContext = createContext();


// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState(''); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const token = Cookies.get('token');
    const email = Cookies.get('email');
    const name = Cookies.get('name');  
  
    if (token && email && name) {
      setIsAuthenticated(true);
      setUserEmail(email);
      setUserName(name); 
    } else {
      setIsAuthenticated(false);
      setUserEmail('');
      setUserName('');  
    }
  
    setLoading(false); 
  }, []);  

  const checkAuth = () => {
    const token = Cookies.get('token');
    const email = Cookies.get('email');
    const name = Cookies.get('name');
    
    setIsAuthenticated(token);
    setUserEmail(email || '');
    setUserName(name || ''); 
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, checkAuth, userEmail, userName }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  return useContext(AuthContext);
}
