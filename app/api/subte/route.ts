import { NextResponse } from "next/server";

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;

    export async function GET() {
    try{
        const response = await fetch(`https://apitransporte.buenosaires.gob.ar/subtes/routes?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);
        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Error al obtener datos de subtes" }, { status: 500 });
      }
}