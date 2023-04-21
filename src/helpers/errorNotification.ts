import { notifications } from '@mantine/notifications';

export const errorNotification = (message: string) =>
  notifications.show({
    title: 'Something went wrong!',
    message: `${message} ❌`,
    autoClose: false,
    styles: () => ({
      root: {
        backgroundColor: 'var(--dark)',
        borderRadius: 0,
        border: 'none',

        '&::before': {
          backgroundColor: 'var(--red2)',
          borderRadius: 2,
        },
      },

      title: {
        color: 'var(--red2)',
        fontFamily: 'var(--font-family)',
      },

      description: {
        fontFamily: 'var(--font-family)',
        fontWeight: 500,
        color: 'var(--red)',
      },

      closeButton: {
        color: 'var(--red2)',
        transition: 'var(--transition)',
        '&:hover': {
          backgroundColor: 'transparent',
          color: 'var(--hover-red)',
        },

        svg: {
          height: 23,
          width: 23,
        },
      },
    }),
  });
