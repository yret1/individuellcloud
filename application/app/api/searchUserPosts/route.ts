/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { user } = await req.json();

  const url = `https://ov973gwig9.execute-api.eu-north-1.amazonaws.com/messages/${user}`;
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.error();
  }
}
