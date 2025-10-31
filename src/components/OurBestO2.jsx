import aglaonema from "../assets/plants/aglaonema.png";
import blurlongrect from "../assets/blur-long-rect.svg";
import blurlongrectmask from "../assets/blur-long-rect-mask.svg";
import SectionHeading from "./SectionHeading";
import { useState } from "react";
import rightarrow from "../assets/right-arrow.svg";

const list = [
  {
    image: aglaonema,
    heading: "We Have Small And Best O2 Plants Collection’s",
    para: [
      "Oxygen-producing plants, often referred to as 'O2 plants,' are those that release oxygen into the atmosphere through the process of photosynthesis.",
      "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
    ],
  },
  {
    image: aglaonema,
    heading: "We Have Small And Best O2 Plants Collection’s",
    para: [
      "Oxygen-producing plants, often referred to as 'O2 plants,' are those that release oxygen into the atmosphere through the process of photosynthesis.",
      "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
    ],
  },
  {
    image: aglaonema,
    heading: "We Have Small And Best O2 Plants Collection’s",
    para: [
      "Oxygen-producing plants, often referred to as 'O2 plants,' are those that release oxygen into the atmosphere through the process of photosynthesis.",
      "Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.",
    ],
  },
];

export default function OurBestO2() {
  return (
    <>
      <section className="flex w-full flex-col items-center">
        <div className="m-30">
          <SectionHeading
            heading={"Our Best O2"}
            cssClass="text-shadow-lg/25 drop-shadow-2xl/100 px-6"
          />
        </div>
        <Carousel list={list} />
      </section>
    </>
  );
}

function Carousel({ list }) {
  const [currIndex, setCurrIndex] = useState(0);
  function next() {
    if (currIndex < list.length-1) setCurrIndex(currIndex + 1);
  }
  function prev() {
    if (currIndex > 0) setCurrIndex(currIndex - 1);
  }
  return (
    <>
      <div className="relative inset-0 mb-1 flex flex-row transition-all duration-300">
        <div
          className="h-[65vh] w-[85vw] bg-amber-200/5 bg-contain bg-center bg-no-repeat mask-center mask-no-repeat backdrop-blur-md"
          style={{
            backgroundImage: `url(${blurlongrect})`,
            WebkitMaskImage: `url(${blurlongrectmask})`,
            maskImage: `url(${blurlongrectmask})`,
            maskSize: "100%",
          }}
        ></div>
        <div className="absolute bottom-25 left-10 flex flex-row items-start gap-10">
          <img
            src={list[currIndex].image}
            alt="plantain"
            className={`h-[600px]`}
          />

          <div className={`mt-40 flex flex-col gap-5 pt-10 pr-65 text-xl`}>
            <h1 className="text-3xl font-semibold">
              {list[currIndex].heading}
            </h1>
            {list[currIndex].para.map((paragrph, index) => (
              <p key={index}>{paragrph}</p>
            ))}

            <div className="flex items-center justify-between gap-3">
              <button className="h-14 w-30 cursor-pointer rounded-xl border">
                Explore
              </button>
              <div className="flex items-center">
                <button onClick={prev}>
                  <img
                    src={rightarrow}
                    className={`mr-3 w-10 rotate-180 cursor-pointer object-scale-down ${currIndex === 0 ? "opacity-10" : ""}`}
                  />
                </button>
                <span>{String(currIndex + 1).padStart(2, "0")}</span>/
                <span className="self-end pb-1 text-base">
                  {String(list.length).padStart(2, "0")}
                </span>
                <button onClick={next}>
                  <img
                    src={rightarrow}
                    className={`ml-3 w-10 cursor-pointer object-scale-down ${currIndex === list.length - 1 ? "opacity-10" : ""}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-15 flex gap-1">
        {list.map((_, index) => (
          <div
          key={index}
            className={`${index === currIndex ? "w-5" : "w-2"} h-2 rounded-full bg-white/70 transition-all duration-300`}
          ></div>
        ))}
      </div>
    </>
  );
}
