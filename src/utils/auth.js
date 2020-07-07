import Cookies from 'js-cookie';

const TokenKey = 'vue_admin_template_token';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, {
    expires: new Date(+new Date() + 1000 * 60 * 60 * 24)
  });
}

export function removeToken() {
  return Cookies.set(TokenKey, '', { expires: -1 });
}
