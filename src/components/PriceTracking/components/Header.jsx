import React from 'react';
import { Box, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    return (
        <Box sx={{
            textAlign: 'center',
            mb: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2
        }}>
            <ShoppingCartIcon sx={{ fontSize: 40, color: 'text.secondary' }} />
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 600,
                    color: 'text.primary',
                }}
            >
                Data Extraction Dashboard
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
                sx={{ maxWidth: 600 }}
            >
                Extract product information and custom data from any URL
            </Typography>
        </Box>
    );
};

export default Header;