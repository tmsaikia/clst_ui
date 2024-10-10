


// import HtmlDocx from 'html-docx-js/dist/html-docx';

// const saveAsDocx = async (htmlContent, originalFileName = 'document.docx') => {
//   try {
//     // Convert HTML to DOCX Blob
//     const docxBlob = HtmlDocx.asBlob(htmlContent);

//     // Log the Blob for debugging
//     console.log('DOCX Blob:', docxBlob);
//     console.log('Blob size:', docxBlob.size);

//     // Check if Blob has content
//     if (docxBlob.size === 0) {
//       console.error('Error: Generated DOCX Blob is empty');
//       return;
//     }

//     // Create a download link for the DOCX file
//     const url = URL.createObjectURL(docxBlob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = originalFileName;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);

//     console.log('DOCX file saved. Check the downloaded file to ensure it contains content.');

//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// export default saveAsDocx;



// import HtmlDocx from 'html-docx-js/dist/html-docx';

// const saveAsDocx = async (htmlContent, originalFileName = 'document.docx') => {
//   try {
//     // Convert HTML to DOCX Blob
//     const docxBlob = HtmlDocx.asBlob(htmlContent);

//     // Log the Blob for debugging
//     console.log('DOCX Blob:', docxBlob);
//     console.log('Blob size:', docxBlob.size);

//     // Check if Blob has content
//     if (docxBlob.size === 0) {
//       console.error('Error: Generated DOCX Blob is empty');
//       return;
//     }

//     // Create FormData object
//     const formData = new FormData();
//     formData.append('file', docxBlob, originalFileName);
//     console.log("formData :",docxBlob.text);
//     // Send the request to the backend
//     const response = await fetch('http://172.16.117.43:2345/edited_docx', {
//       method: 'POST',
//       body: formData
     
//     });

//     if (!response.ok) {
//       throw new Error('Failed to upload the document');
//     }

//     // Handle successful response
//     console.log('Document successfully uploaded');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// export default saveAsDocx;


// import HtmlDocx from 'html-docx-js/dist/html-docx';

// const saveAsDocx = (htmlContent, originalFileName = 'document.docx') => {
//   try {
//     // Convert HTML to DOCX Blob
//     const docxBlob = HtmlDocx.asBlob(htmlContent);

//     // Log the Blob for debugging
//     console.log('DOCX Blob:', docxBlob);
//     console.log('Blob size:', docxBlob.size);

//     // Check if Blob has content
//     if (docxBlob.size === 0) {
//       console.error('Error: Generated DOCX Blob is empty');
//       return;
//     }

//     // Create a download link for the DOCX file
//     const url = URL.createObjectURL(docxBlob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = originalFileName;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);

//     console.log('DOCX file saved successfully.');

//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// export default saveAsDocx;




// import HtmlDocx from 'html-docx-js/dist/html-docx';

// const saveAsDocx = async (htmlContent, originalFileName = 'document.docx') => {
//   try {
//     // Convert HTML to DOCX Blob
//     const docxBlob = HtmlDocx.asBlob(htmlContent);

//     // Log the Blob for debugging
//     console.log('DOCX Blob:', docxBlob);
//     console.log('Blob size:', docxBlob.size);

//     // Check if Blob has content
//     if (docxBlob.size === 0) {
//       console.error('Error: Generated DOCX Blob is empty');
//       return;
//     }

//     // Create a download link for the DOCX file
//     const url = URL.createObjectURL(docxBlob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = originalFileName;
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//     URL.revokeObjectURL(url);

//     console.log('DOCX file saved successfully.');

//     // Create a FormData object to hold the file data
//     const formData = new FormData();
//     formData.append('file', docxBlob, originalFileName);

//     // Send the file data to the server
//     const response = await fetch('http://172.16.117.43:2345/edited_docx', {
//       method: 'POST',
//       body: formData,
//     });

//     if (!response.ok) {
//       throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
//     }

//     console.log('DOCX file sent to the server successfully.');

//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// export default saveAsDocx;



import HtmlDocx from 'html-docx-js/dist/html-docx';

const saveAsDocx = async (htmlContent, originalFileName = 'document.docx') => {
  try {
    // Convert HTML to DOCX Blob
    // console.log("Oinam : ",htmlContent);
    const htmlContentStr = String(htmlContent);
    console.log("Oinam string : ", htmlContentStr);
    const docxBlob = HtmlDocx.asBlob(htmlContent);

    // Log the Blob for debugging
    console.log('DOCX Blob:', docxBlob);
    console.log('Blob size:', docxBlob.size);

    // Check if Blob has content
    if (docxBlob.size === 0) {
      console.error('Error: Generated DOCX Blob is empty');
      return;
    }

    // Create a download link for the DOCX file
    const url = URL.createObjectURL(docxBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = originalFileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    console.log('DOCX file saved successfully.');

    // Send the DOCX Blob to the server directly
    // const response = await fetch('http://172.16.117.43:2345/edited_docx', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    //     'Content-Disposition': `attachment; filename="${originalFileName}"`, // Optional, depends on server handling
    //   },
    //   body: htmlContentStr
    // });

    const response = await fetch('http://172.16.117.43:2345/edited_docx/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  // Change this to application/json
      },
      body: JSON.stringify({
        content: htmlContentStr,  // Make sure to wrap your HTML content in a JSON object
        filename: originalFileName  // Include the filename if needed
      })
    });
    

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}: ${response.statusText}`);
    }

    console.log('DOCX file sent to the server successfully.');

  } catch (error) {
    console.error('Error:', error);
  }
};

export default saveAsDocx;
