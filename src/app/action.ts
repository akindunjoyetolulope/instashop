"use server";

import { ONBOARDING_FORM_INPUT } from "@/utils/variables";
import { cookies } from "next/headers";

export async function deleteCookies() {
  cookies().delete(ONBOARDING_FORM_INPUT);
}
