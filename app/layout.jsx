import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import HeaderUser from "./_components/HeaderUser";
import { AuthProvider } from "./_context/AuthContext";

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
    <AuthProvider>
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
              <div className="flex gap-4 sm:gap-[22px]">
                <HeaderUser />
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
    </AuthProvider>
  );
}
