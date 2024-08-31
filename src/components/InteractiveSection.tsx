import MobileInteractive from "../assets/images/mobile/image-interactive.jpg";
import DesktopInteractive from "../assets/images/desktop/image-interactive.jpg";
export default function InteractiveSection() {
  return (
    <section className="p-8 flex flex-col gap-12 md:grid md:grid-cols-6 md:grid-rows-3 pt-20 md:w-[90%] md:mx-auto">
      <picture className="md:col-start-1 md:col-span-4 md:row-start-1 md:row-span-3">
        <source srcSet={DesktopInteractive} media="(min-width:1024px)" />
        <img src={MobileInteractive} alt="" />
      </picture>
      <article className="flex flex-col gap-8 self-center w-[90%] bg-white md:col-start-3 md:col-span-4 md:row-start-2 md:row-span-2 md:p-20">
        <h2 className="text-3xl leading-none md:text-6xl">The Leader In Interactive VR</h2>
        <p className="font-normal text-veryDarkGray text-body leading-normal md:text-left md:text-lg md:w-[80%]">
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital experiences that bind to their brand.
        </p>
      </article>
    </section>
  );
}
