


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


// ######################################################################################################################################
// import HtmlDocx from 'html-docx-js/dist/html-docx';

// const saveAsDocx = async (htmlContent, originalFileName = 'document.docx') => {
//   try {
//     // Convert HTML to DOCX Blob
//     // console.log("Oinam : ",htmlContent);
//     const htmlContentStr = String(htmlContent);
//     console.log("Oinam string : ", htmlContentStr);
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

  

//     const response = await fetch('http://172.16.117.43:2345/edited_docx/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',  // Change this to application/json
//       },
//       body: JSON.stringify({
//         content: htmlContentStr,  // Make sure to wrap your HTML content in a JSON object
//         filename: originalFileName  // Include the filename if needed
//       })
//     });
//     console.log("response:",response);
    
//     if (response.ok) {
//       const jsonResponse = await response.json(); // Convert the response to JSON
//       console.log("Result:", jsonResponse); // Print the JSON response
//     } else {
//       console.error("Error:", response.status, response.statusText); // Print error status if response is not ok
//     }

//     console.log('DOCX file sent to the server successfully.');

//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// export default saveAsDocx;
// ####################################################################################################################################
// without download

// import HtmlDocx from 'html-docx-js/dist/html-docx';

// const saveAsDocx = async (htmlContent, originalFileName = 'document.docx') => {
//   try {
//     const htmlContentStr = String(htmlContent);
//     console.log("HTML Content as String:", htmlContentStr);

//     // Create a DOCX Blob (if needed for server processing)
//     const docxBlob = HtmlDocx.asBlob(htmlContent);

//     // Log the Blob for debugging
//     console.log('DOCX Blob:', docxBlob);
//     console.log('Blob size:', docxBlob.size);

//     // Check if Blob has content (optional, depending on server logic)
//     if (docxBlob.size === 0) {
//       console.error('Error: Generated DOCX Blob is empty');
//       return;
//     }

//     // Instead of downloading, send the content to the server
//     const response = await fetch('http://172.16.117.43:2345/edited_docx/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         content: htmlContentStr,  // HTML content
//         filename: originalFileName  // Include the filename if needed
//       })
//     });
    
//     console.log("Response:", response);
    
//     if (response.ok) {
//       const jsonResponse = await response.json();
//       console.log("Result:", jsonResponse); // Print the JSON response
//     } else {
//       console.error("Error:", response.status, response.statusText);
//     }

//     console.log('DOCX content sent to the server successfully.');

//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// export default saveAsDocx;
// ####################################################################################################################################



// ########################### stable working backup ###################
import HtmlDocx from 'html-docx-js/dist/html-docx';

const saveAsDocx = (htmlContent, originalFileName = 'document.docx') => {
  const htmlContentStr = String(htmlContent);
  console.log("HTML Content as String:", htmlContentStr);

  // Create a DOCX Blob
  const docxBlob = HtmlDocx.asBlob(htmlContent);

  // Log the Blob for debugging
  console.log('DOCX Blob:', docxBlob);
  console.log('Blob size:', docxBlob.size);

  // Check if Blob has content
  if (docxBlob.size === 0) {
    console.error('Error: Generated DOCX Blob is empty');
    return Promise.reject('Error: Generated DOCX Blob is empty');
  }

  // Send the content to the server
  return fetch('http://172.16.117.43:2345/edited_docx/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: htmlContentStr,
      filename: originalFileName
    })
  })
    .then(response => {
      console.log("Response:", response);
      if (response.ok) {
        return response.json().then(jsonResponse => {
          console.log("Result:", jsonResponse); // Print the JSON response
          return jsonResponse; // Return the JSON response
        });
      } else {
        console.error("Error:", response.status, response.statusText);
        return Promise.reject(`Error: ${response.status} - ${response.statusText}`); // Return error message
      }
    })
    .catch(error => {
      console.error('Error:', error);
      return Promise.reject(`Error: ${error.message}`); // Return error message
    });
};

export default saveAsDocx;

// ########################### stable working backup ###################


