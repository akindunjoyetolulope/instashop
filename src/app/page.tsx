import Image from "next/image";
import CartIcon from "@/assets/Shopping-sale.svg";
import CheckIcon from "@/assets/check-icon.svg";
import Button from "@/components/Button";
import Link from "next/link";

export default function Welcome() {
  const whatWeOffers = [
    "Reach Millions of Shoppers",
    "Easy Product Listing",
    "Secure and Fast Payments",
    "Boost Your Visibility",
  ];

  return (
    <div className="h-[100vh] flex flex-col justify-between pt-[32px] pb-[16px] px-[32px] font-[family-name:var(--font-dm-sans)]">
      <div className="mt-[16px]">
        <div className="flex justify-center">
          <Image src={CartIcon} alt="Shopping Sale" />
        </div>
        <div className="text-center my-[25px]">
          <h1 className="text-[36px] font-bold">Welcome</h1>
          <p className="text-[14px]">
            The safest platform to shop from social media vendors
          </p>
        </div>
        <div className="flex flex-col gap-[14px] py-[12px] px-[16px] bg-[#FFEAFA] border-[0.5px] rounded-[12px] divide-solid border-[#8A226F]">
          {whatWeOffers.map((offer, index) => (
            <div className="flex gap-[8px]" key={index}>
              <Image src={CheckIcon} alt="check icon" />
              {offer}
            </div>
          ))}
        </div>
      </div>

      <div>
        <Link href="/get-started">
          <Button text="Get started" />
        </Link>
      </div>
    </div>
  );
}
