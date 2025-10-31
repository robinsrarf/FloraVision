import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <>
      <section className="flex flex-col px-30 py-25">
        <div className="flex justify-between">
          <div className="w-[20vw]">
            <a href="/" className="flex items-center text-3xl font-semibold">
              <img src={logo} className="w-15" />
              <h1>FloraVision.</h1>
            </a>
            <p className="mt-5">
              "From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to thrive and elevate your living environment."
            </p>
          </div>

          <div className="w-[20vw]">
            <ul className="flex flex-col gap-5">
              <span className="text-lg font-semibold">Quik Link's</span>
              {["Home", "Type's Of plant's", "contact", "Privacy"].map(
                (link, index) => (
                  <li className="underline" key={index}>
                    <a>{link}</a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold">For Every Update</h1>
            <div className="flex h-14 items-center rounded-xl border p-1">
              <input
                type="text"
                placeholder="Enter Email"
                className="text p-4"
              />
              <button className="h-full w-30 cursor-pointer rounded-lg bg-white text-black">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-lg font-bold">
            <a>FB</a>
            <a>TW</a>
            <a>LI</a>
          </div>
          <p>FloraVision © all right reserve</p>
        </div>
      </section>
    </>
  );
}
