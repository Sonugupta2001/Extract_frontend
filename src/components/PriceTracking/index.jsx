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
import { EXTRACTION_TYPES, VIEW_FORMATS } from '../../config/constants';

const PriceTracking = () => {
    const [url, setUrl] = useState('');
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

    const handleExtract = () => {
        handleExtraction(url, extractionType, prompt);
    };

    return (
        <StyledContainer maxWidth="lg">
            <Header />
            
            <InputSection
                url={url}
                prompt={prompt}
                loading={loading}
                extractionType={extractionType}
                onUrlChange={setUrl}
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