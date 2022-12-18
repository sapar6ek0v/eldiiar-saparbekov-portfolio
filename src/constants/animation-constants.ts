export const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: (custom: any) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'easeInOut',
      delay: custom * 0.2,
      bounce: 0.4,
    },
  }),
  exit: { opacity: 0, x: -0, y: 20 },
};
