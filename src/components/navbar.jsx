function Navbar() {
  return (
    <nav className="flex flex-row justify-between bg-white h-10 w-screen">
      <div className="ml-3 flex items-stretch space-x-8 ">
        <img src="/twitch.svg" alt="twitch-logo" className="p-2" />
        <div className="flex items-center border-b-2 border-[#5c16c5] font-bold">
          <a href="#" className="text-[#5c16c5] ">
            Explorar
          </a>
        </div>
        <img src="/dots.svg" alt="twitch-logo" className="p-3" />
      </div>
      <div className="bg-blue-50 items-center hidden sm:flex">
        <input
          type="text"
          placeholder=" Buscar"
          className="h-[2.2rem] border border-gray-500 rounded-l-lg  focus:border-green-500"
        />
        <button className="bg-gray-500 h-[2.2rem] p-2 text-md rounded-r-lg">
          🔍
        </button>
      </div>
      <div className="ml-3 flex items-stretch space-x-[0.2rem] bg-yellow-200">
        <img src="/noti.svg" alt="twitch-logo" className="p-[0.9rem]" />
        <img src="/noti.svg" alt="twitch-logo" className="p-[0.9rem]" />
        <img src="/noti.svg" alt="twitch-logo" className="p-[0.9rem]" />
      </div>
    </nav>
  );
}

export default Navbar;
