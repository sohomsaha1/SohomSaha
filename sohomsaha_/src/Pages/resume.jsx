import React from "react";
import { Briefcase, Clock } from "react-feather";
import PageTitle from "../Components/pageTitle";
import data from "../assests/data/working_process.json";

export default function Resume() {
  return (
    <div className="font-light text-gray-600">
      <PageTitle title="My Resume" />

      <div className="flex justify-between flex-wrap">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-full p-4 lg:p-8 overflow-hidden border border-black hover:border-blue-600 transition mb-8 last:mb-0"
            >
              <div className="mb-3 lg:mb-0 lg:h-20 flex justify-between">
                <div className="">
                  <h5 className="text-xl font-bold text-gray-900">
                    {item.position}
                  </h5>
                  <div className="flex items-center mt-2 text-xs font-medium text-gray-600">
                    <span className="flex items-center text-gray-500 font-light">
                      <Briefcase
                        size={12}
                        stroke={0.5}
                        className="stroke-gray-500 mr-1"
                      />
                      <span className="font-normal">{item.company}</span>
                    </span>
                    <span className="flex items-center text-gray-500 font-light ml-4">
                      <Clock
                        size={10}
                        stroke={0.5}
                        className="stroke-gray-500 mr-1"
                      />{" "}
                      {item.time}
                    </span>
                  </div>
                </div>

                <div className="hidden lg:block ml-3">
                  <img
                    className={`object-cover w-auto ${
                      item.size ? `h-${item.size}` : "h-12"
                    }`}
                    src={item.img}
                    alt={item.company}
                  />
                </div>
              </div>

              <div className="">
                <div className="text-gray-800 text-normal lg:leading-6">
                  {item.body}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
