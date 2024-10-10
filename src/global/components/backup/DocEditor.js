import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './DocEditor.css'; // Import custom styles for the editor

const DocEditor = ({ initialHtml, onHtmlChange }) => {
  const [editorHtml, setEditorHtml] = useState(initialHtml);

  useEffect(() => {
    onHtmlChange(editorHtml); // Notify parent component of changes
  }, [editorHtml, onHtmlChange]);

  const handleChange = (value) => {
    setEditorHtml(value);
  };

  const fonts = [
    'Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana',
    'Trebuchet MS', 'Impact', 'Comic Sans MS', 'Lucida Sans', 'Monospace'
  ];

  const fontSizes = ['small', false, 'large', 'huge']; // Small, normal, large, huge

  const Font = ReactQuill.Quill.import('formats/font');
  Font.whitelist = fonts;
  ReactQuill.Quill.register(Font, true);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'font': fonts }],
      [{ 'size': fontSizes }],
      [{ 'align': [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'script': 'sub'}, { 'script': 'super' }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'direction': 'rtl' }],
      ['link', 'image', 'video'],
      ['blockquote', 'code-block'],
      [{ 'background': [] }],
      ['clean']
    ]
  };

  return (
    <div className="editor-container">
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        theme="snow"
        modules={modules}
      />
    </div>
  );
};

export default DocEditor;
