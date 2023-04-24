import { FC, PropsWithChildren } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
    StyledEngineProvider,
    ThemeProvider,
    createTheme,
} from '@mui/material/styles';
import { breakpoints, components, palette, typography } from './themePartials';

let theme = createTheme();

theme = {
    ...theme,
    breakpoints,
    typography,
    palette,
    components,
};

const MuiProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default MuiProvider;
