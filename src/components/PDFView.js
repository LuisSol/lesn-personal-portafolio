import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
/* from the react-pdf documentation : */
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFView = () => {
    const [numPages, setNumPages] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const changePage = (e) => {
        setPageNum(parseInt(e.target.id));
    }
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }   


    return (
        <>
            <Document
                file="/docs/CV_LESN_EN.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNum} width={480} />
                       
            </Document>
            <div style={{textAlign: 'center'}}>
            page: 
            {
                numPages &&
                Array(numPages).fill(0).map((num, i) => {
                    return <button 
                                onClick={changePage}
                                id={i + 1}
                                key={i} 
                            >
                                {i + 1}
                            </button>
                })
            }
            </div>
        </>
    ); 
};

export default PDFView;
