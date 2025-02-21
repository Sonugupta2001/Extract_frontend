import React from 'react';
import {
    Box,
    Typography,
    Button,
    Menu,
    MenuItem,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { 
    StyledPaper,
    ProductCard,
    PriceChip,
    DataViewTabs,
    DataViewTab
} from '../styles/StyledComponents';
import { VIEW_FORMATS } from '../../../config/constants';


const PriceTrackingView = ({
    data,
    viewFormat,
    onViewFormatChange,
    exportProps
}) => {
    const {
        exportAnchorEl,
        handleExportClick,
        handleExportClose,
        handleExport
    } = exportProps;

    return (
        <StyledPaper elevation={0}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <DataViewTabs
                    value={viewFormat}
                    onChange={(_, newValue) => onViewFormatChange(newValue)}
                >
                    <DataViewTab label="Structured View" value={VIEW_FORMATS.STRUCTURED} />
                    <DataViewTab label="JSON View" value={VIEW_FORMATS.JSON} />
                </DataViewTabs>
            </Box>

            <Box sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <Button
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                        onClick={handleExportClick}
                    >
                        Export
                    </Button>
                    <Menu
                        anchorEl={exportAnchorEl}
                        open={Boolean(exportAnchorEl)}
                        onClose={handleExportClose}
                    >
                        <MenuItem onClick={() => handleExport('json')}>Export as JSON</MenuItem>
                        <MenuItem onClick={() => handleExport('csv')}>Export as CSV</MenuItem>
                    </Menu>
                </Box>

                {viewFormat === VIEW_FORMATS.STRUCTURED && (
                    <Box sx={{ display: 'grid', gap: 2 }}>
                        {data.map((item, index) => (
                            <ProductCard key={index}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 3 }}>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: 500,
                                                mb: 1,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1
                                            }}
                                        >
                                            <LocalOfferIcon sx={{ color: 'text.secondary' }} />
                                            {item.productName}
                                        </Typography>

                                        <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                                            <PriceChip variant="current">
                                                <TrendingUpIcon sx={{ fontSize: 18, mr: 0.5 }} />
                                                Current: {item.currentPrice}
                                            </PriceChip>
                                            <PriceChip variant="original">
                                                <TrendingDownIcon sx={{ fontSize: 18, mr: 0.5 }} />
                                                Original: {item.originalPrice}
                                            </PriceChip>
                                            {item.discount && (
                                                <PriceChip variant="discount">
                                                    {item.discount}
                                                </PriceChip>
                                            )}
                                        </Box>

                                        <Typography
                                            variant="caption"
                                            color="text.secondary"
                                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                                        >
                                            Last updated: {new Date(item.timestamp).toLocaleString()}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                                        >
                                            Available Stocks: {item.stockStatus}
                                        </Typography>
                                    </Box>
                                </Box>
                            </ProductCard>
                        ))}
                    </Box>
                )}

                {viewFormat === VIEW_FORMATS.JSON && (
                    <pre style={{ 
                        backgroundColor: '#f5f5f5', 
                        padding: '1rem', 
                        borderRadius: '4px',
                        overflow: 'auto' 
                    }}>
                        {JSON.stringify(data, null, 2)}
                    </pre>
                )}
            </Box>
        </StyledPaper>
    );
};

export default PriceTrackingView;