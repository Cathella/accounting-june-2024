import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Groups from './pages/accounts/Groups';
import Subgroups from './pages/accounts/Subgroups';
import Accounts from './pages/accounts/Accounts';
import Transactions from './pages/Transactions';
import Customers from './pages/people/Customers';
import Vendors from './pages/people/Vendors';
import Invoices from './pages/bills/Invoices';
import Bills from './pages/bills/Bills';
import Reports from './pages/reports/Reports';
import AccountStatements from './pages/reports/AccountStatements';
import BalanceSheets from './pages/reports/BalanceSheets';
import TrialBalance from './pages/reports/TrialBalance';
import UserActivity from './pages/reports/UserActivity';
import Settings from './pages/Settings';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Profile from './pages/onboarding/Profile';
import Company from './pages/onboarding/Company';
import InviteUsers from './pages/onboarding/InviteUsers';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/subgroups" element={<Subgroups />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/account_statements" element={<AccountStatements />} />
        <Route path="/reports/balance_sheets" element={<BalanceSheets />} />
        <Route path="/reports/trial_balance" element={<TrialBalance />} />
        <Route path="/reports/user_activity" element={<UserActivity />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot_password" element={<ForgotPassword />} />
        <Route path="/auth/reset_password" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/company" element={<Company />} />
        <Route path="/invite_users" element={<InviteUsers />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
