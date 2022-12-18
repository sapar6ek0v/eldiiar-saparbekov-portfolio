import { FC } from 'react';
import { variants } from '../../constants/animation-constants';
import { CallToActionTitle, CallToActionWrapper, CallToActionDesc, CallToActionButton } from './styles';

const CallToAction: FC = () => {
  return (
    <CallToActionWrapper
      initial='hidden'
      whileInView='enter'
      exit='exit'
      viewport={{ amount: 0.2, once: true }}
    >
      <CallToActionTitle
        variants={variants}
        custom={1}
      >
        <p>Get In Touch</p>
      </CallToActionTitle>
      <CallToActionDesc
        variants={variants}
        custom={1.1}
      >
        I am always looking for an interesting project, friendly team, and new opportunities. If you have any questions for me, click on the button below :)
      </CallToActionDesc>
      <CallToActionButton
        variants={variants}
        custom={1.2}
        href='mailto:eldiiarsaparbekov03@gmail.com'
        target='_blank'
        rel='noreferrer'
      >
        Hello
      </CallToActionButton>
    </CallToActionWrapper>
  );
};

export default CallToAction;