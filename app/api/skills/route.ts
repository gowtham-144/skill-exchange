import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId, title } = await req.json();

    if (!userId || !title) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    const skill = await prisma.skill.create({
      data: { title, userId },
    });

    return NextResponse.json({ success: true, skill });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Skill creation failed" }, { status: 400 });
  }
}

export async function GET() {
  try {
    const skills = await prisma.skill.findMany({
      include: { user: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json({ success: true, skills });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch skills" }, { status: 400 });
  }
}
