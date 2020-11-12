import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Controller, useFormContext } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

const CustomTextEditor = (props: { name: string; label: string }) => {
  const { control } = useFormContext();

  const { name, label } = props;
  const editorRef = useRef<any>();

  const [isEditorLoaded, setIsEditorLoaded] = useState(false);

  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    };
    setIsEditorLoaded(true);
  }, []);

  if (!isEditorLoaded) {
    return <>CARGANDO...</>;
  }

  return (
    <div className="form-group">
      <Form.Label>{label}:</Form.Label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ value, onChange }) => (
          <CKEditor
            editor={ClassicEditor}
            data={value}
            onChange={(event, editor) => {
              const data = editor.getData();
              onChange(data);
            }}
          />
        )}
      />
      <ErrorMessage name={name} />
    </div>
  );
};

export default CustomTextEditor;
