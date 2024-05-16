import React, { useState, useEffect, useRef } from "react";

export function BorderButton({ text }: any) {
  return (
    <button className="relative inline-flex h-10 md:h-12 w-40 md:w-48 overflow-hidden rounded-3xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl transition ease-in-out duration-300  bg-slate-950 hover:bg-slate-900 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {text}
      </span>
    </button>
  );
}
