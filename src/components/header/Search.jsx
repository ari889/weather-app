import { useContext } from "react";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks/useDebounce";
const Search = () => {
  const { setSelectedLocation } = useContext(LocationContext);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (searchTerm) {
  //     const fetchLocation = getLocationByName(searchTerm);
  //     setSelectedLocation(fetchLocation);
  //   }
  // };

  const doSearch = useDebounce((term) => {
    if (term) {
      const fetchLocation = getLocationByName(term);
      setSelectedLocation(fetchLocation);
    }
  }, 1000);

  const handleChange = (e) => {
    doSearch(e.target.value);
  };

  return (
    <form>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search Location"
          onChange={handleChange}
          required
        />
      </div>
    </form>
  );
};
export default Search;
