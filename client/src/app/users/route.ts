import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/prisma";

interface UserInput {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
}

export async function GET(req: NextRequest) {
  try {
    // Extract query parameters for pagination
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    // Calculate the offset for pagination
    const offset = (page - 1) * limit;

    // Fetch users with pagination
    const users = await prisma.user.findMany({
      skip: offset,
      take: limit,
    });

    // Optionally, get the total count of users
    const totalUsers = await prisma.user.count();

    return NextResponse.json({
      meta: {
        total: totalUsers,
        page,
        limit,
        totalPages: Math.ceil(totalUsers / limit),
      },
      data: users,

    }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, username, email, address, phone, website } = body as UserInput;
   // Validate input
   if (!name || !username || !email || !address) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
    // Check if a user with the same email or username already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username },
        ],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "This User already exists" },
        { status: 400 }
      );
    }

    // Create a new user along with the address
    const User = await prisma.user.create({
      data: {
        name,
        username,
        email,
        phone,
        website,
        Address: {
          create: {
            street: address.street,
            suite: address.suite,
            city: address.city,
            zipcode: address.zipcode,
          },
        },
      },
    });

    return NextResponse.json({ message: "User & its related address created successfully", user: User, user_address: address },{ status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
