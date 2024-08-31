export default function SeeAllBtn({ extraClass }: { extraClass?: string }) {
  return <button className={`border-2 uppercase px-8 text-body py-2 border-black w-max self-center tracking-[0.3em] font-alata ${extraClass}`}>See all</button>;
}
