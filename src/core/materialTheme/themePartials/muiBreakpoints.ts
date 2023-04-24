import { createTheme } from '@mui/material';

// * BREAKPOINTS OVERRIDE
declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        xl: false;
    }
}

const muiBreakpoints = createTheme({
    breakpoints: {
        values: {
            sm: 0,
            md: 768,
            lg: 1320,
        },
    },
});

export default muiBreakpoints.breakpoints;
