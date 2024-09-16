"use client";
import React, { useState } from "react";

interface TextAreaProps {
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder = "Type your message here...",
}) => {
  const [text, setText] = useState<string>("");

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center max-w-full h-[68px] px-[4px] border divide-solid border-[#00000033] rounded-[12px]">
      {text.length > 0 && placeholder && (
        <label className="text-[10px] ml-[12px] text-[##00000099] tracking-[0.05px]">
          {placeholder}
        </label>
      )}
      <textarea
        id="textarea"
        value={text}
        onChange={handleTextChange}
        placeholder={placeholder}
        className="text-[14px] font-medium text-[#000] placeholder:text-[#00000099] px-[12px] w-full rounded-[12px] focus:outline-none tracking-[0.07px]"
      />
    </div>
  );
};

export default TextArea;
