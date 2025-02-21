import { useState } from 'react';
import { extractData } from '../utils/api';

export const useDataExtraction = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleExtraction = async (urls, extractionType, prompt = '') => {
        try {
            setLoading(true);
            setError('');
            setData(null);

            const results = await extractData(urls, extractionType, prompt);
            setData(results);
        }
        catch (err) {
            console.error('Extraction error:', err);
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    };

    return {
        data,
        loading,
        error,
        setError,
        handleExtraction
    };
};