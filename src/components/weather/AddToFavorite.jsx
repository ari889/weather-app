import { useContext, useEffect, useState } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartLogo from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../context";
const AddToFavorite = () => {
  const { addToFavorites, removeFavorite, favorites } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);
  const [isFavorite, toggleFavorite] = useState(false);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    toggleFavorite(found);
  }, []);

  const handleFavorite = () => {
    const found = favorites.find((fav) => fav.location === location);
    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFavorite(location);
    }
    toggleFavorite((prevState) => !prevState);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavorite ? RedHeartIcon : HeartLogo} alt="" />
        </button>
      </div>
    </div>
  );
};
export default AddToFavorite;
