"use client";

import { compressFile } from "@/utils/helper";
import Image from "next/image";
import AddPhoto from "@/assets/photo.svg";
import { useState } from "react";
import ToggleSwitch from "../ToggleSwitch";
import MoreHoriz from "@/assets/more-horiz.svg";
import ChevronDown from "@/assets/chevron-down.svg";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  handleFile?: (file: File | null) => void;
}

export default function ProductImage(props: Props) {
  const { handleFile = () => null, ...rest } = props;

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const handleChange = async (event: {
    target: { files: FileList | null };
  }) => {
    const fileUploaded = event.target.files && event.target.files[0];
    setUploadedFile(fileUploaded);
    const compressedFile = await compressFile(fileUploaded as File);
    handleFile(compressedFile);
    setPreview(URL.createObjectURL(compressedFile as Blob));
  };

  return (
    <div className="px-[16px] divide-solid border-b pb-[16px]">
      <div className="flex justify-between my-[16px]">
        <p className="text-[14px] font-medium">Product Image</p>
        <Image src={ChevronDown} alt={""} />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-[8px] items-center">
          <div className="w-[60px] h-[60px]">
            <img
              src={"https://via.placeholder.com/150"}
              alt="Upload Preview"
              className="w-full h-full object-cover rounded-[8px]"
            />
          </div>
          <p className="text-[14px]">logo.Img</p>
        </div>
        <div className="flex">
          <div className="p-[8px]">
            <Image src={MoreHoriz} alt="more options" />
          </div>
          <div className="p-[10px]">
            <ToggleSwitch />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-[10px] w-full rounded-[90px] mt-[16px] bg-[#00000008]">
        <label
          htmlFor="imageUpload"
          className="flex justify-center items-center gap-[6px] cursor-pointer"
        >
          <p className="font-medium text-[14px] text-[#8A226F]">Add image</p>
          <Image src={AddPhoto} alt="add photo" />
        </label>

        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
          {...rest}
        />
      </div>
    </div>
  );
}
