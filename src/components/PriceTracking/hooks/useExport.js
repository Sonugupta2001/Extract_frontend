import { useState } from 'react';
import { exportToJson, exportToCsv } from '../utils/helpers';

export const useExport = (data) => {
    const [exportAnchorEl, setExportAnchorEl] = useState(null);
    const [copySuccess, setCopySuccess] = useState(false);

    const handleExportClick = (event) => {
        setExportAnchorEl(event.currentTarget);
    };

    const handleExportClose = () => {
        setExportAnchorEl(null);
    };

    const handleExport = (format) => {
        if (!data || data.length === 0) return;

        try {
            switch (format) {
                case 'json':
                    exportToJson(data);
                    break;
                case 'csv':
                    exportToCsv(data);
                    break;
                default:
                    return;
            }
            handleExportClose();
        } catch (error) {
            console.error('Export error:', error);
            throw new Error('Failed to export data');
        }
    };

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy text:', err);
        }
    };

    return {
        exportAnchorEl,
        copySuccess,
        handleExportClick,
        handleExportClose,
        handleExport,
        copyToClipboard
    };
};