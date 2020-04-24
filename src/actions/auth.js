import { firebase, googleAuthProvider } from '../firebase/firebase';

// LOGIN
export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

// start login process
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

// LOGOUT
export const logout = () => ({
  type: 'LOGOUT'
});

// start logout process
export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};