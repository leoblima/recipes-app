import { React, useContext } from 'react';
import { Context } from '../context/context';
import './NationalitiesDropdown.css';

const NationalitiesDropdown = () => {
  const {
    setSelectedNationality,
    selectedNationality,
    nationalitiesData,
  } = useContext(Context);

  const handleSelection = ({ target: { value } }) => {
    setSelectedNationality(value);
  };

  return (
    <div className="nationality-dropdown">
      <select
        name="nationality-dropdown"
        id="nationality-dropdown"
        data-testid="explore-by-nationality-dropdown"
        onChange={ (e) => handleSelection(e) }
        value={ selectedNationality }
      >
        {nationalitiesData.map((nationality, index) => (
          <option
            key={ `${nationality}-${index}` }
            value={ nationality }
            data-testid={ `${nationality}-option` }
          >
            { nationality }
          </option>
        ))}
      </select>
    </div>
  );
};

export default NationalitiesDropdown;
