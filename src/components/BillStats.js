import * as React from "react";
import PropTypes from "prop-types";
import { ChevronDown } from 'lucide-react';

function StatBlock({ percentage, amount, status, color }) {
  const statusColor = status === "overdue" ? "text-orange-400" : (status === "paid" ? "txt-color-dirt-green" : "text-neutral-600");

  return (
    <div className="flex gap-5 justify-between mt-1">
      <div className={`justify-center items-start px-6 py-5 text-base font-semibold leading-6 text-white rounded bg-dark-blue max-md:px-5`}> 
        {percentage} 
      </div>
      <div className="flex flex-col my-auto">
        <div className={`text-base font-semibold leading-6 ${statusColor}`}> 
          {amount} 
        </div>
        <div className="self-start ml-3 text-xs font-medium tracking-wide uppercase text-neutral-400 max-md:ml-2.5"> 
          {status} 
        </div>
      </div>
    </div>
  );
}

StatBlock.propTypes = {
  percentage: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

function BillStats() {
  const statData = [
    { percentage: "20%", amount: "$200", status: "overdue", color: "text-orange-400" },
    { percentage: "38%", amount: "$900", status: "paid", color: "text-lime-400" },
    { percentage: "42%", amount: "$1,200", status: "unpaid", color: "text-neutral-600" }
  ];

  return (
    <section className="justify-between px-6 py-5 bg-white rounded-3xl max-w-[534px] max-md:px-5 card-width" tabIndex="0">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-neutral-600 max-md:mt-10">
            <h2 className="text-base leading-6 font-semibold txt-color-blue">Bill Stats</h2>
            <div className="flex gap-2 px-4 py-2 mt-2 text-xs font-medium tracking-wide uppercase rounded-3xl bg-stone-100 max-md:pr-5">
              <div className="my-auto">Last 30 days</div>
              <ChevronDown />
            </div>
            <p className="mt-9 text-2xl font-semibold capitalize">$1,920</p>
            <p className="text-sm text-neutral-400">Paid in the last 30 days</p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow mx-auto w-full whitespace-nowrap bg-white max-md:mt-10">
            {statData.map((stat, index) => (
              <StatBlock
                key={index}
                percentage={stat.percentage}
                amount={stat.amount}
                status={stat.status}
                color={stat.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BillStats;