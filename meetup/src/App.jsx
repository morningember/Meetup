import "./App.css";
import Logo from "./assets/logo.svg";
import MobileHero from "./assets/tablet/image-hero.png";
import DesktopHeroLeft from "./assets/desktop/image-hero-left.png";
import DesktopHeroRight from "./assets/desktop/image-hero-right.png";
import Image1 from "./assets/desktop/image-woman-in-videocall.jpg";
import Image2 from "./assets/desktop/image-women-videochatting.jpg";
import Image3 from "./assets/desktop/image-men-in-meeting.jpg";
import Image4 from "./assets/desktop/image-man-texting.jpg";
import Number from "./components/Number";

function App() {
  return (
    <div className="mt-12 lg:mt-20 lg:min-w-5xl lg:max-w-500 lg:h-screen">
      <div className="flex justify-center items-center">
        <img src={Logo} alt="logo" />
      </div>

      <div className="lg:hidden flex justify-center object-cover mx-auto mt-13.5 w-full h-38.25  md:h-75.75">
        <img src={MobileHero} alt="Mobile Hero" />
      </div>
      <div className="hidden lg:flex items-center max-w-full gap-22 mx-auto h-89.5">
        {/* LEFT */}
        <div className=" -mt-20 ">
          <img
            src={DesktopHeroLeft}
            alt="Mobile Hero"
            className="max-w-full object-cover"
          />
        </div>
        {/* CENTER */}
        <div className="flex flex-col items-center text-center max-w-135 -mb-12.5 mx-auto">
          <h1 className=" text-[64px] leading-tight  font-black w-111.25">
            Group Chat for Everyone
          </h1>
          <p className="mt-8.5 text-[#87879D] text-[18px] w-135">
            meet makes it easier to connect with others face-to-face virtually
            and collaborative across any device.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button className="py-4 px-8 text-[16px] rounded-full font-black text-white bg-[#4D96A9] hover:bg-[#71C0D4]">
              Download <span className="text-[#8fe3f9]">v1.3</span>
            </button>
            <button className="py-4 px-6 text-[16px] rounded-full font-bold bg-[#855fb1] text-white hover:bg-[#b18bdd] ">
              What is it?
            </button>
          </div>
        </div>
        {/* RIGHT */}
        <div className="-mb-14">
          <img src={DesktopHeroRight} alt="Mobile Hero" />
        </div>
      </div>
      <div className="hero mt-12 md:mt-18 md:w-114.25 leading-tight md:h-65.5 md:mx-auto lg:hidden">
        <h1 className="text-[40px] text-black font-black md:text-5xl leading-tight">
          Group Chat <br /> for Everyone
        </h1>
        <p className="mt-6 text-[#87879D] leading-tight text-[16px] md:mt-6.25">
          meet makes it easier to connect with others
          <br className="md:hidden" />
          face-to-face <br />
          virtually and collaborative across <br className="md:hidden" />
          any device.
        </p>
        <div className="ctas flex flex-col justify-center items-center gap-4 mt-8 md:w-87 md:flex md:flex-row md:mx-auto md:mt-8">
          <button className="py-4 text-[16px] rounded-full text-white bg-[#4D96A9] hover:bg-[#71C0D4] w-48.25 md:w-48.25">
            Download <span className="text-[#8fe3f9]">v1.3</span>
          </button>
          <button className="py-4 rounded-full w-38.25 bg-[#855fb1] text-white hover:bg-[#b18bdd] ">
            What is it?
          </button>
        </div>
      </div>

      <div className="design mt-27.5">
        <Number number={1} />
      </div>

      <div className="flex flex-wrap justify-center items-center w-81.75 h-77.5 mt-16 mx-auto gap-6 md:flex-nowrap md:gap-3 md:mt-15 md:w-172.25 md:h-39 lg:flex-nowrap lg:max-w-277.5 lg:w-full lg:h-60.5 lg:gap-7.5 lg:mt-16">
        <div className="w-37.75 h-35.75 md:w-41 lg:max-w-63.75 lg:max-h-60.5  lg:w-full lg:h-full">
          <img src={Image1} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-37.75 h-35.75 md:w-41 lg:max-w-63.75 lg:max-h-60.5 lg:w-full lg:h-full">
          <img src={Image2} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-37.75 h-35.75 md:w-41 lg:max-w-63.75 lg:max-h-60.5 lg:w-full lg:h-full">
          <img src={Image3} alt="" className="rounded-[10px]" />
        </div>
        <div className="w-37.75 h-35.75 md:w-41 lg:max-w-63.75 lg:max-h-60.5 lg:w-full lg:h-full">
          <img src={Image4} alt="" className="rounded-[10px]" />
        </div>
      </div>

      <div className="w-81.75 h-71 text-center mt-16 items-center mx-auto md:w-135  lg:h-60">
        <h4 className="text-[16px] uppercase text-[#4d96a9] font-bold lg:w-68 lg:mx-auto ">
          Built for modern use
        </h4>
        <h1 className="text-3xl w-81.75 font-bold  mt-6 md:text-[40px] md:w-111.25 mx-auto lg:w-111.25 ">
          Smarter meetings, <br className="md:hidden" />
          all one place
        </h1>
        <p className="mt-8 text-[16px] w-81.75 mx-auto leading-tight md:w-143.25 lg:w-135 lg:text-[18px] lg:h-19.5">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite- only team
          access, data encryption, and data export.
        </p>
      </div>
      <div className="mx-auto lg:mt-18 ">
        <Number number={2} />
      </div>
      <div className="relative bg-[url(./assets/mobile/image-footer.jpg)] md:bg-[url(./assets/tablet/image-footer.jpg)] lg:bg-[url(./assets/desktop/image-footer.jpg)] -z-1 h-107 lg:77 bg-center bg-cover ">
        <div className="absolute bg-[#4D96A9] opacity-90 h-full w-full lg:max-w-full">
          <div className=" mt-16 flex flex-col items-center mx-auto lg:flex lg:flex-row lg:items-center lg:justify-center lg:max-w-279.5 lg:mx-auto lg:mt-29.5">
            <h1 className="text-white text-[32px] leading-tight w-81.75 font-bold lg:text-left mx-auto md:w-118.75 md:text-[40px] lg:w-87.5 ">
              Experience more together
            </h1>
            <p className="w-81.75 text-white leading-tight mx-auto text-[18px] mt-6 md:w-143.25 lg:w-87.5 lg:text-left">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>
            <div className="mt-8">
              <button className="py-4 text-[16px] rounded-full font-black text-white bg-[#855fb1] hover:bg-[#71C0D4] w-48.25">
                Download <span className="text-[#8fe3f9]">v1.3</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
