"use client";
import * as React from "react";
import { OnboardingPayload } from "@/model/onboarding";

export const OnboardingContext = React.createContext<
  Partial<OnboardingPayload> | undefined
>(undefined);
OnboardingContext.displayName = "OnboardingContext";

export const SetOnboardingContext = React.createContext<
  React.Dispatch<React.SetStateAction<Partial<OnboardingPayload> | undefined>>
>((p) => {});

SetOnboardingContext.displayName = "SetOnboardingContext";

export function AppWrapper(props: React.PropsWithChildren<{}>) {
  const [onboardingForm, setOnboardingForm] =
    React.useState<Partial<OnboardingPayload>>();

  return (
    <OnboardingContext.Provider value={onboardingForm}>
      <SetOnboardingContext.Provider value={setOnboardingForm}>
        {props.children}
      </SetOnboardingContext.Provider>
    </OnboardingContext.Provider>
  );
}

export const useOnboarding = () => {
  const onboarding = React.useContext(OnboardingContext);

  return onboarding;
};

export const useSetOnboarding = () => {
  const setOnboarding = React.useContext(SetOnboardingContext);

  return setOnboarding;
};
