import GoBack from "@/components/GoBack";
import Image from "next/image";
import Link from "next/link";
import CheckIcon from "@/assets/check.svg";
import BasicDetails from "@/components/createProductViews/BasicDetails";
import ProductImage from "@/components/createProductViews/ProductImage";
import InventoryVariations from "@/components/createProductViews/InventoryVariations";
import Shipping from "@/components/createProductViews/Shipping";
import Button from "@/components/Button";

export default function CreateProduct() {
  return (
    <div className="flex h-dvh w-full flex-col">
      <div className="sticky top-0 z-30 bg-[#fff] flex flex-col divide-solid border-b">
        <GoBack label={"Create a product"} url="/" breadcrumb />
        <div className="flex pb-[8px] items-center justify-between px-[16px]">
          <div className="flex px-[4px] py-[2px] items-center rounded-[90px] border divide-solid ">
            <span className="px-[6px] text-[12px]">Draft</span>
            <Image src={CheckIcon} alt="check" />
          </div>
          <Link
            href="/preview-product"
            className="text-[12px] font-semibold text-[#8A226F]"
          >
            Preview product
          </Link>
        </div>
      </div>

      <div className="mt-[16px]">
        <BasicDetails />

        <ProductImage />

        <InventoryVariations />

        <Shipping />
      </div>

      <div className="flex gap-[8px] p-[16px]">
        <Button text="Cancel" variant="secondary" />
        <Button text="Save" />
      </div>
    </div>
  );
}
