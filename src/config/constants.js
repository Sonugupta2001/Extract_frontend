export const API_BASE_URL = 'http://localhost:3001/api';

export const EXTRACTION_TYPES = {
    PRICE: 'price',
    CUSTOM: 'custom'
};

export const VIEW_FORMATS = {
    STRUCTURED: 'structured',
    JSON: 'json',
};

export const EXPORT_FORMATS = {
    JSON: 'json',
    CSV: 'csv'
};


export const E_COMMERCE_SITES = [
    { name: 'Amazon', value: 'amazon', baseUrl: 'amazon.com' },
    { name: 'eBay', value: 'ebay', baseUrl: 'ebay.com' },
    { name: 'Best Buy', value: 'bestbuy', baseUrl: 'bestbuy.com' },
    { name: 'Walmart', value: 'walmart', baseUrl: 'walmart.com' },
    { name: 'Target', value: 'target', baseUrl: 'target.com' }
];