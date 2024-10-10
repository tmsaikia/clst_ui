// // src/global/components/DocxToHtml.js
// import React, { useEffect } from 'react';
// import mammoth from 'mammoth';

// const DocxToHtml = ({ file, onHtmlChange }) => {
//   useEffect(() => {
//     const convertDocxToHtml = async () => {
//       if (file) {
//         const arrayBuffer = await file.arrayBuffer();
//         mammoth.convertToHtml({
//           arrayBuffer,
//           includeDefaultStyleMap: true,
//           styleMap: [
//             "p[style-name='Normal'] => p:fresh", // Normal paragraphs
//             "p[style-name='Heading 1'] => h1:fresh", // Heading 1
//             "p[style-name='Heading 2'] => h2:fresh", // Heading 2
//             "p[style-name='Heading 3'] => h3:fresh", // Heading 3
//             "p[style-name='Heading 4'] => h4:fresh", // Heading 4
//             "p[style-name='Heading 5'] => h5:fresh", // Heading 5
//             "p[style-name='Heading 6'] => h6:fresh", // Heading 6
//             "p[style-name='List Bullet'] => ul > li:fresh", // Bullet list
//             "p[style-name='List Number'] => ol > li:fresh", // Numbered list
//             "b => strong",                      // Bold to <strong>
//             "i => em",                          // Italics to <em>
//             "u => span.underline",              // Underline as span with class
//             "strike => span.strikethrough",     // Strikethrough as span
//             "w:pStyle => p:fresh",              // Paragraph styles
//             "r => p:fresh",                     // Runs as paragraphs
//             "break => br",                      // Line breaks
//             "page-break => div.page-break:fresh"// Page break as div
//           ]
//         }).then(result => {
//           onHtmlChange(result.value);
//         }).catch(err => console.error(err));
//       }
//     };

//     convertDocxToHtml();
//   }, [file, onHtmlChange]);

//   return null;
// };

// export default DocxToHtml;


// ##########################page number adding #################
// src/global/components/DocxToHtml.js
import React, { useEffect } from 'react';
import mammoth from 'mammoth';

const DocxToHtml = ({ file, onHtmlChange }) => {
  useEffect(() => {
    const convertDocxToHtml = async () => {
      if (file) {
        const arrayBuffer = await file.arrayBuffer();
        mammoth.convertToHtml({
          arrayBuffer,
          includeDefaultStyleMap: true,
          styleMap: [
            "p[style-name='Normal'] => p:fresh", // Normal paragraphs
            "p[style-name='Heading 1'] => h1:fresh", // Heading 1
            "p[style-name='Heading 2'] => h2:fresh", // Heading 2
            "p[style-name='Heading 3'] => h3:fresh", // Heading 3
            "p[style-name='Heading 4'] => h4:fresh", // Heading 4
            "p[style-name='Heading 5'] => h5:fresh", // Heading 5
            "p[style-name='Heading 6'] => h6:fresh", // Heading 6
            "p[style-name='List Bullet'] => ul > li:fresh", // Bullet list
            "p[style-name='List Number'] => ol > li:fresh", // Numbered list
            "b => strong",                      // Bold to <strong>
            "i => em",                          // Italics to <em>
            "u => span.underline",              // Underline as span with class
            "strike => span.strikethrough",     // Strikethrough as span
            "w:pStyle => p:fresh",              // Paragraph styles
            "r => p:fresh",                     // Runs as paragraphs
            "break => br",                      // Line breaks
            "page-break => div.page-break:fresh", // Page break as div
            "p[style-name='Page Number'] => div.page-number:fresh" // Page number as div
          ]
        }).then(result => {
          onHtmlChange(result.value);
        }).catch(err => console.error(err));
      }
    };

    convertDocxToHtml();
  }, [file, onHtmlChange]);

  return null;
};

export default DocxToHtml;
