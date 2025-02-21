import React from 'react';
import {
    Box,
    Chip,
    MenuItem,
    Select,
    Typography,
    FormControl,
    InputLabel,
} from '@mui/material';
import { StyledTextField } from '../styles/StyledComponents';

const PREDEFINED_SITES = [
    { label: 'Amazon', value: 'amazon' },
    { label: 'eBay', value: 'ebay' },
    { label: 'Walmart', value: 'walmart' },
    { label: 'Best Buy', value: 'bestbuy' },
    { label: 'Custom URL', value: 'custom' }
];

const MultiUrlSelector = ({ selectedUrls, onUrlChange, customUrls, onCustomUrlChange }) => {
    const handleSiteSelect = (event) => {
        const value = event.target.value;
        if (value === 'custom') {
            onCustomUrlChange('');
        } else {
            onUrlChange(value);
        }
    };

    const handleCustomUrlSubmit = (event) => {
        if (event.key === 'Enter' && event.target.value) {
            onCustomUrlChange(event.target.value);
            event.target.value = '';
        }
    };

    return (
        <Box sx={{ mb: 3 }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Select E-commerce Site</InputLabel>
                <Select
                    value=""
                    onChange={handleSiteSelect}
                    label="Select E-commerce Site"
                >
                    {PREDEFINED_SITES.map((site) => (
                        <MenuItem key={site.value} value={site.value}>
                            {site.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {selectedUrls.length > 0 && (
                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>Selected Sites:</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {selectedUrls.map((url, index) => (
                            <Chip
                                key={index}
                                label={url}
                                onDelete={() => onUrlChange(url)}
                                color="primary"
                                variant="outlined"
                            />
                        ))}
                    </Box>
                </Box>
            )}

            {customUrls.length > 0 && (
                <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>Custom URLs:</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {customUrls.map((url, index) => (
                            <Chip
                                key={index}
                                label={url}
                                onDelete={() => onCustomUrlChange(url)}
                                color="secondary"
                                variant="outlined"
                            />
                        ))}
                    </Box>
                </Box>
            )}

            <StyledTextField
                fullWidth
                placeholder="Enter custom URL and press Enter..."
                onKeyPress={handleCustomUrlSubmit}
            />
        </Box>
    );
};

export default MultiUrlSelector;