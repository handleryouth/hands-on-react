import { useDispatch } from "react-redux";
import { changeSearch } from "lib";

function Searchbar({ handleSearch }) {
  const dispatch = useDispatch();
  return (
    <form onSubmit={handleSearch}>
      <input onChange={(e) => dispatch(changeSearch(e.target.value))} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Searchbar;
