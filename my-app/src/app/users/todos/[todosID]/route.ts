import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { todosID: string } }
) {
  try {
    const todosID = parseInt(params.todosID, 10);

    if (isNaN(todosID)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const todos = await prisma.todos.findUnique({
      where: {
        id: todosID,
      },
    });

    if (!todos) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(todos, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

