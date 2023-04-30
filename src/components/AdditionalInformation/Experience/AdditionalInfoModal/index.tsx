import { Modal } from "@mantine/core";

import { Experience } from "../../../../helpers/types";
import {
  CompanyLink,
  ResponsibilitiesStack,
  ResponsibilityItem,
  Stack,
  SubStack,
  Title,
  useModalStyles,
  WorkingDates
} from "./styles";

type Props = {
  experience: Experience;
  onClose: () => void;
  isOpen: boolean;
};

const AdditionalInfoModal = ({ experience, isOpen, onClose }: Props) => {
  const { classes } = useModalStyles();

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      centered
      size={600}
      classNames={{
        overlay: classes.overlay,
        content: classes.content,
        header: classes.header,
        body: classes.body,
        close: classes.close,
      }}
    >
      <Stack>
        <Title>{experience.title}</Title>
        <SubStack>
          <CompanyLink href={experience.companySiteUrl} target='_blank'>
            {experience.company}
          </CompanyLink>
          <WorkingDates>{experience.workingDates}</WorkingDates>
        </SubStack>
        <ResponsibilitiesStack>
          {experience.responsibilities.map((item) => (
            <ResponsibilityItem key={item.id}>
              <p>{item.responsibility}</p>
            </ResponsibilityItem>
          ))}
        </ResponsibilitiesStack>
      </Stack>
    </Modal>
  )
};

export default AdditionalInfoModal;