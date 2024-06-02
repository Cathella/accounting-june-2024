import * as React from "react";

function AccountFilter({ title, src, alt }) {
  return (
    <div className="flex gap-4 justify-between py-3 pr-4 pl-6 whitespace-nowrap rounded-3xl border border-solid border-neutral-500 border-opacity-30">
      <div>{title}</div>
      <img loading="lazy" src={src} alt={alt} className="shrink-0 self-start w-6 aspect-square" />
    </div>
  );
}

function TransactionRow({ refNo, date, description, amount, balance }) {
  return (
    <>
      <div className="flex gap-5 justify-between px-6 py-3 mt-2 text-base leading-6 rounded-3xl text-neutral-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="whitespace-nowrap bg-white">{refNo}</div>
        <div className="bg-white">{date}</div>
        <div className="text-ellipsis">{description}</div>
        <div className="font-semibold whitespace-nowrap bg-white">{amount}</div>
        <div className="font-semibold whitespace-nowrap bg-white">{balance}</div>
      </div>
      <div className="shrink-0 mt-2 h-px border border-solid bg-neutral-500 bg-opacity-10 border-neutral-500 border-opacity-10 max-md:max-w-full" />
    </>
  );
}

function Pagination() {
  return (
    <div className="flex gap-5 justify-between px-6 py-3 mt-2 text-base leading-6 rounded-3xl text-neutral-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="justify-center whitespace-nowrap bg-white">#50467</div>
      <div className="justify-center bg-white">5th May, 2024</div>
      <div className="text-ellipsis"> Pay Smart TV Screen for developer presentations </div>
      <div className="justify-center font-semibold whitespace-nowrap bg-white"> $1,000 </div>
      <div className="justify-center font-semibold whitespace-nowrap bg-white"> $1,000 </div>
    </div>
  );
}

function StatementsData() {
  const transactions = [
    {
      refNo: "#50467",
      date: "5th May, 2024",
      description: "Pay Smart TV Screen for developer presentations",
      amount: "$1,000",
      balance: "$1,000",
    },
    // Add more transaction objects as needed
  ];

  return (
    <div className="flex flex-col p-6 bg-white rounded-3xl mx-6 mt-6 max-md:px-5">
      <header className="flex gap-2 justify-between w-full text-base leading-6 max-md:flex-wrap max-md:max-w-full">
        <nav className="flex gap-5 justify-between text-neutral-400 max-md:flex-wrap">
          <div className="flex gap-2 justify-between py-3 pr-4 pl-6 rounded-3xl border border-solid border-neutral-500 border-opacity-10 text-neutral-600">
            <div>All Accounts</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8721aa8c44b81e6b2348dce4fb02570aeacf025a99ab01d6575684f8de43c45?apiKey=27ec22b9382040ef8580a5e340d3a921&" alt="" className="shrink-0 self-start w-6 aspect-square" />
          </div>
          <AccountFilter title="From" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7515d0e48a8702b0a75494e4c7e35f39776b5b1f5e110f501c8205396c6041?apiKey=27ec22b9382040ef8580a5e340d3a921&" alt="" />
          <AccountFilter title="To" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c7515d0e48a8702b0a75494e4c7e35f39776b5b1f5e110f501c8205396c6041?apiKey=27ec22b9382040ef8580a5e340d3a921&" alt="" />
        </nav>
        <button className="flex gap-2 px-6 py-3 font-semibold text-white whitespace-nowrap rounded-3xl bg-slate-500 max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db10bbbfea74ab4d6421f41550d261f3b0fc63c181014f826d06ba56fed8a5c?apiKey=27ec22b9382040ef8580a5e340d3a921&" alt="" className="shrink-0 self-start w-6 aspect-square" />
          <div>Export</div>
        </button>
      </header>
      <section className="flex gap-5 justify-between px-6 py-4 mt-4 w-full text-xs font-medium tracking-wide uppercase rounded-3xl bg-stone-100 text-neutral-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between">
          <div>ref no.</div>
          <div>Date</div>
          <div>description</div>
        </div>
        <div className="flex gap-5 justify-between">
          <div>Amount</div>
          <div>running balance</div>
        </div>
      </section>
      {transactions.map((transaction, index) => (
        <TransactionRow
          key={index}
          refNo={transaction.refNo}
          date={transaction.date}
          description={transaction.description}
          amount={transaction.amount}
          balance={transaction.balance}
        />
      ))}
      <div className="flex gap-2 justify-between mt-4 w-full bg-white max-md:flex-wrap max-md:max-w-full">
        <div className="my-auto text-base leading-6 text-neutral-400"> Showing 1 - 10 of 150 </div>
        <nav className="flex gap-2">
          <div className="flex justify-center items-center px-4 w-12 h-12 rounded-3xl bg-stone-100">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff1835eab83aaba4b3b28c08f4efdfa5b5b13efe57cf4ba87e34e28be72ba65d?apiKey=27ec22b9382040ef8580a5e340d3a921&" alt="" className="w-6 aspect-square" />
          </div>
          <button className="flex justify-center items-center px-4 w-12 h-12 text-base font-semibold leading-6 text-white whitespace-nowrap rounded-3xl bg-slate-500 max-md:px-5"> 1 </button>
          <button className="flex justify-center items-start px-4 py-3 text-base font-semibold leading-6 whitespace-nowrap rounded-3xl border border-solid border-neutral-500 border-opacity-10 text-neutral-400"> 2 </button>
          <button className="flex justify-center items-center px-4 py-3 rounded-3xl border border-solid border-neutral-500 border-opacity-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c19c09b34073900dfacfc3a10ceab301e637c63c0b80eb00f201bc01a698a5ef?apiKey=27ec22b9382040ef8580a5e340d3a921&" alt="" className="w-6 aspect-square" />
          </button>
          <button className="flex justify-center px-4 py-3 text-base font-semibold leading-6 whitespace-nowrap rounded-3xl border border-solid border-neutral-500 border-opacity-10 text-neutral-400"> 9 </button>
          <div className="flex justify-center items-center px-4 w-12 h-12 rounded-3xl bg-stone-100">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5638cce5b32f789274ceeb5d277945e2b48f65a50c7c69d40aaa318a0cb3751a?apiKey=27ec22b9382040ef8580a5e340d3a921&" alt="" className="w-6 aspect-square" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default StatementsData;