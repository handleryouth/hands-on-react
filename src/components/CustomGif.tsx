import { GifProps } from "types";

function Gif({ url, title }: GifProps) {
  return (
    <div data-testid="Gif">
      <img src={url} alt="Gif Animation" />
      <p>{title}</p>
    </div>
  );
}

export default Gif;
