import AuthContext from './authContext';
import axios from 'axios';
import React, { useState, useEffect, ReactNode } from 'react';
import { AuthContextType } from '../../constants/types';
const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthContextType>({
    user: null,
    token: '',
  });


  useEffect(() => {
    const loadUserData = async () => {
      try {
        const token = await localStorage.getItem('token');
        // console.log('token', token);
        const user = await localStorage.getItem('user');
        console.log('user', user);
        if (token && user) {
          setState({ ...state, token: token, user: JSON.parse(user) });
        }
        console.log('user', state);
      } catch (error) {
        console.log(error);
      }
    };
    loadUserData();
  }, []);

  //default axios settings
  axios.defaults.headers.common['Authorization'] = `Bearer ${state?.token}`;
  axios.defaults.baseURL =
    'http://localhost:7000/api/v1/';

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
