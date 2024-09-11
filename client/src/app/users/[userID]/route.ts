import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";

interface UserInput {
  name?: string;
  username?: string;
  email?: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
  };
  phone?: string;
  website?: string;
  todo?:{
    userID: number
    title?: string;
    completed?: boolean;
  }
  
}

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
export async function DELETE(
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
    // Delete related addresses
    await prisma.address.delete({
      where: { userID },
    });
    // Now delete the user
    await prisma.user.delete({
      where: { id: userID },
    });

    return NextResponse.json(
      { message: "User & its address deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { userID: string } }
) {
  try {
    const userID = parseInt(params.userID, 10);
    const body = await req.json();
    const { name, username, email, address, phone, website, todo } = body as UserInput;

    if (isNaN(userID)) {
      return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
    }

    const user = await prisma.user.update({
      where: {
        id: userID,
      },
      data:{
        name,
        username,
        email,
        phone,
        website,
        Address: {
          update: {
            street: address?.street,
            suite: address?.suite,
            city: address?.city,
            zipcode: address?.zipcode,
          },
        },
       
      }
    });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "User updated successfully successfully", user: user, user_address: address },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

