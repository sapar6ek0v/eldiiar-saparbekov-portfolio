import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface CursorVariant {
  INACTIVE: 'inactive';
  ACTIVE: 'active';
}

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [text, setText] = useState('');

  useEffect(() => {
    const mouseMove = (event: any) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  // const variants = {
  //   default: {
  //     x: mousePosition.x - 16,
  //     y: mousePosition.y - 16,
  //   },
  //   text: {
  //     height: 150,
  //     width: 150,
  //     x: mousePosition.x - 75,
  //     y: mousePosition.y - 75,
  //     backgroundColor: 'yellow',
  //     mixBlendMode: 'difference',
  //   },
  // };

  // const ref = React.useRef(null);
  // const mouse = useMouse(ref, {
  //   enterDelay: 100,
  //   leaveDelay: 100
  // });

  // let mousePosition.x = 0;
  // let mousePosition.y = 0;

  // if (mouse.x !== null) {
  //   mouseXPosition = mouse.clientX;
  // }

  // if (mouse.y !== null) {
  //   mouseYPosition = mouse.clientY;
  // }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: '16px',
      backgroundColor: '#1e91d6',
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    project: {
      opacity: 1,
      // backgroundColor: "rgba(255, 255, 255, 0.6)",
      backgroundColor: '#fff',
      color: '#000',
      height: 80,
      width: 80,
      fontSize: '18px',
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'yellow',
      mixBlendMode: 'difference',
    },
  };

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  };

  const projectEnter = () => {
    setText('View');
    setCursorVariant('project');
  };

  const projectLeave = () => {
    setText('');
    setCursorVariant('default');
  };

  const contactEnter = () => {
    setText('👋');
    setCursorVariant('contact');
  };

  const contactLeave = () => {
    setText('');
    setCursorVariant('default');
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  return {
    variants,
    cursorVariant,
    spring,
    text,
    textEnter,
    textLeave,
  };
}
