import { CustomGif } from "components";
import { gifData } from "mock";

function Home() {
  return (
    <div>
      {gifData
        .filter((item) => item.rating === "g")
        .map((gif) => (
          <CustomGif key={gif.id} title={gif.title} url={gif.url} />
        ))}
    </div>
  );
}

export default Home;
