import ExplorerCategories from "./explorerCategories";
const categories = [
  {
    name: "Juegos",
    urlImage: "https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg",
  },
  {
    name: "Irl",
    urlImage: "https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg",
  },
  {
    name: "Musica y DJ",
    urlImage: "https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg",
  },
  {
    name: "Creative",
    urlImage: "https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg",
  },
  {
    name: "E-sports",
    urlImage: "https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg",
  },
];
function ExplorerArea() {
  return (
    <div className="w-full bg-[#f7f7f8] p-6">
      <h2 className="text-4xl font-bold">EXPLORAR</h2>
      <div className="grid grid-cols-2 gap-3 mt-4 sm:grid-cols-5">
        {categories.map((categorie, index) => {
          return (
            <ExplorerCategories
              key={`Categorie-${index}`}
              name={categorie.name}
              url={categorie.urlImage}
            ></ExplorerCategories>
          );
        })}
      </div>
    </div>
  );
}

export default ExplorerArea;
