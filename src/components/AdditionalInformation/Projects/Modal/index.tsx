import { FC, useState, memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong, faX } from '@fortawesome/free-solid-svg-icons';

import { variants } from '../../../../constants/animation-constants';
import { Project } from '../data';
import InformationalModal from './InformationalModal';
import Slider from './Slider';
import { ContentWrapper, Wrapper, XButton, InfoButton, SliderWrapper, SliderButton } from './styles'

type Props = {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const Modal: FC<Props> = ({ isOpen, onClose, project }) => {
  const [prevSlider, setPrevSlider] = useState<number>(0);
  const [nextSlider, setNextSlider] = useState<number>(1);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState<boolean>(false);

  const handleNextSlide = () => {
    setPrevSlider((prev) => prev + 1);
    setNextSlider((next) => next + 1);
  };

  const handlePrevSlide = () => {
    setPrevSlider((prev) => prev - 1);
    setNextSlider((next) => next - 1);
  };

  const toggleModal = () => setIsInfoModalOpen(!isInfoModalOpen);

  return (
    <>
      <Wrapper opened={isOpen} onClick={onClose}>
        <ContentWrapper
          onClick={(event) => event.stopPropagation()}
        >
          <XButton onClick={onClose} variants={variants} custom={1.1}>
            <FontAwesomeIcon icon={faX} />
          </XButton>
          <InfoButton onClick={toggleModal} variants={variants} custom={1.1}>
            {
              isInfoModalOpen ?
                <FontAwesomeIcon icon={faX} /> :
                <span>i</span>
            }
          </InfoButton>

          {
            prevSlider >= 1 &&
            <SliderButton onClick={handlePrevSlide} type='button' left variants={variants} custom={1.3}>
              <FontAwesomeIcon icon={faArrowLeftLong} />
            </SliderButton>
          }

          <SliderWrapper
            initial='hidden'
            animate='enter'
            exit='exit'
          >
            {
              project.images
                .slice(prevSlider, nextSlider)
                .map((image) => <Slider key={Math.random() * 1000} image={image} />)
            }
          </SliderWrapper>

          <SliderButton onClick={handleNextSlide} type='button' variants={variants} custom={1.3}>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </SliderButton>
        </ContentWrapper>
      </Wrapper>

      <InformationalModal isOpen={isInfoModalOpen} onClose={toggleModal} />
    </>
  )
}

export default memo(Modal)