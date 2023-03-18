import { FC, memo, useRef } from 'react'

import { variants } from '../../../../constants/animation-constants'
import { HideDiv, TimeLineCard, TimeLineGroup, TimeLineCompanyLink, TimeLineDate, TimeLineTitle, TimeLineStack, ResponsibilityTitle } from './styles'

type Props = {
  experience: any
  index: number
}

const ExperienceCard: FC<Props> = ({ experience, index }) => {
  const divHideRef = useRef<HTMLDivElement | null>(null);
  console.log((divHideRef.current?.clientHeight as number) <= 79 && 'frf')

  const isEqualOrHigher79 = (divHideRef.current?.clientHeight as number) <= 79;

  return (
    <TimeLineCard variants={variants} custom={`1.${6 + index}`}>
      <TimeLineGroup>
        <TimeLineCompanyLink
          href={experience.companySiteUrl}
          target='_blank'
        >{experience.company}
        </TimeLineCompanyLink>
        <TimeLineDate>{experience.workingDates}</TimeLineDate>
      </TimeLineGroup>
      <TimeLineTitle>{experience.title}</TimeLineTitle>

      <div>
        <HideDiv ref={divHideRef} />
        {
          isEqualOrHigher79 ? <>
            <TimeLineStack>
              {
                experience.responsibilities.map((item: any) => (
                  <ResponsibilityTitle key={item.id}>{item.responsibility}</ResponsibilityTitle>
                ))
              }
            </TimeLineStack> <button>...</button>
          </> :
            <TimeLineStack>
              {
                experience.responsibilities.map((item: any) => (
                  <ResponsibilityTitle key={item.id}>{item.responsibility}</ResponsibilityTitle>
                ))
              }
            </TimeLineStack>
        }
      </div>
    </TimeLineCard>
  )
}

export default memo(ExperienceCard)