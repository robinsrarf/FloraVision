import blurlongrect from "../assets/blur-long-rect.svg";
import blurlongrectmask from "../assets/blur-long-rect-mask.svg";
import bag from "../assets/bag.png";
import plantain from "../assets/plants/plantain-lilies.png";
import neofinetia from "../assets/plants/neofinetia.png";
import SectionHeading from "./SectionHeading";

const trendingPlantsData = [
  {
    plantimg: plantain,
    title: "For Your Desks Decorations",
    desc: "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
    price: 599,
  },
  {
    plantimg: neofinetia,
    title: "For Your Desks Decorations",
    desc: "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming",
    price: 399,
  },
];

export default function OurTrendingPlants() {
  return (
    <>
      <section className="mt-30 flex w-full flex-col items-center">
        <SectionHeading heading={"Our Trendy Plants"} />
        {trendingPlantsData.map((card, index) => (
          <TrendyPlants
            key={index}
            title={card.title}
            desc={card.desc}
            plantimg={card.plantimg}
            price={card.price}
            order={index}
          />
        ))}
      </section>
    </>
  );
}

function TrendyPlants({ plantimg, title, desc, price, order }) {
  return (
    <>
      <div className="relative inset-0 mb-15 flex flex-row items-center justify-center">
        <div
          className="h-[65vh] w-[85vw] bg-amber-200/5 bg-contain bg-center bg-no-repeat mask-center mask-no-repeat backdrop-blur-md"
          style={{
            backgroundImage: `url(${blurlongrect})`,
            WebkitMaskImage: `url(${blurlongrectmask})`,
            maskImage: `url(${blurlongrectmask})`,
            maskSize: "100%",
          }}
        ></div>
        <div className="absolute bottom-25 left-10 flex flex-row items-end gap-10">
          <img
            src={plantimg}
            alt="plantain"
            className={`h-[600px] ${order % 2 === 0 ? "order-1" : "order-2"}`}
          />

          <div
            className={`mb-10 flex flex-col gap-5 ${order % 2 === 0 ? "order-2" : "order-1"}`}
          >
            <h1 className="text-[38px] font-semibold">{title}</h1>
            <p className="text-[20px]">{desc}</p>
            <p className="text-[38px] font-semibold">Rs. {price}/-</p>
            <div className="flex items-center gap-3">
              <button className="h-16 w-[217px] cursor-pointer rounded-2xl border text-[28px]">
                Explore
              </button>
              <button className="h-16 w-16 cursor-pointer rounded-2xl border">
                <img
                  className="m-auto w-[34px] cursor-pointer"
                  src={bag}
                  alt="bag"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
