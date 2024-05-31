import * as React from "react";

function GroupCard() {
  return (
    <div className="flex flex-col px-6 pt-6 pb-7 bg-white rounded-3xl card-width">
      <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
        <div className="text-2xl font-semibold capitalize text-neutral-600">
          Assets
        </div>
        <div className="flex justify-center items-center px-1.5 w-8 h-8 rounded-3xl bg-stone-100">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe10022e8b214cd2c492dd3a1271e583b601dc47080ef13bd94987b7c5850c01?"
            className="w-5 aspect-square"
          />
        </div>
      </div>
      <div className="mt-4 text-base leading-7 text-neutral-400 max-md:max-w-full">
        A record for valuable resources, such as cash, accounts receivable,
        inventory, and property, that contribute to your business's financial
        health.
      </div>
    </div>
  );
}

export default GroupCard;


