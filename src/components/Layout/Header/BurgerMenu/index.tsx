import { useCycle, motion } from 'framer-motion';

import ListItem from '../ListItem';
import BurgerButton from './BurgerButton';
import { Background } from './styles';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(2px at 258px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const BurgerMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
    >
      <BurgerButton toggle={() => toggleOpen()} isOpen={isOpen} />
      <Background variants={sidebar}>
        <ListItem />
      </Background>
    </motion.div>
  )
}

export default BurgerMenu