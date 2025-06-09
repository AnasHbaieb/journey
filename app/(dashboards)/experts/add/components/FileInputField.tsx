import React from 'react';

interface FileInputFieldProps {
  label: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  accept?: string; // e.g., "image/*"
}

const FileInputField: React.FC<FileInputFieldProps> = ({
  label,
  id,
  name,
  onChange,
  required = false,
  accept,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-gray-700 text-sm font-semibold mb-2">
        {label}:
      </label>
      <input
        type="file"
        id={id}
        name={name}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        required={required}
        accept={accept}
      />
    </div>
  );
};

export default FileInputField; 