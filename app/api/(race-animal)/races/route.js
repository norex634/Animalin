import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
 
   

       const race = await prisma.race.findMany();
        
       

       return NextResponse.json(race)
    
  }

export async function POST(req,res) {
     const { nom } = await req.json();

     const newRace = await prisma.race.create({
       data: {
         nom: nom,
       },
     });
 
     console.log("ma race envoiée : ",newRace)
     return NextResponse.json("send")
}