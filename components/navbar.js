"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import datas from "../datas/navigation.json";

const NavbarForMobile = ({ children }) => {};

const NavbarForDesktop = ({ children }) => {};

const NavbarItem = ({ title, icon, asset_url, direct_url, nav_position }) => {
  return (
    <>
      {nav_position === "logo" ? (
        <Link href={direct_url}>
          <img src={asset_url} alt={title} className="bg-base-300 rounded-xl" />
        </Link>
      ) : nav_position === "marketplace" ? (
        <Link href={direct_url}>{title}</Link>
      ) : (
        <Link href={direct_url}>
          <h4 className="font-bold uppercase tracking-widest">{title}</h4>
        </Link>
      )}
    </>
  );
};

const NavbarComponent = () => {
  const logoData = datas.find((data) => data.nav_role === "logo");
  const marketPlaceData = datas.find((data) => data.nav_role === "marketplace");
  return (
    <>
      <div className="navbar bg-base-300 p-4 lg:px-12 lg:py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost pl-0 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-300 rounded-box w-full"
            >
              {datas.map((data, key) => {
                if (data.nav_role === "nav-item") {
                  return (
                    <li className="my-2 ">
                      <NavbarItem
                        title={data.title}
                        direct_url={data.direct_url}
                      />
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <Link
            href={logoData.direct_url}
            className="flex flex-row justify-center items-center pr-4 rounded-xl"
          >
            <img
              src={logoData.asset_url}
              alt={logoData.title}
              className="rounded-xl w-8"
            />
            <img
              src="/assets/logo/logo-with-text.png"
              alt={logoData.title}
              className="ml-4 w-16 hidden lg:block md:block"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            {datas.map((data, key) => {
              if (data.nav_role === "nav-item") {
                return (
                  <li className="mx-2">
                    <NavbarItem
                      title={data.title}
                      direct_url={data.direct_url}
                    />
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href={marketPlaceData.direct_url}
            className="flex flex-row justify-center items-center bg-white px-4 py-2 rounded-lg"
          >
            <FontAwesomeIcon icon={faStore} color="black" />
            <h4 className="font-semibold text-black uppercase ml-3 hidden lg:flex md:flex">
              {marketPlaceData.title}
            </h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
