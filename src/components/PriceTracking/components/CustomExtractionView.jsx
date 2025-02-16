import React from 'react';
import {
    Box,
    Typography,
    Button,
    IconButton,
    Tooltip
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { StyledPaper, CustomDataContainer } from '../styles/StyledComponents';

const CustomExtractionView = ({
    data,
    copySuccess,
    onCopy,
    onExport
}) => {
    return (
        <StyledPaper elevation={0}>
            <Box sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h6">
                        Extracted Data
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Tooltip title={copySuccess ? "Copied!" : "Copy to clipboard"}>
                            <IconButton 
                                onClick={() => onCopy(JSON.stringify(data, null, 2))}
                                size="small"
                            >
                                <ContentCopyIcon />
                            </IconButton>
                        </Tooltip>
                        <Button
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                            onClick={() => onExport('json')}
                        >
                            Export as JSON
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                            onClick={() => onExport('csv')}
                        >
                            Export as CSV
                        </Button>
                    </Box>
                </Box>

                <CustomDataContainer>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        Raw Data:
                    </Typography>
                    <pre>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                </CustomDataContainer>
            </Box>
        </StyledPaper>
    );
};

export default CustomExtractionView;