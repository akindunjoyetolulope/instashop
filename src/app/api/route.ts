import { type NextRequest } from "next/server";
import { userData } from "./data";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const newData = {
    id: "inShop",
    email: data.email,
    full_name: data.full_name,
    username: data.username,
    phone_number: data.phone_number,
    store_logo: data.store_logo,
    store_tag: data.store_tag,
    store_name: data.store_name,
    store_email: data.store_email,
    store_phone_number: data.store_phone_number,
    category: data.category,
  };

  userData.push(newData);

  return new Response(JSON.stringify(newData), {
    headers: {
      "Content-Type": "application/json",
      "Set-cookie": "instashop=active",
    },
    status: 201,
  });
}

export async function DELETE(request: Request) {}
