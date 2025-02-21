export const downloadFile = (content, fileName, fileType) => {
    const blob = new Blob([content], { type: fileType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
};

export const exportToJson = (data) => {
    const content = JSON.stringify(data, null, 2);
    downloadFile(content, `price-comparison-${Date.now()}.json`, 'application/json');
};

export const exportToCsv = (data) => {
    const headers = ['Product Name', 'Current Price', 'Original Price', 'Available Stock', 'Discount', 'Source'];
    const rows = data.map(item => [
        item.productName,
        item.currentPrice,
        item.originalPrice,
        item.stock,
        item.discount,
        item.source
    ]);
    
    const content = [
        headers.join(','),
        ...rows.map(row => row.join(','))
    ].join('\n');
    
    downloadFile(content, `price-comparison-${Date.now()}.csv`, 'text/csv');
};