import { React } from 'react';
import BottomMenu from '../components/BottomMenu';
import Header from '../components/Header';
import NationalitiesDropdown from '../components/NationalitiesDropdown';

const ExploreByNationalities = () => (
  <div>
    <Header />
    <NationalitiesDropdown />
    <BottomMenu />
  </div>
);

export default ExploreByNationalities;
