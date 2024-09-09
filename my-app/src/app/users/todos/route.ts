import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

export async function GET(req: NextRequest) {
  try {
    // Extract query parameters for pagination
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    // Calculate the offset for pagination
    const offset = (page - 1) * limit;

    // Fetch users with pagination
    const todos = await prisma.todos.findMany({
      skip: offset,
      take: limit,
    });

    // Optionally, get the total count of users
    const total_todos = await prisma.todos.count();

    return NextResponse.json({
      meta: {
        total: total_todos,
        page,
        limit,
        totalPages: Math.ceil(total_todos / limit),
      },
      data: todos,

    }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
