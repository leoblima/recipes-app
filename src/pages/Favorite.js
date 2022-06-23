import { React, useState } from 'react';
import Header from '../components/Header';
import ButtonsDoneRecipes from '../components/ButtonsDoneRecipes';
import DoneRecipeCard from '../components/DoneRecipeCard';

function Favorite() {
  const [category, setCategory] = useState('All');
  const [isEnable, setIsEnable] = useState(true);
  const doneRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  // const doneRecipes = [{
  //   id: 'id-da-receita',
  //   type: 'drink',
  //   nationality: 'nacionalidade-da-receita-ou-texto-vazio',
  //   category: 'categoria-da-receita-ou-texto-vazio',
  //   alcoholicOrNot: 'alcoholic-ou-non-alcoholic-ou-texto-vazio',
  //   name: 'nome-da-receita',
  //   image: 'imagem-da-receita',
  //   doneDate: 'quando-a-receita-foi-concluida',
  //   tags: ['array-de-tags-da-receita-ou-array-vazio', 2, 'tres', 'quatro'],
  // },
  // {
  //   id: 'id-da-receita2',
  //   type: 'food',
  //   nationality: 'nacionalidade-da-receita-ou-texto-vazio2',
  //   category: 'categoria-da-receita-ou-texto-vazio',
  //   alcoholicOrNot: 'alcoholic-ou-non-alcoholic-ou-texto-vazio',
  //   name: 'nome-da-receita2',
  //   image: 'imagem-da-receita2',
  //   doneDate: 'quando-a-receita-foi-concluida2',
  //   tags: ['array-de-tags-da-receita-ou-array-vazio', 2, 'tres', 'quatro'],
  // },
  // ];
  const getRecipeByType = (recipe) => (recipe.type === category);

  const renderRecipes = (recipe, index) => (
    <DoneRecipeCard
      key={ index }
      recipe={ recipe }
      index={ index }
      favBtn={ isEnable }
      setIsEnable={ setIsEnable }
    />);

  const renderDoneRecipes = () => {
    if (doneRecipes) {
      return doneRecipes.map((recipe, index) => (
        renderRecipes(recipe, index)));
    }
  };

  return (
    <div>
      <Header />
      <ButtonsDoneRecipes category={ category } setCategory={ setCategory } />
      {category === 'All' ? (
        renderDoneRecipes()
      )
        : (
          doneRecipes.filter((recipe) => getRecipeByType(recipe)).map((recipe, index) => (
            renderRecipes(recipe, index)
          ))
        )}
    </div>
  );
}

export default Favorite;
