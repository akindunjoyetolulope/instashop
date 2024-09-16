"use client";

import { compressFile } from "@/utils/helper";
import Image from "next/image";
import AddPhoto from "@/assets/add-photo.svg";
import { useState } from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function ImageInput(props: Props) {
  const { ...rest } = props;
  const [preview, setPreview] = useState<string>("");

  const handleChange = async (event: {
    target: { files: FileList | null };
  }) => {
    const fileUploaded = event.target.files && event.target.files[0];
    const compressedFile = await compressFile(fileUploaded as File);
    // handleFile(compressedFile);
    setPreview(URL.createObjectURL(compressedFile as Blob));
  };

  return (
    <div className="flex flex-col justify-center items-center py-[16px] border divide-solid border-[#00000033] rounded-[12px]">
      <div className="relative w-[80px] h-[80px]">
        <img
          src={preview ? preview : "https://via.placeholder.com/150"}
          alt="Upload Preview"
          className="w-full h-full object-cover rounded-full"
        />

        <label
          htmlFor="imageUpload"
          className="absolute inset-0 bg-black bg-opacity-30 rounded-full flex justify-center items-center cursor-pointer"
        >
          <Image src={AddPhoto} alt="add photo" />
        </label>
      </div>

      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
        {...rest}
      />

      <div className="mt-[12px]">
        <p className="text-[12px] text-[#00000066]">Upload store logo</p>
      </div>
    </div>
  );
}
