import SideNav from "../components/SideNav";
import TopNav from "../components/TopNav";
import DashboardTitle from "../components/DashboardTitle";
import CurrentCashCard from "../components/CurrentCashCard";
import IncomeExpense from "../components/IncomeExpense";
import BillStats from "../components/BillStats";
import InvoiceStats from "../components/InvoiceStats";
import RecentTransactions from "../components/RecentTransactions";

function Dashboard() {

  return (
    <div className="flex flex-col md:flex-row w-full">
      <SideNav />
      <div className="w-full w-9/12">
        <TopNav />
        <div className="w-full flex justify-center">
          <div className="main-content bg-stone-100 pb-6">
            <DashboardTitle />
            <div className="flex flex-col md:flex-row flex-wrap justify-between gap-y-6 px-6">
              <CurrentCashCard />
              <IncomeExpense />
              <BillStats />
              <InvoiceStats />
              <RecentTransactions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
