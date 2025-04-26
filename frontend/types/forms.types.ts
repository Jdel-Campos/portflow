export interface FormTextAreaProps {
  id: string;
  label: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
};

export interface UploadMultipleInputProps {
  id: string;
  label: string;
  value?: string[];
  onUpload: (urls: string[]) => void;
}

export interface UploadFileInputProps {
  id: string;
  label: string;
  onUpload: (url: string) => void;
  value?: string;
};

export interface LinkInputProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (id: string, value: string) => void;
}