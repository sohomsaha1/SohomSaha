import React from "react";
import PageTitle from "../Components/pageTitle";
import data from "../assests/data/skills.json";

export default function Skills() {
  return (
    <div className="content font-light text-gray-600">
      <PageTitle title="My Skills" />

      <div className="relative text-left">
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-full p-4 lg:p-8 overflow-hidden border border-black hover:border-blue-600 transition mb-8 last:mb-0"
            >
              <div className="">
                <div className="font-bold uppercase mb-5">{item.field}</div>
              </div>

              <div className="ml-5">
                <ul className="list-disc">
                  {item.body.map((skill, id) => {
                    return (
                      <li className="mb-1" key={id}>
                        {skill.skill}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
