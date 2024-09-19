import GoBack from "@/components/GoBack";
import Bg from "@/assets/product-image.png";
import Share from "@/assets/share.svg";
import Favorite from "@/assets/favorite.svg";
import ChevronDown from "@/assets/chevron-down.svg";
import Star from "@/assets/star.svg";
import Group from "@/assets/group.svg";

import Image from "next/image";
import Button from "@/components/Button";

export default function PreviewProduct() {
  return (
    <div className="flex h-dvh w-full flex-col">
      <div className="sticky top-0 z-30 bg-[#fff] flex flex-col">
        <GoBack label={"Create a product"} url="/create-product" breadcrumb />
      </div>
      <div className="divide-solid border-b pb-[16px]">
        <div>
          <Image src={Bg} alt={""} className="w-full" />
        </div>
        <div className="pt-[16px] px-[16px]">
          <div className="flex justify-between items-center">
            <div>
              <h6 className="text-[14px] font-medium">
                Gucci bag – the epitome of luxury and sophistication
              </h6>
            </div>

            <div className="flex shrink-0 gap-[8px]">
              <div className="flex h-[36px] w-[36px] justify-center items-center rounded-full p-[8px] bg-[#00000008]">
                <Image src={Share} alt="share" />
              </div>
              <div className="flex h-[36px] w-[36px]  justify-center items-center rounded-full p-[8px] bg-[#00000008]">
                <Image src={Favorite} alt="like" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[20px] font-medium">
              ₦18.0{" "}
              <span className="text-[12px] font-medium ml-1 text-[#ACACAC]">
                ₦28.0
              </span>
              <span className="p-1 ml-1 text-[14px] bg-[#8A226F] text-white rounded-full">
                25% OFF
              </span>
            </p>
            <p className="text-[14px] text-[#ACACAC]">(5 Sold)</p>
          </div>
        </div>
      </div>

      <div className="py-[16px] px-[16px] divide-solid border-b">
        <p className="text-[14px] font-medium">Select variants</p>
        <div></div>
      </div>

      <div className="py-[16px] px-[16px] divide-solid border-b">
        <div className="flex justify-between items-center">
          <p className="text-[14px] font-medium">Product description</p>
          <Image src={ChevronDown} alt={""} />
        </div>

        <p className="mt-[9px] text-[12px] text-[#000000B2]">
          Wholesale and drop shipping are both welcomed. For wholesale,we will
          offer discount or free express shipping which only takes 3-7 days to
          arrive.
        </p>
      </div>

      <div className="py-[16px] px-[16px] divide-solid border-b">
        <div className="flex justify-between items-center">
          <p className="text-[14px] font-medium">About this vendor</p>
          <Image src={ChevronDown} alt={""} />
        </div>

        <div className="flex justify-between mt-[9px] py-[8px]">
          <div className="flex justify-center items-center gap-[8px]">
            <div className="w-[52px] h-[52px] rounded-full">
              <img
                src={"https://via.placeholder.com/150"}
                alt="Upload Preview"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <p className="text-[12px] font-medium">Gucci Store</p>
              <div className="flex gap-1 justify-center items-center">
                <p className="text-[12px] font-medium">Fashion</p>
                <Image src={Star} alt={""} />
                <p className="text-[12px] font-medium text-[#ACACAC]">5.4</p>
                <Image src={Group} alt={""} />
                <p className="text-[12px] font-medium text-[#ACACAC]">100k</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[12px] text-[#8A226F] font-medium">Follow</p>
          </div>
        </div>

        <p className="mt-[9px] text-[12px] text-[#000000B2]">
          Vendor description: You can track your parcel on the following website
          using your tracking number: www.17trac...
        </p>
      </div>

      <footer className="p-[20px]">
        <Button text="Publish" />
      </footer>
    </div>
  );
}
