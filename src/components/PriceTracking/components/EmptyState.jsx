import React from 'react';
import { Box, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const EmptyState = () => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                py: 8,
                backgroundColor: '#FAFAFA',
                borderRadius: 1
            }}
        >
            <ShoppingCartIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="text.secondary" gutterBottom>
                No Data Extracted Yet
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Enter a URL above to start extracting data
            </Typography>
        </Box>
    );
};

export default EmptyState;