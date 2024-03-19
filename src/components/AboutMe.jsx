import profile from "/Shash.jpg";
// import NumberAnimation from "./subcomponents/NumberAnimation";

const AboutMe = () => {
  return (
    <div className="grid w-full grid-cols-8 gap-16 mt-4 sm:gap-8">
      <div className="px-[10%] col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
        <h2 className="mb-5 text-mosserate text-lg font-bold capitalize text-gray-700">
          About Me!
        </h2>
        <p className="font-medium">
          I'm a React and Node.js developer with a solid understanding of
          front-end and back-end development. My expertise in these technologies
          allows me to create scalable and efficient web applications. With a
          strong problem-solving mindset and a passion for clean code, I am
          dedicated to delivering high-quality solutions that meet client
          requirements.
        </p>
        <p className="my-4 font-medium">
          I believe that design is about more than just making things look
          pretty – it's about solving problems and creating intuitive, enjoyable
          experiences for users.
        </p>
        <p className="my-4 font-medium">
          Whether I'm working on a website, mobile app, or other digital
          product, I bring my commitment to design excellence and user-centered
          thinking to every project I work on. I look forward to the opportunity
          to bring my skills and passion to your next project.
        </p>
      </div>
      <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-black p-8 bg-slate-100 xl:col-span-4 md:order-1 md:col-span-8">
        <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-black rounded-[2rem]" />
        <img src={profile} alt="Shash" className="w-full h-auto rounded-xl " />
      </div>
      {/* <div className="col-span-2 flex flex-col justify-around m-6 xl:col-span-8 xl:flex-row xl:items-center">
        <div className="flex flex-col justify-center items-end xl:items-center">
          <span className="inline-block text-8xl font-bold">
            <NumberAnimation value={3} />
          </span>
          <h2 className="text-xl font-medium capitalize ">
            Projects Completed
          </h2>
        </div>
        <div className="flex flex-col justify-center items-end xl:items-center">
          <span className="inline-block text-8xl font-bold">
            <NumberAnimation value={1} />
          </span>
          <h2 className="text-xl font-medium capitalize ">Year Experience</h2>
        </div>
      </div> */}
    </div>
  );
};

export default AboutMe;
