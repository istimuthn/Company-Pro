import React from "react";
import { BiChevronRight } from "react-icons/bi";

const statContent = {
  stats: [
    {
      number: "99.9%",
      label: "Child Safety Solution",
    },
    {
      number: "4,569",
      label: "Happy Costumer",
    },
    {
      number: "4.8",
      label: "Rating Reviews",
    },
  ],
};
const Stats = () => {
  return (
    <section className="pt-20 pb-10">
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center space-x-0">
          <div className="w-full lg:w-7/12 mb-20 lg:mb-0">
            <div className="grid grid-cols-3">
              {statContent.stats.map((stat, idx) => (
                <div
                  className="text-center lg:text-left items-center"
                  key={stat.label}
                >
                  <strong className="text-[#134761] text-4xl xl:text-[52px] font-bold block leading-tight">
                    {stat.number}
                  </strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
