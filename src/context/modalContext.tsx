import {
  Dispatch,
  FC,
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction
} from 'react';

import { Project } from '../helpers/types';

type ContextProps = {
  isOpen: boolean;
  toggleModal: () => void;
  project: Project | null;
  setProject: Dispatch<SetStateAction<Project | null>>;
}

export const ModalContext = createContext<ContextProps>({
  isOpen: false,
  toggleModal: () => { },
  project: null,
  setProject: () => { },
});

export const useModalContext = () => useContext(ModalContext);

type Props = {
  children: ReactNode;
}

const ModalProvider: FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [project, setProject] = useState<Project | null>(null);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <ModalContext.Provider
      value={{ isOpen, toggleModal, project, setProject }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;