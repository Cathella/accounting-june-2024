function ReportsNav() {
  return (
    <div className="flex gap-5 px-6 text-base font-semibold leading-6 text-neutral-400 max-md:flex-wrap max-md:pr-5">
      <div className="justify-center px-6 py-4 bg-white rounded-lg text-slate-500 max-md:px-5">
        Account Statements
      </div>
      <div className="justify-center items-start px-6 py-4 bg-white rounded-lg max-md:px-5">
        Balance Sheets
      </div>
      <div className="justify-center items-start px-6 py-4 bg-white rounded-lg max-md:px-5">
        Trial Balance
      </div>
      <div className="justify-center items-start px-6 py-4 bg-white rounded-lg max-md:px-5">
        User Activity
      </div>
    </div>
  );
}

export default ReportsNav;
