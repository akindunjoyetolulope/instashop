import Image from "next/image";
import ChevronDown from "@/assets/chevron-down.svg";
import Checkbox from "../Checkbox";

export default function Shipping() {
  const shippings = [
    { type: "Self shipping", check: true },
    { type: "InstaShop shipping", check: true },
  ];

  return (
    <div className="px-[16px] divide-solid border-b py-[16px]">
      <div className="flex justify-between mb-[16px]">
        <p className="text-[14px] font-medium">Shipping</p>
        <Image src={ChevronDown} alt={""} />
      </div>
      {shippings.map((shipping, index) => (
        <div className="flex justify-between items-center mb-[8px]" key={index}>
          <p className="text-[12px] text-[#00000099]">{shipping.type}</p>
          <div className="p-[8px]">
            <Checkbox />
          </div>
        </div>
      ))}
    </div>
  );
}
