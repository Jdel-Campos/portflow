import { supabase } from './supabaseClient';

export async function uploadImage(file: File): Promise<string> {
  const fileName = `${Date.now()}-${file.name}`;

  const { data, error } = await supabase
    .storage
    .from('PortFlow')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error(error);
    throw new Error('Erro ao enviar imagem');
  }

  const publicUrl = supabase
    .storage
    .from('PortFlow')
    .getPublicUrl(data.path).data.publicUrl;

  return publicUrl!;
}