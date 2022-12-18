import { FC, } from 'react';
import ParallaxCard from './ParallaxCard';
import { projects } from './data';
import { ProjectWrapper } from './styles';

const Projects: FC = () => {

  return (
    <ProjectWrapper>
      {
        projects.map((project) =>
          <ParallaxCard key={project.id} project={project} />
        )
      }
    </ProjectWrapper>
  );
};

export default Projects;