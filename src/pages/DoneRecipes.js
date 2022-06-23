import { React, useState } from 'react';
import Header from '../components/Header';
import ButtonsDoneRecipes from '../components/ButtonsDoneRecipes';
import DoneRecipeCard from '../components/DoneRecipeCard';

const DoneRecipes = () => {
  const [category, setCategory] = useState('All');
  const [isEnable, setIsEnable] = useState(false);
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes')) === undefined
    ? []
    : JSON.parse(localStorage.getItem('doneRecipes'));
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

  const getRecipeByType = (recipe) => (recipe.type === category);

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
};

export default DoneRecipes;
