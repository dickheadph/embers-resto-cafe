import React, { useState } from "react";
import cof from "D:/Web-Dev/Embersx/reactx/src/images/cof.png";
import brandlogo from "D:/Web-Dev/Embersx/reactx/src/images/brand-logo.png";
import { Link } from "react-router-dom";
import {
  faUserCircle,
  faHome,
  faBowlFood,
  faGlassMartini,
  faWineGlass,
  faCalendar,
  faX,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Category from "../Category";
import BestSellers from "../BestSellers";
import ShopHL from "../ShopHL";
import Ttiles from "../Ttiles";
import ContactUs from "../ContactUs";
import Carousel from "../Carousel";

const titleLabel = [
  {
    title: "Food Category",
  },
  {
    title: "Best Sellers",
  },
  {
    title: "Shop Highlights",
  },
  {
    title: "Lorem",
  },
];
const Landing = (props) => {
  const [sideBar, setSideBar] = useState(false);
  const clickHandler = () => {
    setSideBar(!sideBar);
  };
  return (
    <div className=" bg-gradient-to-b from-green-200 to-transparent">
      <nav>
        <div className="lg:mx-20 lg:pt-4">
          <div
            className={
              !sideBar
                ? "hidden"
                : "h-screen ml-[40%] w-[60%] bg-green-100 rounded-l-3xl absolute z-50"
            }
          >
            <div className="text-center mt-16">
              <FontAwesomeIcon icon={faUserCircle} size="4x" color="green" />
              <p className="text-xs pt-1">
                Shan Carl Belgica <br />
                <em>(Shana)</em>
              </p>
            </div>
            <ul className="ul_itms pt-12">
              <li className="itms">
                <Link to={"/"}>
                  <FontAwesomeIcon icon={faHome} bounce={true} /> Home
                </Link>
              </li>
              <li className="itms">
                <Link to={"/food"}>
                  <FontAwesomeIcon icon={faBowlFood} bounce={true} /> Food
                </Link>
              </li>
              <li className="itms">
                <Link to={"/reserve"}>
                  <FontAwesomeIcon icon={faCalendar} bounce={true} />{" "}
                  Reservations
                </Link>
              </li>
              <li className="itms">
                <Link to={"/register"}>
                  <FontAwesomeIcon icon={faCalendar} bounce={true} />{" "}
                  Registration
                </Link>
              </li>
            </ul>
            <div className="text-center mt-10 mx-2">
              <button className="text-center text-green-700 text-sm bg-transparent border-[2px] border-green-700 rounded-lg py-1 px-2">
                Register
              </button>
              <p className="text-xs pt-2">
                Already have an account?{" "}
                <a href="#">
                  <em className="underline underline-offset-4 decoration-green-400">
                    Click here.
                  </em>
                </a>
              </p>
            </div>
          </div>
          <div className="flex">
            <a href="index.html">
              <img
                src={brandlogo}
                alt="logo"
                className="logo-img w-full h-14 ml-5 mt-5"
              />
            </a>
            <div className="lg:pl-[45%] pl-[65%]">
              <ul className="hidden lg:flex lg:flex-wrap lg:space-x-20 lg:float-right mt-3">
                <Link to={"/"}>
                  <li className="itms text-green-800 pb-8 hover:underline hover:decoration-2 hover:decoration-orange-500 hover:underline-offset-4 mt-3">
                    Home
                  </li>
                </Link>
                <Link to={"/food"}>
                  <li className="itms text-green-800 pb-8 hover:underline hover:decoration-2 hover:decoration-orange-500 hover:underline-offset-4 mt-3">
                    Food
                  </li>
                </Link>
                <Link to={"reserve"}>
                  <li className="itms text-green-800 pb-8 hover:underline hover:decoration-2 hover:decoration-orange-500 hover:underline-offset-4 mt-3">
                    Reservations
                  </li>
                </Link>
                <Link to={"/register"}>
                  <li className="itms text-green-800 pb-8 hover:underline hover:decoration-2 hover:decoration-orange-500 hover:underline-offset-4 mt-3">
                    Registration
                  </li>
                </Link>
              </ul>
              <div className="md:hidden" onClick={clickHandler}>
                {!sideBar ? (
                  <FontAwesomeIcon icon={faBars} />
                ) : (
                  <FontAwesomeIcon icon={faX} />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <header className="header lg:ml-28 mt-20">
        <div className="container py-0 my-0 ">
          <div className="row items-center flex flex-wrap">
            <div className="header-left-col w-full lg:w-6/12 ">
              <h1 className="header-heading text-6xl md:text-5xl font-bold w-full md:9/12 lg:w-full text-center lg:text-7xl">
                Embers |<br />
                <span className="sub-title font-sans text-white bg-green-800 mt-3 rotate-3 inline-block px-2 py-1">
                  Resto & Cafe{" "}
                </span>
              </h1>
              <h3 className="header-badge text-base text-center font-medium px-2 p-10 text-green-800">
                <em className="lg:text-left text-center">
                  " A cup of coffe is a therapy for a restless soul. "
                </em>
                <br />- Embers
              </h3>
              <div className="text-center">
                <Link to={"/login"}>
                  <button
                    className="text-white bg-green-500 py-2 px-4 rounded-sm hover:bg-green-600"
                    type="button"
                  >
                    Log in
                  </button>
                </Link>
              </div>
            </div>
            <div className="right-col hidden lg:block lg:w-6/12">
              <img
                src={cof}
                alt="foods"
                className="header-image w-full h-auto object-cover"
              />
            </div>
            {/* </div>
          <div className="flex justify-center mt-10 mb-20 lg:my-24">
            <Buttons btnLabel={button[0].btnLabel} />
            &nbsp;&nbsp;
            <Buttons btnLabel={button[1].btnLabel} />
          </div> */}
          </div>
        </div>
      </header>
      <Ttiles title={titleLabel[0].title} />
      <div className="flex flex-wrap">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
      <Ttiles title={titleLabel[1].title} />
      <div className="flex flex-wrap mx-5">
        <BestSellers />
        <BestSellers />
        <BestSellers />
        <BestSellers />
      </div>
      <Carousel/>
      <Ttiles title={titleLabel[2].title} />
      <div className="flex flex-wrap">
        <ShopHL />
        <ShopHL />
        <ShopHL />
        <ShopHL />
      </div>
      <ContactUs />
    </div>
  );
};

export default Landing;
