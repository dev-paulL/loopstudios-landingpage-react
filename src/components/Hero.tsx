import { motion } from "framer-motion";
import { heroTextContent } from "../data";

export default function Hero() {
  return (
    <section className="relative z-0 hero min-h-[80vh] bg-center bg-cover bg-no-repeat flex items-center justify-center p-8">
      <div className="max-w-[1200px] w-full">
        <motion.h1 initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ staggerChildren: 0.1 }} className="heroText text-white uppercase border-2 border-white text-[2rem] p-6 w-full md:text-6xl max-w-max font-light mx-auto lg:mx-0 lg:text-7xl md:p-12 lg:tracking-widest">
          
            {heroTextContent.map((heroText, index) => {
              const classes = `${heroText === "That" || heroText === "Deliver" ? "block lg:inline-block lg:mr-4" : "block"}`;

              return (
                <motion.span
                  key={heroText}
                  className={classes}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {heroText}
                </motion.span>
              );
            })}
          
        </motion.h1>
      </div>
    </section>
  );
}
