// src/utils/projectFormFunctions.ts
import { ProjectFormData } from "@/types/forms.types";
import { uploadImage } from "@/services/uploadSupabase";
import { projectFormSchema } from "@/types/forms.types";
import { toast } from "react-toastify";

export const handleFileUploads = async (formData: ProjectFormData) => {
  try {
    if (formData.coverImageFile) {
      const coverUrl = await uploadImage(formData.coverImageFile);
      formData.coverImage = coverUrl;
    }

    if (formData.imagesFiles && formData.imagesFiles.length > 0) {
      const uploadedImages = await Promise.all(
        formData.imagesFiles.map((file) => uploadImage(file))
      );
      formData.images = uploadedImages;
    }

    if (formData.videosFiles && formData.videosFiles.length > 0) {
      const uploadedVideos = await Promise.all(
        formData.videosFiles.map((file) => uploadImage(file))
      );
      formData.videos = uploadedVideos;
    }

    return formData;
  } catch (error) {
    console.log("Error during file uploads", error);
    throw new Error("File upload failed");
  }
};

export const validateForm = (formData: ProjectFormData) => {
  const validation = projectFormSchema.safeParse(formData);
  if (!validation.success) {
    console.log(validation.error.format());
    toast.error("Fill in the required fields correctly!");
    return false;
  }
  return true;
};

export const submitProjectData = async (formData: ProjectFormData) => {
  try {
    const response = await fetch("/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("There was an error creating your project!");
    }

    const data = await response.json();
    toast.success("Your project has been successfully created!");
    return data;
  } catch (error) {
    console.log("Error submitting project data", error);
    toast.error("There was an error creating your project!");
    throw error;
  }
};
