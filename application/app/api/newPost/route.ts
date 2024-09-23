/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const { user, message } = await req.json();
  try {
    const response = await fetch(
      "https://ov973gwig9.execute-api.eu-north-1.amazonaws.com/addMessage",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user,
          message: message,
        }),
      }
    );
    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.error();
  }
}
