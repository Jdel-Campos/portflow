import axios from "axios";

export async function FetchCategories() {
    const resCategorie = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/projects/categories`);
    return resCategorie.data;
};

export async function FetchTools() {
  const resTools = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/projects/tools`);
  return resTools.data;
}