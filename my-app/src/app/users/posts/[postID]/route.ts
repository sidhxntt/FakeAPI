import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { postID: string } }
) {
  try {
    const postID = parseInt(params.postID, 10);

    if (isNaN(postID)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postID,
      },
    });

    if (!post) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

