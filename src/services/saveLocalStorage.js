const saveLocalStorage = (obj) => {
  const currentLocal = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  if (currentLocal.length === 0) {
    currentLocal.push(obj);
    localStorage.setItem('favoriteRecipes', JSON.stringify(currentLocal));
  } else {
    const actualLocal = [...currentLocal, obj];
    localStorage.setItem('favoriteRecipes', JSON.stringify(actualLocal));
  }
};

export default saveLocalStorage;
