import { React } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import BottomMenu from '../components/BottomMenu';
import './Profile.css';
// import { Context } from '../context/context';

const Profile = () => {
  // const { email } = useContext(Context);
  const history = useHistory();

  const redirectToFavorite = () => {
    history.push('/favorite-recipes');
  };

  const redirectToDoneRecipes = () => {
    history.push('/done-recipes');
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <div className="profile-items">
        <Header />
        <p data-testid="profile-email">
          email@mail.com
        </p>
        <div>
          <button
            type="button"
            data-testid="profile-done-btn"
            className="profile-btn btn btn-dark"
            onClick={ redirectToDoneRecipes }
          >
            Done Recipes
          </button>
        </div>

        <div>
          <button
            type="button"
            data-testid="profile-favorite-btn"
            className=" profile-btn btn btn-dark"
            onClick={ redirectToFavorite }
          >
            Favorite Recipes
          </button>
        </div>
        <div>
          <button
            type="button"
            data-testid="profile-logout-btn"
            className=" profile-btn btn btn-dark"
            onClick={ handleLogout }
          >
            Logout
          </button>
        </div>
      </div>
      <BottomMenu />
    </div>
  );
};

export default Profile;
