import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { userID: string } }
) {
  try {
    const userID = parseInt(params.userID, 10);

    if (isNaN(userID)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userID,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

