import { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Modal from '../Modal'
import { Project } from '../data'
import { Button, DisplayImage, Info, InfoLine, InfoTitle, Wrapper } from './styles'

type Props = {
  project: Project
}

const ProjectCard: FC<Props> = ({ project }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <Wrapper
      initial='hidden'
      animate='enter'
      exit='exit'
    >
      <Button onClick={handleOpenModal}>
        <FontAwesomeIcon icon={faArrowRight} />
      </Button>
      <Info>
        <InfoTitle>{project.name}</InfoTitle>
        <InfoLine />
      </Info>
      <DisplayImage imgUrl={project.imageUrl} />
      <Modal isOpen={isOpenModal} onClose={handleCloseModal} project={project} />
    </Wrapper>
  )
}

export default ProjectCard