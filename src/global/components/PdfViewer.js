// src/global/components/PdfViewer.js
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set the worker for pdfjs to the local ES module worker script
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf-worker.mjs';

const PdfViewer = ({ fileUrl, onClose }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        <button onClick={onClose} style={styles.closeButton}>Close</button>
        <div style={styles.pdfContainer}>
          <Document file={fileUrl}>
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </div>
  );
};

// Inline styles for PdfViewer component
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '10px',
    position: 'relative',
    width: '80%',
    height: '80%',
    maxWidth: '1200px',
    maxHeight: '90vh',
    overflow: 'auto',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#4B3869',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '5px 10px',
  },
  pdfContainer: {
    height: '100%',
    overflowY: 'auto',
  },
};

export default PdfViewer;
