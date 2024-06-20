<form
onSubmit={handleSubmit}
className="min-w-100px relative flex w-full flex-1"
>
<input
  className="w-full rounded-lg border bg-white px-4 py-2 outline-none placeholder:text-neutral-500"
  type="text"
  name="input"
  placeholder="Search for products..."
/>
<button
  type="submit"
  className="absolute right-0 top-0 mr-3 flex h-full items-center"
>
  <IoSearchOutline className="" />
</button>
</form>
<div className="flex items-center gap-4">
{/* <div className="flex items-center gap-2">
  <Link
    href={"/basket"}
    className="space-x-2 rounded-lg border border-neutral-300 px-1 py-1 transition duration-300 ease-in-out hover:text-gray-500"
  >
    <CiShoppingCart size={33} />
  </Link>
  <div>
    <p className="text-xs">No items</p>
    <p className="font-bold">$0.00</p>
  </div>
</div> */}
{/* <div className="flex-shrink-0 rounded-lg border border-neutral-300 px-1 py-1 hover:cursor-pointer">
  <IoNotificationsOutline className="text-3xl transition duration-300 ease-in-out hover:text-gray-500" />
</div> */}
<button
  className="hover:bg-primary text-primary items-center rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium transition hover:text-white focus:outline-none focus:ring"
  type="button"
>
  Login
</button>
<button
  className="bg-primary inline-flex justify-center gap-1.5 rounded-lg px-5 py-3 font-medium text-white transition hover:bg-opacity-80 focus:outline-none focus:ring"
  type="button"
>
  <span className="text-sm font-medium"> Register </span>

  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
</button>
{/* <Avatar /> */}
</div>
<button
data-collapse-toggle="navbar-search"
type="button"
className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
aria-controls="navbar-search"
aria-expanded="false"
>
<span className="sr-only">Open main menu</span>
<svg
  className="h-5 w-5"
  aria-hidden="true"
  fill="none"
  viewBox="0 0 17 14"
>
  <path
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M1 1h15M1 7h15M1 13h15"
  />
</svg>
</button>