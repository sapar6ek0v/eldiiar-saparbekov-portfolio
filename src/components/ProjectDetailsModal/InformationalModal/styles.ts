import styled from 'styled-components';

type WrapperProps = {
  opened: boolean;
};

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 600;
  bottom: 0;
  /* width: 61.8%; */
  height: 100%;
  background-color: var(--dark-brown);
  ${({ theme }) => theme.mixins.fCenter};

  transform: ${(props: WrapperProps) => (props.opened ? 'translateX(0)' : 'translateX(-100%)')};
  opacity: ${(props: WrapperProps) => (props.opened ? '1' : 0)};
  transition: all 0.4s ease;

  @media ${({ theme }) => theme.bp.bpTinyS} {
    width: 100%;
  }
`;

export const InfoContainer = styled.div`
  padding: clamp(3.13rem, calc(2.78rem + 1.71vw), 4rem) clamp(2.19rem, calc(0.7rem + 7.44vw), 6rem);
  ${({ theme }) => theme.mixins.column};
  gap: var(--gap);
`;

export const InfoTitle = styled.h3`
  ${({ theme }) => theme.mixins.fontSize22};
  line-height: 1.1em;
  font-weight: 400;
  color: var(--white);
`;

export const InfoDescription = styled.p`
  ${({ theme }) => theme.mixins.fontSize16};
  font-weight: 300;
  font-style: italic;
  color: var(--white);

  &::before {
    content: '❝';
    margin-right: 5px;
  }

  &::after {
    content: '❞';
    margin-left: 5px;
  }
`;

export const StacksGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  gap: clamp(0.31rem, calc(0.19rem + 0.61vw), 0.63rem);
`;

export const Stack = styled.p`
  height: clamp(1.63rem, calc(1.48rem + 0.73vw), 2rem);
  ${({ theme }) => theme.mixins.fontSize16};
  letter-spacing: -0.005em;
  font-weight: 300;
  color: var(--dark-gray);
  ${({ theme }) => theme.mixins.fCenter};
  padding: 0 clamp(1rem, calc(0.88rem + 0.61vw), 1.31rem);
  border-radius: 20px;
  background-color: var(--dark);
`;

export const FeaturesGroup = styled.ul`
  ${({ theme }) => theme.mixins.column};
  gap: 0.5rem;
  padding-left: var(--pd-l);
`;

export const Feature = styled.li`
  position: relative;

  p {
    ${({ theme }) => theme.mixins.fontSize16};
    font-weight: 300;
    color: var(--dark-gray);
  }

  &::before {
    content: '▸';
    position: absolute;
    top: clamp(-0.19rem, calc(-0.26rem + 0.37vw), 0rem);
    left: var(--left);
    color: var(--orange);
  }
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => theme.mixins.center};
  gap: 1rem;
`;

export const Button = styled.button`
  width: var(--button-width);
  height: 40px;
  min-height: 20px;
  ${({ theme }) => theme.mixins.fontSize18};
  font-weight: 600;
  background-color: var(--orange);
  ${({ theme }) => theme.mixins.fCenter};
  box-shadow: 5px 5px 0 0;
  transition: 0.3s;

  a {
    position: absolute;
    text-decoration: none;
    color: var(--dark7);
    z-index: 1000;
  }

  &::after {
    content: '';
    width: var(--button-width);
    height: 40px;
    background: linear-gradient(to right, var(--light-pink), var(--pink));
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    box-shadow: -5px -5px 0 0;
    transform: scale(0.9);
  }

  &:hover::after {
    opacity: 1;
  }
`;
