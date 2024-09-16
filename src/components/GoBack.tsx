import BackArrow from "@/assets/arrow-back.svg";
import Link from "next/link";
import Image from "next/image";
import MoreVert from "@/assets/more-vert.svg";

interface Props {
  label: string;
  url?: string;
  onAction?: () => void;
  breadcrumb?: boolean;
}

export default function GoBack(props: Props) {
  const { label, url, onAction, breadcrumb } = props;

  return (
    <div className="flex items-center justify-between py-[13px] px-[8px]">
      <div className="flex items-center gap-[8px]">
        {url ? (
          <Link href={url} className="p-[8px]">
            <Image src={BackArrow} alt="back arrow" />
          </Link>
        ) : (
          <button onClick={onAction} className="p-[8px]">
            <Image src={BackArrow} alt="back arrow" />
          </button>
        )}
        <h3 className="text-[16px] font-medium">{label}</h3>
      </div>

      {breadcrumb && (
        <div className="p-[8px]">
          <Image src={MoreVert} alt="more option" />
        </div>
      )}
    </div>
  );
}
