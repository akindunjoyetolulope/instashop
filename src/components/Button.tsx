import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button(props: Props) {
  const { text, variant = "primary", onClick, ...rest } = props;

  const style = {
    primary:
      "shadow-[4px_8px_24px_0px_rgba(254,44,85,0.2)] bg-[#8A226F] text-[#fff]",
    secondary: "text-[#8A226F] border divide-solid border-[#8A226F]",
  };

  return (
    <button
      onClick={onClick}
      className={`w-full rounded-[90px] p-[10px] ${style[variant]}`}
      {...rest}
    >
      {text}
    </button>
  );
}
