import Container from "./Container";

function Header() {
  return (
    <header className="flex justify-between ">
      <div className="h-10 w-48">
        <img src="logo.png" />
      </div>
      <nav className="">
        <ul className="flex h-12 items-center gap-10">
          <NavListItem>Home</NavListItem>
          <NavListItem>Flashcard</NavListItem>
          <NavListItem>Contact</NavListItem>
          <NavListItem>FAQ</NavListItem>
          <button className="rounded-full bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 px-10  py-3 font-medium  text-white">
            Login
          </button>
        </ul>
      </nav>
    </header>
  );
}

function NavListItem({ children }) {
  return (
    <li className=" cursor-pointer text-lg text-[##3A3740]">{children}</li>
  );
}

export default Header;
