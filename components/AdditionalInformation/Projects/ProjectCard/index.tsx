import { FC } from 'react'
import { FaArrowRight } from 'react-icons/fa'

import { variants } from '../../../../constants/animation-constants'
import { useModalContext } from '../../../../context/modalContext'
import { Project } from '../../../../helpers/types'
import { Button, DisplayImage, Info, InfoLine, InfoTitle, Wrapper } from './styles'

type Props = {
  project: Project;
  index: number;
}

const ProjectCard: FC<Props> = ({ project, index }) => {
  const { setProject, toggleModal } = useModalContext();

  const handleOpenModal = () => {
    setProject(project);
    toggleModal();
  }

  return (
    <Wrapper variants={variants} custom={`1.${6 + index}`}>
      <Button onClick={handleOpenModal}>
        <FaArrowRight />
      </Button>
      <Info>
        <InfoTitle>{project.name}</InfoTitle>
        <InfoLine />
      </Info>
      <DisplayImage imgUrl={project.imageUrl} />
    </Wrapper>
  )
}

export default ProjectCard;