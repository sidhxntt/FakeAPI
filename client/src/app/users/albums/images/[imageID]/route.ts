import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../../prisma/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { imageID: string } }
) {
  try {
    const imageID = parseInt(params.imageID, 10);

    if (isNaN(imageID)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const image = await prisma.image.findUnique({
      where: {
        id: imageID,
      },
    });

    if (!image) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(image, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

