import AboutImage from "../assets/image.png";

const About = () => {
  return (
    <div className="w-full flex flex-col mt-10">
      <div
        id="about"
        className="min:h-screen lg:h-screen w-full lg:w-[50%] px-10 lg:pl-[130px] lg:pr-[50px] order-1 flex flex-col gap-5"
      >
        <h3 className="font-[700] text-xl text-[#FDC435]">UI/UX Designer</h3>
        <h1 className="text-3xl lg:text-6xl font-bold">
          Hello, my name is Madelyn Torff
        </h1>
        <p className="text-[#828282] lg:text-2xl">
          Short text with details about you, what you do or your professional
          career. You can add more information on the about page.
        </p>
        <div className="flex gap-5 mt-8">
          <button
            type="button"
            className="bg-[#FDC435] rounded-md px-[24px] py-[8px]"
          >
            <a href="#projects" className="text-[18px] font-[500]">
              Projects
            </a>
          </button>
          <button
            type="button"
            className="border-2 border-[#25282B] rounded-md px-[24px] py-[8px]"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://linkedin.com/in/sai-chaitanya-kadam-784b12255"
              className="text-[18px] font-[500]"
            >
              LinkedIn
            </a>
          </button>
        </div>
      </div>
      <div>
        <img
          src={AboutImage}
          alt="AboutImage"
          className="absolute top-0 right-0 w-[50%] -z-10"
        />
      </div>
    </div>
  );
};

export default About;
