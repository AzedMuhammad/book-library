import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <nav className="fixed z-10 flex w-full p-6 mx-auto bg-white font-Inter">
        <div className="flex flex-row justify-around w-full text-xl">
          <h1>Book Library</h1>
          <ul className="flex space-x-8 text-slate-500">
            <li className="hover:text-primary">
              <a href="#features">Feature</a>
            </li>
            <li className="hover:text-primary">
              <a href="#services">Service</a>
            </li>
            <li className="hover:text-primary">
              <a href="#review">Review</a>
            </li>
            <li className="hover:text-primary">
              <a href="#location">Location</a>
            </li>
          </ul>
          <Button text="Login" textColor="white" bgColor="bg-primary" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
