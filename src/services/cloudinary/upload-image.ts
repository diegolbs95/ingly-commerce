import { cloudinary } from "./cloudinary";

export async function uploadImage(
  file: File
): Promise<string> {
  const bytes = await file.arrayBuffer();

  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "ingly-commerce/products",
        },
        (error, result) => {
          if (error || !result) {
            reject(error);

            return;
          }

          resolve(result.secure_url);
        }
      )
      .end(buffer);
  });
}