import logo from "../assets/logo.png";
import bag from "../assets/bag.png";
import search from "../assets/search.png";
import menu from "../assets/menu.svg";
import dropdown from "../assets/dropdown.svg";
export default function Header() {
  return (
    <>
      <div className="flex w-full flex-row items-center px-[57px] pt-[57px]">
        <a
          className="mr-auto flex flex-row items-center gap-3 text-center"
          href="/"
        >
          <img className="h-10 w-10 xl:h-12 xl:w-12" src={logo} alt="logo" />
          <span className="text-center text-xl font-bold xl:text-[28px]">
            FloraVision.
          </span>
        </a>
        <nav className="font-indie-flower mx-auto flex flex-row items-center gap-7 px-2 text-xl xl:gap-15 xl:text-2xl">
          <a>Home</a>
          <a className="flex flex-row items-center gap-3">
            <span>Plants Type</span>
            <img className="h-[7px] w-3" src={dropdown} />
          </a>
          <a>More</a>
          <a>Contact</a>
        </nav>
        <div className="ml-auto flex h-[26px] flex-row gap-15">
          <img
            className="w-[] h-5 w-5 xl:h-[26px] xl:w-[26px]"
            src={search}
            alt="search"
          />
          <img
            className="w-[] h-5 w-5 xl:h-[26px] xl:w-[26px]"
            src={bag}
            alt="bag"
          />
          <img
            className="w-[] h-5 w-5 xl:h-[26px] xl:w-[26px]"
            src={menu}
            alt="menu"
          />
        </div>
      </div>
    </>
  );
}
