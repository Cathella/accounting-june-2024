import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import TopNav from "../../components/TopNav";

function Groups() {
  return (
    <div className="flex w-full">
      <SideNav />
      <div className="w-9/12 flex flex-col">
        <TopNav />
        <div className="w-full flex justify-center">
          <div className="main-content bg-stone-100">
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
