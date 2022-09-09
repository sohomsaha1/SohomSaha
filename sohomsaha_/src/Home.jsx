import React, { useRef, useCallback, useState } from "react";
import { X } from "react-feather";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Skills from "./Pages/skills";
import Resume from "./Pages/resume";
import Works from "./Pages/works";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  const [selectedId, setSelectedId] = useState(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", escCloseModal, false);
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", onBackButtonEvent);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", escCloseModal, false);
      window.removeEventListener("popstate", onBackButtonEvent);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  // handle close modal if click outside
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setSelectedId("");
    }
  };

  // handle close modal if press ESC
  const escCloseModal = useCallback((event) => {
    if (event.keyCode === 27) {
      setSelectedId("");
    }
  }, []);

  // handle close modal if press back btn
  const onBackButtonEvent = (e) => {
    e.preventDefault();
    setSelectedId("");
  };

  // show content
  const showContent = () => {
    switch (selectedId) {
      case "works":
        return <Works />;
      case "contact":
        return <Contact />;
      case "skills":
        return <Skills />;
      case "resume":
        return <Resume />;
      case "about":
        return <About />;
      default:
        return null;
    }
  };

  // framer motion animation settings
  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    duration: 0.7,
  };

  return (
    <>
      {/* main menu */}
      <div className="flex justify-center items-center h-screen">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={list}
          className="Words"
        >
          <li
            className="Words-line cursor-pointer"
            onClick={() => setSelectedId("about")}
          >
            <p>&nbsp;</p>
            <p>About</p>
          </li>
          <li
            className="Words-line cursor-pointer"
            onClick={() => setSelectedId("about")}
          >
            <p>About</p>
            <p>Works</p>
          </li>
          <li
            className="Words-line cursor-pointer"
            onClick={() => setSelectedId("works")}
          >
            <p>Works</p>
            <p>Resume</p>
          </li>
          <li
            className="Words-line cursor-pointer"
            onClick={() => setSelectedId("resume")}
          >
            <p>Resume</p>
            <p>My Skills</p>
          </li>
          <li
            className="Words-line cursor-pointer"
            onClick={() => setSelectedId("skills")}
          >
            <p>My Skills</p>
            <p>Contact</p>
          </li>
          <li
            className="Words-line cursor-pointer"
            onClick={() => setSelectedId("contact")}
          >
            <p>Contact</p>
            <p>&nbsp;</p>
          </li>
        </motion.ul>
      </div>

      {/* main content */}
      {!selectedId ? null : (
        <motion.div
          className={`${
            selectedId ? "" : "hidden"
          } z-10 fixed inset-0 w-full h-full z-10 bg-blue-600 bg-opacity-90 duration-300 overflow-y-auto`}
        >
          <AnimatePresence>
            <motion.div
              animate={{ x: [100, 0, 10], opacity: [0.6, 1] }}
              transition={{ duration: 0.3 }}
              ref={wrapperRef}
              className="relative group w-11/12 sm:9/12 lg:w-4/5 xl:w-3/5 lg:mx-auto mx-0 sm:mx-auto lg:my-10 my-2"
            >
              <div className="absolute inset-0 bg-white transition-transform transform translate-x-2 translate-y-2 group-hover:translate-y-0 group-hover:translate-x-0"></div>
              <div
                className={`relative z-50 relative w-full font-bold tracking-widest border-2 border-black ${
                  selectedId === "works" ? "p-0" : "p-5 lg:p-10"
                }`}
              >
                {/* close btn */}
                <div className="absolute right-0 top-0 h-full">
                  <X
                    onClick={() => setSelectedId(null)}
                    size={15}
                    stroke={0.1}
                    className="z-10 sticky top-0 cursor-pointer stroke-blue-600 hover:stroke-black w-9 h-9 transition p-2"
                  />
                </div>
                {showContent()}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
