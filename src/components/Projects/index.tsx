import { FC, useEffect, useRef } from 'react';
import QuizApp from '../../public/quiz-app.png';
import FilmDb from '../../public/film-db.png';
import ParallaxCard from './ParallaxCard';
import { projects } from './data';

const Projects: FC = () => {
  const parallaxRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // const parallax = document.getElementById('#parallax');
      let scrollPosition = window.pageYOffset;
      if (!parallaxRef?.current?.style) return;
      parallaxRef.current.style.transform = `translateY(${scrollPosition * .5}px)` || '';

      // if (parallax) {
      // parallax.style.transform = `translateY(${scrollPosition * .5}px)` || ''
      // }
    });
  }, [])

  return (
    <>
      {
        projects.map((project) =>
          <ParallaxCard key={project.id} project={project} />
        )
      }
    </>
  );
};

export default Projects;