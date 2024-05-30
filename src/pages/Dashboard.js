import SideNav from '../components/SideNav';
import TopNav from '../components/TopNav';

function Dashboard() {
  return (
    <div className="flex w-full">
      <SideNav />
      <div className="w-9/12">
        <TopNav />
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard;
