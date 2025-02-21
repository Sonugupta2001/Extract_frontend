import React, { useState } from 'react';
import { Box } from '@mui/material';
import { StyledContainer } from './styles/StyledComponents';
import Header from './components/Header';
import InputSection from './components/InputSection';
import ErrorAlert from './components/ErrorAlert';
import EmptyState from './components/EmptyState';
import PriceTrackingView from './components/PriceTrackingView';
import CustomExtractionView from './components/CustomExtractionView';
import { useDataExtraction } from './hooks/useDataExtraction';
import { useExport } from './hooks/useExport';
import { EXTRACTION_TYPES, VIEW_FORMATS, E_COMMERCE_SITES } from '../../config/constants';

const PriceTracking = () => {
    const [selectedSites, setSelectedSites] = useState([]);
    const [customUrls, setCustomUrls] = useState([]);
    const [prompt, setPrompt] = useState('');
    const [extractionType, setExtractionType] = useState(EXTRACTION_TYPES.PRICE);
    const [viewFormat, setViewFormat] = useState(VIEW_FORMATS.STRUCTURED);

    const {
        data,
        loading,
        error,
        setError,
        handleExtraction
    } = useDataExtraction();

    const exportProps = useExport(data);

    const handleSiteChange = (newSites) => {
        setSelectedSites(newSites);
    };

    const handleCustomUrlAdd = (url) => {
        if (!customUrls.includes(url)) {
            setCustomUrls([...customUrls, url]);
        }
    };

    const handleCustomUrlRemove = (url) => {
        setCustomUrls(customUrls.filter(u => u !== url));
    };
    

    const handleExtract = () => {
        const urls = [
            ...selectedSites.map(site => {
                const siteConfig = E_COMMERCE_SITES.find(s => s.value === site);
                return `https://www.${siteConfig.baseUrl}/*`;
            }),
            ...customUrls.map(sites => {
                return `${sites}/*`;
            })
        ];
        handleExtraction(urls, extractionType, prompt);
    };

    return (
        <StyledContainer maxWidth="lg">
            <Header />
            
            <InputSection
                selectedSites={selectedSites}
                customUrls={customUrls}
                prompt={prompt}
                loading={loading}
                extractionType={extractionType}
                onSiteChange={handleSiteChange}
                onCustomUrlAdd={handleCustomUrlAdd}
                onCustomUrlRemove={handleCustomUrlRemove}
                onPromptChange={setPrompt}
                onExtractionTypeChange={setExtractionType}
                onExtract={handleExtract}
            />

            <ErrorAlert 
                error={error}
                onClear={() => setError('')}
            />

            {data && data.length > 0 && (
                <Box>
                    {extractionType === EXTRACTION_TYPES.PRICE ? (
                        <PriceTrackingView
                            data={data}
                            viewFormat={viewFormat}
                            onViewFormatChange={setViewFormat}
                            exportProps={exportProps}
                        />
                    ) : (
                        <CustomExtractionView
                            data={data}
                            copySuccess={exportProps.copySuccess}
                            onCopy={exportProps.copyToClipboard}
                            onExport={exportProps.handleExport}
                        />
                    )}
                </Box>
            )}

            {!loading && (!data || data.length === 0) && (
                <EmptyState />
            )}
        </StyledContainer>
    );
};

export default PriceTracking;