import * as React from "react";

function SideNav() {
  return (
    <div className="flex flex-col max-w-[240px]">
      <div className="flex justify-center items-center px-16 py-4 w-full bg-white">
        <img
          loading="lazy"
          srcSet="..."
          className="aspect-[1.25] w-[87px]"
        />
      </div>
      <div className="flex flex-col justify-center px-6 py-5 w-full text-base leading-6 rounded-none bg-stone-100 text-neutral-400">
        <div className="text-xs font-medium tracking-wide uppercase">
          You are managing:
        </div>
        <div className="justify-center items-start px-4 py-3 mt-3 font-semibold bg-white rounded-xl text-slate-500">
          LedgerMate Inc
        </div>
        <div className="shrink-0 mt-6 h-px border border-solid bg-neutral-500 bg-opacity-10 border-neutral-500 border-opacity-10" />
        <div className="mt-7 text-xs font-medium tracking-wide uppercase">
          main menu
        </div>
        <div className="flex gap-2 px-4 py-3 mt-3 font-semibold whitespace-nowrap rounded-xl text-slate-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbd2fa129bdff3bf8d0e082ab898e1b13ce3370ba5d9aef2035a919b8b7d0663?"
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>Dashboard</div>
        </div>
        <div className="flex gap-2 justify-between py-3 mt-2 rounded-lg">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8829055c54272578cee462e0a45227a9963c9147310a582d090d9a411ef3b138?"
              className="shrink-0 self-start w-6 aspect-square"
            />
            <div>Chart of Accounts</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8721aa8c44b81e6b2348dce4fb02570aeacf025a99ab01d6575684f8de43c45?"
            className="shrink-0 self-start w-6 aspect-square"
          />
        </div>
        <div className="flex gap-2 py-3 mt-2 whitespace-nowrap rounded-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c5004f4a4f20690db9982bbaf3dd99e1abae29800f33855670058e862f4b355?"
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>Transactions</div>
        </div>
        <div className="flex gap-2 justify-between py-3 mt-2 w-full whitespace-nowrap rounded-lg">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4f3b7d20efaa3daaa982e33994a996e34086761b227255a838c69929cf780b7?"
              className="shrink-0 self-start w-6 aspect-square"
            />
            <div>People</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8721aa8c44b81e6b2348dce4fb02570aeacf025a99ab01d6575684f8de43c45?"
            className="shrink-0 self-start w-6 aspect-square"
          />
        </div>
        <div className="flex gap-2 justify-between py-3 mt-2 w-full whitespace-nowrap rounded-lg">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/864c39e2d5a07aa75478d8cf04160076c6b6609ad0dee27907cc297c0e6077bb?"
              className="shrink-0 self-start w-6 aspect-square"
            />
            <div>Banking</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8721aa8c44b81e6b2348dce4fb02570aeacf025a99ab01d6575684f8de43c45?"
            className="shrink-0 self-start w-6 aspect-square"
          />
        </div>
        <div className="flex gap-2 justify-between py-3 mt-2 rounded-lg">
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/040bf79f9c27eb41d164fa98455039b823616a82c1d60a1dcef284bc99a18da5?"
              className="shrink-0 self-start w-6 aspect-square"
            />
            <div>Bills & invoices</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8721aa8c44b81e6b2348dce4fb02570aeacf025a99ab01d6575684f8de43c45?"
            className="shrink-0 self-start w-6 aspect-square"
          />
        </div>
        <div className="flex gap-2 py-3 mt-2 whitespace-nowrap rounded-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e44ba0392af10d68df6f8170be4222531f5c1bba3eaae7d7a20cd844489196cc?"
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>Files</div>
        </div>
        <div className="flex gap-2 py-3 mt-2 whitespace-nowrap rounded-lg">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a041f13fcd76d8c0e61015637791cf04f84a516978493e80524efb211fe88e6?"
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>Reports</div>
        </div>
        <div className="flex gap-2 px-4 py-3 mt-60 whitespace-nowrap bg-white rounded-xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/07bdb249a1a88fb91e1f27c51527ce8d7e0f8c7242c498e5af50cade268e40ae?"
            className="shrink-0 self-start w-6 aspect-square"
          />
          <div>Settings</div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
