import { Plus } from 'lucide-react';
import SideNav from "../../components/SideNav";
import TopNav from "../../components/TopNav";
import Button from "../../components/Button";
import GroupCard from '../../components/GroupCard';

function Groups() {
  return (
    <div className="flex w-full">
      <SideNav />
      <div className="w-9/12 flex flex-col h-screen scroll-auto">
        <TopNav />
        <div className="w-full flex justify-center">
          <div className="main-content bg-stone-100 pb-6">
            <div className="flex justify-between px-6 py-6 font-semibold">
              <div className="text-4xl text-neutral-600">Groups</div>
              <Button className="flex text-white bg-dark-blue py-3 pr-8 pl-5 gap-2 font-semibold rounded-full">
                <Plus className="shrink-0 self-start aspect-square" />
                Create Group
              </Button>
            </div>
            <div className="flex flex-wrap justify-between gap-y-6 px-6">
              <GroupCard />
              <GroupCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Groups;
