import { useState } from 'react';
import { extractData } from '../utils/api';

export const useDataExtraction = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleExtraction = async (url, extractionType, prompt = '') => {
        try {
            setLoading(true);
            setError('');
            setData(null);

            const result = await extractData(url, extractionType, prompt);
            setData(Array.isArray(result) ? result : [result]);
        } catch (err) {
            console.error('Extraction error:', err);
            setError(err.message);
        } finally {
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