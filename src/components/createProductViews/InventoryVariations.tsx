"use client";

import Image from "next/image";
import ChevronDown from "@/assets/chevron-down.svg";
import Checkbox from "../Checkbox";
import ProductVariations from "./ProductVariations";
import { useState } from "react";

export default function InventoryVariations() {
  const [check, setCheck] = useState(false);

  return (
    <div className="px-[16px] divide-solid border-b py-[16px]">
      <div className="flex justify-between mb-[16px]">
        <p className="text-[14px] font-medium">Inventory variations</p>
        <Image src={ChevronDown} alt={""} />
      </div>
      <div className="flex gap-[8px]">
        <Checkbox onCheck={setCheck} />
        <p className="text-[14px] text-[#00000099]">
          This product is variable; has different colors, sizes, weight,
          materials, etc.
        </p>
      </div>

      {check && <ProductVariations />}
    </div>
  );
}
