import ChanelItem from "./chanelItem";

const chanels = [
  { name: "Primeroydiez" },
  { name: "uliseArada" },
  { name: "OtroChanel" },
];

function Sidebar() {
  return (
    <aside className="max-w-[18rem]  bg-[#efeff1] pl-5 flex flex-col space-y-4 pr-2 h-screen">
      <div className="flex justify-between mt-2">
        <h4 className="text-lg font-bold hidden sm:block">Para ti</h4>
        <button>
          <img src="./noti.svg" alt="" className="w-6 hidden sm:block" />
        </button>
      </div>
      <div className="flex justify-between">
        <h6 className="text-xs font-semibold hidden sm:block">
          CANALES QUE SIGO
        </h6>
        <button>
          <img src="./noti.svg" alt="" className="w-6 hidden sm:block" />
        </button>
      </div>
      {chanels.map((chanel, index) => {
        return (
          <ChanelItem key={`Chanel-${index}`} name={chanel.name}></ChanelItem>
        );
      })}
      <div className="flex justify-between pt-1">
        <h6 className="text-xs font-semibold hidden sm:block">
          CANALES RECOMENDADOS
        </h6>
      </div>
      {chanels.map((chanel, index) => {
        return (
          <ChanelItem key={`Chanel-${index}`} name={chanel.name}></ChanelItem>
        );
      })}
    </aside>
  );
}

export default Sidebar;
