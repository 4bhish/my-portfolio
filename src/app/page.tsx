export default function Home() {
 
  return (
    <div
        
        className="h-screen bg-[#2c98f0]  lg:bg-my_bg_image bg-cover backdrop-blur-sm bg-center flex items-center"
      >
        <div className="mx-8 my-auto  ">
          <h1 className=" text-white font-bold tracking-wide lg:text-7xl text-5xl">
            I am a Web
          </h1>
          <br />
          <h1 className=" text-white font-bold tracking-wide lg:text-7xl text-5xl">
            Developer
          </h1>
          <p className="text-white mt-4 font-thin">
            Creating digital experiences through code
          </p>
          <button className="text-white mt-8 p-3 border-white border-2">
            <a href="/abhishek_resume.pdf" download>
              Download CV
            </a>{" "}
          </button>
        </div>
      </div>
  );
}
