import NavigationBar from "../components/NavigationBar";
import NavigationBarMobile from "../components/NavigationBarMobile";
import Footer from "../components/Footer";

import { memo, useEffect } from "react";
import { Link } from "react-router-dom";

import TextFade from "../components/animations/TextFade";

import preview305 from "../assets/CCT305/preview_305.png";

function UniLink() {
  useEffect(() => {
    document.title = "Eren Gulenoglu - UniLink";
  });
  return (
    <div>
      <div className="sticky top-0 w-full hidden md:block z-50">
        <NavigationBar />
      </div>
      <div className="sticky top-0 w-full block md:hidden z-50">
        <NavigationBarMobile />
      </div>
      <main className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col w-[80vw] justify-center my-16 gap-8 lg:w-[65vw]">
          <TextFade onetime={true}>
            <h1 className="w-fit text-5xl roboto font-light bg-[#7469B6] p-1 rounded-xs">
              UniLink
            </h1>
          </TextFade>
          <div className="flex flex-col w-full gap-4 items-start lg:gap-16 lg:flex-row">
            <div className="flex flex-col w-full gap-6 lg:w-1/2">
              <TextFade onetime={true}>
                <p className="text-lg roboto font-mono">
                  UniLink is a mobile app that helps University of Toronto
                  Mississauga students form meaningful friendships and romantic
                  connections in a safe, verified environment. By using UofT
                  credentials, the app ensures all users are real students while
                  focusing on interest-based and academic matching rather than
                  superficial swiping. Designed with an intuitive interface and
                  low-pressure interactions, UniLink encourages authentic
                  connections, in-person meetups, and cross-cultural
                  communication, making it easier for students to expand their
                  social networks and navigate campus life.
                </p>
              </TextFade>
              <TextFade onetime={true}>
                <Link to="https://www.figma.com/proto/teMuFPCoGhJtvikefERyNA/High-Fidelity-CCT305-Prototype---A4--Group-4?node-id=21-9217&starting-point-node-id=21%3A9217&t=LtSvDYEubpt7M2uI-1">
                  <button className="w-[10em] h-[3em] text-black text-lg font-semibold border border-black cursor-pointer rounded-4xl bg-white duration-320 hover:bg-[#8CA9FF] hover:text-white">
                    View Protype
                  </button>
                </Link>
              </TextFade>

              <TextFade onetime={true}>
                <ul className="flex flex-col text-xl roboto font-mono w-full">
                  <li className="flex flex-row justify-between border-b border-foreground py-4">
                    <p className="bg-[#7469B6] px-1 rounded-xs">Role</p>
                    <p className="bg-[#7469B6] px-1 rounded-xs">
                      UI/UX Designer
                    </p>
                  </li>
                  <li className="flex flex-row justify-between border-b border-foreground py-4">
                    <p className="bg-[#7469B6] px-1 rounded-xs">Timeframe</p>
                    <p className="bg-[#7469B6] px-1 rounded-xs">8 Weeks</p>
                  </li>
                  <li className="flex flex-row justify-between border-b border-foreground py-4">
                    <p className="bg-[#7469B6] px-1 rounded-xs">Team</p>
                    <p className="bg-[#7469B6] px-1 rounded-xs">
                      Team UX/UI Project
                    </p>
                  </li>
                  <li className="flex flex-row justify-between border-b border-foreground py-4">
                    <p className="bg-[#7469B6] px-1 rounded-xs">Tools</p>
                    <p className="bg-[#7469B6] px-1 rounded-xs">Adobe XD</p>
                  </li>
                </ul>
              </TextFade>
            </div>
            <div className="flex flex-col w-full lg:w-1/2">
              <TextFade onetime={true}>
                <h2 className="text-4xl roboto font-medium">Contents</h2>
                <ul className="flex flex-col text-xl roboto font-light w-full">
                  <li className="flex flex-row justify-between border-b border-foreground py-4">
                    <p>01</p>
                    <p>Preview</p>
                  </li>
                  <li className="flex flex-row justify-between border-b border-foreground py-4">
                    <p>02</p>
                    <p>Context</p>
                  </li>
                  <li className="flex flex-row justify-between border-b border-foreground py-4">
                    <p>03</p>
                    <p>Research Methods</p>
                  </li>
                  <li className="flex flex-row justify-between border-b border-foreground py-4">
                    <p>04</p>
                    <p>Design Decisions</p>
                  </li>
                  <li className="flex flex-row justify-between border-b border-foreground py-4">
                    <p>05</p>
                    <p>Final Design</p>
                  </li>
                  <li className="flex flex-row justify-between border-b border-foreground py-4">
                    <p>06</p>
                    <p>Takeaways</p>
                  </li>
                </ul>
              </TextFade>
            </div>
          </div>
          <div className="flex flex-col w-full gap-8 roboto">
            <TextFade onetime={true}>
              <h2 className="text-4xl bg-[#7469B6] p-1 w-fit rounded-xs">
                Preview
              </h2>
            </TextFade>
            <img
              src={preview305}
              className="w-full object-cover object-center border border-foreground rounded-xl"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default memo(UniLink);
