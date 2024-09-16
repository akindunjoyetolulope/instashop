import imageCompression from "browser-image-compression";

export async function compressFile(imageFile: File) {
  const config = {
    maxSizeMB: 0.5,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(imageFile, config);
    return compressedFile;
  } catch {
    return imageFile;
  }
}
