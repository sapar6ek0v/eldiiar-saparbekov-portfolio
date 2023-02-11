import { AnimatePresence, useIsPresent } from 'framer-motion'
import { FC } from 'react'
import { Centered, Line, Title, UnMountLoader, Wrapper } from './styles'

type Props = {
  isShow?: boolean;
}

const Loader: FC<Props> = ({ isShow }) => {
  const isPresent = useIsPresent();

  return (
    <AnimatePresence>
      {!isShow ?
        <UnMountLoader
          key="child"
          initial={{ y: -100 }}
          animate={{ y: 0, transition: { duration: 0.6, ease: 'circOut' } }}
          exit={{ y: 100, transition: { duration: 0.6, ease: 'circIn' } }}
        />
        : <Wrapper>
          <Centered>
            <Title
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: 'spring', delay: 0.4 }}
            >
              Eldiiar Saparbekov
            </Title>
            <Line
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: 'spring', delay: 0.4 }}
            />
          </Centered>
        </Wrapper>}
    </AnimatePresence>
  )
}

export default Loader