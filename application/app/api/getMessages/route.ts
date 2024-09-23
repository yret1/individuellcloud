/* eslint-disable @typescript-eslint/no-unused-vars */

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await fetch(
      "https://ov973gwig9.execute-api.eu-north-1.amazonaws.com/messages"
    );
    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.error();
  }
}
