import ReportsNav from "../../components/ReportsNav";
import SideNav from "../../components/SideNav";
import TopNav from "../../components/TopNav";

function Reports() {
    return (
      <div className="flex">
        <SideNav />
        <div className="w-9/12">
          <TopNav />
          <div className="w-full flex justify-center">
            <div className="main-content bg-stone-100 pb-6">
              <div className="flex py-6 flex-col items-start px-6 max-md:px-5">
                <div className="text-4xl font-semibold leading-[57.6px] text-neutral-600">
                  Reports
                </div>
              </div>
              <ReportsNav />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Reports;
  