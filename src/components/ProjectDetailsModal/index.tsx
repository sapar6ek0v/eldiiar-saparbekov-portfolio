import { FC, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

import { variants } from '../../constants/animation-constants';
import { useModalContext } from '../../context/modalContext';
import InformationalModal from './InformationalModal';
import Slider from './Slider';
import { ContentWrapper, Wrapper, XButton, InfoButton, SliderButton } from './styles'

const ProjectDetailsModal: FC = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [isInformModalOpen, setIsInformModalOpen] = useState<boolean>(false);

  const { project, isOpen, toggleModal } = useModalContext();

  const nextSlide = () => {
    if (project) {
      if (slideIndex !== project.images.length) {
        setSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
      }
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex((prevSlideIndex) => prevSlideIndex - 1);
    }
  };

  const toggleInformModal = () => setIsInformModalOpen(!isInformModalOpen);
  const handleCloseInformModal = () => setIsInformModalOpen(false);

  return (
    <Wrapper opened={isOpen} onClick={toggleModal}>
      <ContentWrapper onClick={(event) => event.stopPropagation()}>
        <XButton onClick={toggleModal} variants={variants} custom={1.1}>
          <RxCross1 />
        </XButton>
        <InfoButton onClick={toggleInformModal} variants={variants} custom={1.1}>
          {isInformModalOpen ?
            <RxCross1 /> :
            <span>i</span>}
        </InfoButton>

        {(slideIndex !== 0 && !isInformModalOpen) &&
          <SliderButton onClick={prevSlide} type='button' $left variants={variants} custom={1.3}>
            <FaArrowLeft />
          </SliderButton>}

        <Slider project={project} slideIndex={slideIndex} />

        {((slideIndex + 1) !== project?.images.length && !isInformModalOpen) &&
          <SliderButton onClick={nextSlide} type='button' variants={variants} custom={1.3}>
            <FaArrowRight />
          </SliderButton>}

      </ContentWrapper>
      <InformationalModal
        isOpen={isInformModalOpen}
        isParentModalOpen={isOpen}
        onClose={handleCloseInformModal}
        project={project}
      />
    </Wrapper>
  )
}

export default ProjectDetailsModal;