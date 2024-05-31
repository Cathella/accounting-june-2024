import SideNav from "../../components/SideNav";
import TopNav from "../../components/TopNav";
import { Plus } from 'lucide-react';
import Button from "../../components/Button";

function Bills() {
    return (
      <div className="flex">
        <SideNav />
        <div className="w-9/12">
          <TopNav />
          <div className="w-full flex justify-center">
            <div className="main-content bg-stone-100 pb-6">
              <div className="flex gap-5 justify-between px-6 py-6 font-semibold">
                <div className="text-4xl text-neutral-600">Bills</div>
                  <Button className="flex text-white bg-dark-blue py-3 pr-8 pl-5 gap-2 font-semibold rounded-full">
                    <Plus className="shrink-0 self-start aspect-square" />
                    Create Bill
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Bills;
  