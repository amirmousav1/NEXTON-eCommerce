import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const PoppinsFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

export const metadata = {
  title: "NEXTON eCommerce",
  description: "Exclusive collection for everyone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${PoppinsFont.variable} font-poppins antialiased`}>
        <header className="bg-primary h-[68px] sm:h-[100px] flex items-center">
          <nav className="container mx-auto flex justify-between items-center px-4">
            <Link href="/" className="text-white flex-col hidden sm:flex">
              <span className="font-semibold text-[34px] -tracking-widest leading-8">
                NEXTON
              </span>
              <span className="text-sm -tracking-[0.1rem] text-right">
                eCommerce
              </span>
            </Link>
            <Link href="/" className="sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <g clipPath="url(#clip0_278_2172)">
                  <circle cx="12" cy="12" r="12" fill="#fff"></circle>
                  <circle cx="12" cy="12" r="8" fill="#111827"></circle>
                  <circle cx="12" cy="12" r="4" fill="#fff"></circle>
                </g>
                <defs>
                  <clipPath id="clip0_278_2172">
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <form className="relative flex items-center">
              <label
                className="absolute left-3 sm:left-5"
                htmlFor="searchInput"
              >
                <svg
                  className="size-[18px] sm:size-auto"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0834 17.5C14.4556 17.5 18 13.9556 18 9.58333C18 5.21108 14.4556 1.66667 10.0834 1.66667C5.7111 1.66667 2.16669 5.21108 2.16669 9.58333C2.16669 13.9556 5.7111 17.5 10.0834 17.5Z"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.8334 18.3333L17.1667 16.6667"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </label>
              <input
                id="searchInput"
                type="text"
                className="focus:outline-none h-[36px] sm:h-[52px] w-[190px] sm:w-[400px] rounded-full pl-[36px] sm:pl-[54px] pr-3 text-bodyColor text-xs sm:text-sm"
                placeholder="Search in products..."
              />
            </form>
            <div className="flex gap-4 sm:gap-[22px]">
              <Link href="/login">
                <svg
                  className="size-5 sm:size-auto"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                    stroke="#A8A8A8"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                    stroke="#A8A8A8"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="size-5 sm:size-auto"
                >
                  <path
                    stroke="#A8A8A8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M2 2h1.74c1.08 0 1.93.93 1.84 2l-.83 9.96a2.796 2.796 0 0 0 2.79 3.03h10.65c1.44 0 2.7-1.18 2.81-2.61l.54-7.5c.12-1.66-1.14-3.01-2.81-3.01H5.82M16.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M8.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M9 8h12"
                  ></path>
                </svg>
              </a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-primary py-9 mt-[72px]">
          <div className="container mx-auto px-4 text-[#A8A8A8]">
            <span>Nexton eCommerce. ©{new Date().getFullYear()}</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
