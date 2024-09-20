import React from 'react';

interface PDFDownloadButtonProps {
    fileName: string; // Name of the PDF file to download
    className?: string; // Additional class names for styling
    children: React.ReactNode; // Content inside the button
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
    fileName,
    className = "",
    children
}) => {
    return (
        <a 
            href={`./CV/${fileName}`} 
            download 
            className={`w-[120px] py-2 px-2 border bg-white hover:bg-slate-400 text-black text-[15px] font-[700] rounded-lg ${className}`}
        >
            {children}
        </a>
    );
};

export default PDFDownloadButton;
