import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(request: NextRequest) {
    const req = await request;
    const { searchParams } = new URL(request.url);
    await prisma.book.delete({
        where: {
            id: searchParams.get("id")
        },
    });

    return NextResponse.json({ success: true })
}
