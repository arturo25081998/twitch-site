export default function ExplorerCategories(props) {
  return (
    <div className="flex justify-between bg-[#5c16c5] rounded-md items-center w-full hover:bg-indigo-500 hover:cursor-pointer">
      <h2 className=" font-bold text-3xl text-white ml-2">{props.name}</h2>
      <img src={props.url} alt="" className="pr-3" />
    </div>
  );
}
