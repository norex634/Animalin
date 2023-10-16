import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, res) {
      
    // const itemsPerPage = 5; 
    // // count page pour envoier a pagi
    // const totalCount = await prisma.Animal.count()
    // const totalPageAnimal = Math.ceil(totalCount/itemsPerPage)
    
    //   const paramPageAnimal = parseInt(req.nextUrl.searchParams.get("pa")) || 1
    //   const skip = (paramPageAnimal - 1 ) * itemsPerPage; 

    //   // Vérification pour vous assurer que la page demandée n'est pas en dehors des limites
    //   if (paramPageAnimal < 1 || paramPageAnimal > totalPageAnimal) {
    //     return NextResponse.error("Page invalide", 400);
    //   }
      

      const user = await prisma.user.findMany({
        //include : {categorie: true}
      });

      // const response = {
      //   actu,
        
      // }
      return NextResponse.json(user)
    
  }