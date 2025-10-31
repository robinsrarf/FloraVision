import SectionHeading from "./SectionHeading";
import avatar1 from "../assets/avatars/avatar2.png";
import avatar2 from "../assets/avatars/avatar3.png";
import avatar3 from "../assets/avatars/avatar4.png";
import blurbox from "../assets/image.png";
import StarRating from "./StarRating";
const reviewDetails = [
  {
    profile: avatar1,
    name: "Shelly Russel",
    rating: [1, 1, 1, 1, 0],
    review:
      "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!",
  },
  {
    profile: avatar2,
    name: "Lula Rolfson",
    rating: [1, 1, 1, 1, 0],
    review:
      "Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    profile: avatar3,
    name: "Carol Huels",
    rating: [1, 1, 1, 1, 0],
    review:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];

export default function CustomerReview() {
  return (
    <>
      <section className="flex w-full flex-col items-center">
        <div className="m-30">
          <SectionHeading
            heading={"Customer Review"}
            cssClass="text-shadow-lg/25 drop-shadow-2xl/100"
          />
        </div>

        <div className="flex flex-wrap">
          {reviewDetails.map((card, index) => (
            <ReviewCard
              key={index}
              profile={card.profile}
              name={card.name}
              rating={card.rating}
              review={card.review}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function ReviewCard({ profile, name, rating, review }) {
  return (
    <>
      <div className="relative inset-0 h-[480px] w-lg">
        <img
          src={blurbox}
          className="h-full w-full object-fill"
          alt="Blur box"
        />
        <div className="absolute top-0 flex h-full w-full flex-col gap-20 p-15">
          <div className="flex items-center gap-10">
            <img
              src={profile}
              className="h-[88px] w-[88px] rounded-full object-cover drop-shadow-xl/20"
            />
            <div className="flex flex-col items-start">
              <p className="text-4xl">{name}</p>
              <StarRating rating={rating} />
            </div>
          </div>
          <p className="text-xl">{review}</p>
        </div>
      </div>
    </>
  );
}
