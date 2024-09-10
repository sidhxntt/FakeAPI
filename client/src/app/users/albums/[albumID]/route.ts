import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { albumID: string } }
) {
  try {
    const albumID = parseInt(params.albumID, 10);

    if (isNaN(albumID)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const album = await prisma.album.findUnique({
      where: {
        id: albumID,
      },
    });

    if (!album) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(album, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

