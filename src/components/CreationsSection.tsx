import { motion } from "framer-motion";
import { creations } from "../data";
import SeeAllBtn from "./SeeAllBtn";

export default function CreationsSection() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="p-8 lg:py-12 max-w-[1200px] mx-auto creationsSection">
      <div className="lg:flex lg:items-center mt-10 lg:justify-between">
        <h2 className="text-3xl text-center lg:text-5xl">Our Creations</h2>
        <div className="lg:block hidden">
          <SeeAllBtn />
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-10 lg:grid lg:grid-cols-4 lg:grid-rows-2 items-center">
        {creations.map((creation) => {
          let titleWidth = creation.name === "The Grid" || creation.name === "Deep Earth" ? "5rem" : "10rem";

          return (
            <motion.article
              key={creation.name}
              className="relative z-0 text-white group hover:bg-opacity-70 transition-all duration-150"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={variants}
              transition={{ duration: 0.6 }}
            >
              <picture className="vignette-wrapper">
                <source srcSet={creation.imgDesktop} media="(min-width:1024px)" />
                <img src={creation.imgMobile} alt={creation.name} className="" />
              </picture>
              <h3>
                <a
                  className={`cursor-pointer absolute left-4 bottom-4 lg:left-[2rem] lg:bottom-[2rem] uppercase font-josefin text-2xl md:text-3xl font-light leading-tight z-30 group-hover:text-black transition-colors duration-150`}
                  style={{ width: titleWidth }}
                >
                  {creation.name}
                </a>
              </h3>
            </motion.article>
          );
        })}

        <div className="lg:hidden block">
          <SeeAllBtn />
        </div>
      </div>
    </section>
  );
}
