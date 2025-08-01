import { NextResponse } from "next/server";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;

export async function GET() {
  try {
    const url = `https://apitransporte.buenosaires.gob.ar/transport/api/v2/subtes/estado?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const response = await fetch(url, { cache: 'no-store' });

    const data = await response.json();

    return NextResponse.json({
      status: response.status,
      ok: response.ok,
      url,
      data,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({
      status: 500,
      ok: false,
      error: error.message,
    }, { status: 500 });
  }
}
