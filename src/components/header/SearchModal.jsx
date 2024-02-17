import { useContext } from "react";
import { FavoriteContext, LocationContext } from "../../context";

const SearchModal = () => {
  const { favorites } = useContext(FavoriteContext);
  const { setSelectedLocation } = useContext(LocationContext);
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favorites?.length ? (
          favorites?.map((fav) => (
            <li
              key={fav?.location}
              onClick={() => setSelectedLocation(fav)}
              className="hover:bg-gray-200"
            >
              {fav?.location}
            </li>
          ))
        ) : (
          <p>Nothing is Added to Favorites!</p>
        )}
      </ul>
    </div>
  );
};
export default SearchModal;
