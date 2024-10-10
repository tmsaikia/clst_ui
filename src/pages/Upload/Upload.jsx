import React, { useState, useRef } from 'react';
import styles from './Upload.module.css';

const caseTypes = [
    "Assam Forest Regulation",
    "Cases Under Section 125 Cr P C",
    "Commercial Appeal",
    "Commercial Suit",
    "Complaint Case (C R)",
    "CR (Excise)",
    "CR (Food Safety and Standard_Security) Act",
    "CR (Labour)",
    "CR (Legal Metrology)",
    "CR (Minimum Wages) Act",
    "CR (M.V.)",
    "CR (N I Act)",
    "CR (Plantation Labour) Act",
    "CR (Weights and Measurement) Act",
    "CR-WL (P)",
    "Food Adulteration",
    "G R Case",
    "Misc. Case",
    "Misc. Case (Domestic Violence)",
    "Misc Old Case",
    "Misc. Succession",
    "Money Appeal",
    "Money Suit",
    "MV Old",
    "Title Suit",
    "N I Act",
    "PRC",
    "Succession Case",
    "Title Appeal"
];

const Upload = () => {
    const [englishFile, setEnglishFile] = useState(null);
    const [assameseFile, setAssameseFile] = useState(null);
    const [hasAssamese, setHasAssamese] = useState(false);
    const [courtName, setCourtName] = useState('');
    const [customCourtName, setCustomCourtName] = useState('');
    const [caseType, setCaseType] = useState('');
    const [caseNumber, setCaseNumber] = useState('');
    const [caseYear, setCaseYear] = useState(''); // Added caseYear state
    const [petitioner, setPetitioner] = useState('');
    const [respondent, setRespondent] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');
    const [statusType, setStatusType] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [titles, setTitles] = useState({ en: '', as: '' });
    const [fileNames, setFileNames] = useState([]);

    const fileInputRef1 = useRef(null);
    const fileInputRef2 = useRef(null);

    const handleEnglishFileChange = (e) => {
        setEnglishFile(e.target.files[0]);
    };

    const handleAssameseFileChange = (e) => {
        setAssameseFile(e.target.files[0]);
    };

    const handleHasAssameseChange = (e) => {
        setHasAssamese(e.target.checked);
    };

    const handleCourtNameChange = (e) => {
        setCourtName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleVerify();  // Perform the verification first
        setShowConfirmation(true);  // Show confirmation panel
    };

    const handleFinalSubmit = async () => {
        const formData = new FormData();
        formData.append('respondent', respondent);
        formData.append('petitioner', petitioner);
        formData.append('case_number', `${caseType} ${caseNumber}/${caseYear}`);
        formData.append('court_name', courtName === 'Others' ? customCourtName : courtName);
        formData.append('confirm_submission', true);  // Indicate final submission

        if (englishFile) {
            formData.append('files', englishFile);
        }
        if (hasAssamese && assameseFile) {
            formData.append('files', assameseFile);
        }

        // Add edited titles to form data
        formData.append('titles[en]', titles.en);
        formData.append('titles[as]', titles.as);

        console.log("formData : ", formData);
        try {
            const response = await fetch('http://172.16.117.43:2345/upload/', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setUploadStatus('Files uploaded successfully!');
            setStatusType('success');

            // Reset form fields
            setEnglishFile(null);
            setAssameseFile(null);
            setHasAssamese(false);
            setCourtName('');
            setCustomCourtName('');
            setCaseType('');
            setCaseNumber('');
            setCaseYear('');
            setPetitioner('');
            setRespondent('');

            if (fileInputRef1.current) {
                fileInputRef1.current.value = '';
            }
            if (fileInputRef2.current) {
                fileInputRef2.current.value = '';
            }

            // Reset confirmation and set titles
            setShowConfirmation(false);
            setTitles({ en: '', as: '' });
            setFileNames([]);
        } catch (error) {
            console.error('Error:', error);
            setUploadStatus('Failed to upload files.');
            setStatusType('error');
        }
    };

    const handleVerify = async () => {
        const formData = new FormData();
        formData.append('respondent', respondent);
        formData.append('petitioner', petitioner);
        formData.append('case_number', `${caseType} ${caseNumber}/${caseYear}`);
        formData.append('court_name', courtName === 'Others' ? customCourtName : courtName);
        formData.append('confirm_submission', false);  // Indicate review mode

        if (englishFile) {
            formData.append('files', englishFile);
        }
        if (hasAssamese && assameseFile) {
            formData.append('files', assameseFile);
        }
        console.log("Verification submit:", formData);
        try {
            const response = await fetch('http://172.16.117.43:2345/upload/', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setTitles(data.titles || { en: '', as: '' });
            setFileNames(data.filenames || []);

            setShowConfirmation(true);
        } catch (error) {
            console.error('Error:', error);
            setUploadStatus('Failed to fetch titles.');
            setStatusType('error');
        }
    };

    const handleEdit = () => {
        setShowConfirmation(false);
    };

    const handleTitleChange = (lang, value) => {
        setTitles(prevTitles => ({
            ...prevTitles,
            [lang]: value
        }));
    };

    return (
        <div className={styles['upload-container']}>
            <div className={styles['spacer']}></div>
            <div className={styles['upload-panel']}>
                <h1>Upload Judgements</h1>
                {showConfirmation ? (
                    <div className={styles['confirmation-panel']}>
                        <h2>Confirm Your Details</h2>
                        <p><strong>Title:</strong> {petitioner} Versus {respondent}</p>
                        <p><strong>Case No.:</strong> {caseType} {caseNumber}/{caseYear}</p>
                        <p><strong>Court Name:</strong> {courtName === 'Others' ? customCourtName : courtName}</p>
                        <div className={styles['titles-panel']}>
                            <h3>Edit Titles</h3>
                            <div className={styles['title-edit-group']}>
                                <label htmlFor="englishTitle">English Title:</label>
                                <input
                                    type="text"
                                    id="englishTitle"
                                    value={titles.en}
                                    onChange={(e) => handleTitleChange('en', e.target.value)}
                                />
                            </div>
                            <div className={styles['title-edit-group']}>
                                <label htmlFor="assameseTitle">Assamese Title:</label>
                                <input
                                    type="text"
                                    id="assameseTitle"
                                    value={titles.as}
                                    onChange={(e) => handleTitleChange('as', e.target.value)}
                                />
                            </div>
                            <p><strong>Files:</strong> {fileNames.join(', ')}</p>
                        </div>
                        <div className={styles['confirmation-buttons']}>
                            {/* <button className={styles['edit-button']} onClick={handleEdit}>Edit</button> */}
                            <button className={styles['final-submit-button']} onClick={handleFinalSubmit}>Final Submit</button>
                        </div>
                    </div>
                ) : (
                    // <form onSubmit={handleSubmit} className={styles['upload-form']}>
                    //     <div className={styles['form-group']}>
                    //         <label htmlFor="caseType">Case Type</label>
                    //         <select id="caseType" value={caseType} onChange={(e) => setCaseType(e.target.value)} required>
                    //             <option value="">Select Case Type</option>
                    //             {caseTypes.map((type, index) => (
                    //                 <option key={index} value={type}>{type}</option>
                    //             ))}
                    //         </select>
                    //     </div>
                    //     <div className={styles['form-group']}>
                    //         <label htmlFor="caseNumber">Case Number</label>
                    //         <input
                    //             type="text"
                    //             id="caseNumber"
                    //             value={caseNumber}
                    //             onChange={(e) => setCaseNumber(e.target.value)}
                    //             required
                    //         />
                    //     </div>
                    //     <div className={styles['form-group']}>
                    //         <label htmlFor="caseYear">Case Year</label>
                    //         <input
                    //             type="text"
                    //             id="caseYear"
                    //             value={caseYear}
                    //             onChange={(e) => setCaseYear(e.target.value)}
                    //             required
                    //         />
                    //     </div>
                    //     <div className={styles['form-group']}>
                    //         <label htmlFor="petitioner">Petitioner</label>
                    //         <input
                    //             type="text"
                    //             id="petitioner"
                    //             value={petitioner}
                    //             onChange={(e) => setPetitioner(e.target.value)}
                    //             required
                    //         />
                    //     </div>
                    //     <div className={styles['form-group']}>
                    //         <label htmlFor="respondent">Respondent</label>
                    //         <input
                    //             type="text"
                    //             id="respondent"
                    //             value={respondent}
                    //             onChange={(e) => setRespondent(e.target.value)}
                    //             required
                    //         />
                    //     </div>
                    //     <div className={styles['form-group']}>
                    //         <label htmlFor="courtName">Court Name</label>
                    //         <select id="courtName" value={courtName} onChange={handleCourtNameChange} required>
                    //             <option value="">Select Court</option>
                    //             <option value="None">None</option>
                    //             <option value="Supreme Court">Supreme Court</option>
                    //             <option value="Gauhati High Court">Gauhati High Court</option>
                    //             <option value="District Court">District Court</option>
                    //             <option value="Others">Others</option>
                    //         </select>
                    //         {courtName === 'Others' && (
                    //             <input
                    //                 type="text"
                    //                 placeholder="Enter Court Name"
                    //                 value={customCourtName}
                    //                 onChange={(e) => setCustomCourtName(e.target.value)}
                    //                 required
                    //             />
                    //         )}
                    //     </div>
                    //     <div className={styles['form-group']}>
                    //         <label htmlFor="englishFile">Upload English Document (.docx or .pdf)</label>
                    //         <input
                    //             type="file"
                    //             id="englishFile"
                    //             accept=".docx,.pdf"
                    //             onChange={handleEnglishFileChange}
                    //             ref={fileInputRef1}
                    //             required
                    //         />
                    //     </div>
                    //     {hasAssamese && (
                    //         <div className={styles['form-group']}>
                    //             <label htmlFor="assameseFile">Upload Assamese Document (.docx or .pdf)</label>
                    //             <input
                    //                 type="file"
                    //                 id="assameseFile"
                    //                 accept=".docx,.pdf"
                    //                 onChange={handleAssameseFileChange}
                    //                 ref={fileInputRef2}
                    //             />
                    //         </div>
                    //     )}
                    //     <div className={styles['form-group']}>
                    //         <label>
                    //             <input
                    //                 type="checkbox"
                    //                 checked={hasAssamese}
                    //                 onChange={handleHasAssameseChange}
                    //             />
                    //             I have a corresponding Assamese document
                    //         </label>
                    //     </div>
                    //     <button type="button" className={styles['upload-button']} onClick={handleVerify}>Upload</button>
                    //     {uploadStatus && <div className={`${styles['upload-status']} ${styles[statusType]}`}>{uploadStatus}</div>}
                    // </form>
                    <form onSubmit={handleSubmit} className={styles['upload-form']}>
    <div className={styles['form-row']}>
        <div className={styles['form-group']}>
            <label htmlFor="caseType">Case Type</label>
            <select id="caseType" value={caseType} onChange={(e) => setCaseType(e.target.value)} required>
                <option value="">Select Case Type</option>
                {caseTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </select>
        </div>
        <div className={styles['form-group']}>
            <label htmlFor="caseNumber">Case Number</label>
            <input
                type="text"
                id="caseNumber"
                value={caseNumber}
                onChange={(e) => setCaseNumber(e.target.value)}
                required
            />
        </div>
        <div className={styles['form-group']}>
            <label htmlFor="caseYear">Case Year</label>
            <input
                type="text"
                id="caseYear"
                value={caseYear}
                onChange={(e) => setCaseYear(e.target.value)}
                required
            />
        </div>
    </div>
    <div className={styles['form-group']}>
        <label htmlFor="petitioner">Petitioner</label>
        <input
            type="text"
            id="petitioner"
            value={petitioner}
            onChange={(e) => setPetitioner(e.target.value)}
            required
        />
    </div>
    <div className={styles['form-group']}>
        <label htmlFor="respondent">Respondent</label>
        <input
            type="text"
            id="respondent"
            value={respondent}
            onChange={(e) => setRespondent(e.target.value)}
            required
        />
    </div>
    <div className={styles['form-group']}>
        <label htmlFor="courtName">Court Name</label>
        <select id="courtName" value={courtName} onChange={handleCourtNameChange} required>
            <option value="">Select Court</option>
            <option value="None">None</option>
            <option value="Supreme Court">Supreme Court</option>
            <option value="Gauhati High Court">Gauhati High Court</option>
            <option value="District Court">District Court</option>
            <option value="Others">Others</option>
        </select>
        {courtName === 'Others' && (
            <input
                type="text"
                placeholder="Enter Court Name"
                value={customCourtName}
                onChange={(e) => setCustomCourtName(e.target.value)}
                required
            />
        )}
    </div>
    <div className={styles['form-group']}>
        <label htmlFor="englishFile">Upload English Document (.docx or .pdf)</label>
        <input
            type="file"
            id="englishFile"
            accept=".docx,.pdf"
            onChange={handleEnglishFileChange}
            ref={fileInputRef1}
            required
        />
    </div>
    {hasAssamese && (
        <div className={styles['form-group']}>
            <label htmlFor="assameseFile">Upload Assamese Document (.docx or .pdf)</label>
            <input
                type="file"
                id="assameseFile"
                accept=".docx,.pdf"
                onChange={handleAssameseFileChange}
                ref={fileInputRef2}
            />
        </div>
    )}
    <div className={styles['form-group']}>
        <label>
            <input
                type="checkbox"
                checked={hasAssamese}
                onChange={handleHasAssameseChange}
            />
            I have a corresponding Assamese document
        </label>
    </div>
    <button type="button" className={styles['upload-button']} onClick={handleVerify}>Upload</button>
    {uploadStatus && <div className={`${styles['upload-status']} ${styles[statusType]}`}>{uploadStatus}</div>}
</form>

                )}
            </div>
        </div>
    );
};

export default Upload;
