import { nanoid } from 'nanoid';
import { FC } from 'react';
import { Project } from '../data';
import { ParallaxCardWrapper, ParallaxContentWrapper, ProjectStackText, ProjectStackTextGroup, ProjectViewButton } from './styles';

type Props = {
  project: Project
};

const ParallaxCard: FC<Props> = ({ project }) => {
  return (
    <ParallaxCardWrapper imgUrl={project.imageUrl}>
      <ParallaxContentWrapper>
        <ProjectStackTextGroup>
          {
            project.stacks.map((stack) => (
              <ProjectStackText key={nanoid(4)}>{stack}</ProjectStackText>
            ))
          }
        </ProjectStackTextGroup>
        <ProjectViewButton>
          <a href='#' target='_blank'>View</a>
        </ProjectViewButton>
      </ParallaxContentWrapper>
    </ParallaxCardWrapper>
  );
};

export default ParallaxCard;