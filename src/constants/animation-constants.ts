export const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: (custom: any) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'tween',
      delay: custom * 0.1,
      bounce: 0.1,
    },
  }),
  exit: { opacity: 0, x: -0, y: 20 },
};
