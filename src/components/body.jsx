import Sidebar from "./sidebar";
import ExplorerArea from "./explorerArea";
function Body() {
  return (
    <div className="flex flex-row">
      <Sidebar></Sidebar>
      <ExplorerArea></ExplorerArea>
    </div>
  );
}

export default Body;
