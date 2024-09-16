import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "../TextField";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { useOnboarding, useSetOnboarding } from "@/Context";
import Button from "../Button";

const schema = Yup.object().shape({
  email: Yup.string().required("Email is required").email("Email is not valid"),
});

interface Props {
  next: () => void;
}

export default function EmailForm(props: Props) {
  const { next } = props;
  const onboarding = useOnboarding();
  const setOnboarding = useSetOnboarding();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<{ email: string }>({
    resolver: yupResolver(schema),
    values: {
      email: onboarding?.email ?? "",
    },
  });

  const submitEmailForm = handleSubmit(({ email }) => {
    setOnboarding((o) => ({ ...o, email }));
    next();
  });

  return (
    <form
      className="flex flex-col justify-between h-full px-[20px]"
      onSubmit={submitEmailForm}
    >
      <div>
        <div className="flex flex-col gap-[16px]">
          <h1 className="text-[24px] font-medium leading-[1.1] tracking-[0.12px]">
            Enter your email to get started
          </h1>
          <p className="text-[#00000099] text-[14px] ">
            We will send you a verification code for confirmation
          </p>
        </div>

        <div className="mt-[24px]">
          <TextField
            {...register("email")}
            placeholder={"Enter your email"}
            label="Email"
            errorMessage={errors.email?.message}
          />
        </div>
      </div>

      <div>
        <Button text="Continue" type="submit" />
      </div>
    </form>
  );
}
