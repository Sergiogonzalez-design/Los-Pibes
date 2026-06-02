"use server";

import { supabase } from "@/lib/supabase";

export type InquiryState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const sport = formData.get("sport")?.toString().trim();
  const country = formData.get("country")?.toString().trim();
  const age = formData.get("age")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const message = formData.get("message")?.toString().trim();
  const productsRaw = formData.get("products")?.toString().trim();
  const products = productsRaw ? productsRaw.split(",").filter(Boolean) : [];

  if (!name || !email || !age || !message) {
    return {
      status: "error",
      message: "Name, email, age, and message are required.",
    };
  }
  const parsedAge = Number.parseInt(age, 10);
  if (Number.isNaN(parsedAge) || parsedAge < 10 || parsedAge > 50) {
    return {
      status: "error",
      message: "Age must be a number between 10 and 50.",
    };
  }

  const { error } = await supabase
    .from("inquiries")
    .insert({
      name,
      email,
      sport,
      country,
      age: parsedAge,
      phone,
      message,
      products,
    });

  if (error) {
    return { status: "error", message: "Something went wrong. Please try again." };
  }

  return { status: "success" };
}
