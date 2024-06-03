import { ChevronDown } from 'lucide-react';

function InvoiceStat({ percentage, amount, status, color, textColor }) {
  return (
    <div className="flex gap-5 justify-between mt-1">
      <div className="justify-center items-start px-6 py-5 text-base font-semibold leading-6 text-white rounded-tr-full rounded-br-full bg-dark-blue max-md:px-5" style={{ backgroundColor: color }}>
        {percentage}%
      </div>
      <div className="flex flex-col my-auto text-end">
        <div className="text-base font-semibold leading-6" style={{ color: textColor }}>
          {amount}
        </div>
        <div className="text-xs font-medium tracking-wide uppercase text-neutral-400">
          {status}
        </div>
      </div>
    </div>
  );
}

function InvoiceStats() {
  return (
    <section className="justify-between px-6 py-5 bg-white rounded-3xl w-full lg:w-[49%]">
      <div className="flex flex-col gap-5 xl:flex-row xl:justify-between">
        <div className="flex justify-between items-end lg:flex-col lg:items-start lg:gap-3">
          <div className="flex flex-col text-neutral-600">
            <h2 className="text-base leading-6 font-semibold txt-color-blue">Invoice Stats</h2>
            <div className="flex gap-2 px-4 py-2 mt-2 text-xs font-medium tracking-wide uppercase rounded-3xl bg-stone-100 max-md:pr-5">
              <div className="my-auto">Last 30 days</div>
              <ChevronDown />
            </div>
          </div>
          <div>
            <div className="text-2xl capitalize font-semibold text-neutral-600">$5,020</div>
            <div className="text-sm text-neutral-400">Received in the last 30 days</div>
          </div>
        </div>
        <div className="flex flex-col max-md:ml-0">
          <div className="flex flex-col grow mx-auto w-full whitespace-nowrap bg-white max-md:mt-10">
            <InvoiceStat percentage={12} amount="$900" status="overdue" color="#9EC137" textColor="#F97316" />
            <InvoiceStat percentage={64} amount="$2,800" status="paid" color="#9EC137" textColor="#9EC137" />
            <InvoiceStat percentage={24} amount="$1,100" status="unpaid" color="#9EC137" textColor="#1E293B" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvoiceStats;