import { useId } from 'react';

import { Project } from '../../../../helpers/types';
// Cinema images
import CinemaMain from '../../../../public/cinema_main_page.png';
import CinemaMainSearch from '../../../../public/cinema_main_page_search.png';
import SearchResult from '../../../../public/search_result_page.png';
import MovieTypes from '../../../../public/movie_types.png';
import MovieTypesPage from '../../../../public/movie_types_page.png';
import MovieDetailsPage from '../../../../public/movie_details_page.png';
import TvShowTypes from '../../../../public/tv_shows_types.png';
import TvShowDetailsPage from '../../../../public/tv_shows_details_page.png';
import ActorDetailsPage from '../../../../public/actor_details.png';
// Remember Way images
import RememberWay from '../../../../public/remember_way.png';
import RememberWayLevels from '../../../../public/remember_way_levels.png';
import Explanation from '../../../../public/explanation.png';
import DisabledLevels from '../../../../public/disabled_levels.png';
import StartAgain from '../../../../public/start_again.png';
// Quiz App images
import QuizApp from '../../../../public/quiz_app_main.png';
import QuizAppExplanation from '../../../../public/quiz_app_explanation.png';
import QuizAppStartOver from '../../../../public/quiz_app_start_over.png';

export default function useProjectsData() {
  const projects: Project[] = [
    {
      id: useId(),
      name: 'The Movie DB',
      description:
        'Application for easy viewing of series and movies. Also the actors who participate in the film and series. (Created using TMDB).',
      features: [
        {
          id: useId(),
          title: 'The ability to see information about the series, movie and actor.',
        },
        {
          id: useId(),
          title:
            'The ability to see all the additional information about the film, series and actor (budget, cast, recommendations, trailers, etc.).',
        },
        {
          id: useId(),
          title: 'Sorting movies and series by several types.',
        },
        {
          id: useId(),
          title: 'Search for movies, series and actors.',
        },
        {
          id: useId(),
          title: 'Support to languages(en & ru).',
        },
      ],
      demoUrl: 'https://cinema-black.vercel.app/',
      githubUrl: 'https://github.com/sapar6ek0v/cinema',
      imageUrl: CinemaMain.src,
      images: [
        {
          id: useId(),
          imageUrl: CinemaMain.src,
        },
        {
          id: useId(),
          imageUrl: CinemaMainSearch.src,
        },
        {
          id: useId(),
          imageUrl: SearchResult.src,
        },
        {
          id: useId(),
          imageUrl: MovieTypes.src,
        },
        {
          id: useId(),
          imageUrl: MovieTypesPage.src,
        },
        {
          id: useId(),
          imageUrl: MovieDetailsPage.src,
        },
        {
          id: useId(),
          imageUrl: TvShowTypes.src,
        },
        {
          id: useId(),
          imageUrl: TvShowDetailsPage.src,
        },
        {
          id: useId(),
          imageUrl: ActorDetailsPage.src,
        },
      ],
      stacks: [
        {
          id: useId(),
          name: 'React',
        },
        {
          id: useId(),
          name: 'react-query',
        },
        {
          id: useId(),
          name: 'react-i18next',
        },
        {
          id: useId(),
          name: 'react-helmet-async',
        },
        {
          id: useId(),
          name: 'styled-components',
        },
      ],
    },
    {
      id: useId(),
      name: 'Remember Way',
      description:
        'A simple game where you just need to memorize the path and go through it from start to finish. There are also multiple levels of difficulty.',
      features: [
        {
          id: useId(),
          title: 'Remember the path from beginning to end and repeat this path as well.',
        },
        {
          id: useId(),
          title: 'Choice of several levels of complexity.',
        },
        {
          id: useId(),
          title: 'Scoring.',
        },
        {
          id: useId(),
          title: '5 levels with increasing difficulty.',
        },
      ],
      demoUrl: 'https://remember-way.vercel.app',
      githubUrl: 'https://github.com/sapar6ek0v/remember_way',
      imageUrl: RememberWay.src,
      images: [
        {
          id: useId(),
          imageUrl: RememberWay.src,
        },
        {
          id: useId(),
          imageUrl: RememberWayLevels.src,
        },
        {
          id: useId(),
          imageUrl: Explanation.src,
        },
        {
          id: useId(),
          imageUrl: DisabledLevels.src,
        },
        {
          id: useId(),
          imageUrl: StartAgain.src,
        },
      ],
      stacks: [
        {
          id: useId(),
          name: 'JS',
        },
        {
          id: useId(),
          name: 'HTML',
        },
        {
          id: useId(),
          name: 'SCSS',
        },
      ],
    },
    {
      id: useId(),
      name: 'Quiz App',
      description:
        'A simple game consisting of 10 questions (any questions) with three difficulty levels(With Open Trivia DB).',
      features: [
        {
          id: useId(),
          title: '10 questions from different topics.',
        },
        {
          id: useId(),
          title: '3 levels of difficulty.',
        },
        {
          id: useId(),
          title: 'Scores.',
        },
      ],
      demoUrl: 'https://quiz-app-nine-sable.vercel.app',
      githubUrl: 'https://github.com/sapar6ek0v/quiz-app',
      imageUrl: QuizApp.src,
      images: [
        {
          id: useId(),
          imageUrl: QuizApp.src,
        },
        {
          id: useId(),
          imageUrl: QuizAppExplanation.src,
        },
        {
          id: useId(),
          imageUrl: QuizAppStartOver.src,
        },
      ],
      stacks: [
        {
          id: useId(),
          name: 'React',
        },
        {
          id: useId(),
          name: 'TS',
        },
        {
          id: useId(),
          name: 'styled-components',
        },
      ],
    },
  ];

  return { projects };
}
