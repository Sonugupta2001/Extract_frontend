import { API_BASE_URL } from '../../../config/constants';

export const extractData = async (urls, extractionType, prompt = '') => {
    const endpoint = extractionType === 'price' 
        ? `${API_BASE_URL}/extract` 
        : `${API_BASE_URL}/extract-custom`;

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({ urls, prompt }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    if (result.error) {
        throw new Error(result.error);
    }

    return result.map(item => ({
        ...item,
        source: new URL(item.url).hostname
    }));
};