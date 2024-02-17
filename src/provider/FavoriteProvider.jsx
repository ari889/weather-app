import { FavoriteContext } from "../context";
import useLoalStorage from "../hooks/useLocalStorage";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLoalStorage("favorites", []);

  const addToFavorites = (latitude, longitude, location) => {
    setFavorites([
      ...favorites,
      {
        latitude,
        longitude,
        location,
      },
    ]);
  };

  const removeFavorite = (location) => {
    setFavorites(
      favorites.filter((favorite) => favorite.location !== location)
    );
  };

  return (
    <FavoriteContext.Provider
      value={{ addToFavorites, removeFavorite, favorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
