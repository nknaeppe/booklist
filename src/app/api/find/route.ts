import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const book = await prisma.book.findFirst({
        where: {
            id: searchParams.get("id")
        },
    });

    return NextResponse.json(book)
}
