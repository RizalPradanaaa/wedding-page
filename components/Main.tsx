import React from "react";
import { Button } from "./ui/button";

export default function Main({
  isLoading,
  toggleMusic,
}: {
  isLoading: boolean;
  toggleMusic: () => void;
}) {
  return (
    <div className="relative bg-[url('/img/Cover1.jpg')] bg-no-repeat bg-cover bg-center h-full text-white">
      <div className="absolute inset-0 bg-black/50 filter contrast-50 z-0"></div>
      <div className="relative z-10">
        <p className="font-poppins text-base mx-auto max-w-max text-[16px] font-bold pt-24 tracking-[0.2em] text-center">
          WEDDING ANNOUNCEMENT
        </p>

        <div className="mx-auto max-w-max  text-[36px] px-12 text-center pt-52 leading-10">
          <h2 className="font-butler uppercase">Tiffany & Jared</h2>
          <h2 className="font-newsreader italic">#TImetoshaRE</h2>
          <Button
            onClick={toggleMusic}
            className={`animate-bounce relative font-newsreader italic bg-slate-200 text-stone-950 text-[18px] px-12 py-2 mt-20 hover:bg-slate-300 duration-1000 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 text-stone-950 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              </div>
            ) : (
              "Open"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
