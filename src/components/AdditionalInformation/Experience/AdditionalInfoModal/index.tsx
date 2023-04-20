import { Group, Modal } from "@mantine/core";

import { Experience } from "../../../../helpers/types";
import {
  CompanyLink,
  ResponsibilitiesStack,
  ResponsibilityItem,
  Stack,
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

  const variants = {
    hidden: { opacity: 0, x: 20, y: 0 },
    enter: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'tween',
        delay: 0.2,
        bounce: 0.4,
      },
    },
    exit: { opacity: 0, x: -20, y: 0 },
  }

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
        <Group>
          <CompanyLink href={experience.companySiteUrl} target='_blank'>
            {experience.company}
          </CompanyLink>
          <WorkingDates>{experience.workingDates}</WorkingDates>
        </Group>
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