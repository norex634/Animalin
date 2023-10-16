import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

      const sexe = await prisma.sexe.findMany({
      });

      // const response = {
      //   actu,
        
      // }
      return NextResponse.json(sexe)
    
  }
