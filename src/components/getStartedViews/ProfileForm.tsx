import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "../TextField";
import Instagram from "@/assets/instagram.svg";
import TikTok from "@/assets/tik-tok.svg";
import Google from "@/assets/google.svg";
import Image from "next/image";
import Button from "../Button";

import { useOnboarding, useSetOnboarding } from "@/Context";

const schema = Yup.object().shape({
  full_name: Yup.string().required("Email is required"),
  username: Yup.string().required("Username is required"),
  phone_number: Yup.string().required("Phone number is required"),
});

interface Props {
  next: () => void;
}

export default function ProfileForm(props: Props) {
  const { next } = props;
  const onboarding = useOnboarding();
  const setOnboarding = useSetOnboarding();

  const socialMedias = [
    { icons: Instagram, alt: "instagram logo" },
    { icons: TikTok, alt: "TikTok logo" },
    { icons: Google, alt: "Google logo" },
  ];

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<{ full_name: string; username: string; phone_number: string }>({
    resolver: yupResolver(schema),
    values: {
      full_name: onboarding?.full_name ?? "",
      username: onboarding?.username ?? "",
      phone_number: onboarding?.phone_number ?? "",
    },
  });

  const submitProfileForm = handleSubmit(
    ({ full_name, username, phone_number }) => {
      setOnboarding((o) => ({ ...o, full_name, username, phone_number }));
      next();
    }
  );

  return (
    <form
      onSubmit={submitProfileForm}
      className="flex flex-col justify-between h-full px-[20px]"
    >
      <div>
        <div className="flex flex-col gap-[24px]">
          <h1 className="text-[24px] font-medium leading-[1.1] tracking-[0.12px]">
            Complete profile setup
          </h1>

          <div className="flex flex-col gap-[16px]">
            <p className="text-[#00000099] text-[14px]">
              Connect your socials for quick setup
            </p>
            <div className="flex flex-row gap-[8px]">
              {socialMedias.map((socialMedia, index) => (
                <div
                  key={index}
                  className="flex w-full justify-center items-center rounded-[12px] bg-[#F7F7F7] py-[14px] px-[40px]"
                >
                  <Image
                    src={socialMedia.icons}
                    alt={socialMedia.alt}
                    className="w-[20px] h-[20px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px] mt-[24px]">
          <p className="text-[#00000099] text-[14px] ">Or enter manually</p>
          <div className="flex flex-col gap-[12px]">
            <TextField
              placeholder="Full name"
              label="Full name"
              {...register("full_name")}
              errorMessage={errors.full_name?.message}
            />
            <TextField
              placeholder="Username"
              label="Username"
              {...register("username")}
              errorMessage={errors.username?.message}
            />
            <TextField
              type="number"
              placeholder="Phone number"
              label="Phone number"
              {...register("phone_number")}
              errorMessage={errors.phone_number?.message}
            />
          </div>
        </div>
      </div>

      <div>
        <Button text="Continue" type="submit" />
      </div>
    </form>
  );
}
