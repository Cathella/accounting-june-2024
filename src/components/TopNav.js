import { Plus, BellDot, ChevronDown, Menu } from 'lucide-react';
import { useState } from "react";
import MobileNav from './MobileNav';

function TopNav() {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div className="flex flex-col xl:items-end py-3 px-8 justify-center bg-white">
      <div className="flex justify-between">
        <button className="bg-stone-100 py-3 px-3 rounded-full text-neutral-600 xl:hidden" onClick={toggleNav}>
          <Menu />
        </button>
        <MobileNav isNavVisible={isNavVisible} />
        <div className="flex gap-4 ">
          <button className="flex text-white bg-dirt-green py-3 pr-8 pl-5 gap-2 font-semibold rounded-full hidden sm:flex">
            <Plus className="shrink-0 self-start aspect-square" />
            <span>New Entry</span>
          </button>
          <button className="bg-stone-100 py-3 px-3 rounded-full text-neutral-600">
              <BellDot />
          </button>
          <button className="flex gap-2 items-center bg-stone-100 px-2 rounded-full text-neutral-600">
            <div className="flex gap-2">
              <img
                loading="lazy"
                src="../../img/profile-pic.svg"
                className="shrink-0 w-10 aspect-square"
              />
              <div className="my-auto">Nakitto Catherine</div>
            </div>
            <ChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopNav;

