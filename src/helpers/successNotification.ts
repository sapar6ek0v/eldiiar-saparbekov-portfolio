import { notifications } from '@mantine/notifications';

export const successNotification = (message: string) =>
  notifications.show({
    title: 'Success!',
    message: `${message} ✅`,
    autoClose: 5000,
    styles: (theme) => ({
      root: {
        backgroundColor: 'var(--dark)',
        borderRadius: 0,
        border: 'none',

        '&::before': {
          backgroundColor: 'var(--dark-gray)',
          borderRadius: 2,
        },
      },

      title: {
        color: 'var(--white)',
        fontFamily: 'var(--font-family)',
      },

      description: {
        fontFamily: 'var(--font-family)',
        fontWeight: 500,
        color: 'var(--dark-gray)',
      },

      closeButton: {
        color: 'var(--dark-gray)',
        transition: 'var(--transition)',
        '&:hover': {
          backgroundColor: 'transparent',
          color: 'var(--yellow)',
        },

        svg: {
          height: 23,
          width: 23,
        },
      },
    }),
  });
