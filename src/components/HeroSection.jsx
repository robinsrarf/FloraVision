import blurbox from "../assets/blur-box.svg";
import aglaonema from "../assets/plants/aglaonema.png";
import blurboxmask from "../assets/blur-box-mask.svg";
import blurect from "../assets/blur-rect.svg";
import avatar1 from "../assets/avatars/avatar1.png";

import blurectmask from "../assets/blur-rect-mask.svg";
import play from "../assets/play.png";
import rightarrow from "../assets/right-arrow.svg";
import { useState } from "react";
import StarRating from "./StarRating";

const plantDetails = [
  { plantimg: aglaonema, name: "Aglaonema Plant", type: "Indoor Plant" },
  { plantimg: aglaonema, name: "Aglaonema Plant", type: "Indoor Plant" },
  { plantimg: aglaonema, name: "Aglaonema Plant", type: "Indoor Plant" },
];

export default function HeroSection() {
  return (
    <>
      <section className="flex w-full px-[9vw] pt-30">
        {/* left side of hero section */}
        <div className="flex w-full flex-col pt-10">
          <div className="flex flex-col items-start gap-5 pr-99">
            <h1 className=".text-[117px] px-1 text-8xl font-bold">
              Earth's Exhale
            </h1>
            <p className=".text-[23px] px-3 text-xl">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's
              natural environment and its essential role in sustaining life."
            </p>
            <div className="flex items-center gap-7">
              <button className="h-16 w-[217px] cursor-pointer rounded-xl border-2 text-[28px]">
                Buy Now
              </button>
              <img className="w-[70px]" src={play} alt="play-button" />
              <span className="font-indie-flower text-[25px]">
                Live Demo...
              </span>
            </div>
          </div>
          <div
            className="mt-auto -mb-8 h-[237px] w-[409px] rounded-2xl bg-contain bg-no-repeat p-8 backdrop-blur-md"
            style={{
              backgroundImage: `url(${blurect})`,
              WebkitMaskImage: `url(${blurectmask})`,
              maskImage: `url(${blurectmask})`,
              maskSize: "100%",
            }}
          >
            <div className="flex items-center gap-8">
              <div
                className="h-16 w-16 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${avatar1})` }}
              />
              <div className="flex flex-col">
                <p className="text-22px">Ronnie Hamill</p>
                <div className="h-[15px] w-[103px]">
                  <StarRating rating={[1, 1, 1, 1, 0]} />
                </div>
              </div>
            </div>
            <p className="pt-5 text-[17px]">
              I can't express how thrilled I am with my new natural plants! They
              bring such a fresh and vibrant energy to my home
            </p>
          </div>
        </div>
        {/* right side of hero section */}
        <Carousel list={plantDetails} />
      </section>
    </>
  );
}

function Carousel({ list }) {
  const [currIndex, setCurrIndex] = useState(0);
  function next() {
    if (currIndex < list.length - 1) setCurrIndex(currIndex + 1);
  }
  function prev() {
    if (currIndex > 0) setCurrIndex(currIndex - 1);
  }
  return (
    <>
      <div className="relative inset-0">
        <div
          className=".h-[622px] .w-lg h-[60vh] w-[23vw] bg-contain bg-no-repeat mask-contain mask-no-repeat backdrop-blur-lg"
          style={{
            backgroundImage: `url(${blurbox})`,
            WebkitMaskImage: `url(${blurboxmask})`,
            maskImage: `url(${blurboxmask})`,
            maskSize: "100%",
          }}
        >
          <div className="px- absolute bottom-20 flex w-full items-center justify-between gap-4">
            <button className="h-[50px] w-[50px] cursor-pointer" onClick={prev}>
              <img
                src={rightarrow}
                className={`w-10 rotate-180 object-scale-down ${currIndex === 0 ? "opacity-0" : ""}`}
              />
            </button>
            <div className="w-full flex-col space-y-3">
              <p className="text-2xl">{list[currIndex].type}</p>
              <p className="text-4xl font-semibold">{list[currIndex].name}</p>
              <button className="cursor-pointer rounded-xl border-2 px-4 py-3 text-xl">
                Buy Now
              </button>
            </div>
            <button
              className="h-[50px] w-[50px] cursor-pointer pr-2"
              onClick={next}
            >
              <img
                src={rightarrow}
                className={`w-10 object-scale-down ${currIndex === list.length - 1 ? "opacity-0" : ""}`}
              />
            </button>
          </div>
          <div className="absolute bottom-15 flex w-full justify-center gap-1">
            {list.map((_, index) => (
              <div
                className={`${index === currIndex ? "w-3" : "w-1"} h-1 rounded-full bg-white/70 transition-all duration-300`}
              ></div>
            ))}
          </div>
        </div>
        <img
          className="absolute -top-20 px-3"
          src={list[currIndex].plantimg}
          alt="plant-img"
        />
      </div>
    </>
  );
}
