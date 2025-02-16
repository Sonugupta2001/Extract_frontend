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
    downloadFile(content, `export-${Date.now()}.json`, 'application/json');
};


export const exportToCsv = (data) => {
    const headers = Object.keys(data[0]);
    const rows = data.map(item => 
        headers.map(header => {
            const value = item[header];
            return typeof value === 'object' 
                ? JSON.stringify(value)
                : String(value);
        }).join(',')
    );
    const content = [headers.join(','), ...rows].join('\n');
    downloadFile(content, `export-${Date.now()}.csv`, 'text/csv');
};