import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function GET(req: NextRequest) {
  try {
    // Extract query parameters for pagination
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    // Calculate the offset for pagination
    const offset = (page - 1) * limit;

    // Fetch users with pagination
    const images = await prisma.image.findMany({
      skip: offset,
      take: limit,
    });

    // Optionally, get the total count of users
    const totalimages = await prisma.image.count();

    return NextResponse.json({
      meta: {
        total: totalimages,
        page,
        limit,
        totalPages: Math.ceil(totalimages / limit),
      },
      data: images,

    }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
