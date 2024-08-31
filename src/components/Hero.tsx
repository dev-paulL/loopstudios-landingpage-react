import { heroTextContent } from "../data";

export default function Hero() {
  return (
    <section className="relative z-0 hero min-h-[80vh] bg-center bg-cover bg-no-repeat  flex items-center justify-center p-8">
      <div className="max-w-[1200px] w-full">
        <h1 className="heroText text-white uppercase border-2 border-white text-[2rem] p-6 w-full max-w-max font-light mx-auto md:mx-0 md:text-5xl md:p-10">
          {heroTextContent.map((heroText) => {
            const classes = `${heroText === "That" || heroText === "Deliver" ? "block md:inline-block md:mr-4" : "block"}`;
            return (
              <span key={heroText} className={classes}>
                {heroText}
              </span>
            );
          })}

        </h1>
      </div>
    </section>
  );
}
