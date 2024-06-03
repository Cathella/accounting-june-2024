function CashBalanceInfo() {
  return (
    <section className="flex flex-col grow justify-between text-sm text-neutral-400 max-md:mt-10">
      <p className="text-2xl capitalize font-semibold text-neutral-600">$25,000</p>
      <p>Current cash Balance</p>
      <p className="mt-20 text-base leading-6 font-semibold txt-color-dirt-green max-md:mt-10">+8.7% more</p>
      <p>From last month</p>
    </section>
  );
}

function CashBalanceImage() {
  return (
    <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c1c0d57e8cc313fa2a79c020facead4ad1b18cc54a9bf7c958444b6759160d2?apiKey=27ec22b9382040ef8580a5e340d3a921&" alt="" className="grow mt-16 w-full aspect-[2.78] max-md:mt-10" />
    </div>
  );
}

function CurrentCashCard() {
  return (
    <div className="justify-between px-6 py-4 bg-white rounded-3xl w-full lg:w-[49%]">
      <div className="flex gap-5">
        <div className="flex flex-col w-[36%]">
          <CashBalanceInfo />
        </div>
        <CashBalanceImage />
      </div>
    </div>
  );
}

export default CurrentCashCard;