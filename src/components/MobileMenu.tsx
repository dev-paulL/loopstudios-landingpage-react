import { closeIcon, logo, navLinks } from "../data";
import NavLinkItem from "./NavLinkItem";
import { motion } from "framer-motion";

export default function MobileMenu({ toggleMenu }: { toggleMenu: () => void }) {
  const variants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: "0%", opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="absolute bg-black inset-0 min-h-screen p-8"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex justify-between">
        <img src={logo} alt="" className="w-36" />
        <button aria-label="Close Mobile Menu" onClick={toggleMenu}>
          <img src={closeIcon} alt="" />
        </button>
      </div>
      <nav>
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
          className="text-white uppercase text-2xl font-light font-josefin mt-32 flex flex-col gap-4"
        >
          {navLinks.map((nL) => {
            return (
              <motion.li key={`h_${nL}`} variants={itemVariants}>
                <NavLinkItem link={nL} />
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>
    </motion.div>
  );
}
