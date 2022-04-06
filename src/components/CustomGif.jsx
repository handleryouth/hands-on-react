function Gif({ url, title }) {
  return (
    <div>
      <img src={url} alt="Gif Animation" />
      <p>{title}</p>
    </div>
  );
}

export default Gif;
