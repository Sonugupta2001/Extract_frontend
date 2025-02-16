import React from 'react';
import {
    Box,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography,
    Button,
    CircularProgress
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ChatIcon from '@mui/icons-material/Chat';
import { StyledTextField, StyledPaper } from '../styles/StyledComponents';
import { EXTRACTION_TYPES } from '../../../config/constants';

const InputSection = ({
    url,
    prompt,
    loading,
    extractionType,
    onUrlChange,
    onPromptChange,
    onExtractionTypeChange,
    onExtract
}) => {
    return (
        <StyledPaper elevation={0}>
            <Box sx={{ p: 3 }}>
                <Box sx={{
                    display: 'flex',
                    gap: 1.5,
                    alignItems: 'center',
                    mb: 3
                }}>
                    <StyledTextField
                        fullWidth
                        placeholder="Paste URL here..."
                        value={url}
                        onChange={(e) => onUrlChange(e.target.value)}
                        disabled={loading}
                        InputProps={{
                            startAdornment: <SearchIcon color="action" sx={{ color: 'text.secondary', mr: 1 }} />,
                        }}
                    />
                </Box>

                <FormControl component="fieldset">
                    <RadioGroup
                        row
                        value={extractionType}
                        onChange={(e) => onExtractionTypeChange(e.target.value)}
                    >
                        <FormControlLabel 
                            value={EXTRACTION_TYPES.PRICE}
                            control={<Radio />} 
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <LocalOfferIcon />
                                    <Typography>Price Tracking</Typography>
                                </Box>
                            }
                        />
                        <FormControlLabel 
                            value={EXTRACTION_TYPES.CUSTOM}
                            control={<Radio />} 
                            label={
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <ChatIcon />
                                    <Typography>Custom Extraction</Typography>
                                </Box>
                            }
                        />
                    </RadioGroup>
                </FormControl>

                {extractionType === EXTRACTION_TYPES.CUSTOM && (
                    <Box sx={{ mt: 2 }}>
                        <StyledTextField
                            fullWidth
                            multiline
                            rows={3}
                            placeholder="Enter your extraction prompt here..."
                            value={prompt}
                            onChange={(e) => onPromptChange(e.target.value)}
                            disabled={loading}
                        />
                    </Box>
                )}

                <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                    <Button
                        variant="contained"
                        onClick={onExtract}
                        disabled={!url || (extractionType === EXTRACTION_TYPES.CUSTOM && !prompt) || loading}
                        sx={{
                            height: 56,
                            minWidth: '120px',
                            backgroundColor: '#000000',
                            color: '#ffffff',
                            borderRadius: '8px',
                            textTransform: 'none',
                            fontSize: '15px',
                            fontWeight: 500,
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: '#000000',
                                boxShadow: 'none',
                            },
                            '&:disabled': {
                                backgroundColor: '#E0E0E0',
                                color: '#9E9E9E',
                            },
                        }}
                    >
                        {loading ? (
                            <CircularProgress size={24} sx={{ color: '#ffffff' }} />
                        ) : (
                            'Extract Data'
                        )}
                    </Button>
                </Box>
            </Box>
        </StyledPaper>
    );
};

export default InputSection;