import { FC, useEffect } from 'react'

import { Project } from '../../../helpers/types';
import {
  ButtonGroup,
  Button,
  InfoContainer,
  InfoTitle,
  InfoDescription,
  FeaturesGroup,
  StacksGroup,
  Stack,
  Wrapper,
  Feature,
} from './styles'

type Props = {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  isParentModalOpen: boolean;
}

const InformationalModal: FC<Props> = ({ isOpen, onClose, project, isParentModalOpen }) => {

  useEffect(() => {
    if (!isParentModalOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isParentModalOpen])

  return (
    <Wrapper opened={isOpen}>
      {!!project ?
        <InfoContainer onClick={(event) => event.stopPropagation()}>
          <InfoTitle>{project.name}</InfoTitle>
          <StacksGroup>
            {project.stacks.map((stack) => <Stack key={stack.id}>{stack.name}</Stack>)}
          </StacksGroup>
          <InfoDescription>{project.description}</InfoDescription>
          <FeaturesGroup>
            {project.features.map((feature) => (
              <Feature key={feature.id}>
                <p>{feature.title}</p>
              </Feature>
            ))}
          </FeaturesGroup>
          <ButtonGroup>
            <Button type='button'>
              <a href={project.demoUrl} target='_blank' rel="noreferrer">View</a>
            </Button>
            <Button type='button'>
              <a href={project.githubUrl} target='_blank' rel="noreferrer">Github</a>
            </Button>
          </ButtonGroup>
        </InfoContainer>
        : null}
    </Wrapper>
  )
}

export default InformationalModal;