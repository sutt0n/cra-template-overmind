export const deleteItem = ({ applicationContext, key }) => {
  return localStorage.deleteItem(key);
}