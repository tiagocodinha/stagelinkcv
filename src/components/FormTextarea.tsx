import React, { TextareaHTMLAttributes } from 'react';

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  error,
  required = false,
  id,
  ...props
}) => {
  const textareaId = id || label.toLowerCase().replace(/ /g, '-');
  
  return (
    <div className="w-full">
      <label 
        htmlFor={textareaId} 
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <textarea
        id={textareaId}
        className={`
          w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-opacity-50
          ${error 
            ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
            : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200'}
          transition-colors duration-200
        `}
        {...props}
      />
      
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default FormTextarea;