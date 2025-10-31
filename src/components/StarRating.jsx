import star from "../assets/star.svg";
import halfstar from "../assets/half-star.svg";

// this componet take a array of 0 and 1 value where 0 is half star and 1 is full star
export default function StarRating({ rating }) {
  return (
    <>
      <div className="flex gap-2">
        {rating.map((n, i) =>
          n === 0 ? (
            <img key={i} src={halfstar} alt="" />
          ) : (
            <img key={i} src={star} alt="" />
          ),
        )}
      </div>
    </>
  );
}
