import React, { useState } from 'react';
import {
    Box,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Typography,
    Button,
    CircularProgress,
    Select,
    MenuItem,
    Chip,
    OutlinedInput,
    InputLabel,
    Divider
} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ChatIcon from '@mui/icons-material/Chat';
import AddIcon from '@mui/icons-material/Add';
import { StyledPaper, StyledTextField } from '../styles/StyledComponents';
import { EXTRACTION_TYPES, E_COMMERCE_SITES } from '../../../config/constants';

const InputSection = ({
    selectedSites,
    customUrls,
    prompt,
    loading,
    extractionType,
    onSiteChange,
    onCustomUrlAdd,
    onCustomUrlRemove,
    onPromptChange,
    onExtractionTypeChange,
    onExtract
}) => {
    const [customUrl, setCustomUrl] = useState('');

    const handleCustomUrlSubmit = (e) => {
        e.preventDefault();
        if (customUrl.trim()) {
            onCustomUrlAdd(customUrl.trim());
            setCustomUrl('');
        }
    };

    return (
        <StyledPaper elevation={0}>
            <Box sx={{ p: 3 }}>
                <Box sx={{ mb: 3 }}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Select E-commerce Sites</InputLabel>
                        <Select
                            multiple
                            value={selectedSites}
                            onChange={(e) => onSiteChange(e.target.value)}
                            input={<OutlinedInput label="Select E-commerce Sites" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip 
                                            key={value} 
                                            label={E_COMMERCE_SITES.find(site => site.value === value)?.name} 
                                        />
                                    ))}
                                </Box>
                            )}
                        >
                            {E_COMMERCE_SITES.map((site) => (
                                <MenuItem key={site.value} value={site.value}>
                                    {site.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <Divider sx={{ my: 2 }}>
                        <Typography color="textSecondary" variant="body2">OR</Typography>
                    </Divider>

                    <Box sx={{ 
                        display: 'flex',
                        gap: 1,
                    }}>
                        <Box sx={{ flex: 1 }}>
                            <StyledTextField
                                fullWidth
                                placeholder="Enter your custom URL here..."
                                value={customUrl}
                                onChange={(e) => setCustomUrl(e.target.value)}
                                helperText="Add multiple custom URLs one by one"
                                InputProps={{
                                    sx: { height: '56px' }
                                }}
                            />
                        </Box>
                        <Button 
                            variant="contained"
                            onClick={handleCustomUrlSubmit}
                            disabled={!customUrl.trim()}
                            sx={{
                                height: '56px',
                                width: '56px',
                                minWidth: '56px',
                                padding: 0,
                                backgroundColor: '#000000',
                                color: '#ffffff',
                                '&:hover': {
                                    backgroundColor: '#000000',
                                },
                                '&:disabled': {
                                    backgroundColor: '#E0E0E0',
                                    color: '#9E9E9E',
                                }
                            }}
                        >
                            <AddIcon />
                        </Button>
                    </Box>

                    {customUrls.length > 0 && (
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1 }}>
                                Added Custom URLs:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {customUrls.map((url, index) => (
                                    <Chip
                                        key={index}
                                        label={url}
                                        onDelete={() => onCustomUrlRemove(url)}
                                        color="primary"
                                        variant="outlined"
                                    />
                                ))}
                            </Box>
                        </Box>
                    )}
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
                        disabled={(!selectedSites.length && !customUrls.length) || loading}
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
                            'Compare Prices'
                        )}
                    </Button>
                </Box>
            </Box>
        </StyledPaper>
    );
};

export default InputSection;