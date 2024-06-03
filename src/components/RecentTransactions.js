import * as React from "react";
import PropTypes from "prop-types";
import { ChevronDown } from 'lucide-react';

const TransactionRow = ({ status, description, amount, date }) => (
  <tr className="text-base leading-6 text-neutral-600 border-b">
    <td style={{width: '20%'}} className={`flex gap-4 my-auto text-xs py-4 pl-2 font-medium tracking-wide uppercase whitespace-nowrap bg-white ${status.textColor}`}>
      <div className={`justify-center px-3 py-1 rounded-xl ${status.bgColor}`}>
        {status.label}
      </div>
    </td>
    <td style={{width: '40%'}} className="bg-white py-4">{description}</td>
    <td style={{width: '15%'}} className="font-semibold whitespace-nowrap bg-white py-4">{amount}</td>
    <td style={{width: '25%'}} className="bg-white py-4">{date}</td>
  </tr>
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

function RecentTransactions() {
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
      <table className="w-full mt-2 rounded-3xl max-md:w-full">
        <thead className="text-left text-neutral-600 bg-stone-100 text-xs font-medium uppercase">
          <tr>
            <th style={{width: '20%'}} scope="col" className="py-4 pl-2">Status</th>
            <th style={{width: '40%'}} scope="col" className="py-4">Description</th>
            <th style={{width: '15%'}} scope="col" className="py-4">Amount</th>
            <th style={{width: '25%'}} scope="col" className="py-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <TransactionRow key={index} {...transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentTransactions;