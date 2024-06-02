import * as React from "react";

function StatCard({ color, amount, title }) {
  return (
    <div className="flex flex-col">
      <div className={`flex flex-col justify-center rounded-lg ${color}-400 bg-opacity-10`}>
        <div className={`shrink-0 h-2 ${color}-400 rounded-lg`} />
      </div>
      <div className="mt-2 text-base font-semibold leading-6 text-neutral-600">{amount}</div>
      <div className="text-sm text-neutral-600">{title}</div>
    </div>
  );
}

function IncomeExpense() {
  const stats = [
    { color: "bg-lime", amount: "$100,000", title: "Income" },
    { color: "bg-red", amount: "$21,000", title: "Expenses" },
  ];

  return (
    <section className="flex flex-col justify-between px-6 py-4 bg-white rounded-3xl max-w-[534px] max-md:px-5 card-width">
      <header className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <h1 className="my-auto text-base font-semibold leading-6 text-slate-500">Income and Expenses</h1>
        <div className="flex gap-2 px-4 py-2 text-xs font-medium tracking-wide uppercase rounded-3xl bg-stone-100 text-neutral-600">
          <span className="my-auto">Last 30 days</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e230b7ea2d550bf640ca159225698ee7a5b604118e1c573aef0dfaf7895e4553?apiKey=27ec22b9382040ef8580a5e340d3a921&" alt="Calendar icon" className="shrink-0 w-5 aspect-square" />
        </div>
      </header>
      <div className="self-start mt-2 text-2xl font-semibold capitalize text-neutral-600">$42,000</div>
      <p className="self-start text-sm text-neutral-400">Net income for the last 30 days</p>
      <section className="flex gap-4 justify-between mt-4 max-md:flex-wrap max-md:max-w-full">
        {stats.map((stat, index) => (
          <StatCard key={index} color={stat.color} amount={stat.amount} title={stat.title} />
        ))}
      </section>
    </section>
  );
}

export default IncomeExpense;