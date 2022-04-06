import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { CustomGif, Searchbar } from "components";

function Search() {
  const [responseData, setResponseData] = useState([]);
  const { searchValue } = useSelector((state) => state.search);

  const handleSearch = useCallback(
    async (e) => {
      e.preventDefault();
      await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${searchValue}&limit=12`
      )
        .then((response) => response.json())
        .then((data) => setResponseData(data.data));
    },
    [searchValue]
  );

  return (
    <div>
      <div>
        <Searchbar handleSearch={handleSearch} />
        <div>
          {responseData.map((gif, index) => (
            <CustomGif
              key={index}
              title={gif.title}
              url={gif.images.original.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
