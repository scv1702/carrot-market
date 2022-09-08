import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-10 px-10 grid gap-10 min-h-screen">
      <div className="bg-white p-5 rounded-xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-between my-2">
              <span className="text-gray-500">Grey Chair</span>
              <span className="font-semibold">$19</span>
            </div>
          ))}
        </ul>
        {["a", "b", "c", ""].map((c, i) => (
          <li className="empty:hidden" key={i}>
            {c}
          </li>
        ))}
        <div className="mt-2 pt-2 border-t-2 border-dashed flex justify-between">
          <span>Total</span>
          <span className="font-semibold">$19</span>
        </div>
        <div className="flex justify-center">
          <button className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto hover:bg-blue-300 active:bg-yellow-500">
            Checkout
          </button>
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl relative -top-5 bg-white p-6">
          <div className="flex items-end justify-between relative -top-16">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative -top-16 flex flex-col items-center mt-5">
            <span className="text-xl font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-xl shadow-xl">
        <div className="flex justify-between items-center mb-5">
          <span>⬅</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-lg">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-1 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-1 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-1 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500 rounded-lg">
                -
              </button>
              <span>1</span>
              <button className="bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500 rounded-lg">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 text-center rounded-lg text-white text-xs py-2 px-8">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
