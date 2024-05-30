import { LayoutDashboard, Files, ArrowRightLeft, Users, CreditCard, ReceiptText, FileText, FolderClosed, Settings, ChevronDown } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function SideNav() {
      const location = useLocation();
      const [isOpen, setIsOpen] = useState(false);

      const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

      return (
        <div className="flex flex-col max-w-[240px]">
          <div className="flex justify-center items-center px-16 py-4 w-full bg-white">
            <img
              loading="lazy"
              src="../../img/logo.svg"
              className="aspect-[1.25] w-[87px]"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-5 w-full text-base leading-6 rounded-none bg-stone-100 text-neutral-400">
            <div className="text-xs font-medium tracking-wide uppercase">
              You are managing:
            </div>
            <div className="justify-center items-start px-4 py-3 mt-3 font-semibold bg-white rounded-xl text-slate-500">
              LedgerMate Inc
            </div>
            <div className="shrink-0 mt-6 h-px border border-solid bg-neutral-500 bg-opacity-10 border-neutral-500 border-opacity-10" />
            <div className="mt-7 text-xs font-medium tracking-wide uppercase">
              main menu
            </div>
            <div
              className={`flex gap-2 py-3 mt-3 whitespace-nowrap rounded-xl ${
                location.pathname === "/" ? "bg-blue-500 text-white px-4" : "bg-none"
              }`}
            >
              <LayoutDashboard className="shrink-0 self-start w-6 aspect-square" />
              <Link to="/">Dashboard</Link>
            </div>
            <div
              className={`flex gap-2 justify-between py-3 mt-2 rounded-xl ${
                location.pathname === "/chart-of-accounts"
                  ? "bg-blue-500 text-white  px-4"
                  : "bg-none"
              }`}
            >
              <div className="flex gap-2">
                <Files className="shrink-0 self-start w-6 aspect-square" />
                <div>
                  <Link to="/chart-of-accounts">Chart of Accounts</Link>
                </div>
              </div>
              <ChevronDown className="shrink-0 self-start w-6 aspect-square" />
            </div>
            <div
              className={`flex gap-2 py-3 mt-2 whitespace-nowrap rounded-xl ${
                location.pathname === "/transactions"
                  ? "bg-blue-500 text-white  px-4"
                  : "bg-none"
              }`}
            >
              <ArrowRightLeft className="shrink-0 self-start w-6 aspect-square" />
              <Link to="/transactions">Transactions</Link>
            </div>
            <div
              className={`flex gap-2 justify-between py-3 mt-2 w-full whitespace-nowrap rounded-xl ${
                location.pathname === "/people"
                  ? "bg-blue-500 text-white px-4"
                  : "bg-none"
              }`}
            >
              <div className="flex gap-2">
                <Users className="shrink-0 self-start w-6 aspect-square" />
                <Link to="/people">People</Link>
              </div>
              <ChevronDown className="shrink-0 self-start w-6 aspect-square" />
            </div>
            <div
              className={`flex gap-2 justify-between py-3 mt-2 rounded-xl ${
                location.pathname === "/bills-invoices"
                  ? "bg-blue-500 text-white px-4"
                  : "bg-none"
              }`}
            >
              <div className="flex gap-2">
                <ReceiptText className="shrink-0 self-start w-6 aspect-square" />
                <Link to="/bills-invoices">Bills & invoices</Link>
              </div>
              <ChevronDown className="shrink-0 self-start w-6 aspect-square" />
            </div>
            <div
              className={`flex gap-2 py-3 mt-2 whitespace-nowrap rounded-xl ${
                location.pathname === "/reports"
                  ? "bg-blue-500 text-white px-4"
                  : "bg-none"
              }`}
            >
              <FolderClosed className="shrink-0 self-start w-6 aspect-square" />
              <Link to="/reports">Reports</Link>
            </div>
            <div
              className={`flex gap-2 px-4 py-3 mt-60 whitespace-nowrap rounded-xl ${
                location.pathname === "/settings"
                  ? "bg-blue-500 text-white"
                  : "bg-white"
              }`}
            >
              <Settings className="shrink-0 self-start w-6 aspect-square" />
              <Link to="/settings">Settings</Link>
            </div>
          </div>
        </div>
      );
}

export default SideNav;
