import Slider from "./_components/Slider";
import { Suspense } from "react";
import Spinner from "./_components/Spinner";
import RecommendedProductsList from "./_components/RecommendedProductsList";

export default function Home() {
  return (
    <>
      <Slider />
      <div className="container mx-auto px-4">
        <section className="lg:flex justify-between mt-[52px] border grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-0 border-[#E5E7EB] rounded-2xl py-6 px-10">
          <div className="flex gap-4 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                fill="none"
                viewBox="0 0 24 25"
              >
                <path
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 14.222h1c1.1 0 2-.9 2-2v-10H6c-1.5 0-2.81.83-3.49 2.05"
                ></path>
                <path
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M2 17.222c0 1.66 1.34 3 3 3h1c0-1.1.9-2 2-2s2 .9 2 2h4c0-1.1.9-2 2-2s2 .9 2 2h1c1.66 0 3-1.34 3-3v-3h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l-1.71-2.99a2.02 2.02 0 0 0-1.74-1.01H15v7c0 1.1-.9 2-2 2h-1"
                ></path>
                <path
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 22.222a2 2 0 1 0 0-4 2 2 0 0 0 0 4M16 22.222a2 2 0 1 0 0-4 2 2 0 0 0 0 4M22 12.222v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29zM2 8.222h6M2 11.222h4M2 14.222h2"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="font-semibold text-lg text-primary dark:text-[#e5e7eb] dark:font-medium">
                Free shipping
              </span>
              <span className="text-sm text-bodyColor">
                On orders over $50.00
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M22.25 15.222c0 3.87-3.13 7-7 7l1.05-1.75M2.25 9.222c0-3.87 3.13-7 7-7L8.2 3.972M13.95 4.672l3.98 2.3 3.94-2.29M17.93 11.042v-4.08"
                ></path>
                <path
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m16.99 2.432-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33c.54-.3.99-1.06.99-1.68v-2.54c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.51-.28-1.35-.28-1.87 0M2.6 15.672l3.97 2.3 3.95-2.29M6.57 22.042v-4.08"
                ></path>
                <path
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m5.64 13.432-2.4 1.33c-.54.3-.99 1.06-.99 1.68v2.54c0 .62.44 1.38.99 1.68l2.4 1.33c.51.29 1.35.29 1.87 0l2.4-1.33c.54-.3.99-1.06.99-1.68v-2.54c0-.62-.44-1.38-.99-1.68l-2.4-1.33c-.52-.28-1.36-.28-1.87 0"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="font-semibold text-lg text-primary dark:text-[#e5e7eb] dark:font-medium">
                Very easy to return
              </span>
              <span className="text-sm text-bodyColor">Just phone number</span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12.5 22.222c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"
                ></path>
                <path
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8.5 3.222h1a28.42 28.42 0 0 0 0 18h-1M15.5 3.222a28.42 28.42 0 0 1 0 18"
                ></path>
                <path
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3.5 16.222v-1a28.42 28.42 0 0 0 18 0v1M3.5 9.222a28.42 28.42 0 0 1 18 0"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="font-semibold text-lg text-primary dark:text-[#e5e7eb] dark:font-medium">
                Worldwide delivery
              </span>
              <span className="text-sm text-bodyColor">
                Fast delivery worldwide
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 25 25"
              >
                <path
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10.25 13.972c0 .97.75 1.75 1.67 1.75h1.88c.8 0 1.45-.68 1.45-1.53 0-.91-.4-1.24-.99-1.45l-3.01-1.05c-.59-.21-.99-.53-.99-1.45 0-.84.65-1.53 1.45-1.53h1.88c.92 0 1.67.78 1.67 1.75M12.75 7.722v9"
                ></path>
                <path
                  stroke="#111827"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M22.75 12.222c0 5.52-4.48 10-10 10s-10-4.48-10-10 4.48-10 10-10M17.75 3.222v4h4M22.75 2.222l-5 5"
                ></path>
              </svg>
            </div>
            <div className="flex flex-col gap-[2px]">
              <span className="font-semibold text-lg text-primary dark:text-[#e5e7eb] dark:font-medium">
                Refunds policy
              </span>
              <span className="text-sm text-bodyColor">
                60 days return for any reason
              </span>
            </div>
          </div>
        </section>
        <section className="flex mt-[82px] flex-col gap-10">
          <h1 className="text-[28px] sm:text-[22px] md:text-[25px] lg:text-3xl font-semibold text-[#4B5563]/80">
            <span className="text-primary dark:text-white">
              Recommendations.
            </span>{" "}
            <span className="hidden sm:inline">
              Best matching products for you
            </span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Suspense fallback={<Spinner />}>
              <RecommendedProductsList />
            </Suspense>
          </div>
        </section>
      </div>
    </>
  );
}
