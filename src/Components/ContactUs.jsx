import React from "react";
import {
    faLocationDot,
    faPaperPlane,
    faPhoneFlip,
    faQuestionCircle,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactUs = () => {
  return (
    <div className="row place-items-start flex flex-wrap pl-20 mt-14 bg-gradient-to-b from-transparent to-green-200">
      <div className="lg:w-6/12 lg:pl-[250px]">
        <h1 className="text-green-700 font-normal text-2xl pt-5">
          {" "}
          LET'S DO BUSINESS
        </h1>
        <h1 className="text-green-700 font-normal pt-2 text-md">
          {" "}
          <em>SEND US AN EMAIL</em>
        </h1>
        <form className="p-10 ">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-green-700 text-base mb-2">
                NAME
              </label>
              <input
                className="block w-96 bg-white text-zinc-600 outline-green-600 focus:ring-green-[4px] ring-green-900 rounded py-3 px-4 mb-3 focus:bg-slate-50"
                id="name"
                type="text"
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-green-700 text-base mb-2">
                SUBJECT
              </label>
              <input
                className="block w-96 bg-white text-zinc-600 outline-green-600 focus:ring-green-[4px] ring-green-900 rounded py-3 px-4 mb-3 focus:bg-slate-50"
                id="subject"
                type="text"
                aria-label="input"
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-green-700 text-base mb-2">
                E-mail
              </label>
              <input
                className="block w-96 bg-white text-zinc-600 outline-green-600 focus:ring-green-[4px] ring-green-900 rounded py-3 px-4 mb-3 focus:bg-slate-50"
                id="email"
                type="email"
                aria-label="input"
              />
            </div>
            <div className="w-full px-3">
              <label className="block tracking-widev text-green-700 text-base">
                Message
              </label>
              <textarea
                className="w-96 h-60 rounded mb-4 outline-green-600 focus:bg-slate-50 p-2"
                aria-label="text-area"
                placeholder="Message here."
              ></textarea>
            </div>
            <div className="w-full px-3">
              <button
                className="text-white bg-green-500 py-2 px-4 rounded-sm hover:bg-green-600"
                type="button"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="text-center ml-20 py-6">
        <h1 className="text-green-700 text-base pt-2 text-md">
          {" "}
          <em>ADDITIONAL INFO </em>
        </h1>
        <div className=" text-green-700 pt-4">
          <p className="text-green-700 text-sm lg:text-base mb-2">
            <FontAwesomeIcon
              icon={faPaperPlane}
              color="green"
              size="sm"
              className="mb-1"
            />
            &nbsp;embers.resto&cafe@gmail.com
          </p>
          <p className="text-green-700 text-sm lg:text-base mb-2">
            &nbsp;
            <FontAwesomeIcon icon={faLocationDot} color="green" size="sm" />
            &nbsp; Brgy, San.Vicente Bato, Camarines Sur
          </p>
          <p className="text-green-700 text-sm lg:text-base mb-2">
            &nbsp;
            <FontAwesomeIcon icon={faPhoneFlip} color="green" size="sm" />
            (+63) 123456789
          </p>
        </div>

        <div className="flex text-green-600 justify-center mt-10">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-facebook mx-3"
              viewBox="0 0 16 16"
              id="IconChangeColor"
            >
              {" "}
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                id="mainIconPathAttribute"
                fill="green"
              ></path>{" "}
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-instagram mx-3"
              viewBox="0 0 16 16"
              id="IconChangeColor"
            >
              {" "}
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                id="mainIconPathAttribute"
                fill="green"
              ></path>{" "}
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-messenger mx-3"
              viewBox="0 0 16 16"
              id="IconChangeColor"
            >
              {" "}
              <path
                d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"
                id="mainIconPathAttribute"
                fill="green"
              ></path>{" "}
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="IconChangeColor"
              height="23"
              width="23"
            >
              <path
                d="M22,8.98V18c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h10.1C14.04,4.32,14,4.66,14,5 c0,1.48,0.65,2.79,1.67,3.71L12,11L4,6v2l8,5l5.3-3.32C17.84,9.88,18.4,10,19,10C20.13,10,21.16,9.61,22,8.98z M16,5 c0,1.66,1.34,3,3,3s3-1.34,3-3s-1.34-3-3-3S16,3.34,16,5z"
                id="mainIconPathAttribute"
                fill="green"
                className="mx-4"
              ></path>
            </svg>
          </a>
        </div>
        <h2 className="text-sm lg:text-base text-green-700 mb-2 pt-2">
          &copy; All rights reserved - 2022
        </h2>
        <h1 className="text-green-700 font-normal text-sm pt-5">
          <em>FAQ's </em>
          <FontAwesomeIcon icon={faQuestionCircle} />
        </h1>
      </div>
    </div>
  );
};

export default ContactUs;
