import React, { useState } from 'react';
import { Download, X, FileText } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import '../css/ResumeModal.css';


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const ResumeModal = ({ onClose }) => {
  const [numPages, setNumPages] = useState(null);
  const resumePdfPath = '/Muhammad-Waqas-Resume.pdf';

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-container" onClick={(e) => e.stopPropagation()}>
        

        <div className="resume-modal-header">
          <div className="resume-header-title">
            <FileText size={16} className="icon-pdf" />
            <span>Muhammad-Waqas-Resume.pdf</span>
          </div>

          <div className="resume-header-actions">
            <a 
              href={resumePdfPath} 
              download="Muhammad-Waqas-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-download"
            >
              <Download size={15} />
              <span>Download Resume</span>
            </a>

            <button className="btn-close" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>
          </div>
        </div>


        <div className="resume-modal-body" style={{ overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0' }}>
          <Document
            file={resumePdfPath}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<p style={{ color: '#fff' }}>Loading Resume...</p>}
            error={<p style={{ color: '#ff6b6b' }}>Failed to load PDF file.</p>}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page 
                key={`page_${index + 1}`} 
                pageNumber={index + 1} 
                renderTextLayer={true}
                renderAnnotationLayer={true}
                width={Math.min(window.innerWidth * 0.8, 750)}
              />
            ))}
          </Document>
        </div>

  
        <div className="resume-modal-footer">
          <a 
            href={resumePdfPath} 
            download="Muhammad-Waqas-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-download-mobile"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;