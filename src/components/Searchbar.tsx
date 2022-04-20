import { useDispatch } from "react-redux";
import { changeSearch } from "lib";
import { SearchbarProps } from "types";

function Searchbar({ handleSearch }: SearchbarProps) {
  const dispatch = useDispatch();
  return (
    <form onSubmit={handleSearch} data-testid="search-bar">
      <input
        onChange={(e) => dispatch(changeSearch(e.target.value))}
        data-testid="input"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default Searchbar;
