import MobileInteractive from "../assets/images/mobile/image-interactive.jpg";

export default function InteractiveSection() {
  return (
    <section className="p-8 flex flex-col gap-12">
      <picture>
        <img src={MobileInteractive} alt="" className="mt-20" />
      </picture>
      <article className="text-center flex flex-col gap-8 self-center w-[90%]">
        <h2 className="text-3xl leading-none">The Leader In Interactive VR</h2>
        <p className="font-normal text-veryDarkGray text-body leading-normal">
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital experiences that bind to their brand.
        </p>
      </article>
    </section>
  );
}
