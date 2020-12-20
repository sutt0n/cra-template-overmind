export const setItem = ({ applicationContext, key, value }) => {
  return localStorage.setItem(key, JSON.stringify(value));
}