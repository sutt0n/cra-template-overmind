export const getItem = ({ applicationContext, key }) => {
  const value = localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }

  return null;
};
