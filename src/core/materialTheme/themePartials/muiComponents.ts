import { createTheme } from '@mui/material';
import '@mui/x-data-grid/themeAugmentation';
import { useCssVariable } from '../hooks';
import muiBreakpoints from './muiBreakpoints';

const muiComponents = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            pointerEvents: 'unset',
            cursor: 'not-allowed',
          },
        },
        startIcon: {
          marginBottom: '2px',
        },
        endIcon: {
          margin: 0,
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            boxShadow: useCssVariable('--btn-shadow'),
            borderRadius: '4px',
            ':disabled': {
              color: useCssVariable('--gray-dark-300'),
              backgroundColor: useCssVariable('--btn-secondary-disabled'),
            },
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            ':hover': {
              color: 'white',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            backgroundColor: useCssVariable('--btn-secondary-bg'),
            color: useCssVariable('--btn-secondary-main-text'),
            ':hover': {
              color: useCssVariable('--btn-secondary-hover-text'),
              backgroundColor: useCssVariable('--btn-secondary-hover'),
            },
          },
        },
        {
          props: { variant: 'contained', color: 'tertiary' },
          style: {
            backgroundColor: useCssVariable('--btn-tertiary-bg'),
            color: useCssVariable('--btn-tertiary-main-text'),
            ':hover': {
              backgroundColor: useCssVariable('--primary-light'),
              color: useCssVariable('--btn-tertiary-hover-text'),
            },
          },
        },
        {
          props: { variant: 'outlined' },
          style: {
            color: useCssVariable('--btn-outlined-main-text'),
            border: `1px solid  ${useCssVariable('--gray-dark-600')}`,
            backgroundColor: useCssVariable('--btn-outlined-bg'),
            ':hover': {
              border: `1px solid  ${useCssVariable('--gray-dark-600')}`,
              backgroundColor: useCssVariable('--btn-outlined-hover'),
            },
            ':disabled': {
              color: useCssVariable('--btn-outlined-disabled-text'),
              border: `1px solid  ${useCssVariable('--gray')}`,
              backgroundColor: useCssVariable('--btn-outlined-disabled'),
            },
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: useCssVariable('--btn-text-main-text'),
            backgroundColor: useCssVariable('--btn-text-bg'),
            boxShadow: 'none',
            ':hover': {
              color: useCssVariable('--btn-text-hover-text'),
            },
            ':disabled': {
              color: useCssVariable('--btn-text-disabled-text'),
            },
          },
        },
        {
          props: { size: 'medium' },
          style: {
            padding: '14px 24px',
            [muiBreakpoints.up('md')]: {
              padding: '16px 24px',
            },
          },
        },
        {
          props: { size: 'small' },
          style: {
            padding: '8px 24px',
            [muiBreakpoints.up('md')]: {
              padding: '12px 24px',
            },
          },
        },
      ],
    },
    MuiDivider: {
      variants: [
        {
          props: { variant: 'fullWidth' },
          style: {
            backgroundColor: useCssVariable('--white'),
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiAlert: {
      variants: [
        {
          props: { severity: 'success' },
          style: { color: useCssVariable('--black') },
        },
        {
          props: { severity: 'error' },
          style: { color: useCssVariable('--error-dark') },
        },
      ],
      styleOverrides: {
        root: { width: '100%' },
        icon: {
          marginRight: '16px',
          padding: 0,
          opacity: 1,
        },
        message: {
          margin: '0',
          padding: 0,
          width: '100%',
        },
        action: {
          margin: '0 0 0 16px',
          padding: 0,
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          [muiBreakpoints.up('sm')]: {
            top: '24px',
            width: `calc(100% - ${useCssVariable('--mobile-outer-padding')}*2)`,
          },
          [muiBreakpoints.up('md')]: {
            top: '32px',
            maxWidth: '808px',
            width: `calc(100% - ${useCssVariable('--tablet-outer-padding')}*2)`,
          },
          [muiBreakpoints.up('lg')]: {
            top: '40px',
            maxWidth: '1320px',
            width: `calc(100% - ${useCssVariable(
              '--desktop-outer-padding'
            )}*2)`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {},
          },
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: useCssVariable('--primary'),
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        row: {
          '&:nth-of-type(odd)': {
            backgroundColor: useCssVariable('--body-secondary-bg'),
          },
          '&.Mui-selected': {
            backgroundColor: useCssVariable('--table-row-selected'),
          },
        },
        cell: {
          '&:focus-within': {
            outline: 'none',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: useCssVariable('--primary-dark'),
          },
        },
      },
    },
  },
});

export default muiComponents.components;
