import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          For more than 5 years now, I have been traveling the world and taking
          on as many new and fascinating challenges that have met me along the
          road. For these past 2 years, I have pushing myself to develop the
          skills I need to work as Frontend Web Developer.
        </p>

        <br />

        <p className="text-xl">
          While I am new to coding and I have no professsional experience, I
          have a long history as a hard and dedicated worker with a deep passion
          to grow in whatever field that I am cultivating.
        </p>

        <br />

        <p className="text-xl">
          I am a self-driven individual who craves a work environment that never
          rests and constantly tests me to push past my limits. When I start a
          new job, I may not seem like I am the top in my field, because I am
          not in the beginning, but, in time, I will become an integral part to
          whatever team I am apart of.
        </p>
      </div>
    </div>
  );
};

export default About;
