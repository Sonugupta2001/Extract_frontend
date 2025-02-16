import React from 'react';
import { Box, Alert, IconButton, Fade } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';

const ErrorAlert = ({ error, onClear }) => {
    if (!error) return null;

    return (
        <Fade in={!!error}>
            <Box>
                <Alert
                    severity="error"
                    sx={{ mb: 3 }}
                    action={
                        <IconButton
                            color="inherit"
                            size="small"
                            onClick={onClear}
                        >
                            <RefreshIcon />
                        </IconButton>
                    }
                >
                    {error}
                </Alert>
            </Box>
        </Fade>
    );
};

export default ErrorAlert;