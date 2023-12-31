export default function Nav() {
  return (
    <div className="bg-indigo-600">
      <div className="max-w-screen-xl mx-auto px-4 py-3 items-center gap-x-4 justify-center text-white sm:flex md:px-8">
        <p className="py-2 font-medium">CRUD App in Nextjs with mobx state tree</p>
        <a href="https://mudgal.netlify.app" className="flex-none inline-block w-full mt-3 py-2 px-3 text-center text-indigo-600 font-medium bg-white duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg sm:w-auto sm:mt-0 sm:text-sm">
          Learn more
        </a>
      </div>
    </div>
  );
}
