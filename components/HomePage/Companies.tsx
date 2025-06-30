import Image from "next/image";
import React from "react";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  {
    name: "Google",
    logo: "/companies/Google.svg",
  },
  {
    name: "Lenovo",
    logo: "/companies/Lenovo.svg",
  },
  {
    name: "LexMark",
    logo: "/companies/LexMark.svg",
  },
  {
    name: "Microsoft",
    logo: "/companies/Microsoft.svg",
  },
  {
    name: "Netflix",
    logo: "/companies/Netflix.svg",
  },
  {
    name: "Slack",
    logo: "/companies/Slack.svg",
  },
  {
    name: "Verizon",
    logo: "/companies/Verizon.svg",
  },
  {
    name: "Youtube",
    logo: "/companies/YouTube.svg",
  },
];
function Companies() {
  return (
    <section className="my-20">
      <div className="max-w-[1320px] mx-auto flex items-center gap-7">
        <div className="flex flex-col h-full">
          <div className="max-w-sm space-y-6">
            <p className="text-4xl font-semibold">6.3k trusted companies</p>
            <p className="text-gray-600 text-sm">
              Nullam egestas tellus at enim ornare tristique. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {companies.map(({ name, logo }) => (
            <div key={name} className="p-12 shadow-md">
              <Image src={logo} alt={name} width={100} height={30} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;
