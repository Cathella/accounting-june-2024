import * as React from "react";

const Card = ({ children }) => (
  <section className="justify-center px-6 py-4 bg-white rounded-lg max-md:px-5">
    {children}
  </section>
);

const ReportsNav = () => (
  <div className="flex gap-5 pr-20 text-base font-semibold leading-6 text-neutral-400 max-md:flex-wrap max-md:pr-5">
    <Card>
      <span className="text-slate-500">Account Statements</span>
    </Card>
    <Card>
      <span className="items-start">Balance Sheets</span>
    </Card>
    <Card>
      <span className="items-start">Trial Balance</span>
    </Card>
    <Card>
      <span className="items-start">User Activity</span>
    </Card>
  </div>
);

export default ReportsNav;