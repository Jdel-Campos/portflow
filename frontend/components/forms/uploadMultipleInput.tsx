"use client";

import { uploadImage } from "@/services/uploadSupabase";
import { UploadMultipleInputProps } from "@/types/forms.types";
import { useState } from "react";
import { CloudUpload } from "lucide-react";

export default function UploadMultipleInput({
  id,
  label,
  value = [],
  onUpload,
}: UploadMultipleInputProps) {
  const [previews, setPreviews] = useState<string[]>(value);
    const [dragging, setDragging] = useState(false);

  const handleFilesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const uploadedUrls: string[] = [];

    for (const file of Array.from(files)) {
      try {
        const url = await uploadImage(file);
        uploadedUrls.push(url);
      } catch (err) {
        console.error("Erro ao fazer upload:", err);
      }
    }

    const allUrls = [...previews, ...uploadedUrls];
    setPreviews(allUrls);
    onUpload(allUrls);
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
      setPreviews(url);
      onUpload(url);
    } catch (error) {
      console.error("Error sending image", error);
    }
  };

  return (
    <div className="col-span-full">
      <label htmlFor={id} className="block text-sm font-medium text-gray-900 mb-1">
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
        type="file"
        multiple
        accept="image/*,video/*"
        onChange={handleFilesChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300"
      />

      </div>

      {previews.length > 0 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {previews.map((url, index) => (
            <div key={index} className="border rounded overflow-hidden shadow-sm">
              {url.match(/\.(mp4|webm|ogg)$/) ? (
                <video
                  src={url}
                  controls
                  className="w-full h-32 object-cover"
                />
              ) : (
                <img
                  src={url}
                  alt={`Preview ${index}`}
                  className="w-full h-32 object-cover"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
