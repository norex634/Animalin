import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {

    // const itemsPerPage = 3; 
    // // count page pour envoier a pagi
    // const totalCount = await prisma.Race.count()
    // const totalPageRace = Math.ceil(totalCount/itemsPerPage)
    // const paramPageRace = parseInt(req.nextUrl.searchParams.get("pr")) || 1
    //   const skip = (paramPageRace - 1 ) * itemsPerPage; 
    // // Vérification pour vous assurer que la page demandée n'est pas en dehors des limites
    // if (paramPageRace < 1 || paramPageRace > totalPageRace) {
    //     return NextResponse.error("Page invalide", 400);
    // }

      const race = await prisma.Race.findMany({
        // skip:skip,
        // take: itemsPerPage,
      });

      // const response = {
      //   race,
      //   totalPageRace
      // }
      return NextResponse.json(race)
    
  }