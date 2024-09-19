"use client";

import EmailForm from "@/components/getStartedViews/EmailForm";
import ProfileForm from "@/components/getStartedViews/ProfileForm";
import StoreForm from "@/components/getStartedViews/StoreForm";
import GoBack from "@/components/GoBack";
import { useState } from "react";

const steps = ["email", "profile", "store"] as const;
type ActiveStep = (typeof steps)[number];

export default function GetStarted() {
  const [activeStep, setActiveStep] = useState<ActiveStep>("email");

  const goBack = () => {
    const activeIndex = steps.indexOf(activeStep);
    setActiveStep(steps[activeIndex - 1]);
  };

  const Next = () => {
    const activeIndex = steps.indexOf(activeStep);
    setActiveStep(steps[activeIndex + 1]);
  };

  return (
    <div className="h-dvh flex flex-col justify-between pb-[16px]">
      <GoBack
        label="Get started"
        url={activeStep === "email" ? "/" : undefined}
        onAction={activeStep !== "email" ? goBack : undefined}
      />
      <div className="flex gap-[8px] p-[20px]">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              className="h-[4px] rounded-[15px] w-full bg-[#0000001A]"
              key={i}
            >
              {steps.indexOf(activeStep) >= i ? (
                <div className="h-[4px] bg-[#8A226F] w-full rounded-[15px]"></div>
              ) : null}
            </div>
          ))}
      </div>

      {activeStep === "email" && <EmailForm next={Next} />}
      {activeStep === "profile" && <ProfileForm next={Next} />}
      {activeStep === "store" && <StoreForm />}
    </div>
  );
}
