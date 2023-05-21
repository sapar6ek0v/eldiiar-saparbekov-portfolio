import { FC, useEffect, useRef, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io';

import { variants } from '../../../../constants/animation-constants'
import { Experience } from '../../../../helpers/types';
import AdditionalInfoModal from '../AdditionalInfoModal';
import {
  HideDiv,
  TimeLineCard,
  TimeLineGroup,
  TimeLineCompanyLink,
  TimeLineDate,
  TimeLineTitle,
  TimeLineStack,
  ResponsibilityTitle,
  HideDivGroup,
  ExpandMoreButton
} from './styles'

type Props = {
  experience: Experience;
  index: number;
}

const ExperienceCard: FC<Props> = ({ experience, index }) => {
  const divHideRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    if (parseInt(window.getComputedStyle(divHideRef.current as Element).height) < 79) {
      setIsHidden(true);
    }
  }, []);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      <TimeLineCard variants={variants} custom={`1.${6 + index}`}>
        <TimeLineGroup>
          <TimeLineCompanyLink
            href={experience.companySiteUrl}
            target='_blank'
          >
            {experience.company}
          </TimeLineCompanyLink>
          <TimeLineDate>{experience.workingDates}</TimeLineDate>
        </TimeLineGroup>
        <TimeLineTitle>{experience.title}</TimeLineTitle>

        <HideDivGroup>
          <HideDiv ref={divHideRef} />
          {
            !isHidden ? <>
              <TimeLineStack>
                {
                  experience.responsibilities.map((item: any) => (
                    <ResponsibilityTitle key={item.id}>
                      {item.responsibility}
                    </ResponsibilityTitle>
                  ))
                }
              </TimeLineStack>
              <ExpandMoreButton onClick={toggleModal} type='button'>
                <span>More</span>
                <IoIosArrowForward />
              </ExpandMoreButton>
            </> :
              <TimeLineStack>
                {
                  experience.responsibilities.map((item: any) => (
                    <ResponsibilityTitle key={item.id}>{item.responsibility}</ResponsibilityTitle>
                  ))
                }
              </TimeLineStack>
          }
        </HideDivGroup>
      </TimeLineCard>
      <AdditionalInfoModal experience={experience} isOpen={isOpen} onClose={toggleModal} />
    </>
  )
}

export default ExperienceCard;