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
  const age = formData.get("age")?.toString().trim() || null;
  const phone = formData.get("phone")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Name, email, and message are required." };
  }

  const { error } = await supabase
    .from("inquiries")
    .insert({ name, email, sport, country, age: age ? parseInt(age) : null, phone, message });

  if (error) {
    return { status: "error", message: "Something went wrong. Please try again." };
  }

  return { status: "success" };
}
