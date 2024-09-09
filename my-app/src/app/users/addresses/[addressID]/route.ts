import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { addressID: string } }
) {
  try {
    const addressID = parseInt(params.addressID, 10);

    if (isNaN(addressID)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const address = await prisma.address.findUnique({
      where: {
        id: addressID,
      },
    });

    if (!address) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(address, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

