import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ImageInput from "../ImageInput";
import TextField from "../TextField";
import Button from "../Button";
import { useOnboarding, useSetOnboarding } from "@/Context";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
  store_name: Yup.string().required("store name is required"),
  store_tag: Yup.string().required("store tag is required"),
  store_email: Yup.string().required("store email is required"),
  store_phone_number: Yup.string().required("store phone number is required"),
  category: Yup.string().required("category is required"),
});

export default function StoreForm() {
  const onboarding = useOnboarding();
  const setOnboarding = useSetOnboarding();
  const router = useRouter();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<{
    store_name: string;
    category: string;
    store_tag: string;
    store_email: string;
    store_phone_number: string;
  }>({
    resolver: yupResolver(schema),
    values: {
      store_name: onboarding?.store_name ?? "",
      store_email: onboarding?.store_email ?? "",
      category: onboarding?.category ?? "",
      store_tag: onboarding?.store_tag ?? "",
      store_phone_number: onboarding?.store_phone_number ?? "",
    },
  });

  const submitStoreForm = handleSubmit(({ ...store }) => {
    setOnboarding((o) => ({ ...o, ...store }));

    ("use server");
    try {
      fetch("http://localhost:3000/api", {
        method: "POST",
        body: JSON.stringify({ ...onboarding, ...store }),
        headers: {
          "content-type": "application/json",
          "Set-cookie": "instashop=active",
        },
      }).then((res) => {
        if (res.ok) {
          router.push("/create-product");
        } else {
          console.log("Oops! Something is wrong.");
        }
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form
      onSubmit={submitStoreForm}
      className="flex flex-col justify-between h-full px-[20px]"
    >
      <div>
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[12px]">
            <ImageInput />
            <TextField
              placeholder={"Store name"}
              label="Store name"
              {...register("store_name")}
              errorMessage={errors.store_name?.message}
            />
            <TextField
              placeholder={"Store tag name"}
              label="Store tag name"
              {...register("store_tag")}
              errorMessage={errors.store_tag?.message}
            />
            <TextField
              type="number"
              placeholder={"Store phone number"}
              label="Store phone number"
              {...register("store_phone_number")}
              errorMessage={errors.store_phone_number?.message}
            />
            <TextField
              type="email"
              placeholder={"Store email"}
              label="Store email"
              {...register("store_email")}
              errorMessage={errors.store_email?.message}
            />
            <TextField
              placeholder={"Category"}
              label="Category"
              {...register("category")}
              errorMessage={errors.category?.message}
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
