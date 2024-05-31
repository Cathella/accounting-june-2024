import Button from "./Button";
import { Plus } from 'lucide-react';

function Header() {
  return (
    <div className="flex gap-5 justify-between px-6 py-6 font-semibold">
      <div className="text-4xl text-neutral-600">Groups</div>
        <Button className="flex text-white bg-dark-blue py-3 pr-8 pl-5 gap-2 font-semibold rounded-full">
          <Plus className="shrink-0 self-start aspect-square" />
          Create Group
        </Button>
    </div>
  );
}

export default Header;
