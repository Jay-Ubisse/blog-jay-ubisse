import { NextResponse } from "next/server";
import prisma from "@/prisma";

export const GET = async (req: Request) => {
  try {
    const id = req.url.split("/blog/")[1];

    const post = await prisma.post.findFirst({ where: { id: id } });

    if (!post) {
      return NextResponse.json(
        { message: "Not found.", post },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const PUT = async (req: Request) => {
  try {
    const id = req.url.split("/blog/")[1];
    const { title, description } = await req.json();

    const post = await prisma.post.update({
      data: { title, description },
      where: { id: id },
    });

    if (!post) {
      return NextResponse.json(
        { message: "Not found.", post },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split("/blog/")[1];
    const { title, description } = await req.json();

    const post = await prisma.post.delete({ where: { id: id } });
    return NextResponse.json({ message: "Success", post }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
