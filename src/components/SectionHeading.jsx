
import corner from "../assets/corner.svg";
export default function SectionHeading({ heading, cssClass = "" }) {
  return (
    <>
      <h1
        className={`flex h-fit w-fit items-center justify-center px-3 ${cssClass}`}
      >
        <img src={corner} className="mt-5 -mr-10 rotate-180" />

        <span className="text-center text-[55px]">{heading}</span>
        <img src={corner} className="mb-5 -ml-10" />
      </h1>
    </>
  );
}
