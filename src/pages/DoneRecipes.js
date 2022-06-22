import { React } from 'react';
import Header from '../components/Header';
import ButtonsDoneRecipes from '../components/ButtonsDoneRecipes';
import DoneRecipeCard from '../components/DoneRecipeCard';

const DoneRecipes = () => {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  // const doneRecipes = [{
  //   id: 'id-da-receita',
  //   type: 'meal',
  //   nationality: 'nacionalidade-da-receita-ou-texto-vazio',
  //   category: 'categoria-da-receita-ou-texto-vazio',
  //   alcoholicOrNot: 'alcoholic-ou-non-alcoholic-ou-texto-vazio',
  //   name: 'nome-da-receita',
  //   image: 'imagem-da-receita',
  //   doneDate: 'quando-a-receita-foi-concluida',
  //   tags: ['array-de-tags-da-receita-ou-array-vazio', 2, 'tres', 'quatro'],
  // }];
  return (
    <div>
      <Header />
      <ButtonsDoneRecipes />
      {doneRecipes.map((recipe, index) => (
        <DoneRecipeCard key={ index } recipe={ recipe } index={ index } />
      ))}

    </div>
  );
};

export default DoneRecipes;
