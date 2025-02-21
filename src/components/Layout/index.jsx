import React from 'react';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledMain = styled('main')(({ theme }) => ({
    flexGrow: 1,
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
}));

const Layout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <StyledMain>
                <Container maxWidth="lg">
                    {children}
                </Container>
            </StyledMain>
        </Box>
    );
};

export default Layout;