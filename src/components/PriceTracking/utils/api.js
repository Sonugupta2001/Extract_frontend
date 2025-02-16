import { API_BASE_URL } from '../../../config/constants';

export const extractData = async (url, extractionType, prompt = '') => {
    const endpoint = extractionType === 'price' 
        ? `${API_BASE_URL}/extract` 
        : `${API_BASE_URL}/extract-custom`;

    const params = extractionType === 'price'
        ? `url=${encodeURIComponent(url)}`
        : `url=${encodeURIComponent(url)}&prompt=${encodeURIComponent(prompt)}`;

    const response = await fetch(`${endpoint}?${params}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        mode: 'cors',
    });

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    if (result.error) {
        throw new Error(result.error);
    }

    return result;
};