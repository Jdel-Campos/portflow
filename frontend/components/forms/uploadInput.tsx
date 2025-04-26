import { UploadFileInputProps } from "@/types/forms.types";
import { uploadImage } from "@/services/uploadSupabase";
import { useState } from "react";
import { CloudUpload } from "lucide-react";

export default function UploadFileInput({
  id,
  label,
  onUpload,
  value,
}: UploadFileInputProps) {
  const [preview, setPreview] = useState<string | null>(value ?? null);
  const [dragging, setDragging] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const url = await uploadImage(file);
      setPreview(url);
      onUpload(url);
    } catch (error) {
      console.error("Error sending image", error);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    await handleUpload(file);
  };

  const handleUpload = async (file: File) => {
    try {
      const url = await uploadImage(file);
      setPreview(url);
      onUpload(url);
    } catch (error) {
      console.error("Error sending image", error);
    }
  };

  return (
    <div className="col-span-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900 mb-1"
      >
        {label}
      </label>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`relative flex flex-col items-center justify-center 
          w-full h-[100px] 
          border-2 ${dragging ? "border-blue-500" : "border-gray-300"}
          border-gray-300 rounded-md cursor-pointer bg-white
          hover:border-blue-400 transition 
          mx-auto`}
      >
        <CloudUpload className="w-5 h-5 text-gray-500" />
        <p className="text-gray-500 text-sm">Drag a file or click to select</p>
        <input
          id={id}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300"
        />
      </div>

      {preview && (
        <div>
            <img
              src={preview}
              alt="Preview"
              className="mt-4 rounded-md max-w-full h-auto shadow-md border"
            />
        </div>
      )}
    </div>
  );
}
