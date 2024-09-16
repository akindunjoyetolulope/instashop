"use client";
import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type?: string;
  label?: string;
  errorMessage?: string;
}

function TextField(props: Props, ref: any) {
  const { placeholder, type, label, errorMessage, ...rest } = props;

  return (
    <div>
      <div className="flex flex-col justify-center max-w-full h-[52px] px-[4px] border divide-solid border-[#00000033] rounded-[12px]">
        {typeof props.value === "string" && (
          <label className="text-[10px] ml-[12px] text-[##00000099] tracking-[0.05px]">
            {label}
          </label>
        )}

        <input
          autoComplete="off"
          ref={ref}
          {...rest}
          value={props.value}
          placeholder={placeholder}
          type={type ?? "text"}
          onChange={props.onChange}
          className="text-[14px] font-medium text-[#000] placeholder:text-[#00000099] px-[12px] w-full rounded-[12px] focus:outline-none tracking-[0.07px]"
        />
      </div>
      {!!errorMessage ? (
        <p className="text-[12px] font-medium text-red-600">{errorMessage}</p>
      ) : null}
    </div>
  );
}

export default forwardRef(TextField);
