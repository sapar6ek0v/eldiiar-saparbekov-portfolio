import { FC, memo } from 'react'
import { Wrapper, InfoContainer, InfoTitle, InfoDescription } from './styles'

type Props = {
  isOpen: boolean;
  onClose: () => void;
}

const InformationalModal: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Wrapper opened={isOpen} onClick={onClose}>
      <InfoContainer onClick={(event) => event.stopPropagation()}>
        <InfoTitle>Immersive Solutions</InfoTitle>
        <InfoDescription>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </InfoDescription>
      </InfoContainer>
    </Wrapper>
  )
}

export default memo(InformationalModal)