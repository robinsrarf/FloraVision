import blurbox from "../assets/shape-blur.svg";
import SectionHeading from "./SectionHeading";
import bag from "../assets/bag.png";

import swisschesse from "../assets/plants/swiss-cheese-plant.png";
import sanseveria from "../assets/plants/sansevieria.png";
import plantain from "../assets/plants/plantain-lilies.png";
import cactus from "../assets/plants/cactus.png";
import aglaonema from "../assets/plants/aglaonema.png";
import agave from "../assets/plants/agave.png";

const plantCardDetails = [
  {
    plantimg: aglaonema,
    name: "Aglaonema plant",
    desc: "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care",
    price: 300,
  },
  {
    plantimg: plantain,
    name: "Plantain Lilies",
    desc: "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,",
    price: 380,
  },
  {
    plantimg: cactus,
    name: "Cactus",
    desc: "It is known for their ability to thrive in arid environments",
    price: 259,
  },
  {
    plantimg: swisschesse,
    name: "Swiss cheese Plant",
    desc: "It is a popular tropical houseplant known for its distinctive, perforated leaves",
    price: 400,
  },
  {
    plantimg: sanseveria,
    name: "Sansevieria plant",
    desc: "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
    price: 450,
  },
  {
    plantimg: agave,
    name: "Agave plant",
    desc: "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
    price: 359,
  },
];

export default function OurTopSellingPlants() {
  return (
    <>
      <section className="mt-30 flex w-full flex-col items-center">
        <SectionHeading
          heading={"Our Top Selling Plants"}
          cssClass="text-shadow-lg/25 drop-shadow-2xl/100"
        />
        <div className="mt-30 flex w-full flex-wrap justify-center space-y-35 space-x-2 p-10">
          {plantCardDetails.map((card, index) => (
            <PlantCard
              key={index}
              plantimg={card.plantimg}
              name={card.name}
              desc={card.desc}
              price={card.price}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function PlantCard({ plantimg, name, desc, price }) {
  return (
    <>
      <div className="relative inset-0 flex h-[644px] w-lg items-center justify-center">
        <img src={blurbox} className="" />
        <img
          src={plantimg}
          className="absolute -top-25 h-[459px] w-[459px] drop-shadow-2xl"
          alt=""
        />
        <div className="absolute bottom-20 flex flex-col gap-2 px-15 text-3xl">
          <h1>{name}</h1>
          <p className="text-xl">{desc}</p>
          <div className="flex items-center justify-between">
            <p className="">Rs. {price}/-</p>
            <button className="h-[55px] w-[55px] cursor-pointer rounded-2xl border">
              <img className="m-auto w-[27px]" src={bag} alt="bag" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
