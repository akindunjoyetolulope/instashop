import Image from "next/image";
import TextArea from "../TextArea";
import TextField from "../TextField";
import ChevronDown from "@/assets/chevron-down.svg";

export default function BasicDetails() {
  return (
    <div className="px-[16px] divide-solid border-b pb-[16px]">
      <div className="flex justify-between mb-[16px]">
        <p className="text-[14px] font-medium">Basic details</p>
        <Image src={ChevronDown} alt={""} />
      </div>
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[12px]">
          <TextField placeholder="Product Title" label="Product Title" />
          <TextArea placeholder="Product description" />
          <div className="flex gap-[8px]">
            <TextField placeholder="Price" label="Price" />
            <TextField placeholder="Old price" label="Old price" />
          </div>
          <TextArea placeholder="Product collection" />
          <TextField placeholder="Inventory stocks" label="Inventory stocks" />
        </div>
      </div>
    </div>
  );
}
