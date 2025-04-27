import { supabase } from "./supabaseClient";

export async function uploadImage(file: File): Promise<string> {

  if (!file) {
    console.error("Nenhum arquivo selecionado.");
    throw new Error("Nenhum arquivo selecionado.");
  }

  const fileName = `${Date.now()}-${file.name}`;

  try {
    const { data, error } = await supabase.storage
      .from("portfolio")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      });
  
    if (error) {
      console.error("Erro no upload:", error.message);
      throw new Error("Erro ao enviar imagem");
    }
  
    if (file.size > 5 * 1024 * 1024) {
      // Limite de 10MB
      console.error("Arquivo muito grande");
      throw new Error("Arquivo muito grande");
    }
  
    const publicUrl = supabase.storage.from("PortFlow").getPublicUrl(data.path)
      .data.publicUrl;
  
      console.log("URL da imagem:", publicUrl);
  
    return publicUrl!;
  } catch (err) {
    console.error("Erro no processo de upload:", err);
    throw new Error('Erro ao enviar imagem');
  }

}
