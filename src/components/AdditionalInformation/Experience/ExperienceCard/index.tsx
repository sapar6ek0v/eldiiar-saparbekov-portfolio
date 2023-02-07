import { FC } from 'react'

import { variants } from '../../../../constants/animation-constants'
import { Description } from '../../styles'
import { TimeLineCard, TimeLineGroup, TimeLineSubtitle, TimeLineTitle } from './styles'

type Props = {
  experience: any
  index: number
}

const ExperienceCard: FC<Props> = ({ experience, index }) => {
  return (
    <TimeLineCard variants={variants} custom={`1.${6 + index}`}>
      <TimeLineGroup>
        <TimeLineSubtitle>{experience.company}</TimeLineSubtitle>
        <TimeLineSubtitle>{experience.workingDates}</TimeLineSubtitle>
      </TimeLineGroup>
      <TimeLineTitle>{experience.title}</TimeLineTitle>

      <Description>
        Lorem Ipsum is simply dummy text of the printing industry.
      </Description>
    </TimeLineCard>
  )
}

export default ExperienceCard