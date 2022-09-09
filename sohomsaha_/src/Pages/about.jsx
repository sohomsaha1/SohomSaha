import React from "react";

export default function About() {
  return (
    <div className="w-full content font-light text-gray-600">
      <div className="lg:leading-6 mb-6 flex flex-col items-center justify-center">
        <img
          alt="Sohom Saha"
          src="https://i.postimg.cc/GtsCZ5D1/IMG-3426.jpg"
          className="rounded-full w-24 h-24 mb-4 border-2 border-black hover:brightness-150 transition"
        />
        <span className="text-xl">Hi, I'm Sohom!</span>
      </div>
      <div className="mb-6 lg:leading-6">
        I am a third year University of Waterloo CS/BBA Double Degree Student. While I do consider myself a pretty mediocore student, I do shine in the Art of Googling. 
        In fact any problems I have I'm most certain Google has the answer. Pretty much what I am saying, is any task that I am given Google has my back. Jokes aside,
        I consider myself a strong problem solver, communicator and visionary. I dislike mediocracy especially when It comes to owning up to my own work, hence I always
        try to put my best foot forward and exceed any expectations I am given!
      </div>
      <div className="lg:leading-6">
        I have a technical background in Full Stack Development and Mobile app development. During my last 2 internships I took many challenging roles
        where I felt I was completley lost at first, but in the end of both jobs I exceeded my own expectations, and those given to me in delivering the final product. 
        Despite being confident in my skills, at heart I am a people person. I believe in the empowerment of teams and strive to be a fair and inspirational leader. 
        I always try to be a very effective communicator and I persoally feel it is one of my greatest strengths which allows for my leadership to shine.
      </div>
    </div>
  );
}
