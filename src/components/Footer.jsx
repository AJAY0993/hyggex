import { HiPlus } from "react-icons/hi";

function Footer() {
  return (
    <footer className="mb-24 mt-[4rem] flex items-center justify-between">
      <div className="shadow-s1  flex aspect-square h-20 items-center justify-center rounded-full">
        <img src="/footerLogo.png" />
      </div>
      <div className="flex items-center justify-between gap-2">
        <div className="flex aspect-square h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-900 to-blue-500 font-semibold">
          <HiPlus className="text-3xl text-neutral-50" />
        </div>
        <h4 className="text-2.5xl bg-gradient-to-b from-blue-900 to-blue-600 bg-clip-text font-semibold capitalize text-transparent">
          Create flashcard
        </h4>
      </div>
    </footer>
  );
}

export default Footer;
