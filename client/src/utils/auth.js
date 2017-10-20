import decode from 'jwt-decode';
import Router from 'vue-router';

const router = new Router({
  mode: 'history'
});

export function saveToken(value) {
  localStorage.setItem('amity', value);
}

export function logout() {
  localStorage.removeItem('amity');
  router.go('/');
}

export function isLoggedIn() {
  const token = getToken();
  return !!token && !isTokenExpired(token) ? token : false;
}

export function getToken() {
  return localStorage.getItem('amity');
}

function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) {
    return null;
  }
  const date = new Date(0);
  date.setUTCSeconds(token.exp);
  return date;
}

export function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: '/',
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    next();
  }
}
