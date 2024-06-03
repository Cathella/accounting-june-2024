import * as React from "react";
import PropTypes from "prop-types";
import { ChevronDown } from 'lucide-react';

const TransactionRow = ({ status, description, amount, date }) => (
  <div className="flex gap-3.5 justify-between px-6 py-3 mt-2 text-base leading-6 rounded-3xl text-neutral-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
    <div
      className={`flex gap-4 my-auto text-xs font-medium tracking-wide uppercase whitespace-nowrap bg-white ${
        status.textColor
      }`}
    >
      <div className="shrink-0 self-start w-5 h-5 bg-white rounded border-2 border-solid border-neutral-500 border-opacity-10"></div>
      <div className={`justify-center px-3 py-1 rounded-xl ${status.bgColor}`}>
        {status.label}
      </div>
    </div>
    <div className="justify-center bg-white">{description}</div>
    <div className="justify-center items-end px-16 font-semibold whitespace-nowrap bg-white">
      {amount}
    </div>
    <div className="justify-center items-end px-16 bg-white">{date}</div>
  </div>
);

TransactionRow.propTypes = {
  status: PropTypes.shape({
    label: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

const transactions = [
  {
    status: { label: "PAID", textColor: "text-lime-400", bgColor: "bg-lime-400 bg-opacity-10" },
    description: "Deposit to Acme Inc.",
    amount: "$1,000",
    date: "5th May, 2024",
  },
  {
    status: { label: "OVERDUE", textColor: "text-orange-400", bgColor: "bg-orange-400 bg-opacity-10" },
    description: "Payment to Utility company",
    amount: "$150",
    date: "3rd May, 2024",
  },
  {
    status: { label: "UNPAID", textColor: "text-neutral-400", bgColor: "bg-stone-100" },
    description: "Transfer to Savings account",
    amount: "$500",
    date: "1st May, 2024",
  },
  {
    status: { label: "PAID", textColor: "text-lime-400", bgColor: "bg-lime-400 bg-opacity-10" },
    description: "Payment for Office supplies",
    amount: "$200",
    date: "28th Apr, 2024",
  },
  {
    status: { label: "PAID", textColor: "text-lime-400", bgColor: "bg-lime-400 bg-opacity-10" },
    description: "Payment to Marketing agency",
    amount: "$300",
    date: "25th Apr, 2024",
  },
];

function RecentTransactions() {
  return (
    <div className="flex flex-col px-6 py-4 bg-white rounded-3xl max-md:px-5 w-full">
      <header className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <h2 className="my-auto text-base font-semibold leading-6 txt-color-blue">
          Recent Transactions
        </h2>
        <div className="flex gap-2 px-4 py-2 text-xs font-medium tracking-wide uppercase rounded-3xl bg-stone-100 text-neutral-600">
          <div className="my-auto">last 5</div>
          <ChevronDown />
        </div>
      </header>
      <section className="flex gap-5 justify-between px-6 py-3.5 mt-4 w-full text-xs font-medium tracking-wide uppercase whitespace-nowrap rounded-3xl bg-stone-100 text-neutral-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex flex-1 gap-3.5">
          <div className="flex gap-4">
            <div className="shrink-0 w-5 h-5 bg-white rounded border-2 border-solid border-neutral-500 border-opacity-10"></div>
            <div className="my-auto">Status</div>
          </div>
          <div className="my-auto">Transaction</div>
        </div>
        <div className="flex flex-1 gap-5 justify-between my-auto">
          <div>Amount</div>
          <div>Date</div>
        </div>
      </section>
      {transactions.map((transaction, index) => (
        <React.Fragment key={index}>
          <TransactionRow {...transaction} />
          {index < transactions.length - 1 && (
            <hr className="shrink-0 mt-2 h-px border border-solid bg-neutral-500 bg-opacity-10 border-neutral-500 border-opacity-10 max-md:max-w-full" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default RecentTransactions;