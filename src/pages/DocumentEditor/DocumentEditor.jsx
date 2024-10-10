// import React, { useState, useEffect } from 'react';
// import DocxToHtml from '../../global/components/DocxToHtml';
// import DocEditor from '../../global/components/DocEditor';
// import saveAsDocx from '../../global/components/saveAsDocx';
// import styles from './DocumentEditor.module.css'; // Import the CSS module
// import { useNavigate } from 'react-router-dom';

// const DocumentEditor = () => {
//   const [file, setFile] = useState(null);
//   const [htmlContent, setHtmlContent] = useState('');
//   const [originalFileName, setOriginalFileName] = useState('');
//   const [jsonOutput, setJsonOutput] = useState(''); // State to hold JSON output
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (htmlContent) {
//       console.log('HTML content updated:', htmlContent);
//     }
//   }, [htmlContent]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setOriginalFileName(selectedFile.name || 'document.docx');
//       console.log('File selected:', selectedFile.name);
//     }
//   };

//   const handleSave = async () => {
//     if (htmlContent.trim()) {
//       console.log('Attempting to save HTML content...', htmlContent.trim());
//       try {
//         const result = await saveAsDocx(htmlContent, originalFileName);
//         setJsonOutput(result); // Set JSON output to display
//         console.log('Save operation completed successfully.');
//       } catch (error) {
//         console.error('Save operation failed:', error);
//       }
//     } else {
//       console.error('Error: HTML content is empty.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={file ? styles.hide : styles.show}>
//         <div className={styles.fileUploadSection}>
//           <h1>Here You can Upload the Word Document</h1>
//           <div className={styles.uploadToufam}>
//             <input type="file" accept=".docx" onChange={handleFileChange} />
//             <p>Drag 'n' drop a Word file here, or click to select one</p>
//             <p>(Only .doc or .docx files are supported)</p>
//           </div>
//         </div>
//       </div>

//       <div className={file ? styles.show : styles.hide}>
//         <div className={styles.row}>
//           <div className={styles.preview}>
//             {file && <DocxToHtml file={file} onHtmlChange={setHtmlContent} />}
//             <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//           </div>

//           <div className={styles.editorWrapper}>
//             {htmlContent && <DocEditor initialHtml={htmlContent} onHtmlChange={setHtmlContent} />}
//           </div>
//         </div>

//         <div className={styles.saveButtonContainer}>
//           {htmlContent && (
//             <button className={styles.saveBtn} onClick={handleSave}>
//               Translate
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocumentEditor;

// ########################################################################NOT_USE###############################################################################
// import React, { useState, useEffect } from 'react';
// import DocxToHtml from '../../global/components/DocxToHtml';
// import DocEditor from '../../global/components/DocEditor';
// import saveAsDocx from '../../global/components/saveAsDocx';
// import styles from './DocumentEditor.module.css'; // Import the CSS module
// import { useNavigate } from 'react-router-dom';

// const DocumentEditor = () => {
//   const [file, setFile] = useState(null);
//   const [htmlContent, setHtmlContent] = useState('');
//   const [originalFileName, setOriginalFileName] = useState('');
//   const [jsonOutput, setJsonOutput] = useState(''); // State to hold JSON output
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (htmlContent) {
//       console.log('HTML content updated:', htmlContent);
//     }
//   }, [htmlContent]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setOriginalFileName(selectedFile.name || 'document.docx');
//       console.log('File selected:', selectedFile.name);
//     }
//   };

//   const handleUpload = () => {
//     if (file) {
//       navigate('/#'); // Navigate to the Edit page after uploading
//     }
//   };

//   const handleSave = async () => {
//     if (htmlContent.trim()) {
//       console.log('Attempting to save HTML content...', htmlContent.trim());
//       try {
//         const result = await saveAsDocx(htmlContent, originalFileName);
//         setJsonOutput(result); // Assuming `saveAsDocx` returns the JSON response
//         console.log('Save operation completed successfully.');
//       } catch (error) {
//         console.error('Save operation failed:', error);
//       }
//     } else {
//       console.error('Error: HTML content is empty.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={file ? styles.hide : styles.show}>
//         <div className={styles.fileUploadSection}>
//           <h1>Here You can Upload the Word Document</h1>
//           <input type="file" accept=".docx" onChange={handleFileChange} className={styles.fileloufam}/>
//         </div>
//       </div>

//       <div className={file ? styles.show : styles.hide}>
//         <div className={styles.row}>
//           <div className={styles.preview}>
//             {file && <DocxToHtml file={file} onHtmlChange={setHtmlContent} />}
//             <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//           </div>

//           <div className={styles.editorWrapper}>
//             {htmlContent && <DocEditor initialHtml={htmlContent} onHtmlChange={setHtmlContent} />}
//           </div>
//         </div>

//         <div className={styles.saveButtonContainer}>
//           {htmlContent && (
//             <button className={styles.saveBtn} onClick={handleSave}>
//               Translate
//             </button>
//           )}
//         </div>

//         {/* JSON Output Section */}
//         <pre id="json-output">{jsonOutput}</pre> {/* Display JSON output here */}
//       </div>
//     </div>
//   );
// };

// export default DocumentEditor;


// ######################################################################## With loading############################

// import React, { useState, useEffect } from 'react';
// import DocxToHtml from '../../global/components/DocxToHtml';
// import DocEditor from '../../global/components/DocEditor';
// import saveAsDocx from '../../global/components/saveAsDocx';
// import styles from './DocumentEditor.module.css'; // Import the CSS module
// import { useNavigate } from 'react-router-dom';

// const DocumentEditor = () => {
//   const [file, setFile] = useState(null);
//   const [htmlContent, setHtmlContent] = useState('');
//   const [originalFileName, setOriginalFileName] = useState('');
//   const [jsonOutput, setJsonOutput] = useState(''); // State to hold JSON output
//   const [loading, setLoading] = useState(false); // Loading state
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (htmlContent) {
//       console.log('HTML content updated:', htmlContent);
//     }
//   }, [htmlContent]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setOriginalFileName(selectedFile.name || 'document.docx');
//       console.log('File selected:', selectedFile.name);
//     }
//   };

//   const handleSave = async () => {
//     if (htmlContent.trim()) {
//       console.log('Attempting to save HTML content...', htmlContent.trim());
//       setLoading(true); // Set loading to true
//       try {
//         const result = await saveAsDocx(htmlContent, originalFileName);
//         setJsonOutput(result); // Set JSON output to display
//         console.log('Save operation completed successfully.');
//       } catch (error) {
//         console.error('Save operation failed:', error);
//       } finally {
//         setLoading(false); // Set loading to false after operation
//       }
//     } else {
//       console.error('Error: HTML content is empty.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={file ? styles.hide : styles.show}>
//         <div className={styles.fileUploadSection}>
//           <h1>Here You can Upload the Word Document</h1>
//           <div className={styles.uploadToufam}>
//             <input type="file" accept=".docx" onChange={handleFileChange} />
//             <p>Drag 'n' drop a Word file here, or click to select one</p>
//             <p>(Only .doc or .docx files are supported)</p>
//           </div>
//         </div>
//       </div>

//       <div className={file ? styles.show : styles.hide}>
//         <div className={styles.row}>
//           <div className={styles.preview}>
//             {file && <DocxToHtml file={file} onHtmlChange={setHtmlContent} />}
//             <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//           </div>

//           <div className={styles.editorWrapper}>
//             {htmlContent && <DocEditor initialHtml={htmlContent} onHtmlChange={setHtmlContent} />}
//           </div>
//         </div>

//         <div className={styles.saveButtonContainer}>
//           {htmlContent && (
//             <button
//               className={styles.saveBtn}
//               onClick={handleSave}
//               disabled={loading} // Disable button while loading
//             >
//               {loading ? 'Loading...' : 'Translate'} {/* Change button text */}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocumentEditor;

// ######################################################################## With loading############################


// ######################################################################## With response from saveAsDocs############################

// import React, { useState, useEffect } from 'react';
// import DocxToHtml from '../../global/components/DocxToHtml';
// import DocEditor from '../../global/components/DocEditor';
// import saveAsDocx from '../../global/components/saveAsDocx';
// import styles from './DocumentEditor.module.css'; // Import the CSS module
// import { useNavigate } from 'react-router-dom';

// const DocumentEditor = () => {
//   const [file, setFile] = useState(null);
//   const [htmlContent, setHtmlContent] = useState('');
//   const [originalFileName, setOriginalFileName] = useState('');
//   const [loading, setLoading] = useState(false); // Loading state
//   const [jsonOutput, setJsonOutput] = useState(''); // State to hold JSON output
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (htmlContent) {
//       console.log('HTML content updated:', htmlContent);
//     }
//   }, [htmlContent]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setOriginalFileName(selectedFile.name || 'document.docx');
//       console.log('File selected:', selectedFile.name);
//     }
//   };

//   const handleSave = async () => {
//     if (htmlContent.trim()) {
//       console.log('Attempting to save HTML content...', htmlContent.trim());
//       setLoading(true); // Set loading to true
//       try {
//         const result = await saveAsDocx(htmlContent, originalFileName);
//         console.log('Response from saveAsDocx:', result); // Log the response
//         setJsonOutput(result); // Set JSON output to display
//         console.log('Save operation completed successfully.');
//       } catch (error) {
//         console.error('Save operation failed:', error);
//       } finally {
//         setLoading(false); // Set loading to false after operation
//       }
//     } else {
//       console.error('Error: HTML content is empty.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={file ? styles.hide : styles.show}>
//         <div className={styles.fileUploadSection}>
//           <h1>Here You can Upload the Word Document</h1>
//           <div className={styles.uploadToufam}>
//             <input type="file" accept=".docx" onChange={handleFileChange} />
//             <p>Drag 'n' drop a Word file here, or click to select one</p>
//             <p>(Only .doc or .docx files are supported)</p>
//           </div>
//         </div>
//       </div>

//       <div className={file ? styles.show : styles.hide}>
//         <div className={styles.row}>
//           <div className={styles.preview}>
//             {file && <DocxToHtml file={file} onHtmlChange={setHtmlContent} />}
//             <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//           </div>

//           <div className={styles.editorWrapper}>
//             {htmlContent && <DocEditor initialHtml={htmlContent} onHtmlChange={setHtmlContent} />}
//           </div>
//         </div>

//         <div className={styles.saveButtonContainer}>
//           {htmlContent && (
//             <button
//               className={styles.saveBtn}
//               onClick={handleSave}
//               disabled={loading} // Disable button while loading
//             >
//               {loading ? 'Loading...' : 'Translate'} {/* Change button text */}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocumentEditor;
// ######################################################################## With response from saveAsDocs############################

// import React, { useState, useEffect } from 'react';
// import DocxToHtml from '../../global/components/DocxToHtml';
// import DocEditor from '../../global/components/DocEditor';
// import saveAsDocx from '../../global/components/saveAsDocx';
// import styles from './DocumentEditor.module.css'; // Import the CSS module
// import { useNavigate } from 'react-router-dom';

// const DocumentEditor = () => {
//   const [file, setFile] = useState(null);
//   const [htmlContent, setHtmlContent] = useState('');
//   const [originalFileName, setOriginalFileName] = useState('');
//   const [loading, setLoading] = useState(false); // Loading state
//   const [showModal, setShowModal] = useState(false); // Modal visibility state
//   const [modalContent, setModalContent] = useState(''); // Content for the modal
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (htmlContent) {
//       console.log('HTML content updated:', htmlContent);
//     }
//   }, [htmlContent]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setOriginalFileName(selectedFile.name || 'document.docx');
//       console.log('File selected:', selectedFile.name);
//     }
//   };

//   const handleSave = async () => {
//     if (htmlContent.trim()) {
//       console.log('Attempting to save HTML content...', htmlContent.trim());
//       setLoading(true); // Set loading to true
//       try {
//         const result = await saveAsDocx(htmlContent, originalFileName);
//         console.log('Response from saveAsDocx:', result); // Log the response

//         // Extract translations
//         const translations = result.translations[0]; // Get the first index of translations
//         const formattedContent = translations.map(item => 
//           `English: ${item.English}\nAssamese: ${item.Assamese}\n`
//         ).join('\n'); // Format as required

//         setModalContent(formattedContent); // Set modal content to formatted translations
//         setShowModal(true); // Show the modal
//         console.log('Save operation completed successfully.');
//       } catch (error) {
//         console.error('Save operation failed:', error);
//         setModalContent(`Error: ${error.message}`); // Display error in modal
//         setShowModal(true); // Show the modal even if there's an error
//       } finally {
//         setLoading(false); // Set loading to false after operation
//       }
//     } else {
//       console.error('Error: HTML content is empty.');
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false); // Close the modal
//   };

//   return (
//     <div className={styles.container}>
//       <div className={file ? styles.hide : styles.show}>
//         <div className={styles.fileUploadSection}>
//           <h1>Here You can Upload the Word Document</h1>
//           <div className={styles.uploadToufam}>
//             <input type="file" accept=".docx" onChange={handleFileChange} />
//             <p>Drag 'n' drop a Word file here, or click to select one</p>
//             <p>(Only .doc or .docx files are supported)</p>
//           </div>
//         </div>
//       </div>

//       <div className={file ? styles.show : styles.hide}>
//         <div className={styles.row}>
//           <div className={styles.preview}>
//             {file && <DocxToHtml file={file} onHtmlChange={setHtmlContent} />}
//             <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//           </div>

//           <div className={styles.editorWrapper}>
//             {htmlContent && <DocEditor initialHtml={htmlContent} onHtmlChange={setHtmlContent} />}
//           </div>
//         </div>

//         <div className={styles.saveButtonContainer}>
//           {htmlContent && (
//             <button
//               className={styles.saveBtn}
//               onClick={handleSave}
//               disabled={loading} // Disable button while loading
//             >
//               {loading ? 'Loading...' : 'Translate'} {/* Change button text */}
//             </button>
//           )}
//         </div>
//       </div>

//       {showModal && (
//         <div className={styles.modalOverlay}>
//           <div className={styles.modalContent}>
//             <h2>Translation Result</h2>
//             <pre>{modalContent}</pre> {/* Use <pre> for preserving formatting */}
//             <button onClick={handleCloseModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentEditor;

// working
// import React, { useState, useEffect } from 'react';
// import DocxToHtml from '../../global/components/DocxToHtml';
// import DocEditor from '../../global/components/DocEditor';
// import saveAsDocx from '../../global/components/saveAsDocx';
// import styles from './DocumentEditor.module.css'; // Import the CSS module
// import { useNavigate } from 'react-router-dom';

// const DocumentEditor = () => {
//   const [file, setFile] = useState(null);
//   const [htmlContent, setHtmlContent] = useState('');
//   const [originalFileName, setOriginalFileName] = useState('');
//   const [loading, setLoading] = useState(false); // Loading state
//   const [showModal, setShowModal] = useState(false); // Modal visibility state
//   const [modalContent, setModalContent] = useState(''); // Content for the modal
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (htmlContent) {
//       console.log('HTML content updated:', htmlContent);
//     }
//   }, [htmlContent]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setOriginalFileName(selectedFile.name || 'document.docx');
//       console.log('File selected:', selectedFile.name);
//     }
//   };

//   const handleSave = async () => {
//     if (htmlContent.trim()) {
//       console.log('Attempting to save HTML content...', htmlContent.trim());
//       setLoading(true); // Set loading to true
//       try {
//         const result = await saveAsDocx(htmlContent, originalFileName);
//         console.log('Response from saveAsDocx:', result); // Log the response

//         // Extract translations
//         const translations = result.translations[0]; // Get the first index of translations
//         const formattedContent = translations.map(item => 
//           `English: ${item.English}\nAssamese: ${item.Assamese}\n`
//         ).join('\n'); // Format as required

//         setModalContent(formattedContent); // Set modal content to formatted translations
//         setShowModal(true); // Show the modal
//         console.log('Save operation completed successfully.');
//       } catch (error) {
//         console.error('Save operation failed:', error);
//         setModalContent(`Error: ${error.message}`); // Display error in modal
//         setShowModal(true); // Show the modal even if there's an error
//       } finally {
//         setLoading(false); // Set loading to false after operation
//       }
//     } else {
//       console.error('Error: HTML content is empty.');
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false); // Close the modal
//   };

//   return (
//     <div className={styles.container}>
//       <div className={file ? styles.hide : styles.show}>
//         <div className={styles.fileUploadSection}>
//           <h1>Here You can Upload the Word Document</h1>
//           <div className={styles.uploadToufam}>
//             <input type="file" accept=".docx" onChange={handleFileChange} />
//             <p>Drag 'n' drop a Word file here, or click to select one</p>
//             <p>(Only .doc or .docx files are supported)</p>
//           </div>
//         </div>
//       </div>

//       <div className={file ? styles.show : styles.hide}>
//         <div className={styles.row}>
//           <div className={styles.preview}>
//             {file && <DocxToHtml file={file} onHtmlChange={setHtmlContent} />}
//             <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//           </div>

//           <div className={styles.editorWrapper}>
//             {htmlContent && <DocEditor initialHtml={htmlContent} onHtmlChange={setHtmlContent} />}
//           </div>
//         </div>

//         <div className={styles.saveButtonContainer}>
//           {htmlContent && (
//             <button
//               className={styles.saveBtn}
//               onClick={handleSave}
//               disabled={loading} // Disable button while loading
//             >
//               {loading ? 'Loading...' : 'Translate'} {/* Change button text */}
//             </button>
//           )}
//         </div>
//       </div>

//       {showModal && (
//   <div className={styles.modalOverlay}>
//     <div className={styles.modalContent}>
//       <h2>Translation Result</h2>
//       <pre>{modalContent}</pre> {/* Use <pre> for preserving formatting */}
//       <button onClick={handleCloseModal}>Close</button>
//     </div>
//   </div>
// )}

//     </div>
//   );
// };

// export default DocumentEditor;


// ############################# with spinner
// import React, { useState, useEffect } from 'react';
// import DocxToHtml from '../../global/components/DocxToHtml';
// import DocEditor from '../../global/components/DocEditor';
// import saveAsDocx from '../../global/components/saveAsDocx';
// import styles from './DocumentEditor.module.css';
// import { useNavigate } from 'react-router-dom';

// const DocumentEditor = () => {
//   const [file, setFile] = useState(null);
//   const [htmlContent, setHtmlContent] = useState('');
//   const [originalFileName, setOriginalFileName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (htmlContent) {
//       console.log('HTML content updated:', htmlContent);
//     }
//   }, [htmlContent]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setOriginalFileName(selectedFile.name || 'document.docx');
//       console.log('File selected:', selectedFile.name);
//     }
//   };

//   const handleSave = async () => {
//     if (htmlContent.trim()) {
//       console.log('Attempting to save HTML content...', htmlContent.trim());
//       setLoading(true);
//       try {
//         const result = await saveAsDocx(htmlContent, originalFileName);
//         console.log('Response from saveAsDocx:', result);

//         const translations = result.translations[0];
//         const formattedContent = translations.map(item => 
//           `English: ${item.English}\nAssamese: ${item.Assamese}\n`
//         ).join('\n');

//         setModalContent(formattedContent);
//         setShowModal(true);
//         console.log('Save operation completed successfully.');
//       } catch (error) {
//         console.error('Save operation failed:', error);
//         setModalContent(`Error: ${error.message}`);
//         setShowModal(true);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       console.error('Error: HTML content is empty.');
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className={styles.container}>
//       {loading && (
//         <div className={styles.spinner}>
//           <div className={styles.loader}></div>
//         </div>
//       )}
//       <div className={file ? styles.hide : styles.show}>
//         <div className={styles.fileUploadSection}>
//           <h1>Here You can Upload the Word Document</h1>
//           <div className={styles.uploadToufam}>
//             <input type="file" accept=".docx" onChange={handleFileChange} />
//             <p>Drag 'n' drop a Word file here, or click to select one</p>
//             <p>(Only .doc or .docx files are supported)</p>
//           </div>
//         </div>
//       </div>

//       <div className={file ? styles.show : styles.hide}>
//         <div className={styles.row}>
//           <div className={styles.preview}>
//             {file && <DocxToHtml file={file} onHtmlChange={setHtmlContent} />}
//             <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//           </div>

//           <div className={styles.editorWrapper}>
//             {htmlContent && <DocEditor initialHtml={htmlContent} onHtmlChange={setHtmlContent} />}
//           </div>
//         </div>

//         <div className={styles.saveButtonContainer}>
//           {htmlContent && (
//             <button
//               className={styles.saveBtn}
//               onClick={handleSave}
//               disabled={loading}
//             >
//               Translate
//             </button>
//           )}
//         </div>
//       </div>

//       {showModal && (
//         <div className={styles.modalOverlay}>
//           <div className={styles.modalContent}>
//             <h2>Translation Result</h2>
//             <pre>{modalContent}</pre>
//             <button onClick={handleCloseModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentEditor;



// ######################## spinner with modal edit, final working
// import React, { useState, useEffect } from 'react';
// import DocxToHtml from '../../global/components/DocxToHtml';
// import DocEditor from '../../global/components/DocEditor';
// import saveAsDocx from '../../global/components/saveAsDocx';
// import styles from './DocumentEditor.module.css';
// import { useNavigate } from 'react-router-dom';

// const DocumentEditor = () => {
//   const [file, setFile] = useState(null);
//   const [htmlContent, setHtmlContent] = useState('');
//   const [originalFileName, setOriginalFileName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [translations, setTranslations] = useState([]);
//   const [editableIndices, setEditableIndices] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (htmlContent) {
//       console.log('HTML content updated:', htmlContent);
//     }
//   }, [htmlContent]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setOriginalFileName(selectedFile.name || 'document.docx');
//       console.log('File selected:', selectedFile.name);
//     }
//   };

//   const handleSave = async () => {
//     if (htmlContent.trim()) {
//       console.log('Attempting to save HTML content...', htmlContent.trim());
//       setLoading(true);
//       try {
//         const result = await saveAsDocx(htmlContent, originalFileName);
//         console.log('Response from saveAsDocx:', result);

//         const translationsData = result.translations[0].map(item => ({
//           English: item.English,
//           Assamese: item.Assamese,
//         }));

//         setTranslations(translationsData);
//         setShowModal(true);
//         setEditableIndices(Array(translationsData.length).fill(false));
//         console.log('Save operation completed successfully.');
//       } catch (error) {
//         console.error('Save operation failed:', error);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       console.error('Error: HTML content is empty.');
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleEditChange = (index, value) => {
//     const updatedTranslations = translations.map((item, i) =>
//       i === index ? { ...item, Assamese: value } : item
//     );
//     setTranslations(updatedTranslations);
//   };

//   const toggleEdit = (index) => {
//     setEditableIndices(prev => {
//       const updated = [...prev];
//       updated[index] = !updated[index];
//       return updated;
//     });
//   };

//   const handleSubmitTranslations = async () => {
//     const dataToSubmit = {
//       translations,
//       original_filename: originalFileName,
//     };
  
//     try {
//       const response = await fetch('http://172.16.117.43:2345/save_translated', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dataToSubmit),
//       });
  
//       if (response.ok) {
//         alert('Translations saved successfully!');
//         handleCloseModal(); // This will reset the form
//         window.location.reload(); // Refresh the page after closing the modal
//       } else {
//         alert('Failed to save translations. Please try again.');
//       }
//     } catch (error) {
//       alert('An error occurred while submitting translations.');
//     }
//   };
  

  

//   return (
//     <div className={styles.container}>
//       {loading && (
//         <div className={styles.spinner}>
//           <div className={styles.loader}></div>
//         </div>
//       )}
//       <div className={file ? styles.hide : styles.show}>
//         <div className={styles.fileUploadSection}>
//           <h1>Here You can Upload the Word Document</h1>
//           <div className={styles.uploadToufam}>
//             <input type="file" accept=".docx" onChange={handleFileChange} />
//             <p>Drag 'n' drop a Word file here, or click to select one</p>
//             <p>(Only .doc or .docx files are supported)</p>
//           </div>
//         </div>
//       </div>

//       <div className={file ? styles.show : styles.hide}>
//         <div className={styles.row}>
//           <div className={styles.preview}>
//             {file && <DocxToHtml file={file} onHtmlChange={setHtmlContent} />}
//             <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//           </div>

//           <div className={styles.editorWrapper}>
//             {htmlContent && <DocEditor initialHtml={htmlContent} onHtmlChange={setHtmlContent} />}
//           </div>
//         </div>

//         <div className={styles.saveButtonContainer}>
//           {htmlContent && (
//             <button
//               className={styles.saveBtn}
//               onClick={handleSave}
//               disabled={loading}
//             >
//               Translate
//             </button>
//           )}
//         </div>
//       </div>

//       {showModal && (
//         <div className={styles.modalOverlay}>
//           <div className={styles.modalContent}>
//             <div className={styles.modalHeader}>
//               <h2>Translation Result</h2>
//               <button onClick={handleCloseModal} className={styles.closeButton}>
//                 Close
//               </button>
//             </div>
//             <div className={styles.modalBody}>
//             {translations.map((item, index) => (
//               <div key={index} className={styles.translationItem}>
//                 <div className={styles.englishContainer}>
//                   <strong>
//                     <span>English:</span>
//                   </strong>
//                   <span className={styles.highlight}>{item.English}</span>
//                 </div>
//                 <div className={styles.textAreaContainer}>
//                   <strong>Assamese:</strong>
//                   <textarea
//                     rows={3}
//                     value={item.Assamese}
//                     onChange={(e) => handleEditChange(index, e.target.value)}
//                     className={styles.assameseTextArea}
//                     disabled={!editableIndices[index]}
//                   />
//                   <button
//                     onClick={() => toggleEdit(index)}
//                     className={`${styles.editButton} ${editableIndices[index] ? styles.saveButton : ''}`}
//                   >
//                     {editableIndices[index] ? 'Save' : 'Edit'}
//                   </button>
//                 </div>
//               </div>
//             ))}


//             </div>
//             <button onClick={handleSubmitTranslations} className={styles.submitButton}>
//               Submit Translations
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentEditor;

// ===========================================================================
// Upload page ta footer hapchinba
// import React, { useState, useEffect } from 'react';
// import DocxToHtml from '../../global/components/DocxToHtml';
// import DocEditor from '../../global/components/DocEditor';
// import saveAsDocx from '../../global/components/saveAsDocx';
// import styles from './DocumentEditor.module.css';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../../global/components/Footer/Footer';

// const DocumentEditor = () => {
//   const [file, setFile] = useState(null);
//   const [htmlContent, setHtmlContent] = useState('');
//   const [originalFileName, setOriginalFileName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [translations, setTranslations] = useState([]);
//   const [editableIndices, setEditableIndices] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (htmlContent) {
//       console.log('HTML content updated:', htmlContent);
//     }
//   }, [htmlContent]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setOriginalFileName(selectedFile.name || 'document.docx');
//       console.log('File selected:', selectedFile.name);
//     }
//   };

//   const handleSave = async () => {
//     if (htmlContent.trim()) {
//       console.log('Attempting to save HTML content...', htmlContent.trim());
//       setLoading(true);
//       try {
//         const result = await saveAsDocx(htmlContent, originalFileName);
//         console.log('Response from saveAsDocx:', result);

//         const translationsData = result.translations[0].map(item => ({
//           English: item.English,
//           Assamese: item.Assamese,
//         }));

//         setTranslations(translationsData);
//         setShowModal(true);
//         setEditableIndices(Array(translationsData.length).fill(false));
//         console.log('Save operation completed successfully.');
//       } catch (error) {
//         console.error('Save operation failed:', error);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       console.error('Error: HTML content is empty.');
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleEditChange = (index, value) => {
//     const updatedTranslations = translations.map((item, i) =>
//       i === index ? { ...item, Assamese: value } : item
//     );
//     setTranslations(updatedTranslations);

//     // Adjust the height of the textarea based on content
//     const textarea = document.getElementById(`assameseTextArea-${index}`);
//     if (textarea) {
//       textarea.style.height = 'auto'; // Reset height
//       textarea.style.height = `${textarea.scrollHeight}px`; // Set height to fit content
//     }
//   };

//   const toggleEdit = (index) => {
//     setEditableIndices(prev => {
//       const updated = [...prev];
//       updated[index] = !updated[index];
//       return updated;
//     });
//   };

//   const handleSubmitTranslations = async () => {
//     const dataToSubmit = {
//       translations,
//       original_filename: originalFileName,
//     };
  
//     try {
//       const response = await fetch('http://172.16.117.43:2345/save_translated', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dataToSubmit),
//       });
  
//       if (response.ok) {
//         alert('Translations saved successfully!');
//         handleCloseModal();
//         window.location.reload();
//       } else {
//         alert('Failed to save translations. Please try again.');
//       }
//     } catch (error) {
//       alert('An error occurred while submitting translations.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {loading && (
//         <div className={styles.spinner}>
//           <div className={styles.loader}></div>
//         </div>
//       )}
//       <div className={file ? styles.hide : styles.show}>
//         <div className={styles.fileUploadSection}>
//           <h1>Here You can Upload the Word Document</h1>
//           <div className={styles.uploadToufam}>
//             <input type="file" accept=".docx" onChange={handleFileChange} />
//             <p>Drag 'n' drop a Word file here, or click to select one</p>
//             <p>(Only .doc or .docx files are supported)</p>
//           </div>
//           <Footer />
//         </div>
//       </div>

//       <div className={file ? styles.show : styles.hide}>
//         <div className={styles.row}>
//           <div className={styles.preview}>
//             <h1>File Preview</h1>
//             {file && <DocxToHtml file={file} onHtmlChange={setHtmlContent} />}
//             <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//           </div>

//           <div className={styles.editorWrapper}>
//             {htmlContent && <DocEditor initialHtml={htmlContent} onHtmlChange={setHtmlContent} />}
//           </div>
//         </div>

//         <div className={styles.saveButtonContainer}>
//           {htmlContent && (
//             <button
//               className={styles.saveBtn}
//               onClick={handleSave}
//               disabled={loading}
//             >
//               Translate
//             </button>
//           )}
//         </div>
//       </div>

//       {showModal && (
//         <div className={styles.modalOverlay}>
//           <div className={styles.modalContent}>
//             <div className={styles.modalHeader}>
//               <h2>Translation Result</h2>
//               <button onClick={handleCloseModal} className={styles.closeButton}>
//                 Close
//               </button>
//             </div>
//             <div className={styles.modalBody}>
//   {translations.map((item, index) => (
//     <div key={index} className={styles.translationItem}>
//       <div className={styles.englishContainer}>
//         <strong>
//           <span>English:</span>
//         </strong>
//         <span className={styles.highlight}>{item.English}</span>
//       </div>
//       {/* Conditionally render the non-editable copy of Assamese text */}
//       {editableIndices[index] && (
//         <div className={styles.textAreaContainer}>
//           <strong>Assamese (Copy):</strong>
//           <div className={styles.assameseCopy}>
//             {translations[index].Assamese} {/* Display original text */}
//           </div>
//         </div>
//       )}
//       <div className={styles.textAreaContainer}>
//         <strong>Assamese:</strong>
//         <textarea
//           id={`assameseTextArea-${index}`} // Fixed template literal syntax
//           value={item.Assamese} // This will show the currently edited text
//           onChange={(e) => handleEditChange(index, e.target.value)} // Update current value
//           className={styles.assameseTextArea}
//           style={{
//             minHeight: item.Assamese.split(' ').length > 40 ? '120px' : '70px',
//           }} // Dynamic minHeight based on word count
//           disabled={!editableIndices[index]}
//         />
//         <button
//           onClick={() => toggleEdit(index)}
//           className={`${styles.editButton} ${editableIndices[index] ? styles.saveButton : ''}`} // Fixed template literal syntax
//         >
//           {editableIndices[index] ? 'Save' : 'Edit'}
//         </button>
//       </div>
//     </div>
//   ))}
// </div>


//             <button onClick={handleSubmitTranslations} className={styles.submitButton}>
//               Submit Translations
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentEditor;

// ############################### assamese copy added

// import React, { useState, useEffect } from 'react';
// import DocxToHtml from '../../global/components/DocxToHtml';
// import DocEditor from '../../global/components/DocEditor';
// import saveAsDocx from '../../global/components/saveAsDocx';
// import styles from './DocumentEditor.module.css';
// import { useNavigate } from 'react-router-dom';
// import Footer from '../../global/components/Footer/Footer';

// const DocumentEditor = () => {
//   const [file, setFile] = useState(null);
//   const [htmlContent, setHtmlContent] = useState('');
//   const [originalFileName, setOriginalFileName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [translations, setTranslations] = useState([]);
//   const [originalTranslations, setOriginalTranslations] = useState([]); // State for original translations
//   const [editableIndices, setEditableIndices] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (htmlContent) {
//       console.log('HTML content updated:', htmlContent);
//     }
//   }, [htmlContent]);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setOriginalFileName(selectedFile.name || 'document.docx');
//       console.log('File selected:', selectedFile.name);
//     }
//   };

//   const handleSave = async () => {
//     if (htmlContent.trim()) {
//       console.log('Attempting to save HTML content...', htmlContent.trim());
//       setLoading(true);
//       try {
//         const result = await saveAsDocx(htmlContent, originalFileName);
//         console.log('Response from saveAsDocx:', result);

//         const translationsData = result.translations[0].map(item => ({
//           English: item.English,
//           Assamese: item.Assamese,
//         }));

//         setTranslations(translationsData);
//         setOriginalTranslations(translationsData); // Store original translations
//         setShowModal(true);
//         setEditableIndices(Array(translationsData.length).fill(false));
//         console.log('Save operation completed successfully.');
//       } catch (error) {
//         console.error('Save operation failed:', error);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       console.error('Error: HTML content is empty.');
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleEditChange = (index, value) => {
//     const updatedTranslations = translations.map((item, i) =>
//       i === index ? { ...item, Assamese: value } : item
//     );
//     setTranslations(updatedTranslations);

//     // Adjust the height of the textarea based on content
//     const textarea = document.getElementById(`assameseTextArea-${index}`);
//     if (textarea) {
//       textarea.style.height = 'auto'; // Reset height
//       textarea.style.height = `${textarea.scrollHeight}px`; // Set height to fit content
//     }
//   };

//   const toggleEdit = (index) => {
//     setEditableIndices(prev => {
//       const updated = [...prev];
//       updated[index] = !updated[index];
//       return updated;
//     });
//   };

//   const handleSubmitTranslations = async () => {
//     const dataToSubmit = {
//       translations,
//       original_filename: originalFileName,
//     };
  
//     try {
//       const response = await fetch('http://172.16.117.43:2345/save_translated', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dataToSubmit),
//       });
  
//       if (response.ok) {
//         alert('Translations saved successfully!');
//         handleCloseModal();
//         window.location.reload();
//       } else {
//         alert('Failed to save translations. Please try again.');
//       }
//     } catch (error) {
//       alert('An error occurred while submitting translations.');
//     }
//   };

//   return (
//     <div className={styles.container}>
//       {loading && (
//         <div className={styles.spinner}>
//           <div className={styles.loader}></div>
//         </div>
//       )}
//       <div className={file ? styles.hide : styles.show}>
//         <div className={styles.fileUploadSection}>
//           <h1>Here You can Upload the Word Document</h1>
//           <div className={styles.uploadToufam}>
//             <input type="file" accept=".docx" onChange={handleFileChange} />
//             <p>Drag 'n' drop a Word file here, or click to select one</p>
//             <p>(Only .doc or .docx files are supported)</p>
//           </div>
//           <Footer />
//         </div>
//       </div>

//       <div className={file ? styles.show : styles.hide}>
//         <div className={styles.row}>
//           <div className={styles.preview}>
//             <h1>File Preview</h1>
//             {file && <DocxToHtml file={file} onHtmlChange={setHtmlContent} />}
//             <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//           </div>

//           <div className={styles.editorWrapper}>
//             {htmlContent && <DocEditor initialHtml={htmlContent} onHtmlChange={setHtmlContent} />}
//           </div>
//         </div>

//         <div className={styles.saveButtonContainer}>
//           {htmlContent && (
//             <button
//               className={styles.saveBtn}
//               onClick={handleSave}
//               disabled={loading}
//             >
//               Translate
//             </button>
//           )}
//         </div>
//       </div>

//       {showModal && (
//         <div className={styles.modalOverlay}>
//           <div className={styles.modalContent}>
//             <div className={styles.modalHeader}>
//               <h2>Translation Result</h2>
//               <button onClick={handleCloseModal} className={styles.closeButton}>
//                 Close
//               </button>
//             </div>
//             <div className={styles.modalBody}>
//               {translations.map((item, index) => (
//                 <div key={index} className={styles.translationItem}>
//                   <div className={styles.englishContainer}>
//                     <strong>
//                       <span>English:</span>
//                     </strong>
//                     <span className={styles.highlight}>{item.English}</span>
//                   </div>
//                   {/* Render the original Assamese copy */}
//                   {editableIndices[index] && (
//                     <div className={styles.textAreaContainer}>
//                       <strong>Assamese (Copy):</strong>
//                       <div className={styles.assameseCopy}>
//                         {originalTranslations[index].Assamese} {/* Use original text */}
//                       </div>
//                     </div>
//                   )}
//                   <div className={styles.textAreaContainer}>
//                     <strong>Assamese:</strong>
//                     <textarea
//                       id={`assameseTextArea-${index}`}
//                       value={item.Assamese}
//                       onChange={(e) => handleEditChange(index, e.target.value)}
//                       className={styles.assameseTextArea}
//                       style={{
//                         minHeight: item.Assamese.split(' ').length > 40 ? '120px' : '70px',
//                       }}
//                       disabled={!editableIndices[index]}
//                     />
//                     <button
//                       onClick={() => toggleEdit(index)}
//                       className={`${styles.editButton} ${editableIndices[index] ? styles.saveButton : ''}`}
//                     >
//                       {editableIndices[index] ? 'Save' : 'Edit'}
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <button onClick={handleSubmitTranslations} className={styles.submitButton}>
//               Submit Translations
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DocumentEditor;


// ############################### pagination

import React, { useState, useEffect } from 'react';
import DocxToHtml from '../../global/components/DocxToHtml';
import DocEditor from '../../global/components/DocEditor';
import saveAsDocx from '../../global/components/saveAsDocx';
import styles from './DocumentEditor.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../global/components/Footer/Footer';

const DocumentEditor = () => {
  const [file, setFile] = useState(null);
  const [htmlContent, setHtmlContent] = useState('');
  const [originalFileName, setOriginalFileName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [translations, setTranslations] = useState([]);
  const [originalTranslations, setOriginalTranslations] = useState([]);
  const [editableIndices, setEditableIndices] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // State for current page
  const translationsPerPage = 4; // Number of translations to show per page
  const navigate = useNavigate();

  useEffect(() => {
    if (htmlContent) {
      console.log('HTML content updated:', htmlContent);
    }
  }, [htmlContent]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setOriginalFileName(selectedFile.name || 'document.docx');
      console.log('File selected:', selectedFile.name);
    }
  };

  const handleSave = async () => {
    if (htmlContent.trim()) {
      console.log('Attempting to save HTML content...', htmlContent.trim());
      setLoading(true);
      try {
        const result = await saveAsDocx(htmlContent, originalFileName);
        console.log('Response from saveAsDocx:', result);

        const translationsData = result.translations[0].map(item => ({
          English: item.English,
          Assamese: item.Assamese,
        }));

        setTranslations(translationsData);
        setOriginalTranslations(translationsData);
        setShowModal(true);
        setEditableIndices(Array(translationsData.length).fill(false));
        console.log('Save operation completed successfully.');
      } catch (error) {
        console.error('Save operation failed:', error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error('Error: HTML content is empty.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEditChange = (index, value) => {
    const updatedTranslations = translations.map((item, i) =>
      i === index ? { ...item, Assamese: value } : item
    );
    setTranslations(updatedTranslations);
    const textarea = document.getElementById(`assameseTextArea-${index}`);
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const toggleEdit = (index) => {
    setEditableIndices(prev => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const handleSubmitTranslations = async () => {
    const dataToSubmit = {
      translations,
      original_filename: originalFileName,
    };
  
    try {
      const response = await fetch('http://172.16.117.43:2345/save_translated', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });
  
      if (response.ok) {
        alert('Translations saved successfully!');
        handleCloseModal();
        window.location.reload();
      } else {
        alert('Failed to save translations. Please try again.');
      }
    } catch (error) {
      alert('An error occurred while submitting translations.');
    }
  };

  // Pagination logic
  const indexOfLastTranslation = (currentPage + 1) * translationsPerPage;
  const indexOfFirstTranslation = indexOfLastTranslation - translationsPerPage;
  const currentTranslations = translations.slice(indexOfFirstTranslation, indexOfLastTranslation);
  const totalPages = Math.ceil(translations.length / translationsPerPage);

  return (
    <div className={styles.container}>
      {loading && (
        <div className={styles.spinner}>
          <div className={styles.loader}></div>
        </div>
      )}
      <div className={file ? styles.hide : styles.show}>
        <div className={styles.fileUploadSection}>
          <h1>Here You can Upload the Word Document</h1>
          <div className={styles.uploadToufam}>
            <input type="file" accept=".docx" onChange={handleFileChange} />
            <p>Drag 'n' drop a Word file here, or click to select one</p>
            <p>(Only .doc or .docx files are supported)</p>
          </div>
          <Footer />
        </div>
      </div>

      <div className={file ? styles.show : styles.hide}>
        <div className={styles.row}>
          <div className={styles.preview}>
            <h1>File Preview</h1>
            {file && <DocxToHtml file={file} onHtmlChange={setHtmlContent} />}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </div>

          <div className={styles.editorWrapper}>
            {htmlContent && <DocEditor initialHtml={htmlContent} onHtmlChange={setHtmlContent} />}
          </div>
        </div>

        <div className={styles.saveButtonContainer}>
          {htmlContent && (
            <button
              className={styles.saveBtn}
              onClick={handleSave}
              disabled={loading}
            >
              Translate
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Translation Result</h2>
              <button onClick={handleCloseModal} className={styles.closeButton}>
                Close
              </button>
            </div>
            <div className={styles.modalBody}>
              {currentTranslations.map((item, index) => (
                <div key={index + indexOfFirstTranslation} className={styles.translationItem}>
                  <div className={styles.englishContainer}>
                    <strong>
                      <span>English:</span>
                    </strong>
                    <span className={styles.highlight}>{item.English}</span>
                  </div>
                  {editableIndices[index + indexOfFirstTranslation] && (
                    <div className={styles.textAreaContainer}>
                      <strong>Assamese (Copy):</strong>
                      <div className={styles.assameseCopy}>
                        {originalTranslations[index + indexOfFirstTranslation].Assamese}
                      </div>
                    </div>
                  )}
                  <div className={styles.textAreaContainer}>
                    <strong>Assamese:</strong>
                    <textarea
                      id={`assameseTextArea-${index + indexOfFirstTranslation}`}
                      value={item.Assamese}
                      onChange={(e) => handleEditChange(index + indexOfFirstTranslation, e.target.value)}
                      className={styles.assameseTextArea}
                      style={{
                        minHeight: item.Assamese.split(' ').length > 40 ? '120px' : '70px',
                      }}
                      disabled={!editableIndices[index + indexOfFirstTranslation]}
                    />
                    <button
                      onClick={() => toggleEdit(index + indexOfFirstTranslation)}
                      className={`${styles.editButton} ${editableIndices[index + indexOfFirstTranslation] ? styles.saveButton : ''}`}
                    >
                      {editableIndices[index + indexOfFirstTranslation] ? 'Save' : 'Edit'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className={styles.pagination}>
              <button 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
                disabled={currentPage === 0}
              >
                Previous
              </button>
              <span>Page {currentPage + 1} of {totalPages}</span>
              <button 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))}
                disabled={currentPage === totalPages - 1}
              >
                Next
              </button>
            </div>

            <button onClick={handleSubmitTranslations} className={styles.submitButton}>
              Submit Translations
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentEditor;
