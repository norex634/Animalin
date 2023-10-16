import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function GET(req, res) {
    
       const companies = await prisma.compagnie.findFirst({
          include : {social: true, horaire:true}
        });
        return NextResponse.json(companies)
    
  }