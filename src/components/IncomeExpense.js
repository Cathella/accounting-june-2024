import { ChevronDown } from 'lucide-react';

function StatCard({ color, amount, title }) {
  return (
    <div className="flex flex-col">
      <div className={`flex flex-col justify-center rounded-lg ${color} bg-opacity-10`}>
        <div className={`shrink-0 h-2 ${color} rounded-lg`} />
      </div>
      <div className="mt-2 text-base font-semibold leading-6 text-neutral-600">{amount}</div>
      <div className="text-sm text-neutral-600">{title}</div>
    </div>
  );
}

function IncomeExpense() {
  const stats = [
    { color: "bg-dirt-green", amount: "$100,000", title: "Income" },
    { color: "bg-dark-blue", amount: "$21,000", title: "Expenses" },
  ];

  return (
    <section className="flex flex-col justify-between px-6 py-5 bg-white rounded-3xl w-full lg:w-[49%]">
      <header className="flex gap-5 justify-between">
        <h1 className="my-auto text-base font-semibold leading-6 txt-color-blue">Income and Expenses</h1>
        <div className="flex gap-2 px-4 py-2 text-xs font-medium tracking-wide uppercase rounded-3xl bg-stone-100 text-neutral-600">
          <span className="my-auto">Last 30 days</span>
          <ChevronDown />
        </div>
      </header>
      <div className="self-start mt-4 text-2xl font-semibold capitalize text-neutral-600">$42,000</div>
      <p className="self-start text-sm text-neutral-400">Net income for the last 30 days</p>
      <section className="flex flex-col md:flex-row gap-4 justify-between mt-5">
        {stats.map((stat, index) => (
          <StatCard key={index} color={stat.color} amount={stat.amount} title={stat.title} />
        ))}
      </section>
    </section>
  );
}

export default IncomeExpense;