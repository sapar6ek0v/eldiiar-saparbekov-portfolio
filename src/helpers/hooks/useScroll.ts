import { MutableRefObject, useEffect } from 'react';
import 'locomotive-scroll/src/locomotive-scroll.scss';

export default function useScroll(ref: MutableRefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let scroll: LocomotiveScroll;
    import('locomotive-scroll').then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: container,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
      });
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [ref]);
}
