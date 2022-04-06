import axios from "axios";
import { CustomGif } from "components";
import { useEffect, useState } from "react";

function Trending() {
  const [responseData, setResponseData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: process.env.REACT_APP_GIPHY_KEY,
          limit: 10,
        },
      })
      .then((res) => setResponseData(res.data.data));
  }, []);

  return (
    <div>
      <h1>Trending GIPHY Today</h1>
      {responseData.map((gif) => (
        <CustomGif
          key={gif.id}
          title={gif.title}
          url={gif.images.downsized.url}
        />
      ))}
    </div>
  );
}

export default Trending;
