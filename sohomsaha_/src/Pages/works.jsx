import React, { useState } from "react";
import { useEffect } from "react";
import { ArrowLeft } from "react-feather";
import Slider from "react-slick";
import data from "./../assests/data/works.json";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute bottom-0 right-0 cursor-pointer border-t-2 border-l-2 border-b-2 border-b-0 border-black bg-white w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center text-black"
    >
      &#x276F;
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute bottom-0 lg:right-16 right-10 cursor-pointer border-2 border-b-0 border-r-0 border-black bg-white w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center text-black z-10"
    >
      &#x276E;
    </div>
  );
}

export default function Works() {
  useEffect(() => {
    document.addEventListener("popstate", (event) => {
      console.log("event");
      // alert("You message");
    });

    return () => {
      // document.removeEventListener("visibilitychange", pausePlayVideo, false)
      setIsOpen("");
    };
  }, []);

  const [isOpen, setIsOpen] = useState("");

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyload: true,
    // adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative overflow-hidden">
      {data.map((item, idx) => {
        return (
          <div
            key={idx}
            className={`border-b-2 border-black last:border-0 flex bg-white lg:bg-transparent ${
              idx % 2
                ? "flex-col-reverse lg:flex-row-reverse"
                : "flex-col-reverse lg:flex-row"
            }`}
          >
            <div className={`relative w-full lg:w-5/12 p-5 lg:p-10`}>
              {/* tech stacks expaind */}
              <div
                id={idx}
                className={`${
                  isOpen !== "" && isOpen === idx
                    ? "translate-x-0"
                    : idx % 2
                    ? "translate-x-full"
                    : "-translate-x-full"
                } absolute p-5 lg:p-10 transform top-0 ${
                  idx % 2 ? "right-0" : "left-0"
                } w-full h-full bg-white overflow-auto ease-in-out transition-all duration-300 z-30`}
              >
                {item.tech.map((tek, idn) => {
                  return (
                    <div key={idn} className="font-light text-sm mb-3">
                      <div className="uppercase font-semibold">
                        {Object.keys(tek)}
                      </div>
                      {Object.values(tek)}
                    </div>
                  );
                })}
                <ArrowLeft
                  onClick={() => setIsOpen("")}
                  size={45}
                  stroke={0.1}
                  className="z-10 cursor-pointer stroke-blue-600 hover:stroke-black transition absolute right-0 top-0 p-3"
                />
              </div>

              {/* details */}
              <div className="text-xl lg:text-3xl">
                {item.title}
                <div className="text-xs font-light text-gray-500">
                  {item.time} / {item.category}
                </div>
              </div>
              <div className="font-light text-sm mt-5">
                <div className="text-gray-800 lg:leading-6">{item.desc}</div>
                <div
                  onClick={() => setIsOpen(idx)}
                  className="cursor-pointer mt-5 mr-5 relative inline-block px-5 py-3 font-medium text-black bg-white hover:bg-blue-600 hover:text-white transition border border-black"
                >
                  Details
                </div>
                {!item.link ? null : (
                  <a
                    href={item.link}
                    rel="noreferrer"
                    target="_blank"
                    className="mt-5 relative inline-block px-5 py-3 font-medium text-black bg-white hover:bg-blue-600 hover:text-white transition border border-black"
                  >
                    View
                  </a>
                )}
              </div>
            </div>

            {/* gallery */}
            <div
              className={`w-full lg:w-7/12 h-full overflow-hidden ${
                idx % 2
                  ? "lg:border-r-2 lg:border-b-0 border-b-2"
                  : "lg:border-l-2 lg:border-b-0 border-b-2"
              }  border-black`}
            >
              <div className="relative w-full h-full">
                <Slider {...settings}>
                  {item.imgs.map((img, id) => {
                    return (
                      <img
                        key={id}
                        src={img}
                        alt={item.title}
                        className="h-full"
                      />
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
