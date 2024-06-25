"use client";

import Image from "next/image";
import Link from "next/link";

export default function Loading() {
    const arr = Array.from({length: 20});
  return (
    <section className="grid grid-cols-5 container mt-12 gap-3">
        {arr.map((_, index) => (
            <div key={index} className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>   </div>
        ))}
    

    </section>
  );
}