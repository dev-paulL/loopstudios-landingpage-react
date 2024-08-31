import { creations } from "../data";
import SeeAllBtn from "./SeeAllBtn";

export default function CreationsSection() {
  return (
    <section className="p-8 max-w-[1200px] mx-auto">
      <div className="lg:flex lg:items-center mt-10 lg:justify-between">
        <h2 className="text-3xl text-center lg:text-5xl">Our Creations</h2>
        <div className="desktop-seeAllBtn">
          <SeeAllBtn />
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-10 lg:grid lg:grid-cols-4 lg:grid-rows-2 items-center ">
        {creations.map((creation) => {
          let titleWidth = creation.name === "The Grid" || creation.name === "Deep Earth" ? "20%" : "60%";
          return (
            <article key={creation.name} className="relative">
              <div className="lg:before:absolute before:w-full before:h-full z-0 before:z-10 before:bg-gradient-to-b before:bg-slate-900 before:bg-opacity-30 " />
              <picture className="relative">
                <source srcSet={creation.imgDesktop} media="(min-width:1024px)" />
                <img src={creation.imgMobile} alt={creation.name} className="" />
              </picture>
              <a
                className={`absolute left-[1rem] bottom-[1rem] lg:left-[2rem] lg:bottom-[2rem] text-white uppercase font-josefin text-2xl lg:text-3xl font-light leading-tight text-balance z-30`}
                style={{ width: titleWidth }}
              >
                {creation.name}
              </a>
            </article>
          );
        })}

        <div className="mobile-seeAllBtn">
          <SeeAllBtn />
        </div>
      </div>
    </section>
  );
}
