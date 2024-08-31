import MobileInteractive from "../assets/images/mobile/image-interactive.jpg";
import DesktopInteractive from "../assets/images/desktop/image-interactive.jpg";
export default function InteractiveSection() {
  return (
    <section className="p-8 flex flex-col gap-12 lg:grid lg:grid-cols-8 lg:grid-rows-4 pt-20 max-w-[1200px] mx-auto">
      <picture className="lg:col-start-1 lg:col-span-5 lg:row-start-1 lg:row-span-4 h-min">
        <source srcSet={DesktopInteractive} media="(min-width:1020px)" />
        <img src={MobileInteractive} alt="" />
      </picture>
      <article className="flex flex-col gap-8 self-center bg-white lg:col-start-4 lg:col-span-5 lg:row-start-2 lg:row-span-3 box-content lg:p-20 text-center lg:text-start">
        <h2 className="text-3xl leading-none lg:text-5xl ">The Leader In Interactive VR</h2>
        <p className="font-normal text-veryDarkGray text-body leading-normal lg:text-left lg:text-lg lg:w-[80%]">
          Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital experiences that bind to their brand.
        </p>
      </article>
    </section>
  );
}
