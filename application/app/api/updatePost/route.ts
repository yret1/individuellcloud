/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { user, id, message } = await req.json();

  const url = `https://ov973gwig9.execute-api.eu-north-1.amazonaws.com/editPost/${user}/${id}`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
      }),
    });
    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.error();
  }
}
