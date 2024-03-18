import { NavLink } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center font-bold   text-[#a3a3a3] w-full h-full bg-cover bg-PageNotFound">
        <h2 className="text-[14.75rem] h-66 ">404</h2>
        <div className="inline-block px-12 py-3  font-sans text-2xl font-semibold transition-all duration-300 border-none rounded-lg cursor-pointer text-decoration-none bg-[#1E6091] text-white hover:bg-[#83c341]">
          <NavLink to="/">Start</NavLink>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
