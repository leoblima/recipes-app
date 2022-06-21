import { React, useContext } from 'react';
import { Context } from '../context/context';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import NationalitiesDropdown from '../components/NationalitiesDropdown';
import RecipeCard from '../components/RecipeCard';

const ExploreByNationalities = () => {
  const { foodsData } = useContext(Context);
  
  return (
  <div>
    <Header />
    <NationalitiesDropdown/>
    <RecipeCard data={ foodsData } type="Meal" />
    <BottomMenu />
  </div>
  );
}
export default ExploreByNationalities;
