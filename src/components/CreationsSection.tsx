import { creations } from "../data";

export default function CreationsSection() {
  return (
    <section className="p-8">
      <h2 className="text-3xl text-center mt-10">Our Creations</h2>
      <div className="flex flex-col gap-8 mt-10">
        {creations.map((creation) => {
          let titleWidth = creation.name == "The Grid" ? "20%" : "40%";
          return (
            <article key={creation.name} className="relative">
              <picture>
                <img src={creation.imgMobile} alt={creation.name} className="" />
              </picture>
              <a
                className={`absolute left-[1rem] bottom-[1rem] text-white uppercase font-josefin text-2xl font-light leading-tight`}
                style={{ width: titleWidth }}
              >
                {creation.name}
              </a>
            </article>
          );
        })}

        <button className="border-2 uppercase px-8 text-body py-2 border-black w-max self-center tracking-[0.3em] font-alata">See all</button>
      </div>
    </section>
  );
}
