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
      <div className="grid grid-cols-2 gap-3 mt-4 lg:grid-cols-5">
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
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-7 mt-5">
        <div className="flex flex-col space-y-1">
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"
            alt=""
          />
          <div className="flex flex-row justify-between">
            <h2 className="font-bold">Just chatting</h2>
            <p>icon</p>
          </div>
          <p className="text-gray-500 text-sm">202K viewers</p>
          <div className="flex flex-row">
            <button className="bg-blue-950 text-white pl-4 pr-4 rounded-full">
              Irl
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"
            alt=""
          />
          <div className="flex flex-row justify-between">
            <h2 className="font-bold">Just chatting</h2>
            <p>icon</p>
          </div>
          <p className="text-gray-500 text-sm">202K viewers</p>
          <div className="flex flex-row">
            <button className="bg-blue-950 text-white pl-4 pr-4 rounded-full">
              Irl
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"
            alt=""
          />
          <div className="flex flex-row justify-between">
            <h2 className="font-bold">Just chatting</h2>
            <p>icon</p>
          </div>
          <p className="text-gray-500 text-sm">202K viewers</p>
          <div className="flex flex-row">
            <button className="bg-blue-950 text-white pl-4 pr-4 rounded-full">
              Irl
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"
            alt=""
          />
          <div className="flex flex-row justify-between">
            <h2 className="font-bold">Just chatting</h2>
            <p>icon</p>
          </div>
          <p className="text-gray-500 text-sm">202K viewers</p>
          <div className="flex flex-row">
            <button className="bg-blue-950 text-white pl-4 pr-4 rounded-full">
              Irl
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"
            alt=""
          />
          <div className="flex flex-row justify-between">
            <h2 className="font-bold">Just chatting</h2>
            <p>icon</p>
          </div>
          <p className="text-gray-500 text-sm">202K viewers</p>
          <div className="flex flex-row">
            <button className="bg-blue-950 text-white pl-4 pr-4 rounded-full">
              Irl
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"
            alt=""
          />
          <div className="flex flex-row justify-between">
            <h2 className="font-bold">Just chatting</h2>
            <p>icon</p>
          </div>
          <p className="text-gray-500 text-sm">202K viewers</p>
          <div className="flex flex-row">
            <button className="bg-blue-950 text-white pl-4 pr-4 rounded-full">
              Irl
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg"
            alt=""
          />
          <div className="flex flex-row justify-between">
            <h2 className="font-bold">Just chatting</h2>
            <p>icon</p>
          </div>
          <p className="text-gray-500 text-sm">202K viewers</p>
          <div className="flex flex-row">
            <button className="bg-blue-950 text-white pl-4 pr-4 rounded-full">
              Irl
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplorerArea;
