import * as React from "react";

function Icon({ src, alt }) {
  return (
    <div className="flex justify-center items-center px-1.5 w-8 h-8 rounded-3xl bg-stone-100">
      <img loading="lazy" src={src} alt={alt} className="w-5 aspect-square" />
    </div>
  );
}

function GroupCard() {
  return (
    <section className="flex flex-col px-6 pt-6 pb-7 bg-white rounded-3xl max-w-[534px] max-md:px-5 card-width">
      <header className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
        <h2 className="text-2xl font-semibold capitalize text-neutral-600">Assets</h2>
        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe10022e8b214cd2c492dd3a1271e583b601dc47080ef13bd94987b7c5850c01?apiKey=27ec22b9382040ef8580a5e340d3a921&" alt="Menu Icon" />
      </header>
      <p className="mt-4 text-base leading-7 text-neutral-400 max-md:max-w-full">
        A record for valuable resources, such as cash, accounts receivable, inventory, and property, that contribute to your business's financial health.
      </p>
    </section>
  );
}

export default GroupCard;